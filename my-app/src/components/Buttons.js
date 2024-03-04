import "../components/style.css";
import React, { useState } from "react";
import Modal from "./Modal";

function Buttons({ setTodo, setFilteredStatus }) {
  const [showModal, setShowModal] = useState(false);
  const [showToDoText, setShowToDoText] = useState(false);
  const [showDoneText, setShowDoneText] = useState(false);
  const [showTrashText, setShowTrashText] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const changeStatus = (newStatus) => {
    setFilteredStatus(newStatus);
    setShowToDoText(newStatus === "todo");
    setShowDoneText(newStatus === "done");
    setShowTrashText(newStatus === "trash");
  };

  return (
    <div className="all_btn">
      <div className="btn_todos">
        <button
          className="main_btn"
          onClick={() => {
            changeStatus("todo");
            setShowToDoText(true);
          }}
        >
          To Do
        </button>
        {showToDoText && <span className="btn_txt"> To Do</span>}
        <button
          className="main_btn"
          onClick={() => {
            changeStatus("done");
            setShowDoneText(true);
          }}
        >
          Done
        </button>
        {showDoneText && <span className="btn_txt"> Done</span>}
        <button
          className="main_btn"
          onClick={() => {
            changeStatus("trash");
            setShowTrashText(true);
          }}
        >
          Trash
        </button>

        {showTrashText && <span className="btn_txt">Trash</span>}
      </div>

      {showModal && <Modal setTodo={setTodo} closeModal={closeModal} />}

      <button className="add_btn" onClick={() => setShowModal(true)}>
        +
      </button>
    </div>
  );
}

export default Buttons;
