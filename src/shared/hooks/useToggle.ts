import { useState } from 'react';

export const useToggle = (initState: null | boolean) => {
   const [toggle, setToggle] = useState(initState);

   const changeToggle = () => setToggle(!toggle);

   return [toggle, changeToggle] as const;
};
