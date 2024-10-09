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
         <div className="layout-container">
            {layoutNone && (
               <aside className="aside-container">
                  <Aside />
               </aside>
            )}
            <div className="divide-container">
               {layoutNone && (
                  <header className="header-container">
                     <Header />
                  </header>
               )}
               <main className="main-container">
                  <Outlet />
               </main>
            </div>
         </div>
      </UrlTrackingProvider>
   );
};
