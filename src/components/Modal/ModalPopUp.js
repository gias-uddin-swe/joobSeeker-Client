import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ModalPopUp = ({ modalIsOpen, closeModal }) => {
  let subtitle;
  // const [modalIsOpen, setIsOpen] = React.useState(false);

  // function openModal() {
  //   setIsOpen(true);
  // }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  // function closeModal() {
  //   setIsOpen(false);
  // }
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="text-success">Applied Successfully</h2>
        <div className="text-center mt-4">
          <button className="btn btn-danger w-50 m-auto " onClick={closeModal}>
            OK
          </button>
        </div>
        <div className="text-warning text-center mt-4">Keep touch with us</div>
      </Modal>
    </div>
  );
};

export default ModalPopUp;
