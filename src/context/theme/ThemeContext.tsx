import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { ThemeContextValue, ThemeMode } from "./types";

const ThemeContext = createContext<ThemeContextValue>({
  theme: "light",
  setTheme: () => {},
});

export const ThemeProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [theme, setThemeState] = useState<ThemeMode>("light");
  const [manualTheme, setManualTheme] = useState<
    ThemeMode | undefined
  >(undefined);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    const handleChange = () => {
      if (!manualTheme) {
        setThemeState(mediaQuery.matches ? "dark" : "light");
      }
    };

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () =>
      mediaQuery.removeEventListener("change", handleChange);
  }, [manualTheme]);

  const setTheme = (mode: ThemeMode | undefined) => {
    setManualTheme(mode);
    if (mode) {
      setThemeState(mode);
    } else {
      const mediaQuery = window.matchMedia(
        "(prefers-color-scheme: dark)"
      );
      setThemeState(mediaQuery.matches ? "dark" : "light");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
