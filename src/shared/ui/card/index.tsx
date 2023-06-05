import { FC, useMemo } from 'react';
import { CardHeader } from './card-header';
import { CardActions } from './card-actions';
import { createSlots } from '@/shared/lib/create-slots';
import { CardProps, CardSlots } from './types';
import classes from './card.module.scss';

export const Card: FC<CardProps> = ({ children }) => {
  const slots: CardSlots = useMemo(() => createSlots<CardSlots>(children, {}), [children]);

  return (
    <div className={`${classes.card} round`}>
      <CardHeader>{ slots.header }</CardHeader>
      <div className={classes.section}>
          {slots.default}
      </div>
      <CardActions>{slots.actions}</CardActions>
    </div>
  );
};
