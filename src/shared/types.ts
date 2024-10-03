import { ReactNode } from 'react';

type DefaultButtonType = 'default' | 'active' | 'disabled' | 'danger' | 'notSelected';
type DefaultButtonProps = {
   type?: DefaultButtonType;
   text: string;
   item?: ReactNode;
   onClick: () => void;
};
export type DefaultButtonComponent = (props: DefaultButtonProps) => JSX.Element;


