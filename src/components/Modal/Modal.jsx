import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.scss';
import Icon from 'components/Icon/Icon';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ closeModal, children, title }) => {
  const closeModalByEscape = useCallback(
    e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    },
    [closeModal]
  );

  const closeModalOnBackdrop = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', closeModalByEscape);

    return () => {
      window.removeEventListener('keydown', closeModalByEscape);
    };
  }, [closeModalByEscape]);

  return createPortal(
    <>
      <div className={s.backdrop} onClick={closeModalOnBackdrop}>
        <div className={s.modalContainer}>
          <p>{title}</p>
          <button onClick={closeModal} type="button">
            <Icon name="icon-close" width={18} height={18} />
          </button>
          {children}
        </div>
      </div>
    </>,
    modalRoot
  );
};

export default Modal;
