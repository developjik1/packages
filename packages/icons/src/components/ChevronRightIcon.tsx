import * as React from 'react';
import { SVGProps } from 'react';
const ChevronRightIcon = (props: SVGProps<SVGSVGElement>) => {
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
        d="M10.7996 6L9.38965 7.41L13.9696 12L9.38965 16.59L10.7996 18L16.7996 12L10.7996 6Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default ChevronRightIcon;
