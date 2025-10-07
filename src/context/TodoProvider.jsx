import { createContext, useContext, useReducer, useEffect } from "react";

const TodoContext = createContext();

// Get initial state from localStorage or use default
const getInitialState = () => {
  if (typeof window !== "undefined") {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? { todos: JSON.parse(savedTodos) } : { todos: [] };
  }
  return { todos: [] };
};

const initialState = getInitialState();

function reducer(state, action) {
  let newState;

  switch (action.type) {
    case "ADD_NOTE":
      newState = {
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            content: action.payload.content,
            completed: action.payload.completed,
          },
        ],
      };
      break;
    case "CLEAR_COMPLETED":
      newState = {
        todos: state.todos.filter((todo) => !todo.completed),
      };
      break;
    case "DELETE_NOTE":
      newState = {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
      break;
    case "TOGGLE_TODO":
      newState = {
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
      break;
    default:
      newState = state;
  }

  return newState;
}

function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state.todos));
  }, [state.todos]);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

function useTodo() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("can not use this context outside the provider");
  }
  return context;
}

export { TodoProvider, useTodo };
