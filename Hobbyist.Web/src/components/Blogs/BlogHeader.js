import * as React from "react";
export const BlogHeader = (props) => {
    return (React.createElement("div", { className: "container" },
        React.createElement("header", { className: "w3-container w3-center w3-padding-48 w3-white header-site", style: { background: "url('')" } },
            React.createElement("h1", { className: "w3-xxxlarge" },
                React.createElement("b", null, "BLOG")),
            React.createElement("h6", null,
                props.quote,
                " ",
                React.createElement("br", null),
                React.createElement("br", null),
                " ",
                React.createElement("span", { className: "w3-tag" },
                    " ",
                    props.author)))));
};
//# sourceMappingURL=BlogHeader.js.map