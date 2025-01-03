// package
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Cross1Icon } from '@radix-ui/react-icons';
// slice
import { Header } from './header';
import { Aside } from './aside';
// layer
import { cn } from '@/shared/lib/cn';
import { useToggle } from '@/shared/hooks/useToggle';

export const Layout = () => {
   const [isAside, setIsAside] = useToggle();
   const closeAside = useMediaQuery({ query: '(min-width: 768px)' });


   useEffect(() => {
      if (closeAside && isAside) setIsAside();
   }, [closeAside]);

   return (
      <div className="flex h-screen">
         <aside
            className={cn(
               `gradient-modal absolute z-50 w-full transition-transform md:relative md:w-fit md:translate-x-0`,
               { '-translate-x-full': !isAside },
               { '-translate-x-0': isAside },
            )}>
            {isAside && (
               <div className="absolute cursor-pointer right-3 top-3 h-7 w-7" onClick={setIsAside}>
                  <Cross1Icon className="w-full h-full text-white" />
               </div>
            )}
            <div className="h-screen w-[360px]">
               <Aside />
            </div>
         </aside>
         <div className="flex flex-col grow">
            <header className="flex items-center justify-start bg-transparent">
               <Header/>
            </header>
            <main className="relative left-0 z-0 overflow-hidden grow">
               <Outlet />
            </main>
         </div>
      </div>
   );
};
