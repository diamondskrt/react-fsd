import { screen } from '@testing-library/react';
import LangSwitcher from './';
import RenderWithTranslation from '@/shared/lib/i18n/render-with-translation';

describe('lang-switcher', () => {
  test('render', () => {
    RenderWithTranslation(<LangSwitcher />);

    expect(screen.getByTestId('lang-switcher')).toBeInTheDocument();
  });
});