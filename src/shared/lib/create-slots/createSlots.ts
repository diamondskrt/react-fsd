import { Children, ReactNode, isValidElement } from 'react';
import { Slots } from './types';

const defaultSlotName = 'default';

export const createSlots = (children: ReactNode): Slots => {
  const slots: Slots = {};

  Children.forEach(children, (child) => {
    if (!isValidElement(child)) return;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    if (child.type.name && child.type.name === 'Slot') {
      slots[child.props.name] = child.props.children;
    } else {
      slots[defaultSlotName] = child;
    }
  });

  return slots;
};
