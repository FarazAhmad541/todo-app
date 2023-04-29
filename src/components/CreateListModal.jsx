import React, { useState } from "react";

function Modal(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState("");

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (inputText) {
      props.createTasksList(inputText.trim());
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
      <button onClick={toggleModal} className="addlist-btn">
        Add New List
      </button>{" "}
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Name the List</h2>
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
      {isOpen && <div className="modal-overlay" onClick={toggleModal} />}
    </div>
  );
}

export default Modal;
