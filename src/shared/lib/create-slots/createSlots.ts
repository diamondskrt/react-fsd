import { Children, ReactNode, isValidElement } from 'react';
import { Params, Slot } from './types';

export const defaultSlotName = 'default';

const slot = (name: string, children: ReactNode): Slot => ({
  name,
  children
});

export const createSlots = (children: ReactNode, params: Params, slots: Slot[]): Slot[] => {
  Children.forEach(children, (child) => {
    if (!isValidElement(child)) return;

    if (child.props.name in params) {
      slots.push(slot(child.props.name, child.props.children));
    } else {
      slots.push(slot(defaultSlotName, child));
    }
  });

  return slots;
};
