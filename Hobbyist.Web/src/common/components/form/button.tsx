﻿import * as React from "react";
import { IButtonProps } from "../../../interfaces";


export const Button: React.StatelessComponent<IButtonProps> = (props) => {
    return (
        <button type="button"
            className={props.className}
            onClick={props.onClick}
        >
            {props.label}
        </button>
    );
};