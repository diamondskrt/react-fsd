import compose from 'compose-function';
import withRouter from './with-router';
import withErrorBoundary from './with-error-boundary';

export const withProviders = compose(withRouter, withErrorBoundary);
