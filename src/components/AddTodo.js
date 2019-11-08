import React, { useState, useContext } from "react";
import uuid from "uuid/v4";
import DispatchContext from "../contexts/DispatchContext";

const AddTodo = () => {
  const dispatch = useContext(DispatchContext);
  const [task, setTask] = useState("");
  const handleSubmit = e => {
    if (task) {
      dispatch({ type: "ADD_TODO", task, id: uuid() });
    }
    setTask("");
    e.preventDefault();
  };

  const handleInputChange = e => {
    setTask(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={task} onChange={handleInputChange} />
      <input type="submit" value="add todo" />
    </form>
  );
};
export default AddTodo;
