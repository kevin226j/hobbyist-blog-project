import * as React from "react";
import { Button, Input, TextArea, Checkbox } from "../../common/components/form";
export const BlogForm = (props) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("header", { className: "headerBlogForm" }, " BLOG FORM "),
        React.createElement("form", { id: "form", className: "topBefore" },
            React.createElement(Input, { className: "blogInput", label: "Blog Image", value: props.blogEntity.Image, type: "text", id: "name", name: "Image", onChange: props.onChange, placeholder: "IMAGE ?" }),
            React.createElement(Input, { className: "blogInput", label: "Name of Blog", value: props.blogEntity.Name, type: "text", id: "name", name: "Name", error: props.NameError, onChange: props.onChange, placeholder: "NAME" }),
            React.createElement(TextArea, { className: "blogInput", label: "Blog Content", value: props.blogEntity.Body, id: "message", rows: 8, name: "Body", error: props.BodyError, onChange: props.onChange, placeholder: "BODY" }),
            React.createElement(Checkbox, { label: "Is Public", name: "isPublic", checked: props.blogEntity.IsPublic, onCheck: props.onCheck }),
            React.createElement(Button, { className: "an-btn an-btn-default", label: "Submit Blog", onClick: props.onSubmit }))));
};
//# sourceMappingURL=BlogForm.js.map