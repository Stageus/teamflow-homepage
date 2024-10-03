import { ReactNode } from 'react';

// DefaultButton
type DefaultButtonType = 'default' | 'active' | 'disabled' | 'danger' | 'notSelected';
type DefaultButtonProps = {
   type?: DefaultButtonType;
   text: string;
   item?: ReactNode;
   onClick: () => void;
};
export type DefaultButtonComponent = (props: DefaultButtonProps) => JSX.Element;


// TextInput
type Props = {
   title: string,
   errorText: string,
   regex: RegExp,
   placeholder: string,
   nextName: string,
   nextCallback: () => void,
   cancellName: string,
   cancellCallback: () => void,
}
export type TextInputComponent = ( props: Props ) => JSX.Element;


