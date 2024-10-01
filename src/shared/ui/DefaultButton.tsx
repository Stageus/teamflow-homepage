import { DefaultButtonProps } from "./types";

export const DefaultButton = (props: DefaultButtonProps) => {
   const { type, onClick, text } = props;
   const styles = {
    active: "bg-primary-color text-primary-white",
    disabled: "bg-primary-gray text-primary-white cursor-not-allowed",
    danger: "bg-danger-color text-primary-white"
   };

   return (
      <>
         <button 
         className={`${type ? styles[type] : "text-primary-black bg-primary-white"} w-full px-4 py-2 rounded-lg shadow whitespace-nowrap hover:bg-secondary-color hover:text-primary-white`}
         onClick={ type !== "disabled" ? onClick : null}
         >{text}</button>
      </>
   );
};
