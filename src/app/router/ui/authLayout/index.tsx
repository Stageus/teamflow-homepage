// package
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Cross1Icon } from '@radix-ui/react-icons';
import { useMediaQuery } from 'react-responsive';
// layer
import { Aside } from '@/widgets/aside';
import { Header } from '@/widgets/header';
import { cn } from '@/shared/lib/cn';
import { useToggle } from '@/shared/hooks/useToggle';

export const AuthLayout = () => {
   const [isAside, setIsAside] = useToggle();
   const closeAside = useMediaQuery({query: '(min-width: 768px)'})

   useEffect(()=>{
      if(closeAside && isAside) setIsAside();
   },[closeAside])

   return (
      <div className="flex h-screen">
         <aside
            className={cn(
               `md:relative md:translate-x-0 md:w-fit gradient-modal absolute z-50 w-full transition-transform`,
               { '-translate-x-full': !isAside },
               { '-translate-x-0': isAside },
            )}>
            { isAside && <div className='absolute cursor-pointer right-3 top-3 w-7 h-7' onClick={setIsAside}><Cross1Icon className='w-full h-full text-white'/></div>}
            <div className="h-screen w-[360px]">
               <Aside />
            </div>
         </aside>
         <div className="flex flex-col grow">
            <header className="flex items-center justify-start bg-transparent">
               <Header toggleTestAside={setIsAside}/>
            </header>
            <main className="relative left-0 z-0 overflow-scroll grow">
               <Outlet />
            </main>
         </div>
      </div>
   );
};
