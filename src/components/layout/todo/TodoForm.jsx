import { useState } from "react";

export default function TodoForm({ add, name }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text !== "") add(name, text);
    setText("");
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      className="field is-grouped p-4"
    >
      <div className="control is-expanded">
        <input
          onChange={(e) => setText(e.target.value)}
          className="input"
          type="text"
          value={text}
          placeholder="Add a todo .."
        />
      </div>
      <div className="control">
        <button className="button is-white" type="submit">
          ADD
        </button>
      </div>
    </form>
  );
}
