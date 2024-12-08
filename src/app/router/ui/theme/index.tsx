import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useCookie } from '@/shared/hooks/useCookie';

export const Theme = () => {
    const { cookies} = useCookie('theme')

  useEffect(() => {
    if (cookies.theme === 'dark') {
       document.documentElement.classList.add('dark');
    } else {
       document.documentElement.classList.remove('dark');
    }
 }, [cookies]);

 return <Outlet/>

}