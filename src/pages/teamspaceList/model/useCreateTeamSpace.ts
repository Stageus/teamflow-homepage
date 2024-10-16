import { useRef, useState } from 'react';

export const useCreateTeamSpace = () => {
   const [createTeamSpaceModal, setCreateTeamSpaceModal] = useState(false);
   const onClickIsModal = () => setCreateTeamSpaceModal(!createTeamSpaceModal);
   const inputRef = useRef(null);

   return { createTeamSpaceModal, onClickIsModal, inputRef };
};
