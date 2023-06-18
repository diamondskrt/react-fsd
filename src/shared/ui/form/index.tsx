import { FC } from 'react';
import { FormProps } from './types';

export const Form: FC<FormProps> = ({ children }) => {
  // @todo реализовать валидацию формы
  return (<form>{children}</form>);
};
