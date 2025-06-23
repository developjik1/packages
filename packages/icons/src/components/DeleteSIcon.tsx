import * as React from 'react';
import { SVGProps } from 'react';
const DeleteSIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.3808 12.6186L3.38086 4.61866L4.6183 3.38123L12.6182 11.3812L11.3808 12.6186Z"
        fill="#222222"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.6182 4.61873L4.6183 12.6187L3.38086 11.3812L11.3808 3.38129L12.6182 4.61873Z"
        fill="#222222"
      />
    </svg>
  );
};
export default DeleteSIcon;
