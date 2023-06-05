import { Children, ReactNode, isValidElement } from 'react';

const defaultSlotName = 'default';

export const createSlots = <T>(children: ReactNode, slots: any): T => {
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
