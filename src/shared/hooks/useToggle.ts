import { useState } from 'react';

export const useToggle = (initState = false) => {
   const [toggle, setToggle] = useState(initState);

   const changeToggleState = () => setToggle(!toggle);

   return [toggle, changeToggleState] as const;
};
