import * as React from 'react';

const ModalContext = React.createContext<ModalContextType | null>(null);

const ModalProvider = (props: ModalProviderProps) => {
   const [modalType, setModalType] = React.useState(null);
   const selectModal = (modalType: ModalTypeProps) => setModalType(modalType);
   const resetSelectModal = () => setModalType(null);

   return (
      <ModalContext.Provider value={{ modalType, selectModal, resetSelectModal }}>
         {props.children}
      </ModalContext.Provider>
   );
};

export { ModalContext, ModalProvider };

type ModalTypeProps = 'CREATE' | 'OUTSIDE' | 'CHANGENAME' | 'DELETE' | 'INVAITE' | 'EXPEL';

type ModalContextType = {
   modalType: ModalTypeProps & {};
   selectModal: (modalType: ModalTypeProps) => void;
   resetSelectModal: () => void;
} & {};

type ModalProviderProps = {
   children: React.ReactElement;
};
