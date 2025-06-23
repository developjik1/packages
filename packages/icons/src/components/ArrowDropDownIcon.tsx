import * as React from 'react';
import { SVGProps } from 'react';
const ArrowDropDownIcon = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M8 10L12 14L16 10H8Z" fill="currentColor" />
    </svg>
  );
};
export default ArrowDropDownIcon;
