import { useState, useRef } from 'react';

export const useCreateChannel = () => {
   const [createChannelModal, setCreateChannelModal] = useState(false);
   const onClickIsModal = () => setCreateChannelModal(!createChannelModal);
   const inputRef = useRef(null);

   return { createChannelModal, onClickIsModal, inputRef };
};
