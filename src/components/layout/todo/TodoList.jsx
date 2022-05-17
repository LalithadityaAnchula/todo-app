import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

import TodoContext from "../../context/todo/TodoContext";

import { useContext } from "react";

export default function TodoList({ listName }) {
  const { setTodoState } = useContext(TodoContext);

  const handleClick = () => {
    setTodoState(listName);
  };

  return (
    <div
      onClick={() => {
        handleClick();
      }}
      className="box is-clickable"
    >
      <div className="level">
        <div className="level-left">
          <div className="level-item">
            <h2 className="subtitle is-6">{listName}</h2>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            <div className="field is-grouped is-grouped-centered">
              <p className="control">
                <button className="button is-white">
                  <AiOutlineEdit />
                </button>
              </p>
              <p className="control">
                <button className="button is-white">
                  <AiOutlineDelete />
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
