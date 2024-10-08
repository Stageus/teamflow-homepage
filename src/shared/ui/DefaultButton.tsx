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

   const sizeStyle = {
      xs: 'px-2 py-1 text-size-xs',
      sm: 'px-2 py-1 text-size-sm',
      default: 'px-4 py-2 text-size-body',
   };

   return (
      <>
         <button
            className={`flex justify-center items-center gap-3 w-full ${type ? typeStyles[type] : typeStyles.default} rounded-lg shadow-button whitespace-nowrap`}
            onClick={type !== 'disabled' ? onClick : null}>
            {item ? <span className="w-[20px]">{item}</span> : null}
            <span className={`${size ? sizeStyle[size] : sizeStyle.default}`}>{text}</span>
         </button>
      </>
   );
};
