import { ReactNode } from 'react';

// DefaultButton
type DefaultButtonType = 'default' | 'active' | 'disabled' | 'danger' | 'notSelected';
export type DefaultButtonProps = {
   type?: DefaultButtonType;
   text: string;
   item?: ReactNode;
   onClick: () => void;
};

// FullScreenModal
export type FullScreenModalProps = {
   children: ReactNode;
   title: string;
   close: () => void;
}



