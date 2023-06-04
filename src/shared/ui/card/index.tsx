import { FC, ReactNode, useEffect, useState } from 'react';
import { CardProps } from './types';
import { CardHeader } from './card-header';
import { CardActions } from './card-actions';
import { Slot, createSlots, defaultSlotName } from '@/shared/lib/create-slots';
import classes from './card.module.scss';

export const Card: FC<CardProps> = ({ children }) => {
  const [slots, setSlots] = useState<Slot[]>([]);

  useEffect(() => {
    const createdSlots = createSlots(children, {
      header: 'header',
      actions: 'actions'
    }, []);

    setSlots(createdSlots);
  }, []);

  const getSlotChildrenByName = (name: string): ReactNode | undefined => {
    const slot = slots.find((slot: Slot) => slot.name === name);
    return slot?.children;
  };

  const isSlotExist = (name: string): boolean => {
    return slots.some((slot: Slot) => slot.name === name);
  };

  return (
    <div className={`${classes.card} round`}>
      {isSlotExist('header') && <CardHeader>{getSlotChildrenByName('header')}</CardHeader>}
      {isSlotExist(defaultSlotName) &&
        <div className={classes.section}>
          {getSlotChildrenByName(defaultSlotName)}
        </div>
      }
      {isSlotExist('actions') && <CardActions>{getSlotChildrenByName('actions')}</CardActions> }
    </div>
  );
};
