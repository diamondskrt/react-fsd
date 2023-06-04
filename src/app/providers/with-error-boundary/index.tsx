import { FC } from 'react';
import { ErrorMessage } from '@/widgets';
import ErrorBoundary from './error-boundary';

const withErrorBoundary = (component: () => FC) => function getErrorBoundary () {
  return (
    <ErrorBoundary fallback={<ErrorMessage />}>{component()}</ErrorBoundary>
  );
};

export default withErrorBoundary;
