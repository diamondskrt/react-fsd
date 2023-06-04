import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Card, Modal, Slot } from '@/shared/ui';

const MainPage: FC = () => {
  const { t } = useTranslation();

  const [showModal, setShowModal] = useState(false);

  const openModal = (): void => {
    setShowModal(true);
  };

  const closeModal = (): void => {
    setShowModal(false);
  };

  return (
    <section>
      <h5>{t('welcomeText')}</h5>

      <Button onClick={openModal}>{t('shared.ui.modal.open')}</Button>

      <Modal open={showModal} closeModal={closeModal}>
        <Card>
          <Slot name="header">
            <h5>Title</h5>
          </Slot>

          <div>I'm a modal dialog</div>

          <Slot name="actions">
            <Button onClick={closeModal}>{t('shared.ui.modal.close')}</Button>
          </Slot>
        </Card>
      </Modal>
    </section>
  );
};

export default MainPage;
