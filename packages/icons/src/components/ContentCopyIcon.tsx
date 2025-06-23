import * as React from 'react';
import { SVGProps } from 'react';
const ContentCopyIcon = (props: SVGProps<SVGSVGElement>) => {
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
      <path
        d="M14.7158 3.73218H5.92927C5.12384 3.73218 4.46484 4.39117 4.46484 5.19661V15.4476H5.92927V5.19661H14.7158V3.73218ZM16.9125 6.66104H8.85813C8.0527 6.66104 7.3937 7.32003 7.3937 8.12547V18.3765C7.3937 19.1819 8.0527 19.8409 8.85813 19.8409H16.9125C17.7179 19.8409 18.3769 19.1819 18.3769 18.3765V8.12547C18.3769 7.32003 17.7179 6.66104 16.9125 6.66104ZM16.9125 18.3765H8.85813V8.12547H16.9125V18.3765Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default ContentCopyIcon;
