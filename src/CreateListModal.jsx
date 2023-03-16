import React, { useState } from "react";
import Input from "./Input";

function Modal(props) {
  // Initialize isOpen and inputText states using useState hook
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState("");

  // Function to toggle the modal state
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle form submission from Input component
  function handleSubmit(text) {
    if (text) {
      // Call the createTasksList function from props with the input text as argument
      props.createTasksList(text);
      // Clear the input text and toggle the modal
      setInputText("");
      toggleModal();
    }
  }

  return (
    <div>
      {/* Button to toggle the modal isoOpen state and add a new list */}
      <button onClick={toggleModal} className="addlist-btn">
        Add New List
      </button>
      {/* Render the modal if isOpen state is true */}
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Name the List</h2>
            {/* Render the Input component */}
            <Input
              placeholder="Add new List"
              handleText={handleSubmit}
              setInputText={setInputText}
              inputText={inputText}
              autoFocus={true}
            />
            {/* Button to submit the form */}
            <button
              className="close-modal-btn"
              onClick={() => handleSubmit(inputText)}
            >
              Add New List
            </button>
          </div>
        </div>
      )}
      {/* Render the modal overlay to close the modal */}
      {isOpen && <div className="modal-overlay" onClick={toggleModal} />}
    </div>
  );
}

export default Modal;
