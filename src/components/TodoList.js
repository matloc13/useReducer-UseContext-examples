import React from "react";
import TodoItem from "./TodoItem";
const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map(ele => {
        return <TodoItem key={ele.id} todo={ele} />;
      })}
    </ul>
  );
};
export default TodoList;
