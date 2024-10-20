import { useCookie } from '@shared/hooks/useCookie';

export const useChangeTheme = () => {
   const { cookies, setCookieName, removeCookieName } = useCookie('theme');
   const onClickchangeTheme = () => {
      if (cookies.theme === 'dark') {
         console.log('실행');
         removeCookieName('theme');
      } else {
         setCookieName('theme', 'dark', new Date('2100-12-31'));
      }
   };

   return { theme:cookies.theme, onClickchangeTheme };
};
