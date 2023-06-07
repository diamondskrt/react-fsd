import { FC } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

export const withStore = (component: () => FC) => function getStoreProvider () {
  return (
    <Provider store={store}>{component()}</Provider>
  );
};
