import { isEmpty, words } from 'lodash';

export const getInitials = (name: string) => {
  if (!isEmpty(name)) {
    const arrayOfchar = words(name).map((word: string) => word.charAt(0));
    return arrayOfchar.join('');
  }
  return name;
}