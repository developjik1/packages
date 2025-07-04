import * as React from 'react';
import { SVGProps } from 'react';
const BoltIcon = (props: SVGProps<SVGSVGElement>) => {
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
        d="M11 21H9.99997L11 14H7.49997C6.61997 14 7.16997 13.25 7.18997 13.22C8.47997 10.94 10.42 7.54 13.01 3H14.01L13.01 10H16.52C16.92 10 17.14 10.19 16.92 10.66C12.97 17.55 11 21 11 21Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default BoltIcon;
