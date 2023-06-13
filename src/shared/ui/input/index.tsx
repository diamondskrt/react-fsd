import { ChangeEvent, FC, memo, useState, useEffect } from 'react';
import { classNames } from '@/shared/lib/class-names';
import ErrorMessages from './error-messages';
import { InputProps } from './types';
import './input.scoped.scss';

export const Input: FC<InputProps> = memo((props: InputProps) => {
  const [isInputActive, setIsInputActive] = useState<boolean>(false);

  const [isFilled, setIsFilled] = useState<boolean>(false);

  const [errorMessages, setErrorMessages] = useState<string[]>([]);

  const { className, value, placeholder, type = 'text', rules, onChange, ...otherProps } = props;

  const validate = (): void => {
    if (!rules) return;

    const ruleMessages = rules.map((rule) => rule(value)).filter((rule): rule is string => typeof rule === 'string');

    setErrorMessages(ruleMessages);
  };

  useEffect((): void => {
    if (isInputActive || isFilled) {
      validate();
    }

    if (!value?.length) return;

    setIsFilled(true);
  }, [value]);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.value) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }

    onChange?.(event.target.value);
  };

  const onFocusHandler = (): void => {
    setIsInputActive(true);
  };

  const onBlurHandler = (): void => {
    setIsInputActive(false);
    validate();
  };

  return (
    <div className={classNames('input-control', { className, active: isInputActive, filled: isFilled, error: !!errorMessages.length })}>
      <div className="input-field">
        <input value={value} type={type} id="input" onFocus={onFocusHandler} onBlur={onBlurHandler} onChange={onChangeHandler} {...otherProps} />
        <label className="label" htmlFor="input">
          {placeholder}
        </label>
      </div>

      <ErrorMessages messages={errorMessages} />
    </div>
  );
});
