import { useValidation } from "../model/useValidation";
import { TextInputProps } from "../types";

export const TextInput = (props: TextInputProps) => {
   const { inputRef, placeholder, nextName, nextCallback, cancellName, cancellCallback, regexText } = props;
   const { isValid, handlerValidation } = useValidation(props);
   return (
      <div className="flex flex-col items-center w-full gap-4">
         <div className="flex flex-col w-full gap-2">
            <input
               className={`border-b-2 bg-transparent text-sm text-black outline-none dark:text-white
                    ${isValid !== null ? (isValid ? 'border-success' : 'border-error') : 'border-gray'}`}
               placeholder={placeholder}
               type="text"
               ref={inputRef}
               onChange={handlerValidation}
            />
            <span className={`${isValid ? 'text-success' : 'text-error'} text-xs`}>
                     {isValid !== null &&
                        (isValid ? '사용가능합니다' : regexText)}
                  </span>
         </div>
         <div className="flex justify-center gap-5">
                  <button
                     className={`button-layout ${isValid ? '_active' : '_disabled'}`}
                     onClick={isValid ? nextCallback : null}>
                     {nextName}
                  </button>
                  <button className="button-layout _default" onClick={cancellCallback}>
                     {cancellName}
                  </button>
               </div>
      </div>
   );
};
