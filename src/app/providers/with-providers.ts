import compose from 'compose-function';
import { withRouter } from './with-router';
import { withErrorBoundary } from './with-error-boundary';
import { withStore } from './with-store';

export const withProviders = compose(withRouter, withErrorBoundary, withStore);
