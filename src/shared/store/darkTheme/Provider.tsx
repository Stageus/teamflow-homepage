import { DarkModeProviderProps } from './types';
import { DarkThemeContext } from './context';
import { useToggleTheme } from './useToggleTheme';

export const DarkThemeProvider = ({ children }: DarkModeProviderProps) => {
   const { isDark, setIsDark } = useToggleTheme();

   return (
      <DarkThemeContext.Provider value={{ theme: isDark, setTheme: setIsDark }}>
         <div className={isDark ? 'dark' : ''}>{children}</div>
      </DarkThemeContext.Provider>
   );
};
