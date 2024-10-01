import { DefaultButtonProps } from './types';

export const DefaultButton = (props: DefaultButtonProps) => {
   const { type, onClick, text } = props;
   const typeStyles = {
      default: 'text-primary-black bg-primary-white hover:bg-secondary-color hover:text-primary-white',
      notSelected: "text-primary-white bg-primary-gray hover:bg-secondary-color",
      active: 'bg-primary-color text-primary-white hover:bg-secondary-color hover:text-primary-white',
      disabled: 'bg-primary-gray text-primary-white cursor-not-allowed',
      danger: 'bg-danger-color text-primary-white hover:bg-secondary-color',
   };

   return (
      <>
         <button
            className={`w-full px-4 py-2 rounded-lg shadow-button whitespace-nowrap ${typeStyles[type]}`}
            onClick={type !== 'disabled' ? onClick : null}>
            {text}
         </button>
      </>
   );
};
