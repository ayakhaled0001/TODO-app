import { useTheme } from "../context/ThemeProvider";

function Header() {
  const { theme, setTheme } = useTheme();
  const fixed = "bg-no-repeat bg-cover p-18 ";
  return (
    <header
      className={
        theme == "light"
          ? `${fixed} text-Purple bg-[url(images/bg-desktop-light.jpg)] `
          : `${fixed} bg-[url(images/bg-desktop-dark.jpg)] `
      }>
      <div className="flex justify-between w-2/6 mx-auto">
        <span className="tracking-[7px] text-Gray-50">TODO</span>
        <img
          src={
            theme == "light" ? "images/icon-moon.svg" : "images/icon-sun.svg"
          }
          className="cursor-pointer"
          onClick={() => setTheme(() => (theme == "light" ? "dark" : "light"))}
        />
      </div>
    </header>
  );
}

export default Header;
