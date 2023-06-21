import { FC } from 'react';
import { ErrorMessageProps } from './types';
import { classNames } from '@/shared/lib/class-names';

export const ErrorMessage: FC<ErrorMessageProps> = ({ message, className }) => {
  if (!message) return null;

  return (
    <div className={classNames('error-message', { className })}>
      <small>{message}</small>
    </div>
  );
};
