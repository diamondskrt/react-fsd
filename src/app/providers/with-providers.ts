import { FC } from 'react';
import { withRouter } from './with-router';
import { withErrorBoundary } from './with-error-boundary';
import { withStore } from './with-store';

export const withProviders = (app: FC): FC => withErrorBoundary(withStore(withRouter(app)));
