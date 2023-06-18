import { FC } from 'react';
import { CardActionsProps } from './types';
import './card-actions.scoped.scss';

export const CardActions: FC<CardActionsProps> = ({ children }) => {
  if (!children) return null;

  return (
    <div className="card-actions flex justify-end">
      { children }
    </div>
  );
};
