import { FC } from 'react';
import { CardActionsProps } from '../types';
import classes from './card-actions.module.scss';

export const CardActions: FC<CardActionsProps> = ({ children }) => {
  return (
    <div className={`${classes['card-actions']} flex justify-end`}>
      { children }
    </div>
  );
};
