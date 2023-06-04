import { ReactNode } from 'react';

export interface Slot {
  name: string;
  children: ReactNode;
}

export type Params = Record<string, string | null>;
