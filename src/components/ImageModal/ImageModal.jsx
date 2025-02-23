import Modal from 'react-modal';
Modal.setAppElement("#root");

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

function ImageModal({isOpen, image, closeModal}) {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        style={customStyles}
        contentLabel="Image Modal"
        shouldCloseOnOverlayClick={true}
        onRequestClose={closeModal}
      >
        <img width='600px' src={image}/>
      </Modal>
    </div>
  )
}

export default ImageModal