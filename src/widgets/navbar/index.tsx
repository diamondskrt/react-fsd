import { FC, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { RootState } from '@/app/providers/with-store/store';
import { signOut } from '@/entities/user';
import { AuthModal } from '@/features/auth';
import { LangSwitcher } from '@/widgets';
import { Button } from '@/shared/ui';
import './navbar.scoped.scss';

export const Navbar: FC = () => {
  const dispatch = useDispatch();

  const { t } = useTranslation();

  const user = useSelector((state: RootState) => state.user.userData);

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
    <header className="navbar">
      <div className="flex justify-between items-center text-uppercase">
        <div className="links flex">
          <Link to="/">
            <div className="text-body2">{t('widgets.navbar.links.main')}</div>
          </Link>
          <Link to="/about" className="q-ml-sm">
            <div className="text-body2">{t('widgets.navbar.links.about')}</div>
          </Link>
        </div>

        <div className="flex">
          {
            user
              ? (
                  <Button onClick={onSignOut}>{t('auth.signOut')}</Button>
                )
              : (
                  <>
                    <Button onClick={openModal}>{t('auth.signIn')}</Button>
                    <AuthModal open={showModal} closeModal={closeModal} />
                  </>
                )
          }
          <LangSwitcher className="q-ml-md" />
        </div>
      </div>
    </header>
  );
};
