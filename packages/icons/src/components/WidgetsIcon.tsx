import * as React from 'react';
import { SVGProps } from 'react';
const WidgetsIcon = (props: SVGProps<SVGSVGElement>) => {
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
        d="M13 13V21H21V13H13ZM3 21H11V13H3V21ZM3 3V11H11V3H3ZM16.66 1.69L11 7.34L16.66 13L22.32 7.34L16.66 1.69Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default WidgetsIcon;
