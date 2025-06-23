import * as React from 'react';
import { SVGProps } from 'react';
const InboundIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      {...props}
    >
      <path
        d="M16.2222 2H3.77778C2.79556 2 2 2.79556 2 3.77778V16.2222C2 17.2044 2.79556 18 3.77778 18H7.33333V16.2222H3.77778V5.55556H16.2222V16.2222H12.6667V18H16.2222C17.2044 18 18 17.2044 18 16.2222V3.77778C18 2.79556 17.2044 2 16.2222 2Z"
        fill="currentColor"
      />
      <path
        d="M10 8.48889L9.11111 10.2667V18H10.8889V10.2667L10 8.48889Z"
        fill="currentColor"
      />
      <path
        d="M13.7396 11.4098L12.4827 12.6667L10 10.184L7.51733 12.6667L6.26044 11.4098L10 7.67022L13.7396 11.4098Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default InboundIcon;
