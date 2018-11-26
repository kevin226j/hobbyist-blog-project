import * as React from "react";
export const Bloglist = (props) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("header", { className: "headerBlogForm" }, " YOUR BLOGS "),
        React.createElement("div", { className: "an-blog-container blogscrollbar", style: listBody, id: "style-4" },
            React.createElement("div", { className: "row" }, props.dataItems.map(buildRow(props))))));
};
//***********************************************************************************************************
// STYLING
//***********************************************************************************************************
const listBody = {
    maxHeight: 500,
    borderLeft: "1px solid #EDEDED",
    margin: '0 auto',
    overflowY: "scroll"
};
const buildRow = (props) => (itm, ndx) => {
    return (React.createElement("div", { className: "col-md-6 col-sm-6 cube fadeInUp wow", key: ndx },
        React.createElement("div", { className: "an-blog-single with-shadow-dark fadeIn", style: { visibility: "visible", animationName: "fadeIn" } },
            React.createElement("div", { className: "blog-image-container", style: { background: 'url(' + itm.Image + ') center center no-repeat',
                    backgroundSize: 'cover' } }),
            React.createElement("div", { className: "padding20" },
                React.createElement("h3", null,
                    React.createElement("a", { href: "$" }, itm.Name)),
                " ",
                React.createElement("span", null,
                    React.createElement("span", { className: (itm.IsPublic == true) ? "glyphicon glyphicon-ok-sign" : "" })),
                React.createElement("div", { className: "blog-meta" },
                    React.createElement("p", null,
                        "By ",
                        React.createElement("a", { href: "#" },
                            itm.FirstName,
                            " ",
                            itm.LastName),
                        " ",
                        React.createElement("a", { href: "#" },
                            " ",
                            React.createElement("b", null, "Last Modified : ")),
                        " ",
                        React.createElement("a", { href: "#" }, itm.ModifiedDate.substring(0, 10).replace('-', '/')))),
                React.createElement("div", { className: "blog-content" },
                    React.createElement("p", null,
                        " ",
                        (itm.Body.length < 150 ? itm.Body : itm.Body.substring(0, 147) + " ..."),
                        " ")),
                props.showEditButton ? (React.createElement("button", { type: "button", className: "an-btn an-btn-default btn-sm", onClick: buttonClick(props, itm.Id, "edit") }, "Edit")) : (""),
                React.createElement("div", { className: "divider" }),
                props.showDeleteButton ? (React.createElement("button", { type: "button", className: "an-btn an-btn-default btn-sm", onClick: buttonClick(props, itm.Id, "delete") }, "Delete")) : ("")))));
};
const buttonClick = (props, id, action) => (e) => {
    props.onButtonClick(id, action);
};
//# sourceMappingURL=BlogList.js.map