import "./App.css";
import Buttons from "./components/Buttons";
import Header from "./components/Header";
import React, { useState, useEffect } from "react";

function App() {
  const initialTodo = JSON.parse(localStorage.getItem("todo")) || [
    {
      id: 0,
      text: "Write Essay",
      status: "",
    },
  ];

  const [todo, setTodo] = useState(initialTodo);
  const [filteredStatus, setFilteredStatus] = useState("todo");

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  function removeTodo(id) {
    const newTodos = todo.map((task) =>
      task.id === id ? { ...task, status: "trash" } : task
    );
    setTodo(newTodos);
  }

  function makeTodoDone(index) {
    const newTodos = todo.map((task) =>
      task.id === index ? { ...task, status: "done" } : task
    );
    setTodo(newTodos);
  }

  const filteredTodos = todo.filter((task) => {
    if (filteredStatus === "todo") return task.status !== "done";
    if (filteredStatus === "done") return task.status === "done";
    if (filteredStatus === "trash") return task.status === "trash";
  });

  return (
    <div className="container">
      <header>
        <Header />
      </header>
      <main>
        <Buttons setTodo={setTodo} setFilteredStatus={setFilteredStatus} />
        <div className="todo_container">
          {filteredTodos.map((todo_item) => (
            <div className="todo_item_container" key={todo_item.id}>
              <button
                className="remove_btn"
                onClick={() => removeTodo(todo_item.id)}
              >
                :
              </button>
              <button
                className="done_btn"
                onClick={() => makeTodoDone(todo_item.id)}
              ></button>
              <p
                className={
                  todo_item.status === "done" ? "todo_item done" : "todo_item"
                }
              >
                {todo_item.text}
              </p>
            </div>
          ))}
        </div>
      </main>
      <footer>
        <p className="footer">Made with ❤️ at nFactorial in 2022.</p>
      </footer>
    </div>
  );
}

export default App;
