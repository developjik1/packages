import * as React from 'react';
import { SVGProps } from 'react';
const LeftPanelOpenIcon = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12.5 8V16L16.5 12L12.5 8ZM5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5ZM8 19V5H5V19H8ZM10 19H19V5H10V19Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default LeftPanelOpenIcon;
