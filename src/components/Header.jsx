import { useState } from "react";
import { useTheme } from "../context/ThemeProvider";
import { useTodo } from "../context/TodoProvider";

function Header() {
  const { theme, setTheme } = useTheme();
  const [input, setInput] = useState("");
  const [checked, setChecked] = useState(false);
  const { state, dispatch } = useTodo();
  function handleAddNote(e) {
    e.preventDefault();
    if (!input.trim()) return;
    dispatch({
      type: "ADD_NOTE",
      payload: { content: input, completed: checked },
    });
    console.log(state);
    setInput("");
    setChecked(false);
  }
  const fixed = "bg-no-repeat font-josefin  bg-cover p-18 ";
  return (
    <header
      className={
        theme == "light"
          ? `${fixed} text-Purple bg-[url(images/bg-desktop-light.jpg)] `
          : `${fixed} bg-[url(images/bg-desktop-dark.jpg)] `
      }>
      <div className="flex items-center justify-between w-2/6 mx-auto">
        <span className="tracking-[7px] text-3xl font-semibold text-Gray-50">
          TODO
        </span>
        <img
          src={
            theme == "light" ? "images/icon-moon.svg" : "images/icon-sun.svg"
          }
          className="cursor-pointer"
          onClick={() => setTheme(() => (theme == "light" ? "dark" : "light"))}
        />
      </div>
      <form onSubmit={(e) => handleAddNote(e)}>
        <div
          className={` w-2/6 mx-auto my-10 p-4 rounded-md flex items-center gap-4 ${
            theme === "light" ? " bg-Gray-50" : "bg-Navy-900"
          } `}>
          <input
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
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
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={` w-full outline-none           ${
              theme === "light"
                ? "placeholder:text-Navy-850 text-Navy-850 "
                : "placeholder:text-Gray-50 text-Gray-50"
            } `}
            placeholder="Create a new todo..."
          />
        </div>
      </form>
    </header>
  );
}

export default Header;
