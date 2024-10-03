import { DefaultButtonComponent } from '../types';

export const DefaultButton:DefaultButtonComponent = (props) => {
   const { type, onClick, text, item } = props;
   const typeStyles = {
      default: 'text-primary-black bg-primary-white hover:bg-secondary-color hover:text-primary-white',
      notSelected: 'text-primary-white bg-primary-gray hover:bg-secondary-color',
      active: 'bg-primary-color text-primary-white hover:bg-secondary-color hover:text-primary-white',
      disabled: 'bg-primary-gray text-primary-white cursor-not-allowed',
      danger: 'bg-danger-color text-primary-white hover:bg-secondary-color',
   };

   return (
      <>
         <button
            className={`flex justify-center items-center gap-3 w-full px-4 py-2 rounded-lg shadow-button whitespace-nowrap ${typeStyles[type]}`}
            onClick={type !== 'disabled' ? onClick : null}>
            { item ? <span className='w-[20px]'>{item}</span> : null}
            <span>{text}</span>
         </button>
      </>
   );
};
