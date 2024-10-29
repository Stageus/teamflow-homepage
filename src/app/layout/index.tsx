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
   const authPath = [`/${PATHS.login}`, `/${PATHS.signup}`];
   const layoutNone = !authPath.includes(location.pathname.toLocaleLowerCase());
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


   // Aside가 열릴 때 body 스크롤 차단
   useEffect(() => {
      if (isAside) {
         document.body.classList.add('overflow-hidden');
      } else {
         document.body.classList.remove('overflow-hidden');
      }
   }, [isAside]);

   return (
      <div className="flex bg-shade_1">
         {layoutNone && (
            <>
               <aside
                  className={`sticky top-0 h-screen min-w-[360px] translate-x-0 transition-all mobile:fixed ${isAside ? 'mobile:translate-x-0' : 'mobile:-translate-x-full'} mobile:z-50`}>
                  <Aside />
               </aside>
               {isAside ? (
                  <div className="fixed inset-0 z-40 bg-[#00000059]">
                     <div
                        className="absolute w-8 h-8 text-white hover:theme-hover-text right-2 top-2"
                        onClick={isToggleAside}>
                        <BsXLg size={'100%'} />
                     </div>
                  </div>
               ) : null}
            </>
         )}
         <div className="flex min-w-[300px] grow flex-col">
            {layoutNone && (
               <header className="sticky top-0 z-30 flex items-center justify-start bg-transparent">
                  <div
                     className="hidden mx-3 hover:theme-hover-text h-7 w-7 text-gray mobile:block"
                     onClick={isToggleAside}>
                     <BsList size={'100%'} />
                  </div>
                  <Header />
               </header>
            )}
            <main className="grow">
               <Outlet />
            </main>
         </div>
      </div>
   );
};
