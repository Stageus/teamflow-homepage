import { useState, useEffect } from 'react';

export const useToggleTheme = () => {
   const storageTheme = localStorage.getItem('theme') === 'dark' ? true : false;
   const [isDark, setIsDark] = useState(storageTheme);

   const changeTheme = () => setIsDark(!isDark);
   useEffect(() => {
      const htmlElement = document.documentElement;

      if(isDark){
         htmlElement.classList.add('dark');
      }else{
         htmlElement.classList.remove('dark');
      }
      

      localStorage.setItem('theme', isDark ? 'dark' : '');
   }, [isDark]);

   return { isDark, changeTheme };
};
