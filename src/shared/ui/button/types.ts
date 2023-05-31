import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  color?: EColor;
}

export enum EColor {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  ACCENT = 'accent',
}
