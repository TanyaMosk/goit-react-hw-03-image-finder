import Modal from 'react-modal';
import { Overlay, WrapImg } from './Modal.styled';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-20%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const ModalImg  = ({largeUrl,tags,isModalOpen,onClose}) => {
  return (
    <Modal
        isOpen={isModalOpen}        
        onRequestClose={onClose}
        style={customStyles}
        contentLabel="onRequestClose Example"
      >
      <Overlay className="overlay">
      <WrapImg className="modal">
       <img src={largeUrl} alt={tags} />
      </WrapImg>
    </Overlay>
    </Modal>     
    )
}

