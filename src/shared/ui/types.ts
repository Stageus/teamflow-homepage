type DefaultButtonType = 'active' | 'disabled' | 'danger' | "notSelected";

export interface DefaultButtonProps {
   type?: DefaultButtonType;
   text: string;
   onClick: () => void;
}