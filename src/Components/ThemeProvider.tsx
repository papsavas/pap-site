import { FC, PropsWithChildren } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import useLocalStorage from "../Hooks/useLocalStorage";
import { Theme } from "../types/theme";
const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useLocalStorage<Theme>("theme", "light");
  const toggleTheme = () =>
    theme === "light" ? setTheme("dark") : setTheme("light");
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
