import { FC, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { RootState } from '@/app/providers/with-store/store';
import { signOut } from '@/entities/user';
import { AuthModal } from '@/features/auth';
import { LangSwitcher, ThemeSwitcher } from '@/widgets';
import { AppBar, Button } from '@/shared/ui';
import { ButtonColor } from '@/shared/ui/button';
import './navbar.scoped.scss';

export const Navbar: FC = () => {
  const dispatch = useDispatch();

  const { t } = useTranslation();

  const user = useSelector((state: RootState) => state.user.userData);

  const darkMode = useSelector((state: RootState) => state.switchTheme.darkMode);

  const getButtonColor = (): ButtonColor => {
    return darkMode ? ButtonColor.PRIMARY : ButtonColor.DARK;
  };

  const [showModal, setShowModal] = useState(false);

  const openModal = (): void => {
    setShowModal(true);
  };

  const closeModal = (): void => {
    setShowModal(false);
  };

  const onSignOut = useCallback((): void => {
    dispatch(signOut());
  }, [dispatch]);

  return (
    <AppBar>
      <div className="flex justify-between items-center text-uppercase">
        <div className="links flex">
          <Link to="/">
            <div className="text-body2">{t('widgets.navbar.links.main')}</div>
          </Link>
          <Link to="/about" className="q-ml-sm">
            <div className="text-body2">{t('widgets.navbar.links.about')}</div>
          </Link>
        </div>

        <div className="flex items-center">
          {
            user
              ? (
                  <Button color={getButtonColor()} onClick={onSignOut}>{t('auth.signOut')}</Button>
                )
              : (
                  <>
                    <Button color={getButtonColor()} onClick={openModal}>{t('auth.signIn')}</Button>
                    <AuthModal open={showModal} closeModal={closeModal} />
                  </>
                )
          }
          <LangSwitcher color={getButtonColor()} className="q-mx-md" />
          <ThemeSwitcher />
        </div>
      </div>
    </AppBar>
  );
};
