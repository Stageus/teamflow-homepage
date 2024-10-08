import { useState } from 'react';

export const useMoreProfile = () => {
   const [isMoreProfile, setIsMoreProfile] = useState<boolean>(false);
   const onClickOpenMoreProfile = () => setIsMoreProfile(!isMoreProfile);

   return { isMoreProfile, onClickOpenMoreProfile };
};
