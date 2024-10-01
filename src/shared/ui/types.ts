type DefaultButtonType = 'active' | 'disabled' | 'danger' | "default";

export interface DefaultButtonProps {
   type?: DefaultButtonType;
   text: string;
   onClick: () => void;
}