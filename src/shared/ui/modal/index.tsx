import { FC } from 'react';
import { createPortal } from 'react-dom';
import { ModalContent } from './modal-content';
import { ModalProps } from './types';

export const Modal: FC<ModalProps> = ({ open, closeModal, children }) => {
  return (
    <>
      {open && createPortal(
        <ModalContent onClose={closeModal}>
          {children}
        </ModalContent>,
        document.body
      )}
    </>
  );
};
