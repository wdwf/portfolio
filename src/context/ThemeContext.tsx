import { createContext, useState, ReactNode, FC, useEffect } from 'react';

interface ThemeContextI {
  currentTheme: string;
  changeCurrentTheme: (newTheme: 'light' | 'dark') => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const defaultContext: ThemeContextI = {
  currentTheme: 'dark',
  changeCurrentTheme: () => {},
};

const ThemeContext = createContext(defaultContext);

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(localStorage.getItem('@LOOPW:theme') || 'dark');

  const changeCurrentTheme = (newTheme: 'light' | 'dark') => {
    setCurrentTheme(newTheme);
    localStorage.setItem('@LOOPW:theme', newTheme);
  };

  useEffect(() => {
    if (currentTheme === 'light') {
      document.body.classList.remove('dark');
    } else {
      document.body.classList.add('dark');
    }
  }, [currentTheme]);

  return <ThemeContext.Provider value={{ currentTheme, changeCurrentTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;
