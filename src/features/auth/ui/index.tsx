
import { FC } from 'react';
import { Card, Modal } from '@/shared/ui';
import { AuthForm } from './form';
import { AuthModalProps } from './types';

export const AuthModal: FC<AuthModalProps> = ({ open, closeModal }) => {
  return (
    <>
      <Modal open={open} closeModal={closeModal}>
        <Card height="300px" sectionClass="column flex-center full-height">
          <AuthForm closeModal={closeModal} />
        </Card>
      </Modal>
    </>
  );
};
