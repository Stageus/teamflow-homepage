import { useState, useEffect } from 'react';

export const useToggleTheme = () => {
   const storageTheme = localStorage.getItem('theme') === 'dark' ? true : false;
   const [isDark, setIsDark] = useState(storageTheme);

   const changeTheme = () => setIsDark(!isDark);
   console.log(isDark)
   useEffect(() => {
      localStorage.setItem('theme', isDark ? 'dark' : '');
   }, [isDark]);

   return { isDark, changeTheme };
};
