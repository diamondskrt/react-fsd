import { ReactNode } from 'react';

export interface ModalProps {
  open: boolean;
  closeModal: () => void;
  children?: ReactNode;
}

export interface ModalContentProps {
  onClose: () => void;
  children?: ReactNode;
}
