import { ReactNode } from "react";

type DefaultButtonType = 'default' | 'active' | 'disabled' | 'danger' | 'notSelected';

export interface DefaultButtonProps {
   type?: DefaultButtonType;
   text: string;
   item?: ReactNode; 
   onClick: () => void;
}
