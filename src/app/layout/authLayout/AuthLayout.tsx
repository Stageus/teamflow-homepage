import { Outlet } from 'react-router-dom';
import { Aside } from "@widgets/aside";
import { Header } from "@widgets/header";

export const AuthLayout = () => {

   return (
      <div className="flex h-full">
         <aside
            className={`z-50 h-full w-[360px] transition-all mobile:fixed mobile:-translate-x-full`}>
                <Aside/>
            </aside>
         <div className="flex flex-col grow">
            <header className="flex items-center justify-start bg-transparent">
                <Header/>
            </header>
            <main className="relative z-0 overflow-scroll grow">
               <Outlet />
            </main>
         </div>
      </div>
   );
};
