import { useState, useRef, useEffect, useCallback } from "react";

export const useAlarm = () => {

    const [isAlarmModal, setIsAlarmModal] = useState<boolean>(false);
    const alarmRef = useRef<null | HTMLDivElement>(null);

    const toggleAlarmModal = () => {
        setIsAlarmModal(!isAlarmModal);
    }
    const hanlderOutSideDetect = useCallback((event: MouseEvent) => {
        if ( isAlarmModal && alarmRef.current && !alarmRef.current.contains(event.target as Node)){
            setIsAlarmModal(false);
        }
    },[isAlarmModal])

    useEffect(()=>{
        document.addEventListener('mousedown',hanlderOutSideDetect);

        return () => {
            document.removeEventListener('mousedown',hanlderOutSideDetect)
        }
    },[hanlderOutSideDetect])


    return { alarmRef, isAlarmModal, toggleAlarmModal };
}