import TodoItem from "./TodoItem";

import TodoContext from "../../context/todo/TodoContext";

import { useContext } from "react";

export default function TodoItems() {
  const {
    current: { name, todos },
  } = useContext(TodoContext);

  return (
    <div className="container my-6">
      {todos.map((item) => (
        <TodoItem key={item.id} name={name} todo={item} />
      ))}
    </div>
  );
}
