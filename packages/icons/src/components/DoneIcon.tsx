import * as React from 'react';
import { SVGProps } from 'react';
const DoneIcon = (props: SVGProps<SVGSVGElement>) => {
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
        d="M9.00039 16.2L4.80039 12L3.40039 13.4L9.00039 19L21.0004 6.99998L19.6004 5.59998L9.00039 16.2Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default DoneIcon;
