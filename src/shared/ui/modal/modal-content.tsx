import { ModalContentProps } from './types';
import classes from './modal.module.scss';

export const ModalContent = ({ onClose, children }: ModalContentProps): JSX.Element => {
  return (
    <div className={classes.modal}>
      <div className={classes['modal-backdrop']} tabIndex={-1} onClick={onClose} />
      <div className={`${classes['modal-inner']} flex flex-center`}>
        { children }
      </div>
    </div>
  );
};
