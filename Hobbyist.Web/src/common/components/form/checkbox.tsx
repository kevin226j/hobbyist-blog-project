import * as React from "react";
import { ICheckboxProps } from "../../../interfaces/ICheckBoxProps";


export const Checkbox: React.StatelessComponent<ICheckboxProps> = (props) => {

    return (
        
            <React.Fragment>
            <label className = "checkBoxContainer">
                <input style={props.style} name={props.name} type="checkbox" className="checkbox" checked={props.checked} onChange={onCheck(props)} />
                <span className="checkmark"></span>
            {props.label}</label>
            </React.Fragment>
        
    );
}

const formatWrapperClass = (props: ICheckboxProps) => {
    const wrapperClass = 'form-group';
    return props.error ? `${wrapperClass} has-error` : wrapperClass;
}

const onCheck = (props: ICheckboxProps) => (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onCheck(e.target.name, e.target.checked);
}