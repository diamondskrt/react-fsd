import { FC } from 'react';
import { ErrorMessagesProps } from './types';
import './error.messages.scoped.scss';

const ErrorMessages: FC<ErrorMessagesProps> = ({ messages }) => {
  if (!messages.length) return null;

  return (
    <div className="error-message">
      <div>
        <small>{messages[0]}</small>
      </div>
    </div>
  );
};

export default ErrorMessages;
