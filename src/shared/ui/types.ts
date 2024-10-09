import { ReactNode } from 'react';

// DefaultButton
type DefaultButtonType = 'default' | 'active' | 'disabled' | 'danger' | 'notSelected';
type DefaultButtonSize = 'xs' | 'sm' | 'default';
export type DefaultButtonProps = {
   size?:DefaultButtonSize;
   type?: DefaultButtonType;
   text: string;
   item?: ReactNode;
   onClick: () => void;
};




