import { FC, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './ripple.scoped.scss';

export const Ripple: FC = () => {
  const [rippleElements, setRippleElements] = useState<JSX.Element[]>([]);

  const onAnimationEnd = (key: string): void => {
    setRippleElements((rippleElements) =>
      rippleElements.filter((element) => element.key !== key)
    );
  };

  const onRippleClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    const rect = event.currentTarget.getBoundingClientRect();

    const d = Math.max(
      event.currentTarget.clientWidth,
      event.currentTarget.clientHeight
    );
    const left = `${event.clientX - rect.left - d / 2}px`;
    const top = `${event.clientY - rect.top - d / 2}px`;
    const rippleElement = newRippleElement(d, left, top);

    setRippleElements([...rippleElements, rippleElement]);
  };

  const newRippleElement = (d: number, left: string, top: string): JSX.Element => {
    const key = uuidv4();

    return (
      <div
        key={key}
        className="ripple-element"
        style={{ width: d, height: d, left, top }}
        onAnimationEnd={() => { onAnimationEnd(key); }}
      ></div>
    );
  };

  return (
    <div
      className="ripple"
      onClick={(event) => { onRippleClick(event); }}
    >
      {rippleElements}
    </div>
  );
};
