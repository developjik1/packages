import * as React from 'react';
import { SVGProps } from 'react';
const ChevronUpIcon = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 8L6 14L7.41 15.41L12 10.83L16.59 15.41L18 14L12 8Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default ChevronUpIcon;
