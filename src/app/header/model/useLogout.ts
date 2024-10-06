import { useState } from 'react';

export const useLogout = () => {
   const [isLogout, setIsLogout] = useState(false);
   const onClickOpenLogoutModal = () => setIsLogout(!isLogout);

   return { isLogout, onClickOpenLogoutModal};
};
