import { ReactNode } from "react";

type PlaceProps = 'top' | 'left' | 'right' | "bottom";

export type TooTipProps = {
    toolTipContent: string,
    children: ReactNode,
    place?: PlaceProps,
}

export type FullScreenModalProps = {
    title: string,
    children: ReactNode,
    isModal: boolean,
    closeModal: () => void,
}