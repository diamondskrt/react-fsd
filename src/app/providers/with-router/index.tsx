import { FC, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const withRouter = (component: () => FC) => function getBrowserRouter () {
  return (
    <BrowserRouter>
        <Suspense fallback={<div>load...</div>}>
            {component()}
        </Suspense>
    </BrowserRouter>
  );
};
