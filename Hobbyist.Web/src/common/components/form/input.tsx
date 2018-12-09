import * as React from "react";
import { IInputProps } from "../../../interfaces";


export const Input: React.StatelessComponent<IInputProps> = (props) => {

    return (
        <React.Fragment>
                <input type={props.type}
                    name={props.name}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={onChangeInput(props)}
                    id={props.id}
                className = {props.className}
                />
            </React.Fragment>
    );

}

const formatWrapperClass = (props: IInputProps) => {
    const wrapperClass = 'form-group';
    return props.error ? `${wrapperClass} has-error` : wrapperClass;
}

const onChangeInput = (props: IInputProps) => (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.target.name, e.target.value);
}