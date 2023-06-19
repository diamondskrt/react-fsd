import { FC } from 'react';
import { ErrorMessage } from '@/widgets';
import ErrorBoundary from './error-boundary';

export const withErrorBoundary = (WrappedComponent: FC) => () => {
  return (
    <ErrorBoundary fallback={<ErrorMessage />}>
      <WrappedComponent />
    </ErrorBoundary>
  );
};
