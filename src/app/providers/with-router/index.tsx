import { FC, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

const withRouter = (component: () => FC) => function getBrowserRouter () {
  return (
    <BrowserRouter>
        <Suspense fallback={<div>load...</div>}>
            {component()}
        </Suspense>
    </BrowserRouter>
  );
};

export default withRouter;
