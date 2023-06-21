import { InputHTMLAttributes } from 'react';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

export interface InputProps extends HTMLInputProps {
  className?: string;
  value: string;
  placeholder?: string;
  rules?: Array<(value: string) => boolean | string>;
  setError?: (value: boolean) => void;
  onChange?: (value: string) => void;
  type?: 'string';
}
