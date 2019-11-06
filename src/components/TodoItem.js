import React, { useContext } from "react";
import TodoContext from "./../contexts/TodoContext";
const TodoItem = ({ todo }) => {
  const dispatch = useContext(TodoContext);
  const handleCheckbox = todo => {
    dispatch({
      type: todo.complete ? "UNDO_TODO" : "DO_TODO",
      id: todo.id
    });
  };

  return (
    <li key={todo.id}>
      <label>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => handleCheckbox(todo)}
        />
        {todo.task}
      </label>
    </li>
  );
};
export default TodoItem;
