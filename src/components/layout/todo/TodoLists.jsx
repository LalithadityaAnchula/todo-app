import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

import { TiPlus } from "react-icons/ti";
import { IoMdRemoveCircle } from "react-icons/io";

import TodoContext from "../../context/todo/TodoContext";
import { useState, useContext } from "react";

export default function TodoLists() {
  const [isAdding, setIsAdding] = useState(false);
  const { lists, addList } = useContext(TodoContext);
  const listNames = lists.map((item) => item.name);
  return (
    <div className="container">
      <div className="section mx-3 px-3 my-1">
        <h1 className="title is-3">Todo Lists</h1>
        <div className="level is-mobile">
          <div className="level-left">
            <div className="level-item">
              <p className="subtitle is-6">
                You can add different categories of todo lists
              </p>
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
        {isAdding && <TodoForm add={addList} name={null} />}
      </div>
      <div className="container m-2 p-4">
        {listNames.map((item) => (
          <TodoList key={item} listName={item} />
        ))}
      </div>
    </div>
  );
}
