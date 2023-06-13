
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Card, Modal } from '@/shared/ui';
import { AuthForm } from './form';

export const AuthModal: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();

  const openModal = (): void => {
    setShowModal(true);
  };

  const closeModal = (): void => {
    setShowModal(false);
  };

  return (
    <>
      <Button onClick={openModal}>{t('auth.signIn')}</Button>

      <Modal open={showModal} closeModal={closeModal}>
        <Card height="300px" sectionClass="column flex-center full-height">
          <AuthForm />
        </Card>
      </Modal>
    </>
  );
};
