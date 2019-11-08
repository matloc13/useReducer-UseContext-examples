import React, { useContext } from "react";
import DispatchContext from "../contexts/DispatchContext";
const TodoItem = ({ todo }) => {
  const dispatch = useContext(DispatchContext);
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
