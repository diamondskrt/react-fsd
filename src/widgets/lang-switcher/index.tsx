import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@/shared/ui/button';

const LangSwitcher: FC = () => {
  const { t, i18n } = useTranslation();

  const switchLang = (): void => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return <Button data-testid="lang-switcher" onClick={switchLang}>{t('lang')}</Button>;
};

export default LangSwitcher;
