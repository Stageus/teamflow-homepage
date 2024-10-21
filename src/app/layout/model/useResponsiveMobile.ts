import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

export const useResponsiveMobile = () => {
   const [isAside, setIsAside] = useState(false);
   const isMobile = useMediaQuery({ query: `(max-width:767px)` });
   const isToggleAside = () => setIsAside(!isAside);

   useEffect(() => {
      if (!isMobile) {
         setIsAside(false);
      }
   }, [isMobile]);

   return { isAside, isToggleAside };
};
