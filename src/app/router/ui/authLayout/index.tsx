import { Outlet } from 'react-router-dom';
import { Aside } from "@/widgets/aside";
import { Header } from "@/widgets/header";

export const AuthLayout = () => {

   return (
      <div className="flex h-full">
         <aside
            className={`absolute -translate-x-full z-50 h-full w-[360px] md:relative md:translate-x-0 transition-transform`}>
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
