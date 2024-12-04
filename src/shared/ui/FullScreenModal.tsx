import ReactDOM from 'react-dom';
// import { BsXLg } from 'react-icons/bs';
import { FullScreenModalProps } from "./types";

export const FullScreenModal = (props: FullScreenModalProps) => {
   const { title, children, closeModal} = props;
   
   const modalStyles = {
      show: 'visible translate-x-0 opacity-100',
      hide: 'invisible -translate-x-full opacity-0',
   };

   return ReactDOM.createPortal(
      <div
         className={`modal-gradient fixed inset-0 flex transition-transform ${children ? modalStyles.show : modalStyles.hide} z-50`}>
         <h1 className="absolute text-white flex justify-center p-5 text-[30px] italic">{title}</h1>
         <div
            onClick={closeModal}
            className="absolute flex items-center justify-end w-6 h-6 text-white cursor-pointer hover:text-secondary right-5 top-5">
            {/* <BsXLg size={'100%'} /> */}
         </div>
         <div className="flex items-center justify-center grow">
         {children ?? null}
         </div>
      </div>,
      document.body,
   );
};
