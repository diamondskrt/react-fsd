import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from '@/widgets';
import { classNames } from '@/shared/lib/class-names';
import classes from './navbar.module.scss';

export const Navbar: FC = () => {
  const { t } = useTranslation();

  return (
    <header
      className={classNames(
        `${classes.navbar}`
      )}
    >
      <div className="flex justify-between items-center text-uppercase">
        <div className="links flex">
          <Link to="/">
            <div className="text-body2">{t('widgets.navbar.links.main')}</div>
          </Link>
          <Link to="/about" className="q-ml-sm">
            <div className="text-body2">{t('widgets.navbar.links.about')}</div>
          </Link>
        </div>

        <LangSwitcher />
      </div>
    </header>
  );
};
