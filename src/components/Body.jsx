import { useState } from "react";
import { useTheme } from "../context/ThemeProvider";
import { useTodo } from "../context/TodoProvider";

function Body() {
  const { state, dispatch } = useTodo();
  const { theme } = useTheme();
  const [filter, setFilter] = useState("all");

  const activeItemsCount = state.todos.filter((todo) => !todo.completed).length;

  return (
    <>
      <div
        className={`${
          theme == "light" ? "bg-Gray-50" : "bg-Navy-950"
        } absolute inset-0 -z-10`}></div>
      <section
        className={`${
          theme == "light" ? "bg-Gray-50" : "bg-Navy-900"
        }   w-3/10 flex flex-col shadow rounded-md mx-auto -translate-y-15`}>
        <div className="max-h-[410px] overflow-y-scroll ">
          {state.todos.map((el) => (
            <div
              className={`
                ${filter === "completed" ? (!el.completed ? "hidden" : "") : ""}
                 ${filter === "active" ? (el.completed ? "hidden" : "") : ""}
                border-b ${
                  theme == "light"
                    ? "border-b-Gray-600-dark"
                    : "border-b-Gray-50 "
                } p-3 flex items-center gap-4`}>
              <input
                type="checkbox"
                checked={el.completed}
                onClick={() =>
                  dispatch({ type: "TOGGLE_TODO", payload: el.id })
                }
                className={` appearance-none 
          w-5 h-5 
          rounded-full 
          border-2 border-gray-300 
          checked:bg-blue-500 
          checked:border-blue-500 
          focus:outline-none 
          focus:ring-2 focus:ring-blue-200 
          transition-colors duration-200 

          `}
              />
              <p
                className={` overflow-hidden break-words w-full
                  ${
                    el.completed
                      ? "line-through text-Gray-600-light"
                      : theme === "light"
                      ? "text-Navy-900"
                      : "text-gray-50"
                  }`}>
                {el.content}
              </p>
            </div>
          ))}
        </div>

        {state.todos.length > 0 && (
          <div
            className={` ${
              theme === "light" ? "text-Gray-600-light" : "text-Gray-600-dark"
            } p-4 flex justify-between font-semibold `}>
            <p>{activeItemsCount} items left</p>
            <div className="flex gap-3">
              <button
                className="active:text-Blue-500 cursor-pointer"
                onClick={() => setFilter("all")}>
                All
              </button>
              <button
                className="active:text-Blue-500 cursor-pointer"
                onClick={() => setFilter("active")}>
                Active
              </button>
              <button
                className="active:text-Blue-500  cursor-pointer"
                onClick={() => setFilter("completed")}>
                Completed
              </button>
            </div>
            <button
              className="active:text-Blue-500 cursor-pointer"
              onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}>
              Clear Completed
            </button>
          </div>
        )}
      </section>
    </>
  );
}

export default Body;
