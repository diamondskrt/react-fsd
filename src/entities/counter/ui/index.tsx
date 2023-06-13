import { Button } from '@/shared/ui';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '@/entities/counter';
import { RootState } from '@/app/providers/with-store/store';

export const Counter: FC = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state: RootState) => state.counter.value);

  const onIncrement = (): void => {
    if (counter > 4) return;

    dispatch(increment());
  };

  const onDecrement = (): void => {
    if (counter < 1) return;

    dispatch(decrement());
  };

  return (
    <div className="counter q-py-md">
      <div>counter: {counter}</div>

      <div className="actions flex q-mt-md">
        <Button onClick={onDecrement}>decrement</Button>
        <Button onClick={onIncrement} className="q-ml-md">increment</Button>
      </div>
    </div>
  );
};
