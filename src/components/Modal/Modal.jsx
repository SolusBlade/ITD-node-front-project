import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.scss';
import Icon from 'components/Icon/Icon';
import clsx from 'clsx';
const modalRoot = document.querySelector('#modal-root');

const Modal = ({ closeModal, children, title, filter }) => {
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
        <div
          className={clsx(s.modalContainer, filter && s.modalContainerFilter)}
        >
          <p className={clsx(s.title, filter && s.titleFilter)}>{title}</p>
          <button className={s.close} onClick={closeModal} type="button">
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
