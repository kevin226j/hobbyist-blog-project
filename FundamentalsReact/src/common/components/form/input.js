import * as React from "react";
export const Input = (props) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("input", { type: props.type, name: props.name, placeholder: props.placeholder, value: props.value, onChange: onChangeInput(props), id: props.id, className: props.className })));
};
const formatWrapperClass = (props) => {
    const wrapperClass = 'form-group';
    return props.error ? `${wrapperClass} has-error` : wrapperClass;
};
const onChangeInput = (props) => (e) => {
    props.onChange(e.target.name, e.target.value);
};
//# sourceMappingURL=input.js.map