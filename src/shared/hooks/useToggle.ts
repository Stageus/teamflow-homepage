import { useState } from 'react';

export const useToggle = (initState: null | boolean) => {
   const [toggle, setToggle] = useState(initState);

   const changeToggleState = () => setToggle(!toggle);

   return [toggle, changeToggleState] as const;
};
