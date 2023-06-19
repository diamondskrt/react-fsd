import { FC, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const withRouter = (WrappedComponent: FC) => () => {
  return (
    <BrowserRouter>
        <Suspense fallback={<div>load...</div>}>
          <WrappedComponent />
        </Suspense>
    </BrowserRouter>
  );
};
