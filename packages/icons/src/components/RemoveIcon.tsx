import * as React from 'react';
import { SVGProps } from 'react';
const RemoveIcon = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M19 11H5V13H19V11Z" fill="currentColor" />
    </svg>
  );
};
export default RemoveIcon;
