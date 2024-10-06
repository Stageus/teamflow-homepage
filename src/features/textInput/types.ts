// TextInput
type TextInputProps = {
    title: string,
    errorText: string,
    regex: RegExp,
    placeholder: string,
    nextName: string,
    nextCallback: () => void,
    cancellName: string,
    cancellCallback: () => void,
 }
 export type TextInputComponent = ( props: TextInputProps ) => JSX.Element;