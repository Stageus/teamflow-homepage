import { useEffect } from 'react';
import { RouterProvider } from "react-router-dom";
import './global.css';
import { Router } from "./Router";
import { useCookie } from '@shared/hooks/useCookie';

function App() {
  const { cookies } = useCookie('theme');

  useEffect(() => {
    if (cookies.theme === 'dark') {
       document.documentElement.classList.add('dark');
    } else {
       document.documentElement.classList.remove('dark');
    }
 }, [cookies]);
 
  return (
    <>
      <RouterProvider router={Router}/>
    </>
  )
}

export default App
