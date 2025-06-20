import { Icon } from './Icon';
import { IconComponent } from '../types';

export const ChevronDown: IconComponent = (props) => {
  return (
    <Icon {...props}>
      <path d="m6 9 6 6 6-6" />
    </Icon>
  );
}; 