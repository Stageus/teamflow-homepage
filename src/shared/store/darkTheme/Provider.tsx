import { ProviderProps } from "../types";
import { DarkThemeContext } from './context';
import { useToggleTheme } from './useToggleTheme';

export const DarkThemeProvider = ( props : ProviderProps) => {
   const { children } = props;
   const { isDark, changeTheme } = useToggleTheme();

   return (
      <DarkThemeContext.Provider value={{theme:isDark, changeTheme}}>
         {children}
      </DarkThemeContext.Provider>
   );
};
