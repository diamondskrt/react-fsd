import { FC, useMemo } from 'react';
import { CardHeader } from './card-header';
import { CardActions } from './card-actions';
import { createSlots } from '@/shared/lib/create-slots';
import { classNames } from '@/shared/lib/class-names';
import { CardProps, CardSlots } from './types';
import './card.scoped.scss';

export const Card: FC<CardProps> = ({ children, height, sectionClass }) => {
  const slots: CardSlots = useMemo(() => createSlots<CardSlots>(children, {}), [children]);

  return (
    <div className="card round" style={{ height }}>
      <CardHeader>{ slots.header }</CardHeader>
      <div className={classNames('card-section', { sectionClass })}>
          {slots.default}
      </div>
      <CardActions>{slots.actions}</CardActions>
    </div>
  );
};
