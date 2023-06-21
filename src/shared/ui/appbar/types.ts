import { ReactNode } from 'react';

export interface AppBarProps {
  children: ReactNode;
  color?: AppBarColor;
}

export enum AppBarColor {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  ACCENT = 'accent',
  DARK = 'dark',
  LIGHT = 'light'
}
