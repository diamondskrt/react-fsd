import { ModalContentProps } from './types';
import './modal.scoped.scss';

export const ModalContent = ({ onClose, children }: ModalContentProps): JSX.Element => {
  return (
    <div className="modal">
      <div className="modal-backdrop" tabIndex={-1} onClick={onClose} />
      <div className="modal-inner flex flex-center">
        { children }
      </div>
    </div>
  );
};
