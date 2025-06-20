# 배포 설정 가이드

## GitHub Secrets 설정

GitHub Actions에서 패키지를 자동 배포하려면 GitHub Secrets에 NPM_TOKEN을 설정해야 합니다.

### 1. GitHub 저장소 설정

1. GitHub 저장소 페이지로 이동
2. **Settings** 탭 클릭
3. 왼쪽 사이드바에서 **Secrets and variables** > **Actions** 클릭

### 2. NPM_TOKEN Secret 추가

1. **New repository secret** 버튼 클릭
2. Secret 정보 입력:
   - **Name**: `NPM_TOKEN`
   - **Secret**: `your_github_personal_access_token_here`
3. **Add secret** 버튼 클릭

### 3. GitHub Pages 설정

Storybook 자동 배포를 위해 GitHub Pages를 설정하세요:

1. GitHub 저장소 → **Settings** → **Pages**
2. **Source**: GitHub Actions 선택
3. 저장 후 배포 완료 시 `https://developjik1.github.io/packages/` 에서 확인 가능

### 4. 환경변수 사용법 (로컬 개발)

로컬에서 수동 배포할 때는 다음과 같이 설정하세요:

```bash
# 현재 셸 세션에만 적용
export NPM_TOKEN=your_github_personal_access_token_here

# 영구 설정 (macOS/Linux)
echo 'export NPM_TOKEN=your_github_personal_access_token_here' >> ~/.zshrc
source ~/.zshrc
```

## 배포 워크플로우

### 자동 배포 (권장)

changeset을 사용하여 패키지 배포와 Storybook 배포가 자동으로 이루어집니다:

1. **변경사항 기록**
   ```bash
   pnpm changeset
   ```

2. **버전 업데이트**
   ```bash
   pnpm version-packages
   ```

3. **배포**
   - `main` 브랜치에 push
   - GitHub Actions가 자동으로:
     - 패키지 테스트 & 빌드
     - changeset이 있으면 Version PR 생성
     - Version PR 머지 시 패키지를 GitHub Packages에 배포
     - **Storybook을 GitHub Pages에 배포**

### Storybook 배포

두 가지 방식으로 Storybook이 배포됩니다:

#### 1. changeset 배포와 함께 (release.yml)
- 패키지가 배포될 때 자동으로 Storybook도 함께 배포

#### 2. 태그 기반 배포 (deploy-storybook.yml)  
- changeset이 생성하는 `@developjik1/icons@x.x.x` 형태의 태그에 반응
- 수동 실행도 가능 (GitHub Actions → Deploy Storybook → Run workflow)

### 배포 URL

- **패키지**: https://github.com/developjik1/packages/packages
- **Storybook**: https://developjik1.github.io/packages/

## Changeset 워크플로우

### 1. 변경사항 기록

```bash
# 새로운 changeset 생성
pnpm changeset

# 또는 수동으로 .changeset/ 폴더에 markdown 파일 생성
```

### 2. 버전 업데이트

```bash
# package.json 버전과 CHANGELOG 업데이트
pnpm version-packages
```

### 3. 배포 과정

1. **Changeset 생성**: 변경사항을 `.changeset/` 폴더에 기록
2. **Version PR**: changeset이 있으면 자동으로 Version PR 생성
3. **PR 머지**: Version PR을 머지하면:
   - 패키지가 GitHub Packages에 자동 배포
   - Storybook이 GitHub Pages에 자동 배포
4. **태그 생성**: `@developjik1/icons@x.x.x` 형태의 Git 태그 생성

## 로컬 개발

### Storybook 실행

```bash
# icons 패키지로 이동
cd packages/icons

# Storybook 개발 서버 시작
npm run storybook
```

### 수동 배포

```bash
# 패키지 수동 배포
pnpm release

# Storybook 수동 빌드
cd packages/icons
npm run build-storybook
```

## 패키지 사용법

배포된 패키지를 사용하려면:

```bash
# .npmrc 파일에 레지스트리 설정
echo "@developjik1:registry=https://npm.pkg.github.com" >> ~/.npmrc

# GitHub 토큰으로 인증
npm login --scope=@developjik1 --auth-type=legacy --registry=https://npm.pkg.github.com
```

```bash
# 패키지 설치
npm install @developjik1/icons @developjik1/ui
```

## 문제 해결

### 토큰 권한 확인
GitHub 토큰에 다음 권한이 있는지 확인하세요:
- `write:packages`
- `read:packages`
- `repo` (private 저장소인 경우)

### GitHub Pages 403 에러
- Repository Settings → Pages에서 "GitHub Actions" 소스가 선택되었는지 확인
- Workflow 권한이 올바르게 설정되었는지 확인

### 403 에러
- NPM_TOKEN이 올바르게 설정되었는지 확인
- .npmrc 파일에 올바른 레지스트리가 설정되었는지 확인

### 빌드 실패
- 모든 테스트가 통과하는지 확인
- TypeScript 컴파일 에러가 없는지 확인
- Storybook 빌드가 로컬에서 성공하는지 확인 (`npm run build-storybook`) 