import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage: FC = () => {
  const { t } = useTranslation();
  return (
    <section>
      <h5>{t('welcomeText')}</h5>
    </section>
  );
};

export default MainPage;
