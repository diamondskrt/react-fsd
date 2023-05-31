import { FC } from 'react';
import Navbar from '@/widgets/navbar';
import Footer from '@/widgets/footer';
import Routing from '@/pages';
import { withProviders } from '@/app/providers';
import 'shared/config/i18n';
import './index.scss';

const App: FC = () => {
  return (
    <div className="app q-dark">
      <Navbar />

      <Routing />

      <Footer />
    </div>
  );
};

export default withProviders(App);
