import { FC } from 'react';
import { ErrorMessage } from '@/widgets';
import ErrorBoundary from './error-boundary';

export const withErrorBoundary = (component: () => FC) => () => {
  return (
    <ErrorBoundary fallback={<ErrorMessage />}>{component()}</ErrorBoundary>
  );
};
