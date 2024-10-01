import { DefaultButtonProps } from './types';

export const DefaultButton = (props: DefaultButtonProps) => {
   const { type, onClick, text } = props;
   const styles = {
      default: 'text-primary-black bg-primary-white hover:bg-secondary-color hover:text-primary-white',
      notSelected: "text-primary-white bg-primary-gray hover:bg-secondary-color hover:text-primary-white",
      active: 'bg-primary-color text-primary-white hover:bg-secondary-color hover:text-primary-white',
      disabled: 'bg-primary-gray text-primary-white cursor-not-allowed',
      danger: 'bg-danger-color text-primary-white',
   };

   return (
      <>
         <button
            className={`${
               type ? styles[type] : styles.default
            } w-full px-4 py-2 rounded-lg shadow whitespace-nowrap`}
            onClick={type !== 'disabled' ? onClick : null}>
            {text}
         </button>
      </>
   );
};
