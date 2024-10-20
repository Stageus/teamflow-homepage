import ReactDOM from 'react-dom';
import { BsXLg } from 'react-icons/bs';
import { FullScreenModalProps } from "./types";

export const FullScreenModal = (props: FullScreenModalProps) => {
   const { title, children, isModal, closeModal} = props;
   
   const modalStyles = {
      show: 'visible translate-x-0 opacity-100',
      hide: 'invisible -translate-x-full opacity-0',
   };

   return ReactDOM.createPortal(
      <div
         className={`modal-gradient fixed inset-0 flex transition-transform ${isModal ? modalStyles.show : modalStyles.hide}`}>
         <h1 className="absolute text-primary flex justify-center p-5 text-[30px] italic">{title}</h1>
         <div
            onClick={closeModal}
            className="hover:text-secondary absolute right-5 top-5 flex h-6 w-6 cursor-pointer items-center justify-end text-white">
            <BsXLg size={'100%'} />
         </div>
         <div className="flex grow items-center justify-center">
         {isModal ? children : null}
         </div>
      </div>,
      document.body,
   );
};
