import { createContext, useContext } from 'react';

const ThemeContext = createContext({ isCreative: true, toggleMode: () => {} });

export function ThemeProvider({ children }) {
  return <ThemeContext.Provider value={{ isCreative: true, toggleMode: () => {} }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
