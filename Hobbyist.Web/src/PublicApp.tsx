import * as React from "react";
import { Header } from "./components/header";
import { PublicWrapper } from "./PublicWrapper";
import * as ReactDOM from "react-dom";

export const PublicApp: React.StatelessComponent<{}> = (props) => {

    return (
        <PublicWrapper>
            {props.children}
        </PublicWrapper>
        
    );
}