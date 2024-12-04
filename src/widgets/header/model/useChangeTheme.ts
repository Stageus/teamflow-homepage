import { useCookie } from '@/shared/hooks/useCookie';

export const useChangeTheme = () => {
   const { cookies, setCookieName, removeCookieName } = useCookie('theme');

   const toggleTheme = () => {
      if (cookies.theme === 'dark') {
         removeCookieName('theme');
      } else {
         setCookieName('theme', 'dark', new Date('2100-12-31'));
      }
   };

   return { theme:cookies.theme, toggleTheme };
};
