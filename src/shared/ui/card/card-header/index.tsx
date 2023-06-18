import { FC } from 'react';
import { CardHeaderProps } from './types';
import './card-header.scoped.scss';

export const CardHeader: FC<CardHeaderProps> = ({ children }) => {
  if (!children) return null;

  return (
    <div className="card-header text-h6">
      { children }
    </div>
  );
};
