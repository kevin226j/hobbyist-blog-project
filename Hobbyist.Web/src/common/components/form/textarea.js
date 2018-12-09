import * as React from "react";
// control number of rows by passing value rows
export const TextArea = (props) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("textarea", { required: props.required, name: props.name, placeholder: props.placeholder, value: props.value, onChange: onChangeInput(props), onBlur: onBlur(props), rows: props.rows, style: props.style, id: props.id }),
        React.createElement("div", { className: "help-block" }, props.error)));
};
const onChangeInput = (props) => (e) => {
    props.onChange(e.target.name, e.target.value);
};
const onBlur = (props) => (e) => {
    if (props.onBlur) {
        props.onBlur(e.target.name, e.target.value);
    }
};
//# sourceMappingURL=textarea.js.map