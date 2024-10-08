import { useState } from 'react';

export const useMoreProfile = () => {
   const [moreProfile, setMoreProfile] = useState<boolean>(false);
   const onClickOpenMoreProfile = () => setMoreProfile(!moreProfile);

   return { moreProfile, onClickOpenMoreProfile };
};
