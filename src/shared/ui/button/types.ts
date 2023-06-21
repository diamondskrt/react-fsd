import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  color?: ButtonColor;
  variant?: ButtonVariant;
}

export enum ButtonColor {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  ACCENT = 'accent',
  DARK = 'dark',
  LIGHT = 'light',
  SURFACE = 'surface',
}

export enum ButtonVariant {
  ICON = 'icon',
}
