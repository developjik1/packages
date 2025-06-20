import { Icon } from './Icon';
import { IconComponent } from '../types';

export const Search: IconComponent = (props) => {
  return (
    <Icon {...props}>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </Icon>
  );
}; 