import { DarkModeProviderProps } from './types';
import { DarkThemeContext } from './context';
import { useToggleTheme } from './useToggleTheme';

export const DarkThemeProvider = ({ children }: DarkModeProviderProps) => {
   const { isDark, changeTheme } = useToggleTheme();

   return (
      <DarkThemeContext.Provider value={{ theme: isDark, changeTheme: changeTheme }}>
         <div className={isDark ? 'dark' : ''}>{children}</div>
      </DarkThemeContext.Provider>
   );
};
