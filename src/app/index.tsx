import { FC } from 'react';
import { Routing } from '@/pages';
import { Navbar, Footer } from '@/widgets';
import { withProviders } from '@/app/providers';
import '@/shared/lib/i18n/i18n';
import './index.scss';

const App: FC = () => {
  return (
    <div className="app">
      <Navbar />

      <Routing />

      <Footer />
    </div>
  );
};

export default withProviders(App);
