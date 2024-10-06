import { FullScreenModalProps } from "./types";

export const FullScreenModal = ( props: FullScreenModalProps )=>{
    const { children, title} = props; 

    const typeStyles = {
        show: "translate-x-0 opacity-100 visible",
        hidden: "-translate-x-full opacity-0 invisible",
    };
    
    return(
        <div className={`${children ? typeStyles.show : typeStyles.hidden} flex fixed inset-0 modal-gradient-light dark:modal-gradient-dark transition-transform`}>
            <h1 className="px-5 flex justify-center items-center">{title}</h1>
            <div className="grow flex justify-center items-center">
                {children}
            </div>
        </div>
    );
}