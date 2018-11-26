import * as React from "react";
export const Checkbox = (props) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("label", { className: "checkBoxContainer" },
            React.createElement("input", { style: props.style, name: props.name, type: "checkbox", className: "checkbox", checked: props.checked, onChange: onCheck(props) }),
            React.createElement("span", { className: "checkmark" }),
            props.label)));
};
const formatWrapperClass = (props) => {
    const wrapperClass = 'form-group';
    return props.error ? `${wrapperClass} has-error` : wrapperClass;
};
const onCheck = (props) => (e) => {
    props.onCheck(e.target.name, e.target.checked);
};
//# sourceMappingURL=checkbox.js.map