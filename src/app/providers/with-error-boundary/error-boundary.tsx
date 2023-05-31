import { ReactNode, Component, ErrorInfo } from 'react';
import { ErrorBoundaryProps, ErrorBoundaryState } from './types';

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor (props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError (): ErrorBoundaryState {
    return { hasError: true };
  }

  // to output errors
  componentDidCatch (error: Error, info: ErrorInfo): void {
    console.log(error.message, info.componentStack);
  }

  render (): ReactNode {
    const { hasError } = this.state;
    const { fallback, children } = this.props;

    if (hasError) {
      return fallback;
    }

    return children;
  }
}

export default ErrorBoundary;
