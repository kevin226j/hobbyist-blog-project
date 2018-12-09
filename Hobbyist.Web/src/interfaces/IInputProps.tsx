export interface IInputProps {
    name: string;
    label: string;
    placeholder?: string;
    value: string;
    type: string;
    id: string;
    className: string;
    onChange: (fieldName: string, value: string) => void;
    error?: string;
}