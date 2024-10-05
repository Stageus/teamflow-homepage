import { DarkModeProviderProps } from './types';
import { DarkThemeContext } from './context';
import { useToggleTheme } from './useToggleTheme';

export const DarkThemeProvider = ( props : DarkModeProviderProps) => {
   const { children } = props;
   const { isDark, changeTheme } = useToggleTheme();

   return (
      <DarkThemeContext.Provider value={{changeTheme}}>
         <div className={isDark ? 'dark' : ''}>{children}</div>
      </DarkThemeContext.Provider>
   );
};
