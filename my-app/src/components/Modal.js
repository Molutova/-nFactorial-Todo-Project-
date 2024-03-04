import React, { useState } from "react";
import "../components/style.css";

const Modal = ({ setTodo, closeModal }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    if (input.trim() !== "") {
      const newTodoItem = {
        id: Date.now(),
        text: input,
        status: "active",
      };
      setTodo((prevTodo) => [...prevTodo, newTodoItem]);
      closeModal();
    }
  };

  return (
    <div className="modal">
      <h2>Add New To Do</h2>
      <input
        placeholder="Your text"
        className="modal_input"
        value={input}
        onChange={handleChange}
      />
      <button className="input_btn" onClick={handleClick}>
        Add
      </button>
    </div>
  );
};

export default Modal;
