import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { useHistory } from 'react-router-dom';
import s from './Modal.module.css';

function Modal({ onClose, children }) {
  const history = useHistory();

  useEffect(() => {
    const keydownCloseModal = ({ code }) => {
      code === 'Escape' && onClose();
      history.goBack();
    };
    window.addEventListener('keydown', keydownCloseModal);
    return () => window.removeEventListener('keydown', keydownCloseModal);
  }, [onClose, history]);

  const backdropCloseModal = ({ target, currentTarget }) => {
    target === currentTarget && onClose();
    history.goBack();
  };

  return createPortal(
    <div className={s.backdrop} onClick={backdropCloseModal}>
      <div className={s.content}>{children}</div>
    </div>,
    document.querySelector('#modal-root'),
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
