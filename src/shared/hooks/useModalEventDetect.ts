import { useState, useRef, useEffect, useCallback } from "react";

export const useModalEventDetect = () => {

    const [isModalDetect, setIsModalDetect] = useState<boolean>(false);
    const modalRef = useRef<null | HTMLDivElement>(null);

    const onClickOpenModal = () => {
        setIsModalDetect(!isModalDetect);
    }
    const hanlderOutSideDetect = useCallback((event: MouseEvent) => {
        if ( isModalDetect && modalRef.current && !modalRef.current.contains(event.target as Node)){
            setIsModalDetect(false);
        }
    },[isModalDetect])

    useEffect(()=>{
        document.addEventListener('mousedown',hanlderOutSideDetect);

        return () => {
            document.removeEventListener('mousedown',hanlderOutSideDetect)
        }
    },[hanlderOutSideDetect])


    return { modalRef, isModalDetect, onClickOpenModal };
}