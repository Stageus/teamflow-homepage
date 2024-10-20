import { useState } from 'react';
export const useOutsideChannel = () => {
   const [outSideChannelModal, setOutSideChannelModal] = useState(false);
   const onClickIsOutside = () => setOutSideChannelModal(!outSideChannelModal);

   return { outSideChannelModal, onClickIsOutside};
};
