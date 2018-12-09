import * as React from "react";
export class PublicWrapper extends React.Component {
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "an-home-section", id: "home" },
                React.createElement("header", { className: "an-header" },
                    React.createElement("nav", { className: "navbar-default", style: {
                            background: "#2c353a",
                            borderBottom: "1px solid #161b1d"
                        } },
                        React.createElement("div", { className: "container" },
                            React.createElement("div", { className: "navbar-header" },
                                React.createElement("button", { type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#bs-example-navbar-collapse-1", "aria-expanded": "false" },
                                    React.createElement("span", { className: "sr-only" }, "Toggle navigation"),
                                    React.createElement("span", { className: "icon-bar" }),
                                    React.createElement("span", { className: "icon-bar" }),
                                    React.createElement("span", { className: "icon-bar" })),
                                React.createElement("a", { className: "navbar-brand", href: "/" }, "Hobbyist")),
                            React.createElement("div", { className: "collapse navbar-collapse", id: "bs-example-navbar-collapse-1" },
                                React.createElement("ul", { className: "nav navbar-nav" },
                                    React.createElement("li", { className: "active" },
                                        React.createElement("a", { href: "#home" },
                                            React.createElement("i", { className: "ion-home" }),
                                            "Home")),
                                    React.createElement("li", { className: "active" },
                                        React.createElement("a", { href: "/blogs" },
                                            React.createElement("i", { className: "ion-document-text" }),
                                            "Blog")),
                                    React.createElement("li", { className: "active" },
                                        React.createElement("a", { href: "#contact" },
                                            React.createElement("i", null),
                                            "Login"))))))),
                React.createElement("div", { style: { width: "100%", minHeight: "100vh" } },
                    React.createElement("div", { className: "" }, this.props.children)),
                React.createElement("footer", { className: "an-footer" },
                    React.createElement("div", { className: "container" },
                        React.createElement("div", { className: "an-footer-bottom" },
                            React.createElement("div", { className: "row" },
                                React.createElement("div", { className: "col-md-3 col-sm-6" },
                                    React.createElement("div", { className: "an-widget" },
                                        React.createElement("a", { className: "an-logo", href: "#" }, "Hobbyist"),
                                        React.createElement("p", { className: "copyrights" },
                                            "\u00A9 2018 Hobbyist.",
                                            React.createElement("b", null, "All rights reserved")))),
                                React.createElement("div", { className: "col-md-2 col-sm-6" },
                                    React.createElement("div", { className: "an-widget" },
                                        React.createElement("h4", { className: "an-small-title light-color" }, "Contact"),
                                        React.createElement("p", null, "149 Back Street, NY"),
                                        React.createElement("p", null, "W3 7QR"),
                                        React.createElement("p", null, "+ 223 546 789"),
                                        React.createElement("p", null, "directory@ex.com"))),
                                React.createElement("div", { className: "col-md-3 col-sm-6" },
                                    React.createElement("div", { className: "an-widget" },
                                        React.createElement("h4", { className: "an-small-title light-color" }, "Help"),
                                        React.createElement("p", null, "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin."))),
                                React.createElement("div", { className: "col-md-3 col-md-push-1 col-sm-6" },
                                    React.createElement("div", { className: "an-widget newsletter" },
                                        React.createElement("h4", { className: "an-small-title light-color" }, "Subscribe to our news"),
                                        React.createElement("form", { action: "#", className: "an-form" },
                                            React.createElement("input", { type: "email", className: "an-form-control dark", placeholder: "E-mail" }),
                                            React.createElement("button", { type: "submit", className: "an-btn an-btn-default btn-submit-full" },
                                                React.createElement("i", { className: "ion-ios-paperplane" }))))))))))));
    }
}
//# sourceMappingURL=PublicWrapper.js.map