import * as React from 'react';
import { SVGProps } from 'react';
const BookmarkIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      role="img"
      {...props}
    >
      <path
        d="M4.58325 19.25V4.58333C4.58325 4.07917 4.76277 3.64757 5.12179 3.28854C5.48082 2.92951 5.91242 2.75 6.41659 2.75H15.5833C16.0874 2.75 16.519 2.92951 16.878 3.28854C17.2371 3.64757 17.4166 4.07917 17.4166 4.58333V19.25L10.9999 16.5L4.58325 19.25Z"
        fill="#0061FF"
      />
    </svg>
  );
};
export default BookmarkIcon;
