import { Icon } from './Icon';
import { IconComponent } from '../types';

export const X: IconComponent = (props) => {
  return (
    <Icon {...props}>
      <path d="M18 6 6 18" />
      <path d="M6 6l12 12" />
    </Icon>
  );
}; 