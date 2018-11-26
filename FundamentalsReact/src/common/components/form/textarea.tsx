import * as React from "react";
import { ITextAreaProps } from "../../../interfaces/ITextAreaProps";

// control number of rows by passing value rows
export const TextArea: React.StatelessComponent<ITextAreaProps> = (props) => {
    return (
        <React.Fragment>
                <textarea 
                    required={props.required}
                    name={props.name}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={onChangeInput(props)}
                    onBlur={onBlur(props)}
                    rows={props.rows}
                    style={props.style}
                    id={props.id}
                />
            <div className="help-block">{props.error}</div>
        </React.Fragment>
    );

}

const onChangeInput = (props: ITextAreaProps) => (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    props.onChange(e.target.name, e.target.value);
}

const onBlur = (props: ITextAreaProps) => (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (props.onBlur) {
        props.onBlur(e.target.name, e.target.value);
    }
}