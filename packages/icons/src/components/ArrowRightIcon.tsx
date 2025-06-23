import * as React from 'react';
import { SVGProps } from 'react';
const ArrowRightIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      {...props}
    >
      <path d="M10 17L15 12L10 7V17Z" fill="currentColor" />
    </svg>
  );
};
export default ArrowRightIcon;
