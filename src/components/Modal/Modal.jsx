import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
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
      <div className="overlay">
      <div className="modal">
       <img src={largeUrl} alt={tags} />
      </div>
    </div>
    </Modal>     
    )
}

