import { useValidation } from "../model/useValidation";
import { TextInputComponent } from "../types";
import { DefaultButton } from '@shared/ui';

export const TextInput: TextInputComponent = props => {
   const { title, regex, errorText, placeholder, nextName, nextCallback, cancellName, cancellCallback } = props;
   const { inputRef, checkInput, nameValidation } = useValidation(regex);
   
   return (
      <div className="w-full flex flex-col items-center gap-4">
         {title && <h2>{title}</h2>}
         <div className="w-full flex flex-col gap-2">
            <input
               className={`bg-transparent border-b-2 text-size-body outline-none text-primary-black dark:text-primary-white
                    ${checkInput !== null && (checkInput ? 'border-success-color' : 'border-danger-color')}`}
               placeholder={placeholder}
               type="text"
               ref={inputRef}
               onChange={nameValidation}
            />
            <span className={`${checkInput ? 'text-success-color' : 'text-danger-color'} h-4`}>
               {checkInput !== null && (checkInput ? '사용가능합니다' : errorText)}
            </span>
         </div>
         <div className="flex gap-5 justify-center">
            <DefaultButton type={checkInput ? 'active' : 'disabled'} onClick={nextCallback} text={nextName} />
            <DefaultButton type="default" onClick={cancellCallback} text={cancellName} />
         </div>
      </div>
   );
};
