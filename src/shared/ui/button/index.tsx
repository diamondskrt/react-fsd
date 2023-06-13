import { FC } from 'react';
import { Ripple } from '@/shared/ui';
import { classNames } from '@/shared/lib/class-names';
import { ButtonProps, EColor } from './types';
import './button.scoped.scss';

export const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    color = EColor.PRIMARY,
    className,
    onClick,
    ...otherProps
  } = props;

  return (
    <button
      className={classNames(`btn ${color}`, {
        className
      })}
      {...otherProps}
      onClick={(event) => {
        if (onClick) {
          onClick(event);
        }
      }}
    >
      <span>{children}</span>
      <Ripple />
    </button>
  );
};
