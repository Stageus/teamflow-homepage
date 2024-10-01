type DefaultButtonType = 'active' | 'disabled' | 'danger';


export interface DefaultButtonProps {
   type?: DefaultButtonType;
   text: string;
   onClick: () => void;
}