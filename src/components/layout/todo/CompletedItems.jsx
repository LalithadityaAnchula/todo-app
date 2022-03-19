import CompletedItem from "./CompletedItem";

import TodoContext from "../../context/todo/TodoContext";
import { useContext } from "react";

export default function CompletedItems() {
  const {
    current: { completed },
  } = useContext(TodoContext);
  return (
    <div className="container my-6">
      {completed.map((item) => (
        <CompletedItem key={item.id} doneItem={item} />
      ))}
    </div>
  );
}
