import { Icon } from './Icon';
import { IconComponent } from '../types';

export const Plus: IconComponent = (props) => {
  return (
    <Icon {...props}>
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </Icon>
  );
}; 