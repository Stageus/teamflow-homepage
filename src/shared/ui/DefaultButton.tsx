import { DefaultButtonProps } from './types';

export const DefaultButton = (props: DefaultButtonProps) => {
   const { size, type, onClick, text, item } = props;
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
            className={`default-button ${type ? typeStyles[type] : typeStyles.default}`}
            onClick={type !== 'disabled' ? onClick : null}>
            {item ? <span className="w-5">{item}</span> : null}
            {text}
         </button>
      </>
   );
};
