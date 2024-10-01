import { useLocation, Outlet } from 'react-router-dom';
import './global.css';
import { Header } from './header';
import { PATHS } from '@shared/consts/paths';


export const Layout = () => {
   const location = useLocation();
   const authPath = [`/${PATHS.login}`, `/${PATHS.signup}`];
   const layoutNone = !authPath.includes(location.pathname.toLocaleLowerCase());

   return (
      <div className="flex h-screen bg-primary-white dark:bg-primary-black">
         {layoutNone && <aside className="h-full min-w-aside"></aside>}
         <div className="flex flex-col grow">
            {layoutNone && <header className="w-full min-h-header"><Header/></header>}
            <main className="grow">
               <Outlet />
            </main>
         </div>
      </div>
   );
};
