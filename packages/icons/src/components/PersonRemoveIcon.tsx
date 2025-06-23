import * as React from 'react';
import { SVGProps } from 'react';
const PersonRemoveIcon = (props: SVGProps<SVGSVGElement>) => {
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
        d="M16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8ZM4 18V20H20V18C20 15.34 14.67 14 12 14C9.33 14 4 15.34 4 18Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default PersonRemoveIcon;
