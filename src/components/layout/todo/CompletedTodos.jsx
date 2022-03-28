import { BiToggleLeft, BiToggleRight } from "react-icons/bi";

import CompletedItems from "./CompletedItems";

import { useState } from "react";

export default function CompletedTodos() {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle((prevValue) => !prevValue);
  };

  return (
    <div className="container my-1 px-5">
      <div className="level is-mobile">
        <div className="level-left">
          <div className="level-item">
            <h1 className="title is-4">Completed</h1>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            <button onClick={() => handleClick()} className="button is-white">
              {toggle ? (
                <BiToggleRight size="40" />
              ) : (
                <BiToggleLeft size="40" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="container">{toggle && <CompletedItems />}</div>
    </div>
  );
}
