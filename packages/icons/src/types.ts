import React, { SVGProps } from 'react';

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'children'> {
  size?: number | string;
  color?: string;
}

export type IconComponent = React.FC<IconProps>; 