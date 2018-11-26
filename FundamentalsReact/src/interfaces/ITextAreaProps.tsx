export interface ITextAreaProps {
    name: string;
    label?: string;
    placeholder?: string;
    id?: string;
    value: string;
    onChange: (fieldName: string, value: any) => void;
    error?: string;
    required?: boolean;
    onBlur?: (fieldName: string, value: string) => void;
    rows?: number;
    className?: string;
    style?: React.CSSProperties;
}