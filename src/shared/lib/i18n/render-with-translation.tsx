import { render, RenderResult } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18nForTest from './i18n-for-tests';

/**
 * Render component with translations.
 * @param {ReactNode} component - ReactNode
 */
const RenderWithTranslation = (component: ReactNode): RenderResult => {
  return render(
    <I18nextProvider i18n={i18nForTest}>{component}</I18nextProvider>
  );
};

export default RenderWithTranslation;
