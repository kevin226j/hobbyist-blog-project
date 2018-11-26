import * as React from "react";
const formatWrapperClass = (props) => {
    const wrapperClass = 'form-group';
    return props.error ? `${wrapperClass} has-error` : wrapperClass;
};
const onChangeInput = (props) => (e) => {
    props.onChange(e.target.name, e.target.value);
};
export const Password = (props) => {
    return (React.createElement("div", { className: formatWrapperClass(props) },
        React.createElement("label", { htmlFor: props.name }, props.label),
        React.createElement("div", { className: "field" },
            React.createElement("input", { type: "password", name: props.name, className: "form-control", placeholder: props.placeholder, value: props.value, onChange: onChangeInput(props) })),
        React.createElement("div", { className: "help-block" }, props.error)));
};
//# sourceMappingURL=password.js.map