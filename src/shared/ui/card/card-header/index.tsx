import { FC } from 'react';
import { CardHeaderProps } from '../types';
import classes from './card-header.module.scss';

export const CardHeader: FC<CardHeaderProps> = ({ children }) => {
  return (
    <div className={classes['card-header']}>
      { children }
    </div>
  );
};
