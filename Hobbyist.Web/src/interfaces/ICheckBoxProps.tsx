export interface ICheckboxProps {
    name: string;
    label?: string;
    checked: boolean;
    onCheck: (name: string, checked: boolean) => void;
    error?: string;
    style?: React.CSSProperties;
}