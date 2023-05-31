import { ReactNode } from 'react';

export interface ErrorBoundaryProps {
  fallback: ReactNode;
  children: ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
}
