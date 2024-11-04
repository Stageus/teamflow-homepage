import { useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { BsList, BsXLg } from 'react-icons/bs';
import { Header } from './ui/header';
import { Aside } from './ui/aside';
import { useResponsiveMobile } from './model/useResponsiveMobile';
import { PATHS } from '@shared/consts/paths';
import { useCookie } from '@shared/hooks/useCookie';

export const Layout = () => {
   const location = useLocation();
   const authPath = [`/${PATHS.login}`, `/${PATHS.signup}`].includes(location.pathname.toLocaleLowerCase());
   const { isAside, isToggleAside } = useResponsiveMobile();
   const { cookies } = useCookie('theme');

   // 로직의 분리가 필요한가? 반환하는것이 없기때문에 오히려 가독성이 떨어지지 않을까?
   useEffect(() => {
      if (cookies.theme === 'dark') {
         document.documentElement.classList.add('dark');
      } else {
         document.documentElement.classList.remove('dark');
      }
   }, [cookies]);

   return (
      <div className="flex h-full">
         {/* login, signup 일경우 header, aside 숨김 */}
         {authPath ? (
            <main className="grow">
               <Outlet />
            </main>
         ) : (
            <>
               <aside className={`h-full w-[360px] shrink-0 translate-x-0 transition-all mobile:fixed mobile:z-50 ${isAside ? 'mobile:translate-x-0' : 'mobile:-translate-x-full'}`}>
                  <Aside />
               </aside>
               {isAside ? (
                  <div className="fixed inset-0 bg-[#00000059] z-40">
                     <div
                        className="absolute w-8 h-8 text-white hover:theme-hover-text right-2 top-2"
                        onClick={isToggleAside}>
                        <BsXLg size={'100%'} />
                     </div>
                  </div>
               ) : null}
               <div className="overflow-scroll flexflex-col grow">
                  <header className="sticky top-0 flex items-center justify-start bg-transparent">
                     <div
                        className="hidden mx-3 hover:theme-hover-text h-7 w-7 text-gray mobile:block"
                        onClick={isToggleAside}>
                        <BsList size={'100%'} />
                     </div>
                     <Header />
                  </header>
                  <main className="grow">
                     <Outlet />
                  </main>
               </div>
            </>
         )}
      </div>
   );
};
