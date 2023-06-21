import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui';
import { LangSwitcherProps } from './types';
import { classNames } from '@/shared/lib/class-names';

export const LangSwitcher: FC<LangSwitcherProps> = ({ className, color }) => {
  const { t, i18n } = useTranslation();

  const switchLang = (): void => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      data-testid="lang-switcher"
      color={color}
      className={classNames('lang-switcher', { className })}
      onClick={switchLang}
    >{t('lang')}</Button>
  );
};
