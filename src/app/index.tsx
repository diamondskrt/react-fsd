import { FC } from 'react';
import { withProviders } from './providers';
import { useSelector } from 'react-redux';
import { RootState } from './providers/with-store/store';
import { Routing } from '@/pages';
import { Navbar, Footer } from '@/widgets';
import { classNames } from '@/shared/lib/class-names';
import '@/shared/lib/i18n/i18n';
import './index.scss';

const App: FC = () => {
  const darkMode = useSelector((state: RootState) => state.switchTheme.darkMode);

  return (
    <div className={classNames('application', {
      'theme--dark': darkMode
    })}>
      <Navbar />

      <Routing />

      <Footer />
    </div>
  );
};

export default withProviders(App);
