import { RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';

// @todo доработать store provider
export const withStore = (component: RenderResult): JSX.Element => {
  const counter: any = {};

  return <Provider store={counter}>{component}</Provider>;
};
