import React, { useState } from "react";
import Input from "./Input";

function Modal(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState("");

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  function handleSubmit(text) {
    if (text) {
      props.createTasksList(text);
      setInputText("");
      toggleModal();
    }
  }

  return (
    <div>
      <button onClick={toggleModal} className="addlist-btn">
        Add New List
      </button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Name the List</h2>
            <Input
              placeholder="Add new List"
              handleText={handleSubmit}
              setInputText={setInputText}
              inputText={inputText}
              autoFocus={true}
            />
            <button
              className="close-modal-btn"
              onClick={() => handleSubmit(inputText)}
            >
              Add New List
            </button>
          </div>
        </div>
      )}
      {isOpen && <div className="modal-overlay" onClick={toggleModal} />}
    </div>
  );
}

export default Modal;
