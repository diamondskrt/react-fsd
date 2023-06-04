import { FC } from 'react';
import { SlotProps } from './types';

export const Slot: FC<SlotProps> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};
