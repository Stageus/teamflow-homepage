import { useState } from 'react';
export const useChangeName = () => {
   const [isChangeName, setIsChangeName] = useState<boolean>(false);
   const changeTag = () => setIsChangeName(!isChangeName);

   return { isChangeName, changeTag };
};
