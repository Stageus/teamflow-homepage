import { ReactNode } from "react";

export type FullScreenModalProps = {
    title: string,
    children: ReactNode,
    isModal: boolean,
    closeModal: () => void,
}