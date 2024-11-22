import { useState } from 'react';

export const useCreateChannel = () => {
   const [createChannelModal, setCreateChannelModal] = useState(false);
   const toogleCreateChannelModal = () => setCreateChannelModal(!createChannelModal);

   return { createChannelModal, toogleCreateChannelModal };
};
