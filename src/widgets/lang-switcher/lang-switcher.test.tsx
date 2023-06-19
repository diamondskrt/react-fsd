import { screen } from '@testing-library/react';
import { LangSwitcher } from './lang-switcher';
import { withTranslation } from '@/shared/jest-providers';

describe('lang-switcher', () => {
  test('render', () => {
    withTranslation(<LangSwitcher />);

    expect(screen.getByTestId('lang-switcher')).toBeInTheDocument();
  });
});
