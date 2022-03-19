import { createContext, useReducer } from "react";
import todoReducer from "./TodoReducer";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const initialState = {
    current: { name: "Personal", todos: [], completed: [] },
    lists: [
      { name: "Personal", todos: [], completed: [] },
      { name: "Work", todos: [], completed: [] },
    ],
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  //adding
  const addTodo = (name, task) => {
    dispatch({ type: "ADD_TODO", payload: { name: name, task: task } });
  };

  const addList = (ignore, name) => {
    dispatch({ type: "ADD_LIST", payload: name });
  };

  //editing
  const editTodo = (name, todo) => {
    dispatch({ type: "EDIT_TODO", payload: { name: name, todo: todo } });
  };
  const editList = (name) => {
    dispatch({ type: "EDIT_LIST", payload: name });
  };

  //deleting
  const deleteTodo = (name, id) => {
    dispatch({ type: "DELETE_TODO", payload: { name, id } });
  };
  const deleteList = (name) => {
    dispatch({ type: "DELETE_LIST", payload: name });
  };

  //complete todo from list
  const completeTodo = (name, todo) => {
    dispatch({
      type: "COMPLETE_TODO",
      payload: { todo: todo, name: name },
    });
  };

  //set todo state
  const setTodoState = (name) => {
    dispatch({ type: "SET_TODO", payload: name });
  };

  return (
    <TodoContext.Provider
      value={{
        current: state.current,
        lists: state.lists,
        listNames: state.listNames,
        addTodo,
        deleteTodo,
        editTodo,
        completeTodo,
        addList,
        editList,
        deleteList,
        setTodoState,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
