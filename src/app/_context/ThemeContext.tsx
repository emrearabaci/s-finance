'use client';

/* Types */
type Theme = 'dark' | 'light';

interface ThemeContextProps {
  theme: Theme;
  switchTheme: () => void;
}

/* React API */
import { createContext, useContext, useState, useLayoutEffect } from 'react';

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light');

  const switchTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useLayoutEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    if (!document.documentElement.classList.length) {
      document.documentElement.removeAttribute('class');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('"useTheme" must be used within a "ThemeProvider".');
  }
  return context;
};
