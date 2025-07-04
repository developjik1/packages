import * as React from 'react';
import { SVGProps } from 'react';
const EditIcon = (props: SVGProps<SVGSVGElement>) => {
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
        d="M3 21.0025H6.75L17.81 9.9425L14.06 6.1925L3 17.2525V21.0025ZM5 18.0825L14.06 9.0225L14.98 9.9425L5.92 19.0025H5V18.0825Z"
        fill="currentColor"
      />
      <path
        d="M18.37 3.2925C17.98 2.9025 17.35 2.9025 16.96 3.2925L15.13 5.1225L18.88 8.8725L20.71 7.0425C21.1 6.6525 21.1 6.0225 20.71 5.6325L18.37 3.2925Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default EditIcon;
