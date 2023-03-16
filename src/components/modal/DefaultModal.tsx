import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgb(241, 242, 246)',
    width: '35%',
    height: '35%',
    borderRadius: '8px',
    border: '0px',
  },
  overlay: {
    backgroundColor: '#a6aaaf63',
  },
};

interface ModalProps {
  isOpen: boolean;
  content: JSX.Element;
  outsideClose: () => void;
}

const DefaultModal = ({ isOpen, content, outsideClose }: ModalProps) => {
  return (
    <Modal isOpen={isOpen} ariaHideApp={false} onRequestClose={outsideClose} style={customStyles}>
      {content}
    </Modal>
  );
};

export default DefaultModal;
