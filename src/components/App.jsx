import "bulma/css/bulma.min.css";

//components
import Header from "./layout/header/Header";
import TodoSection from "./layout/todo/TodoSection";

//context
import { TodoProvider } from "./context/todo/TodoContext";

export default function App() {
  return (
    <TodoProvider>
      <div className="container is-centered">
        <Header title="Todo App" />
        <TodoSection />
      </div>
    </TodoProvider>
  );
}
