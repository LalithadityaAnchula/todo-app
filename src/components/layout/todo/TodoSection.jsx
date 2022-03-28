import TodoLists from "./TodoLists";
import Todos from "./Todos";

export default function TodoSection() {
  return (
    <div className="columns is-desktop">
      <div className="column">
        <TodoLists />
      </div>
      <div className="column">
        <Todos />
      </div>
    </div>
  );
}
