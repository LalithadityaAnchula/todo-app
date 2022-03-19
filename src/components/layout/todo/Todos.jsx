import TodoItems from "./TodoItems";
import TodoForm from "./TodoForm";
import CompletedTodos from "./CompletedTodos";
import { TiPlus } from "react-icons/ti";
import { IoMdRemoveCircle } from "react-icons/io";

import TodoContext from "../../context/todo/TodoContext";

import { useContext } from "react";
import { useState } from "react";

export default function Todos() {
  const [isAdding, setIsAdding] = useState(false);
  const {
    current: { name, todos },
    addTodo,
  } = useContext(TodoContext);

  return (
    <>
      <div className="container mx-3 px-3 my-1">
        <h1 className="title is-3">{name}</h1>
        <div className="level is-mobile">
          <div className="level-left">
            <div className="level-item">
              <p className="subtitle is-5">{todos.length} todos</p>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              <button
                onClick={() => setIsAdding((prevValue) => !prevValue)}
                className="button is-white"
              >
                {isAdding ? <IoMdRemoveCircle /> : <TiPlus />}
              </button>
            </div>
          </div>
        </div>
        {isAdding && <TodoForm add={addTodo} name={name} />}
        <TodoItems />
      </div>
      <CompletedTodos />
    </>
  );
}
