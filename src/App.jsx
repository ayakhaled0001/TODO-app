import Body from "./components/Body";
import Header from "./components/Header";
import { ThemeProvider } from "./context/ThemeProvider";
import { TodoProvider } from "./context/TodoProvider";

function App() {
  return (
    <ThemeProvider>
      <TodoProvider>
        <Header />
        <Body />
      </TodoProvider>
    </ThemeProvider>
  );
}

export default App;
