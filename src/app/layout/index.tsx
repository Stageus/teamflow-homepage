import { useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { Header } from './ui/header';
import { Aside } from './ui/aside';
import { PATHS } from '@shared/consts/paths';
import { UrlTrackingProvider } from '@shared/store/urlTracking';
import { useCookie } from '@shared/hooks/useCookie';

export const Layout = () => {
   const location = useLocation();
   const authPath = [`/${PATHS.login}`, `/${PATHS.signup}`];
   const layoutNone = !authPath.includes(location.pathname.toLocaleLowerCase());

   const { cookies } = useCookie('theme');
   useEffect(() => {
      if (cookies.theme === 'dark') {
         document.documentElement.classList.add('dark');
      } else {
         document.documentElement.classList.remove('dark');
      }
   }, [cookies]);

   return (
      <UrlTrackingProvider>
         <div className="bg-shade_1 flex">
            {layoutNone && (
               <aside className="sticky top-0 h-screen w-full min-w-[300px] max-w-[400px]">
                  <Aside />
               </aside>
            )}
            <div className="flex min-w-[300px] grow flex-col">
               {layoutNone && (
                  <header className="sticky top-0 bg-transparent">
                     <Header />
                  </header>
               )}
               <main className="grow">
                  <Outlet />
               </main>
            </div>
         </div>
      </UrlTrackingProvider>
   );
};
