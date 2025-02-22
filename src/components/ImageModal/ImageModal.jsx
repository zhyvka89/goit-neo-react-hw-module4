import Modal from 'react-modal';
Modal.setAppElement('#modal');
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

function ImageModal() {
  return (
    <div id="modal">
      <Modal
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <img src=''/> */}
      </Modal>
    </div>
  )
}

export default ImageModal