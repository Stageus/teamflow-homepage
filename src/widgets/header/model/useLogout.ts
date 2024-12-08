// package
import { useState } from 'react';
// layer
import { useCookie } from '@/shared/hooks/useCookie';
import { useRoute } from '@/shared/hooks/useRoute';

export const useLogout = () => {
   const [isLogoutModal, setIsLogoutModal] = useState(false);
   const { removeCookieName } = useCookie('token');
   const { loginRoute } = useRoute();

   const toggleLogoutModal = () => {
      setIsLogoutModal(!isLogoutModal);
   };

   const handelrLogout = () => {
      removeCookieName('token');
      loginRoute();
   };

   return { isLogoutModal, toggleLogoutModal, handelrLogout };
};
