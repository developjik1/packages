import * as React from 'react';
import { SVGProps } from 'react';
const ChevronLeftIcon = (props: SVGProps<SVGSVGElement>) => {
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
        d="M14 6L15.41 7.41L10.83 12L15.41 16.59L14 18L8 12L14 6Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default ChevronLeftIcon;
