import { v4 as uuid4 } from "uuid";
const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      const newTodo = [
        ...state.current.todos,
        { id: uuid4(), task: action.payload.task },
      ];
      const newList = state.lists.map((item) =>
        item.name === action.payload.name ? { ...item, todos: newTodo } : item
      );
      return {
        current: {
          ...state.current,
          todos: newTodo,
        },
        lists: newList,
      };
    }
    case "DELETE_TODO": {
      const newTodo = state.current.todos.filter(
        (item) => item.id !== action.payload.id
      );
      const newList = state.lists.map((item) =>
        item.name === action.payload.name ? { ...item, todos: newTodo } : item
      );
      return {
        current: {
          ...state.current,
          todos: newTodo,
        },
        lists: newList,
      };
    }
    case "COMPLETE_TODO": {
      const newTodo = state.current.todos.filter(
        (item) => item.id !== action.payload.todo.id
      );
      const newCompleted = [
        ...state.current.completed,
        {
          id: action.payload.todo.id,
          task: action.payload.todo.task,
          date: new Date().toLocaleDateString(),
          time: new Date().toLocaleTimeString(),
        },
      ];
      const newList = state.lists.map((item) =>
        item.name === action.payload.name
          ? { ...item, todos: newTodo, completed: newCompleted }
          : item
      );
      return {
        current: {
          ...state.current,
          todos: newTodo,
          completed: newCompleted,
        },
        lists: newList,
      };
    }
    case "EDIT_TODO": {
      const newTodo = state.current.todos.map((item) =>
        item.id === action.payload.todo.id
          ? { ...item, task: action.payload.todo.task }
          : item
      );
      const newList = state.lists.map((item) =>
        item.name === action.payload.name ? { ...item, todos: newTodo } : item
      );
      return {
        current: {
          ...state.current,
          todos: newTodo,
        },
        lists: newList,
      };
    }
    case "SET_TODO": {
      const currentTodo = () => {
        for (let i = 0; i < state.lists.length; i++) {
          if (state.lists[i].name === action.payload) return state.lists[i];
        }
        return state.current;
      };
      return { ...state, current: currentTodo() };
    }
    case "ADD_LIST": {
      return {
        ...state,
        lists: [
          ...state.lists,
          { name: action.payload, todos: [], completed: [] },
        ],
      };
    }
    default:
      return state;
  }
};

export default todoReducer;
