import { Outlet } from 'react-router-dom';
import { Aside } from '@/widgets/aside';
import { Header } from '@/widgets/header';

export const AuthLayout = () => {
   return (
      <div className="flex h-full">
         <aside
            className={`md:relative md:translate-x-0 w-full absolute z-50 h-full -translate-x-full transition-transform md:w-fit`}>
            <div className='w-[360px]'>
               <Aside />
            </div>
         </aside>
         <div className="flex flex-col grow">
            <header className="flex items-center justify-start bg-transparent">
               <Header />
            </header>
            <main className="relative z-0 overflow-scroll grow">
               <Outlet />
            </main>
         </div>
      </div>
   );
};
