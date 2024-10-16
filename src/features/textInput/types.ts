import { RefObject } from 'react';
// TextInput
export type TextInputProps = {
    inputRef: RefObject<HTMLInputElement | null>,
    placeholder: string,
    nextName: string,
    nextCallback: () => void,
    cancellName: string,
    cancellCallback: () => void,
    regex: RegExp,
    regexText: string,
 }