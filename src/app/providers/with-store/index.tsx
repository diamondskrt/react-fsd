import { FC } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

export const withStore = (WrappedComponent: FC) => () => {
  return (
    <Provider store={store}><WrappedComponent /></Provider>
  );
};
