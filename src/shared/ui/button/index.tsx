import { FC } from 'react';
import Ripple from '@/shared/ui/ripple';
import { classNames } from '@/shared/lib';
import classes from './button.module.scss';
import { ButtonProps, EColor } from './types';

const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    color = EColor.PRIMARY,
    className,
    onClick,
    ...otherProps
  } = props;

  return (
    <button
      className={classNames(`${classes.btn} ${classes[color]}`, {
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

export default Button;
