import * as React from 'react';
import { SVGProps } from 'react';
const OutboundIcon = (props: SVGProps<SVGSVGElement>) => {
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
        d="M16.2222 2H3.77778C2.79556 2 2 2.79556 2 3.77778V16.2222C2 17.2044 2.79556 18 3.77778 18H6.44444V16.2222H3.77778V5.55556H16.2222V16.2222H13.5556V18H16.2222C17.2044 18 18 17.2044 18 16.2222V3.77778C18 2.79556 17.2044 2 16.2222 2Z"
        fill="currentColor"
      />
      <path
        d="M10 17.1813L10.8889 15.4036V7.67022H9.11111V15.4036L10 17.1813Z"
        fill="currentColor"
      />
      <path
        d="M6.26044 14.2604L7.51733 13.0036L10 15.4862L12.4827 13.0036L13.7396 14.2604L10 18L6.26044 14.2604Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default OutboundIcon;
