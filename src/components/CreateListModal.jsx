import React, { useState } from "react";

function Modal(props) {
  // Initialize isOpen and inputText states using useState hook
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState("");

  // Function to toggle the modal state
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle form submission from Input component
  function handleSubmit(e) {
    e.preventDefault();
    if (inputText) {
      // Call the createTasksList function from props with the input text as argument
      props.createTasksList(inputText.trim());
      // Clear the input text and toggle the modal
      setInputText("");
      toggleModal();
    } else {
      alert("Task List should have a name");
    }
  }

  function handleChange(event) {
    setInputText(event.target.value);
  }

  return (
    <div>
      {/* Button to toggle the modal isoOpen state and add a new list */}
      <button onClick={toggleModal} className="addlist-btn">
        Add New List
      </button>{" "}
      {/* Render the modal if isOpen state is true */}
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Name the List</h2>
            {/* Render the Input component */}
            <form action="submit" onSubmit={handleSubmit}>
              <input
                type="text"
                value={inputText}
                placeholder="Add New List"
                onChange={handleChange}
                autoFocus
              />
              <button className="add-btn" onClick={handleSubmit}>
                Add New List
              </button>
            </form>
          </div>
        </div>
      )}
      {/* Render the modal overlay to close the modal */}
      {isOpen && <div className="modal-overlay" onClick={toggleModal} />}
    </div>
  );
}

export default Modal;
