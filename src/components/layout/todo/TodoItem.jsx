import { AiOutlineDelete, AiFillDelete } from "react-icons/ai";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";

import TodoContext from "../../context/todo/TodoContext";

import { useContext, useState, useEffect } from "react";

export default function TodoItem({ name, todo }) {
  const [text, setText] = useState(todo.task);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isDelete, setIsDeleting] = useState(false);

  const { deleteTodo, completeTodo, editTodo } = useContext(TodoContext);

  useEffect(() => {
    setIsEditing(true);
    todo.task = text;
    if (text === "") deleteTodo(name, todo.id);
    else editTodo(name, todo);
    setTimeout(() => setIsEditing(false), 300);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  //handle delelte
  const handleDelete = (id) => {
    setIsDeleting(true);
    setIsEditing(true);
    setTimeout(() => deleteTodo(name, id), 200);
  };

  //handle complete
  const handleComplete = (todo) => {
    setIsCompleted(true);
    setIsEditing(true);
    setTimeout(() => completeTodo(name, todo), 200);
  };

  //handleFocus
  const handleFocus = (e, id) => {
    if (e.target.value === "") deleteTodo(id);
  };

  return (
    <div className="field is-grouped my-5">
      <div className="control">
        <button
          onClick={(e) => handleComplete(todo)}
          className="button is-white"
        >
          {isCompleted ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
        </button>
      </div>
      <div className={`control is-expanded ${isEditing && "is-loading"}`}>
        <input
          onChange={(e) => setText(e.target.value)}
          onFocus={(e) => handleFocus(e, todo.id)}
          type="text"
          className="input is-white"
          value={text}
        />
      </div>
      <div className="control">
        <button
          onClick={() => handleDelete(todo.id)}
          className="button is-white"
        >
          {isDelete ? <AiFillDelete /> : <AiOutlineDelete />}
        </button>
      </div>
    </div>
  );
}
