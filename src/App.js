import React, { useReducer } from "react";
import filterReducer from "./reducers/filterReducer";
import todoReducer from "./reducers/todoReducer";
import uuid from "uuid/v4";
import Filter from "./components/Filter";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoContext from "./contexts/TodoContext";

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
  // const [task, setTask] = useState("");
  // const [todos, setTodos] = useState(initTodos);
  const [filter, dispatchFilter] = useReducer(filterReducer, "ALL");
  const [todos, dispatchTodos] = useReducer(todoReducer, initTodos);

  const filteredTodos = todos.filter(todo => {
    if (filter === "ALL") {
      return true;
    }
    if (filter === "COMPLETE" && todo.complete) {
      return true;
    }
    if (filter === "INCOMPLETE" && !todo.complete) {
      return true;
    }
    return false;
  });

  // const handleInputChange = e => {
  //   setTask(e.target.value);
  // };

  // const handleSubmit = e => {
  //   if (task) {
  //     // setTodos([...todos, { id: uuid(), task: task, complete: false }]);
  //     dispatchTodos({ type: "ADD_TODO", task, id: uuid() });
  //   }
  //   setTask("");
  //   e.preventDefault();
  // };

  // const handleCheckbox = todo => {
  //   dispatchTodos({
  //     type: todo.complete ? "UNDO_TODO" : "DO_TODO",
  //     id: todo.id
  //   });
  // };
  // const handleCheckbox = (id, task) => {
  //   setTodos(
  //     todos.map(todo => {
  //       if (todo.id === id) {
  //         return { ...todos, task, complete: !todos.complete };
  //       } else {
  //         return todo;
  //       }
  //     })
  //   );
  // };

  // const handleShowAll = () => {
  //   dispatchFilter({ type: "SHOW_ALL" });
  // };
  // const handleShowComplete = () => {
  //   dispatchFilter({ type: "SHOW_COMPLETE" });
  // };
  // const handleShowIncomplete = () => {
  //   dispatchFilter({ type: "SHOW_INCOMPLETE" });
  // };
  return (
    <div className="App">
      {/* <ul>
        {filteredTodos.map(ele => {
          return (
            <li key={ele.id}>
              <label>
                <input
                  type="checkbox"
                  checked={ele.complete}
                  onChange={() => handleCheckbox(ele)}
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
      </button> */}
      <TodoContext.Provider value={dispatchTodos}>
        <Filter dispatch={dispatchFilter} />
        <TodoList todos={filteredTodos} />
        <AddTodo />
      </TodoContext.Provider>
    </div>
  );
};

export default App;
