import { useLocation, Outlet } from 'react-router-dom';
import './global.css';
import { Header } from './header';
import { Aside } from './aside';
import { PATHS } from '@shared/consts/paths';
import { UrlTrackingProvider } from '@shared/store/urlTracking';

export const Layout = () => {
   const location = useLocation();
   const authPath = [`/${PATHS.login}`, `/${PATHS.signup}`];
   const layoutNone = !authPath.includes(location.pathname.toLocaleLowerCase());

   return (
      <UrlTrackingProvider>
         <div className="bg-shade_1 flex">
            {layoutNone && (
               <aside className="sticky top-0 h-screen w-full min-w-[250px] max-w-[400px]">
                  <Aside />
               </aside>
            )}
            <div className="flex grow flex-col min-w-[500px]">
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
