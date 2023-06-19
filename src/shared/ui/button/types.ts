import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  color?: EColor;
  variant?: EVariant;
}

export enum EColor {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  ACCENT = 'accent',
  SURFACE = 'surface',
}

export enum EVariant {
  ICON = 'icon',
}
