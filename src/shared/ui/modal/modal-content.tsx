import { useSelector } from 'react-redux';
import { RootState } from '@/app/providers/with-store/store';
import { ModalContentProps } from './types';
import './modal.scoped.scss';
import { classNames } from '@/shared/lib/class-names';

export const ModalContent = ({ onClose, children }: ModalContentProps): JSX.Element => {
  const darkMode = useSelector((state: RootState) => state.switchTheme.darkMode);

  return (
    <div className={classNames('modal', {
      'theme--dark': darkMode
    })}>
      <div className="modal-backdrop" tabIndex={-1} onClick={onClose} />
      <div className="modal-inner flex flex-center">
        { children }
      </div>
    </div>
  );
};
