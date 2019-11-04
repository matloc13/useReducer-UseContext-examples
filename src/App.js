import React, { useState } from "react";
import uuid from "uuid/v4";
import "./App.css";

const initTodos = [
  {
    id: uuid(),
    task: "Learn React",
    complete: false
  },
  {
    id: uuid(),
    task: "Learn TypeScript",
    complete: false
  },
  {
    id: uuid(),
    task: "Learn Elm",
    complete: false
  }
];

const App = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState(initTodos);

  const handleInputChange = e => {
    setTask(e.target.value);
  };

  const handleSubmit = e => {
    if (task) {
      setTodos([...todos, { id: uuid(), task, complete: false }]);
    }
    setTask("");
    e.preventDefault();
  };

  const handleCheckbox = id => {
    setTodos(
      todos.map(todo => {
        if (todos.id === id) {
          return { ...todos, complete: !todos.complete };
        } else {
          return todo;
        }
      })
    );
  };

  const handleShowAll = () => {};
  const handleShowComplete = () => {};
  const handleShowIncomplete = () => {};
  return (
    <div className="App">
      <ul>
        {todos.map(ele => {
          return (
            <li key={ele.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todos.complete}
                  onChange={() => handleCheckbox(ele.id)}
                />
                {ele.task}
              </label>
            </li>
          );
        })}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={handleInputChange} />
        <input type="submit" value="add todo" />
      </form>
      <button type="button" onClick={handleShowAll}>
        Show All
      </button>
      <button type="button" onClick={handleShowComplete}>
        Show Complete
      </button>
      <button type="button" onClick={handleShowIncomplete}>
        Show Incomplete
      </button>
    </div>
  );
};

export default App;
