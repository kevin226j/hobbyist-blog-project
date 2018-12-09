webpackJsonp([1],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Blog_GetAll */
/* unused harmony export Blog_GetById */
/* unused harmony export Blog_Post */
/* unused harmony export Blog_Update */
/* unused harmony export Blog_Delete */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_apiExecute__ = __webpack_require__(52);

var Blog_GetAll = function Blog_GetAll() {
    var URL = "/api/blogs";
    return Object(__WEBPACK_IMPORTED_MODULE_0__api_apiExecute__["a" /* apiExecute */])(URL, "GET", null);
};
var Blog_GetById = function Blog_GetById(id) {
    var URL = "/api/blogs/" + id;
    return Object(__WEBPACK_IMPORTED_MODULE_0__api_apiExecute__["a" /* apiExecute */])(URL, "GET", null);
};
var Blog_Post = function Blog_Post(data) {
    var URL = "/api/blogs";
    return Object(__WEBPACK_IMPORTED_MODULE_0__api_apiExecute__["a" /* apiExecute */])(URL, "POST", data);
};
var Blog_Update = function Blog_Update(data) {
    var URL = "/api/blogs";
    return Object(__WEBPACK_IMPORTED_MODULE_0__api_apiExecute__["a" /* apiExecute */])(URL, "PUT", data);
};
var Blog_Delete = function Blog_Delete(id) {
    var URL = "/api/blogs/" + id;
    return Object(__WEBPACK_IMPORTED_MODULE_0__api_apiExecute__["a" /* apiExecute */])(URL, "DELETE", null);
};
var BlogApi = {
    Blog_GetAll: Blog_GetAll,
    Blog_GetById: Blog_GetById,
    Blog_Post: Blog_Post,
    Blog_Update: Blog_Update,
    Blog_Delete: Blog_Delete
};

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GetRandomQuote */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebScrapeApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_apiExecute__ = __webpack_require__(52);

var GetRandomQuote = function GetRandomQuote() {
    var URL = "/api/webscrape";
    return Object(__WEBPACK_IMPORTED_MODULE_0__api_apiExecute__["a" /* apiExecute */])(URL, "GET", null);
};
var WebScrapeApi = {
    GetRandomQuote: GetRandomQuote
};

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BlogContainer__ = __webpack_require__(51);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BlogForm__ = __webpack_require__(121);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__BlogForm__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__BlogHeader__ = __webpack_require__(129);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__BlogHeader__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__BlogList__ = __webpack_require__(130);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__BlogList__["a"]; });





/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_components_form__ = __webpack_require__(122);


var BlogForm = function BlogForm(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("header", { className: "headerBlogForm" }, " BLOG FORM "), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("form", { id: "form", className: "topBefore" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__common_components_form__["c" /* Input */], { className: "blogInput", label: "Blog Image", value: props.blogEntity.Image, type: "text", id: "name", name: "Image", onChange: props.onChange, placeholder: "IMAGE ?" }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__common_components_form__["c" /* Input */], { className: "blogInput", label: "Name of Blog", value: props.blogEntity.Name, type: "text", id: "name", name: "Name", error: props.NameError, onChange: props.onChange, placeholder: "NAME" }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__common_components_form__["d" /* TextArea */], { className: "blogInput", label: "Blog Content", value: props.blogEntity.Body, id: "message", rows: 8, name: "Body", error: props.BodyError, onChange: props.onChange, placeholder: "BODY" }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__common_components_form__["b" /* Checkbox */], { label: "Is Public", name: "isPublic", checked: props.blogEntity.IsPublic, onCheck: props.onCheck }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__common_components_form__["a" /* Button */], { className: "an-btn an-btn-default", label: "Submit Blog", onClick: props.onSubmit })));
};

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button__ = __webpack_require__(123);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__button__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__input__ = __webpack_require__(124);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__input__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__password__ = __webpack_require__(125);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dropdownlist__ = __webpack_require__(126);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__textarea__ = __webpack_require__(127);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__textarea__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__checkbox__ = __webpack_require__(128);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__checkbox__["a"]; });







/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

var Button = function Button(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { type: "button", className: props.className, onClick: props.onClick }, props.label);
};

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Input; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

var Input = function Input(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { type: props.type, name: props.name, placeholder: props.placeholder, value: props.value, onChange: onChangeInput(props), id: props.id, className: props.className }));
};
var formatWrapperClass = function formatWrapperClass(props) {
    var wrapperClass = 'form-group';
    return props.error ? wrapperClass + " has-error" : wrapperClass;
};
var onChangeInput = function onChangeInput(props) {
    return function (e) {
        props.onChange(e.target.name, e.target.value);
    };
};

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Password */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

var formatWrapperClass = function formatWrapperClass(props) {
    var wrapperClass = 'form-group';
    return props.error ? wrapperClass + " has-error" : wrapperClass;
};
var onChangeInput = function onChangeInput(props) {
    return function (e) {
        props.onChange(e.target.name, e.target.value);
    };
};
var Password = function Password(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: formatWrapperClass(props) }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { htmlFor: props.name }, props.label), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "field" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { type: "password", name: props.name, className: "form-control", placeholder: props.placeholder, value: props.value, onChange: onChangeInput(props) })), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "help-block" }, props.error));
};

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DropDownList */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

var formatWrapperClass = function formatWrapperClass(props) {
    var wrapperClass = 'form-group';
    return props.error ? wrapperClass + " has-error" : wrapperClass;
};
var onChangeInput = function onChangeInput(props) {
    return function (e) {
        props.onChange(e.target.name, e.target.value);
    };
};
var DropDownList = function DropDownList(props) {
    var options = props.options.map(function (option) {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("option", { key: option.key, value: option.key }, option.value);
    });
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: formatWrapperClass(props) }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { htmlFor: props.name }, props.label), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "field" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("select", { value: props.selectedValue, onChange: onChangeInput(props), id: props.name, className: "form-control" }, options)));
};

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextArea; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

// control number of rows by passing value rows
var TextArea = function TextArea(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("textarea", { required: props.required, name: props.name, placeholder: props.placeholder, value: props.value, onChange: onChangeInput(props), onBlur: onBlur(props), rows: props.rows, style: props.style, id: props.id }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "help-block" }, props.error));
};
var onChangeInput = function onChangeInput(props) {
    return function (e) {
        props.onChange(e.target.name, e.target.value);
    };
};
var onBlur = function onBlur(props) {
    return function (e) {
        if (props.onBlur) {
            props.onBlur(e.target.name, e.target.value);
        }
    };
};

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Checkbox; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

var Checkbox = function Checkbox(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { className: "checkBoxContainer" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { style: props.style, name: props.name, type: "checkbox", className: "checkbox", checked: props.checked, onChange: onCheck(props) }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "checkmark" }), props.label));
};
var formatWrapperClass = function formatWrapperClass(props) {
    var wrapperClass = 'form-group';
    return props.error ? wrapperClass + " has-error" : wrapperClass;
};
var onCheck = function onCheck(props) {
    return function (e) {
        props.onCheck(e.target.name, e.target.checked);
    };
};

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

var BlogHeader = function BlogHeader(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "container" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("header", { className: "w3-container w3-center w3-padding-48 w3-white header-site", style: { background: "url('')" } }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", { className: "w3-xxxlarge" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("b", null, "BLOG")), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h6", null, props.quote, " ", __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null), " ", __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "w3-tag" }, " ", props.author))));
};

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bloglist; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

var Bloglist = function Bloglist(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("header", { className: "headerBlogForm" }, " YOUR BLOGS "), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "an-blog-container blogscrollbar", style: listBody, id: "style-4" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "row" }, props.dataItems.map(buildRow(props)))));
};
//***********************************************************************************************************
// STYLING
//***********************************************************************************************************
var listBody = {
    maxHeight: 500,
    borderLeft: "1px solid #EDEDED",
    margin: '0 auto',
    overflowY: "scroll"
};
var buildRow = function buildRow(props) {
    return function (itm, ndx) {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "col-md-6 col-sm-6 cube fadeInUp wow", key: ndx }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "an-blog-single with-shadow-dark fadeIn", style: { visibility: "visible", animationName: "fadeIn" } }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "blog-image-container", style: { background: 'url(' + itm.Image + ') center center no-repeat',
                backgroundSize: 'cover' } }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "padding20" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "$" }, itm.Name)), " ", __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: itm.IsPublic == true ? "glyphicon glyphicon-ok-sign" : "" })), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "blog-meta" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "By ", __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#" }, itm.FirstName, " ", itm.LastName), " ", __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#" }, " ", __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("b", null, "Last Modified : ")), " ", __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#" }, itm.ModifiedDate.substring(0, 10).replace('-', '/')))), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "blog-content" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, " ", itm.Body.length < 150 ? itm.Body : itm.Body.substring(0, 147) + " ...", " ")), props.showEditButton ? __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { type: "button", className: "an-btn an-btn-default btn-sm", onClick: buttonClick(props, itm.Id, "edit") }, "Edit") : "", __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "divider" }), props.showDeleteButton ? __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { type: "button", className: "an-btn an-btn-default btn-sm", onClick: buttonClick(props, itm.Id, "delete") }, "Delete") : "")));
    };
};
var buttonClick = function buttonClick(props, id, action) {
    return function (e) {
        props.onButtonClick(id, action);
    };
};

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var HomePageContainer = function (_React$Component) {
    _inherits(HomePageContainer, _React$Component);

    function HomePageContainer() {
        _classCallCheck(this, HomePageContainer);

        return _possibleConstructorReturn(this, (HomePageContainer.__proto__ || Object.getPrototypeOf(HomePageContainer)).apply(this, arguments));
    }

    _createClass(HomePageContainer, [{
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "banner-section" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "an-home-img-container", style: { background: "url('./Content/assets/img/creative-craft.jpg') center center no-repeat", backgroundSize: 'cover' } }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "overlay" }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "home-banner-content" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "col-md-8", style: { paddingTop: "100px" } }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "container" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "col-md-8" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", { className: "wow fadeInDown", style: { visibility: "visible", animationName: "fadeInDown" } }, "Better ", __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, "Professionals"), " are waiting for ", __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("b", null, "you"), " to consult."), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { className: "wow fadeInUp", style: { visibility: "visible", animationName: "fadeInUp" } }, "We are the creative agency company to help your business grow."), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "an-btn an-btn-default btn-big wow fadeIn", style: { visibility: "hidden", animationName: "none" } }, "Check Out Today's Build!")))), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { className: "wow fadeInUp", style: { paddingTop: "10px" } }, " Join the Community! "), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "col-md-4" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("form", { action: "#" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { type: "text", className: "an-form-control wow fadeInUp", placeholder: "Tell Us Your First Name" }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { type: "text", className: "an-form-control wow fadeInUp", placeholder: "Tell Us Your Last Name" }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { type: "text", className: "an-form-control wow fadeInUp", placeholder: "Your Email Address (E.g example@mail.com)" }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { type: "text", className: "an-form-control wow fadeInUp", placeholder: "Enter a Password" }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { type: "text", className: "an-form-control wow fadeInUp", placeholder: "Confirm Your Password" }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "an-btn an-btn-default wow fadeInDown" }, "Register")))))));
        }
    }]);

    return HomePageContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PublicWrapper__ = __webpack_require__(133);


var PublicApp = function PublicApp(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__PublicWrapper__["a" /* PublicWrapper */], null, props.children);
};

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicWrapper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var PublicWrapper = function (_React$Component) {
    _inherits(PublicWrapper, _React$Component);

    function PublicWrapper() {
        _classCallCheck(this, PublicWrapper);

        return _possibleConstructorReturn(this, (PublicWrapper.__proto__ || Object.getPrototypeOf(PublicWrapper)).apply(this, arguments));
    }

    _createClass(PublicWrapper, [{
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "an-home-section", id: "home" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("header", { className: "an-header" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("nav", { className: "navbar-default", style: {
                    background: "#2c353a",
                    borderBottom: "1px solid #161b1d"
                } }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "container" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "navbar-header" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#bs-example-navbar-collapse-1", "aria-expanded": "false" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "sr-only" }, "Toggle navigation"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "icon-bar" }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "icon-bar" }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "icon-bar" })), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "navbar-brand", href: "/" }, "Hobbyist")), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "collapse navbar-collapse", id: "bs-example-navbar-collapse-1" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", { className: "nav navbar-nav" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "active" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#home" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "ion-home" }), "Home")), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "active" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "/blogs" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "ion-document-text" }), "Blog")), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "active" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#contact" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", null), "Login"))))))), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { width: "100%", minHeight: "100vh" } }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "" }, this.props.children)), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("footer", { className: "an-footer" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "container" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "an-footer-bottom" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "row" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "col-md-3 col-sm-6" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "an-widget" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "an-logo", href: "#" }, "Hobbyist"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { className: "copyrights" }, "\xA9 2018 Hobbyist.", __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("b", null, "All rights reserved")))), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "col-md-2 col-sm-6" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "an-widget" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h4", { className: "an-small-title light-color" }, "Contact"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "149 Back Street, NY"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "W3 7QR"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "+ 223 546 789"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "directory@ex.com"))), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "col-md-3 col-sm-6" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "an-widget" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h4", { className: "an-small-title light-color" }, "Help"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin."))), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "col-md-3 col-md-push-1 col-sm-6" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "an-widget newsletter" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h4", { className: "an-small-title light-color" }, "Subscribe to our news"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("form", { action: "#", className: "an-form" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { type: "email", className: "an-form-control dark", placeholder: "E-mail" }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { type: "submit", className: "an-btn an-btn-default btn-submit-full" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "ion-ios-paperplane" })))))))))));
        }
    }]);

    return PublicWrapper;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_Blogs___ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_WebScrape__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Blogs___ = __webpack_require__(120);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var BlogContainer = function (_React$Component) {
    _inherits(BlogContainer, _React$Component);

    function BlogContainer(props) {
        _classCallCheck(this, BlogContainer);

        var _this = _possibleConstructorReturn(this, (BlogContainer.__proto__ || Object.getPrototypeOf(BlogContainer)).call(this, props));

        _this.state = {
            blogEntity: {
                Name: "",
                Body: "",
                IsPublic: false,
                Image: "",
                UserBaseId: 4,
                CreatedDate: "",
                ModifiedDate: ""
            },
            blogEntityItems: [],
            author: "",
            quote: ""
        };
        _this.onChange = _this.onChange.bind(_this);
        _this.onSubmit = _this.onSubmit.bind(_this);
        _this.onCheck = _this.onCheck.bind(_this);
        _this.onButtonClick = _this.onButtonClick.bind(_this);
        return _this;
    }
    //***********************************************************************************************************
    // INITIAL STATE
    //***********************************************************************************************************


    _createClass(BlogContainer, [{
        key: "setInitialState",
        value: function setInitialState() {
            this.setState({
                blogEntity: {
                    Name: "",
                    Body: "",
                    IsPublic: false,
                    Image: "",
                    UserBaseId: 4,
                    CreatedDate: "",
                    ModifiedDate: ""
                }
            });
        }
        //***********************************************************************************************************
        // ON CHANGE
        //***********************************************************************************************************

    }, {
        key: "onChange",
        value: function onChange(fieldName, fieldValue) {
            var nextState = Object.assign({}, this.state, { blogEntity: Object.assign({}, this.state.blogEntity, _defineProperty({}, fieldName, fieldValue)) });
            this.setState(nextState);
        }
        //***********************************************************************************************************
        // ON CHECK
        //***********************************************************************************************************

    }, {
        key: "onCheck",
        value: function onCheck(name, checked) {
            var nextState = {
                blogEntity: Object.assign({}, this.state.blogEntity, { IsPublic: checked })
            };
            this.setState(nextState);
        }
        //***********************************************************************************************************
        // WHEN EDIT OR DELETE BUTTON IS PRESSED
        //***********************************************************************************************************

    }, {
        key: "onButtonClick",
        value: function onButtonClick(fieldValue, fieldName) {
            var _this2 = this;

            //let 'ind' grab the index value that was clicked.
            var ind = this.state.blogEntityItems.findIndex(function (x) {
                return x.Id === fieldValue;
            });
            console.log("ind: ", ind);
            if (fieldName === "edit") {
                if (fieldValue >= 0) {
                    this.loadDataList();
                    this.setState({ blogEntity: this.state.blogEntityItems[ind] });
                }
            } else if (fieldName === "delete") {
                __WEBPACK_IMPORTED_MODULE_1__api_Blogs___["a" /* BlogApi */].Blog_Delete(fieldValue).then(function (response) {
                    //reload the list entry.
                    _this2.loadDataList();
                });
            }
        }
        //***********************************************************************************************************
        // ON SUBMIT
        //***********************************************************************************************************

    }, {
        key: "onSubmit",
        value: function onSubmit() {
            var _this3 = this;

            if (this.state.blogEntity.Id > 0) {
                //PUT 
                this.setState({
                    //after repopulation of text changes, and alterations, set state of the subscriptionentity.
                    blogEntity: this.state.blogEntity
                });
                __WEBPACK_IMPORTED_MODULE_1__api_Blogs___["a" /* BlogApi */].Blog_Update(this.state.blogEntity).then(function (response) {
                    //reset to initial state, repopulate tier Type list, and reload the tier list.
                    _this3.setInitialState();
                    _this3.loadDataList();
                });
            } else {
                //POST
                __WEBPACK_IMPORTED_MODULE_1__api_Blogs___["a" /* BlogApi */].Blog_Post(this.state.blogEntity).then(function (response) {
                    console.log(response);
                    _this3.setInitialState();
                    _this3.loadDataList();
                });
            }
        }
        //***********************************************************************************************************
        // GET ALL LIST
        //***********************************************************************************************************

    }, {
        key: "loadDataList",
        value: function loadDataList() {
            var _this4 = this;

            __WEBPACK_IMPORTED_MODULE_1__api_Blogs___["a" /* BlogApi */].Blog_GetAll().then(function (response) {
                console.log(response);
                _this4.setState({ blogEntityItems: response.Items });
            });
        }
        //***********************************************************************************************************
        // WHEN THE PAGE LOADS
        //***********************************************************************************************************

    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this5 = this;

            //Load list Data that appears to the right of the form.
            this.loadDataList();
            //Load Banner Data : Random Quote Generator
            __WEBPACK_IMPORTED_MODULE_2__api_WebScrape__["a" /* WebScrapeApi */].GetRandomQuote().then(function (response) {
                _this5.setState({ author: response.Author });
                _this5.setState({ quote: response.Quote });
            });
        }
    }, {
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { width: "100%", minHeight: "150vh" } }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "an-section", id: "work" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__Blogs___["b" /* BlogHeader */], { quote: this.state.quote, author: this.state.author }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "col-md-6" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__Blogs___["a" /* BlogForm */], { blogEntity: this.state.blogEntity, onChange: this.onChange, onSubmit: this.onSubmit, onCheck: this.onCheck })), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "col-md-6" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__Blogs___["c" /* Bloglist */], { dataItems: this.state.blogEntityItems, onButtonClick: this.onButtonClick, showEditButton: true, showDeleteButton: true })))));
        }
    }]);

    return BlogContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return apiExecute; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
 //axios would be our ajax
//patch axios to use application/x-www-form-urlencoded
//https://github.com/axios/axios/issues/350#issuecomment-227270046
__WEBPACK_IMPORTED_MODULE_0_axios___default.a.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//axios.defaults.transformRequest = [function (data, headers) { //this function states that whatever request we put through will be transformed so it will work
//    var str = [];
//    for (var p in data)
//        if (data.hasOwnProperty(p) && data[p]) {
//            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(data[p]));
//        }
//    return str.join("&");
//}];
var apiExecute = function apiExecute(url, action, data) {
    switch (action) {
        case "GET":
            return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(url, { withCredentials: true }).then(function (response) {
                return response.data;
            }, function (err) {
                return Promise.reject(err);
            }).catch(function (err) {
                console.log("catch err", err);
                return Promise.reject(err);
            });
        case "POST":
            return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(url, data, { withCredentials: true }).then(function (response) {
                return response.data;
            }, function (err) {
                return Promise.reject(err);
            }).catch(function (err) {
                console.log("catch err", err);
                return Promise.reject(err);
            });
        case "PUT":
            return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.put(url, data, { withCredentials: true }).then(function (response) {
                return response.data;
            }, function (err) {
                return Promise.reject(err);
            }).catch(function (err) {
                console.log("catch err", err);
                return Promise.reject(err);
            });
        case "DELETE":
            return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.delete(url, { withCredentials: true }).then(function (response) {
                return response.data;
            }, function (err) {
                return Promise.reject(err);
            }).catch(function (err) {
                console.log("catch err", err);
                return Promise.reject(err);
            });
    }
};

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(71);



__WEBPACK_IMPORTED_MODULE_1_react_dom__["render"](__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__router__["a" /* AppRouter */], null), document.getElementById("root"));

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Blogs_BlogContainer__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Public_HomePageContainer__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PublicApp__ = __webpack_require__(132);





var AppRouter = function AppRouter() {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Router"], { history: __WEBPACK_IMPORTED_MODULE_1_react_router__["browserHistory"] }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/", component: __WEBPACK_IMPORTED_MODULE_4__PublicApp__["a" /* PublicApp */] }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["IndexRoute"], { component: __WEBPACK_IMPORTED_MODULE_3__components_Public_HomePageContainer__["a" /* HomePageContainer */] }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/blogs", component: __WEBPACK_IMPORTED_MODULE_2__components_Blogs_BlogContainer__["a" /* BlogContainer */] })));
};

/***/ })

},[60]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcGkvQmxvZ3MvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL2FwaS9XZWJTY3JhcGUvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQmxvZ3MvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQmxvZ3MvQmxvZ0Zvcm0udHN4Iiwid2VicGFjazovLy8uL2NvbW1vbi9jb21wb25lbnRzL2Zvcm0vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL2NvbW1vbi9jb21wb25lbnRzL2Zvcm0vYnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21tb24vY29tcG9uZW50cy9mb3JtL2lucHV0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21tb24vY29tcG9uZW50cy9mb3JtL3Bhc3N3b3JkLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21tb24vY29tcG9uZW50cy9mb3JtL2Ryb3Bkb3dubGlzdC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tbW9uL2NvbXBvbmVudHMvZm9ybS90ZXh0YXJlYS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tbW9uL2NvbXBvbmVudHMvZm9ybS9jaGVja2JveC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CbG9ncy9CbG9nSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Jsb2dzL0Jsb2dMaXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1B1YmxpYy9Ib21lUGFnZUNvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vLy4vUHVibGljQXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9QdWJsaWNXcmFwcGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Jsb2dzL0Jsb2dDb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL2FwaS9hcGlFeGVjdXRlLnRzeCIsIndlYnBhY2s6Ly8vLi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vcm91dGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBp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RUFBVSxJQUFWLENBREosRUFFSSxTQUFTLGNBQVQsQ0FBd0IsTUFBeEIsQ0FGSixFOzs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRU8sSUFBTSxZQUEwQyxTQUExQyxTQUEwQyxHQUFLO0FBQ3hELFdBQ0kscURBQUMsb0RBQUQsRUFBTyxFQUFDLFNBQVMsNERBQVYsRUFBUCxFQUNJLHFEQUFDLG1EQUFELEVBQU0sRUFBQyxNQUFLLEdBQU4sRUFBVSxXQUFXLDZEQUFyQixFQUFOLEVBQ0kscURBQUMsd0RBQUQsRUFBVyxFQUFDLFdBQVcsK0ZBQVosRUFBWCxDQURKLEVBRUkscURBQUMsbURBQUQsRUFBTSxFQUFDLE1BQUssUUFBTixFQUFlLFdBQVcsc0ZBQTFCLEVBQU4sQ0FGSixDQURKLENBREo7QUFTSCxDQVZNLEMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXBpRXhlY3V0ZSB9IGZyb20gXCIuLi8uLi9hcGkvYXBpRXhlY3V0ZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJsb2dfR2V0QWxsID0gKCk6IFByb21pc2U8YW55PiA9PiB7XHJcbiAgICBjb25zdCBVUkwgPSBgL2FwaS9ibG9nc2A7XG4gICAgcmV0dXJuIGFwaUV4ZWN1dGUoVVJMLCBcIkdFVFwiLCBudWxsKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQmxvZ19HZXRCeUlkID0gKGlkOiBudW1iZXIpOiBQcm9taXNlPGFueT4gPT4ge1xyXG4gICAgY29uc3QgVVJMID0gYC9hcGkvYmxvZ3MvJHtpZH1gO1xuICAgIHJldHVybiBhcGlFeGVjdXRlKFVSTCwgXCJHRVRcIiwgbnVsbClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEJsb2dfUG9zdCA9IChkYXRhOiBhbnkpOiBQcm9taXNlPGFueT4gPT4ge1xyXG4gICAgY29uc3QgVVJMID0gYC9hcGkvYmxvZ3NgO1xuICAgIHJldHVybiBhcGlFeGVjdXRlKFVSTCwgXCJQT1NUXCIsIGRhdGEpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBCbG9nX1VwZGF0ZSA9IChkYXRhOiBhbnkpOiBQcm9taXNlPGFueT4gPT4ge1xyXG4gICAgY29uc3QgVVJMID0gYC9hcGkvYmxvZ3NgO1xuICAgIHJldHVybiBhcGlFeGVjdXRlKFVSTCwgXCJQVVRcIiwgZGF0YSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEJsb2dfRGVsZXRlID0gKGlkOm51bWJlcik6IFByb21pc2U8YW55PiA9PiB7XHJcbiAgICBjb25zdCBVUkwgPSBgL2FwaS9ibG9ncy8ke2lkfWA7XG4gICAgcmV0dXJuIGFwaUV4ZWN1dGUoVVJMLCBcIkRFTEVURVwiLCBudWxsKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQmxvZ0FwaSA9IHtcbiAgICBCbG9nX0dldEFsbCxcbiAgICBCbG9nX0dldEJ5SWQsXG4gICAgQmxvZ19Qb3N0LFxuICAgIEJsb2dfVXBkYXRlLFxuICAgIEJsb2dfRGVsZXRlXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBpL0Jsb2dzL2luZGV4LnRzeCIsImltcG9ydCB7IGFwaUV4ZWN1dGUgfSBmcm9tIFwiLi4vLi4vYXBpL2FwaUV4ZWN1dGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBHZXRSYW5kb21RdW90ZSA9ICgpOiBQcm9taXNlPGFueT4gPT4ge1xyXG4gICAgY29uc3QgVVJMID0gYC9hcGkvd2Vic2NyYXBlYDtcbiAgICByZXR1cm4gYXBpRXhlY3V0ZShVUkwsIFwiR0VUXCIsIG51bGwpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBXZWJTY3JhcGVBcGkgPSB7XG4gICAgR2V0UmFuZG9tUXVvdGVcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcGkvV2ViU2NyYXBlL2luZGV4LnRzeCIsImV4cG9ydCAqIGZyb20gXCIuL0Jsb2dDb250YWluZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vQmxvZ0Zvcm1cIjtcclxuZXhwb3J0ICogZnJvbSAnLi9CbG9nSGVhZGVyJztcclxuZXhwb3J0ICogZnJvbSBcIi4vQmxvZ0xpc3RcIjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0Jsb2dzL2luZGV4LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xyXG5pbXBvcnQgeyBJQmxvZ0Zvcm1FbnRpdHkgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9CbG9ncy9JQmxvZ0Zvcm1FbnRpdHlcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBJbnB1dCwgVGV4dEFyZWEsIENoZWNrYm94IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9jb21wb25lbnRzL2Zvcm1cIlxyXG5cclxuZXhwb3J0IGNvbnN0IEJsb2dGb3JtOiBSZWFjdC5TdGF0ZWxlc3NDb21wb25lbnQ8SUJsb2dGb3JtRW50aXR5PiA9IChwcm9wczogSUJsb2dGb3JtRW50aXR5KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZSA9XCJoZWFkZXJCbG9nRm9ybVwiPiBCTE9HIEZPUk0gPC9oZWFkZXI+XHJcbiAgICAgICAgPGZvcm0gaWQ9XCJmb3JtXCIgY2xhc3NOYW1lPVwidG9wQmVmb3JlXCI+XHJcbiAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IFwiYmxvZ0lucHV0XCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiQmxvZyBJbWFnZVwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMuYmxvZ0VudGl0eS5JbWFnZX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiSW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSBcIklNQUdFID9cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IFwiYmxvZ0lucHV0XCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiTmFtZSBvZiBCbG9nXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5ibG9nRW50aXR5Lk5hbWV9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIk5hbWVcIlxyXG4gICAgICAgICAgICAgICAgZXJyb3I9e3Byb3BzLk5hbWVFcnJvcn1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyID0gXCJOQU1FXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBcImJsb2dJbnB1dFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkJsb2cgQ29udGVudFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMuYmxvZ0VudGl0eS5Cb2R5fVxyXG4gICAgICAgICAgICAgICAgaWQ9XCJtZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgIHJvd3M9ezh9XHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiQm9keVwiXHJcbiAgICAgICAgICAgICAgICBlcnJvcj17cHJvcHMuQm9keUVycm9yfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSBcIkJPRFlcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiSXMgUHVibGljXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJpc1B1YmxpY1wiXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXtwcm9wcy5ibG9nRW50aXR5LklzUHVibGljfVxyXG4gICAgICAgICAgICAgICAgb25DaGVjaz17cHJvcHMub25DaGVja31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYW4tYnRuIGFuLWJ0bi1kZWZhdWx0XCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiU3VibWl0IEJsb2dcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17cHJvcHMub25TdWJtaXR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQmxvZ3MvQmxvZ0Zvcm0udHN4IiwiZXhwb3J0ICogZnJvbSBcIi4vYnV0dG9uXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2lucHV0XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3Bhc3N3b3JkXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2Ryb3Bkb3dubGlzdFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi90ZXh0YXJlYVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9jaGVja2JveFwiO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbW1vbi9jb21wb25lbnRzL2Zvcm0vaW5kZXgudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IElCdXR0b25Qcm9wcyB9IGZyb20gXCIuLi8uLi8uLi9pbnRlcmZhY2VzXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEJ1dHRvbjogUmVhY3QuU3RhdGVsZXNzQ29tcG9uZW50PElCdXR0b25Qcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWV9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7cHJvcHMubGFiZWx9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICApO1xyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbW1vbi9jb21wb25lbnRzL2Zvcm0vYnV0dG9uLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJSW5wdXRQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi9pbnRlcmZhY2VzXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IElucHV0OiBSZWFjdC5TdGF0ZWxlc3NDb21wb25lbnQ8SUlucHV0UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT17cHJvcHMudHlwZX1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtwcm9wcy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwcm9wcy5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSW5wdXQocHJvcHMpfVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPXtwcm9wcy5pZH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtwcm9wcy5jbGFzc05hbWV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKTtcclxuXHJcbn1cclxuXHJcbmNvbnN0IGZvcm1hdFdyYXBwZXJDbGFzcyA9IChwcm9wczogSUlucHV0UHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHdyYXBwZXJDbGFzcyA9ICdmb3JtLWdyb3VwJztcclxuICAgIHJldHVybiBwcm9wcy5lcnJvciA/IGAke3dyYXBwZXJDbGFzc30gaGFzLWVycm9yYCA6IHdyYXBwZXJDbGFzcztcclxufVxyXG5cclxuY29uc3Qgb25DaGFuZ2VJbnB1dCA9IChwcm9wczogSUlucHV0UHJvcHMpID0+IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgcHJvcHMub25DaGFuZ2UoZS50YXJnZXQubmFtZSwgZS50YXJnZXQudmFsdWUpO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tbW9uL2NvbXBvbmVudHMvZm9ybS9pbnB1dC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSUlucHV0UHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vaW50ZXJmYWNlc1wiO1xyXG5cclxuY29uc3QgZm9ybWF0V3JhcHBlckNsYXNzID0gKHByb3BzOiBJSW5wdXRQcm9wcykgPT4ge1xyXG4gICAgY29uc3Qgd3JhcHBlckNsYXNzID0gJ2Zvcm0tZ3JvdXAnO1xyXG4gICAgcmV0dXJuIHByb3BzLmVycm9yID8gYCR7d3JhcHBlckNsYXNzfSBoYXMtZXJyb3JgIDogd3JhcHBlckNsYXNzO1xyXG59XHJcblxyXG5jb25zdCBvbkNoYW5nZUlucHV0ID0gKHByb3BzOiBJSW5wdXRQcm9wcykgPT4gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBwcm9wcy5vbkNoYW5nZShlLnRhcmdldC5uYW1lLCBlLnRhcmdldC52YWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQYXNzd29yZDogUmVhY3QuU3RhdGVsZXNzQ29tcG9uZW50PElJbnB1dFByb3BzPiA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Zvcm1hdFdyYXBwZXJDbGFzcyhwcm9wcyl9PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17cHJvcHMubmFtZX0+e3Byb3BzLmxhYmVsfTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e3Byb3BzLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cHJvcHMucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUlucHV0KHByb3BzKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlbHAtYmxvY2tcIj57cHJvcHMuZXJyb3J9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbW1vbi9jb21wb25lbnRzL2Zvcm0vcGFzc3dvcmQudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IElLZXlWYWx1ZSwgSURyb3BEb3duTGlzdFByb3BzIH0gZnJvbSBcIi4uLy4uLy4uL2ludGVyZmFjZXNcIjtcclxuXHJcbmNvbnN0IGZvcm1hdFdyYXBwZXJDbGFzcyA9IChwcm9wczogSURyb3BEb3duTGlzdFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB3cmFwcGVyQ2xhc3MgPSAnZm9ybS1ncm91cCc7XHJcbiAgICByZXR1cm4gcHJvcHMuZXJyb3IgPyBgJHt3cmFwcGVyQ2xhc3N9IGhhcy1lcnJvcmAgOiB3cmFwcGVyQ2xhc3M7XHJcbn1cclxuXHJcbmNvbnN0IG9uQ2hhbmdlSW5wdXQgPSAocHJvcHM6IElEcm9wRG93bkxpc3RQcm9wcykgPT4gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50PikgPT4ge1xyXG4gICAgcHJvcHMub25DaGFuZ2UoZS50YXJnZXQubmFtZSwgZS50YXJnZXQudmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRHJvcERvd25MaXN0OiBSZWFjdC5TdGF0ZWxlc3NDb21wb25lbnQ8SURyb3BEb3duTGlzdFByb3BzPiA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIHZhciBvcHRpb25zID0gcHJvcHMub3B0aW9ucy5tYXAoKG9wdGlvbikgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtvcHRpb24ua2V5fSB2YWx1ZT17b3B0aW9uLmtleX0+e29wdGlvbi52YWx1ZX08L29wdGlvbj5cclxuICAgICAgICApO1xyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtmb3JtYXRXcmFwcGVyQ2xhc3MocHJvcHMpfT5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e3Byb3BzLm5hbWV9Pntwcm9wcy5sYWJlbH08L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXtwcm9wcy5zZWxlY3RlZFZhbHVlfSBvbkNoYW5nZT17b25DaGFuZ2VJbnB1dChwcm9wcyl9IGlkPXtwcm9wcy5uYW1lfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIj57b3B0aW9uc308L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbW1vbi9jb21wb25lbnRzL2Zvcm0vZHJvcGRvd25saXN0LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJVGV4dEFyZWFQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi9pbnRlcmZhY2VzL0lUZXh0QXJlYVByb3BzXCI7XHJcblxyXG4vLyBjb250cm9sIG51bWJlciBvZiByb3dzIGJ5IHBhc3NpbmcgdmFsdWUgcm93c1xyXG5leHBvcnQgY29uc3QgVGV4dEFyZWE6IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDxJVGV4dEFyZWFQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtwcm9wcy5yZXF1aXJlZH1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtwcm9wcy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwcm9wcy5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSW5wdXQocHJvcHMpfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQmx1cj17b25CbHVyKHByb3BzKX1cclxuICAgICAgICAgICAgICAgICAgICByb3dzPXtwcm9wcy5yb3dzfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXtwcm9wcy5zdHlsZX1cclxuICAgICAgICAgICAgICAgICAgICBpZD17cHJvcHMuaWR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlbHAtYmxvY2tcIj57cHJvcHMuZXJyb3J9PC9kaXY+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICk7XHJcblxyXG59XHJcblxyXG5jb25zdCBvbkNoYW5nZUlucHV0ID0gKHByb3BzOiBJVGV4dEFyZWFQcm9wcykgPT4gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSA9PiB7XHJcbiAgICBwcm9wcy5vbkNoYW5nZShlLnRhcmdldC5uYW1lLCBlLnRhcmdldC52YWx1ZSk7XHJcbn1cclxuXHJcbmNvbnN0IG9uQmx1ciA9IChwcm9wczogSVRleHRBcmVhUHJvcHMpID0+IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PikgPT4ge1xyXG4gICAgaWYgKHByb3BzLm9uQmx1cikge1xyXG4gICAgICAgIHByb3BzLm9uQmx1cihlLnRhcmdldC5uYW1lLCBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21tb24vY29tcG9uZW50cy9mb3JtL3RleHRhcmVhLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJQ2hlY2tib3hQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi9pbnRlcmZhY2VzL0lDaGVja0JveFByb3BzXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IENoZWNrYm94OiBSZWFjdC5TdGF0ZWxlc3NDb21wb25lbnQ8SUNoZWNrYm94UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICBcclxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID0gXCJjaGVja0JveENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPXtwcm9wcy5zdHlsZX0gbmFtZT17cHJvcHMubmFtZX0gdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwiY2hlY2tib3hcIiBjaGVja2VkPXtwcm9wcy5jaGVja2VkfSBvbkNoYW5nZT17b25DaGVjayhwcm9wcyl9IC8+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja21hcmtcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIHtwcm9wcy5sYWJlbH08L2xhYmVsPlxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIFxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3QgZm9ybWF0V3JhcHBlckNsYXNzID0gKHByb3BzOiBJQ2hlY2tib3hQcm9wcykgPT4ge1xyXG4gICAgY29uc3Qgd3JhcHBlckNsYXNzID0gJ2Zvcm0tZ3JvdXAnO1xyXG4gICAgcmV0dXJuIHByb3BzLmVycm9yID8gYCR7d3JhcHBlckNsYXNzfSBoYXMtZXJyb3JgIDogd3JhcHBlckNsYXNzO1xyXG59XHJcblxyXG5jb25zdCBvbkNoZWNrID0gKHByb3BzOiBJQ2hlY2tib3hQcm9wcykgPT4gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBwcm9wcy5vbkNoZWNrKGUudGFyZ2V0Lm5hbWUsIGUudGFyZ2V0LmNoZWNrZWQpO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tbW9uL2NvbXBvbmVudHMvZm9ybS9jaGVja2JveC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtXZWJTY3JhcGVBcGl9IGZyb20gXCIuLi8uLi9hcGkvV2ViU2NyYXBlXCI7XHJcbmltcG9ydCB7SVJhbmRvbVF1b3RlfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9CbG9ncy9JUmFuZG9tUXVvdGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBCbG9nSGVhZGVyOiBSZWFjdC5TdGF0ZWxlc3NDb21wb25lbnQ8SVJhbmRvbVF1b3RlPiA9IChwcm9wcyA6IElSYW5kb21RdW90ZSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJ3My1jb250YWluZXIgdzMtY2VudGVyIHczLXBhZGRpbmctNDggdzMtd2hpdGUgaGVhZGVyLXNpdGVcIiBzdHlsZSA9e3tiYWNrZ3JvdW5kIDogXCJ1cmwoJycpXCJ9fT5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInczLXh4eGxhcmdlXCI+PGI+QkxPRzwvYj48L2gxPlxyXG4gICAgICAgICAgICA8aDY+e3Byb3BzLnF1b3RlfSA8YnIvPjxici8+IDxzcGFuIGNsYXNzTmFtZT1cInczLXRhZ1wiPiB7cHJvcHMuYXV0aG9yfTwvc3Bhbj48L2g2PlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgIDwvZGl2PiAgICAgIFxyXG4gICAgKVxyXG59O1xyXG5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQmxvZ3MvQmxvZ0hlYWRlci50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcclxuaW1wb3J0IHsgSUdyaWRWaWV3T3B0aW9ucyB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB7IElCbG9nRW50aXR5IH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvQmxvZ3MvSUJsb2dFbnRpdHlcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBCbG9nbGlzdDogUmVhY3QuU3RhdGVsZXNzQ29tcG9uZW50PElHcmlkVmlld09wdGlvbnM8SUJsb2dFbnRpdHk+PiA9IChwcm9wczogSUdyaWRWaWV3T3B0aW9uczxJQmxvZ0VudGl0eT4pID0+IHtcclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lID1cImhlYWRlckJsb2dGb3JtXCI+IFlPVVIgQkxPR1MgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW4tYmxvZy1jb250YWluZXIgYmxvZ3Njcm9sbGJhclwiIHN0eWxlPXtsaXN0Qm9keX0gaWQgPSBcInN0eWxlLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmRhdGFJdGVtcy5tYXAoYnVpbGRSb3cocHJvcHMpKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vIFNUWUxJTkdcclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5jb25zdCBsaXN0Qm9keTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcclxuICAgIG1heEhlaWdodDogNTAwLFxyXG4gICAgYm9yZGVyTGVmdDogXCIxcHggc29saWQgI0VERURFRFwiLFxyXG4gICAgbWFyZ2luOiAnMCBhdXRvJyxcclxuICAgIG92ZXJmbG93WTogXCJzY3JvbGxcIlxyXG59XHJcblxyXG5jb25zdCBidWlsZFJvdyA9IChwcm9wczogSUdyaWRWaWV3T3B0aW9uczxJQmxvZ0VudGl0eT4pID0+IChpdG06IElCbG9nRW50aXR5LCBuZHg6IG51bWJlcikgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGNvbC1zbS02IGN1YmUgZmFkZUluVXAgd293XCIga2V5PXtuZHh9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuLWJsb2ctc2luZ2xlIHdpdGgtc2hhZG93LWRhcmsgZmFkZUluXCIgc3R5bGU9e3t2aXNpYmlsaXR5OiBcInZpc2libGVcIiwgYW5pbWF0aW9uTmFtZTogXCJmYWRlSW5cIn19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2ctaW1hZ2UtY29udGFpbmVyXCIgc3R5bGU9IHt7YmFja2dyb3VuZDogJ3VybCgnICsgaXRtLkltYWdlICsgJykgY2VudGVyIGNlbnRlciBuby1yZXBlYXQnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6J2NvdmVyJ319PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWRkaW5nMjBcIj5cclxuICAgICAgICAgICAgICAgIDxoMz48YSBocmVmPVwiJFwiPntpdG0uTmFtZX08L2E+PC9oMz4gPHNwYW4+PHNwYW4gY2xhc3NOYW1lID0geyhpdG0uSXNQdWJsaWMgPT0gdHJ1ZSk/IFwiZ2x5cGhpY29uIGdseXBoaWNvbi1vay1zaWduXCIgOiBcIlwifT48L3NwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLW1ldGFcIj5cclxuICAgICAgICAgICAgICAgIDxwPkJ5IDxhIGhyZWY9XCIjXCI+e2l0bS5GaXJzdE5hbWV9IHtpdG0uTGFzdE5hbWV9PC9hPiA8YSBocmVmPVwiI1wiPiA8Yj5MYXN0IE1vZGlmaWVkIDogPC9iPjwvYT4gPGEgaHJlZj1cIiNcIj57aXRtLk1vZGlmaWVkRGF0ZS5zdWJzdHJpbmcoMCwxMCkucmVwbGFjZSgnLScsICcvJyl9PC9hPjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxwPiB7KGl0bS5Cb2R5Lmxlbmd0aCA8IDE1MCA/IGl0bS5Cb2R5IDogaXRtLkJvZHkuc3Vic3RyaW5nKDAsMTQ3KSArIFwiIC4uLlwiKX0gPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuc2hvd0VkaXRCdXR0b24gPyAoPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYW4tYnRuIGFuLWJ0bi1kZWZhdWx0IGJ0bi1zbVwiIG9uQ2xpY2s9e2J1dHRvbkNsaWNrKHByb3BzLCBpdG0uSWQsIFwiZWRpdFwiKX0+RWRpdDwvYnV0dG9uPikgOiAoXCJcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImRpdmlkZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5zaG93RGVsZXRlQnV0dG9uID8gKDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImFuLWJ0biBhbi1idG4tZGVmYXVsdCBidG4tc21cIiBvbkNsaWNrPXtidXR0b25DbGljayhwcm9wcywgaXRtLklkLCBcImRlbGV0ZVwiKX0+RGVsZXRlPC9idXR0b24+KSA6IChcIlwiKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG59O1xyXG5cclxuY29uc3QgYnV0dG9uQ2xpY2sgPSAocHJvcHM6IElHcmlkVmlld09wdGlvbnM8SUJsb2dFbnRpdHk+LCBpZDogbnVtYmVyLCBhY3Rpb246IHN0cmluZykgPT4gKGU6IFJlYWN0LlN5bnRoZXRpY0V2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xyXG4gICAgcHJvcHMub25CdXR0b25DbGljayhpZCwgYWN0aW9uKTtcclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0Jsb2dzL0Jsb2dMaXN0LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhvbWVQYWdlQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHt9LCBhbnk+IHtcclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXItc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW4taG9tZS1pbWctY29udGFpbmVyXCIgc3R5bGU9e3sgYmFja2dyb3VuZDogXCJ1cmwoJy4vQ29udGVudC9hc3NldHMvaW1nL2NyZWF0aXZlLWNyYWZ0LmpwZycpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0XCIsIGJhY2tncm91bmRTaXplOiAnY292ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLWJhbm5lci1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04XCIgc3R5bGU9e3sgcGFkZGluZ1RvcDogXCIxMDBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ3b3cgZmFkZUluRG93blwiIHN0eWxlPXt7IHZpc2liaWxpdHk6IFwidmlzaWJsZVwiLCBhbmltYXRpb25OYW1lOiBcImZhZGVJbkRvd25cIiB9fT5CZXR0ZXIgPHNwYW4+UHJvZmVzc2lvbmFsczwvc3Bhbj4gYXJlIHdhaXRpbmcgZm9yIDxiPnlvdTwvYj4gdG8gY29uc3VsdC48L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwid293IGZhZGVJblVwXCIgc3R5bGU9e3sgdmlzaWJpbGl0eTogXCJ2aXNpYmxlXCIsIGFuaW1hdGlvbk5hbWU6IFwiZmFkZUluVXBcIiB9fT5XZSBhcmUgdGhlIGNyZWF0aXZlIGFnZW5jeSBjb21wYW55IHRvIGhlbHAgeW91ciBidXNpbmVzcyBncm93LjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYW4tYnRuIGFuLWJ0bi1kZWZhdWx0IGJ0bi1iaWcgd293IGZhZGVJblwiIHN0eWxlPXt7IHZpc2liaWxpdHk6IFwiaGlkZGVuXCIsIGFuaW1hdGlvbk5hbWU6IFwibm9uZVwiIH19PkNoZWNrIE91dCBUb2RheSdzIEJ1aWxkITwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwid293IGZhZGVJblVwXCIgc3R5bGU9e3sgcGFkZGluZ1RvcDogXCIxMHB4XCIgfX0+IEpvaW4gdGhlIENvbW11bml0eSEgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiYW4tZm9ybS1jb250cm9sIHdvdyBmYWRlSW5VcFwiIHBsYWNlaG9sZGVyPVwiVGVsbCBVcyBZb3VyIEZpcnN0IE5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJhbi1mb3JtLWNvbnRyb2wgd293IGZhZGVJblVwXCIgcGxhY2Vob2xkZXI9XCJUZWxsIFVzIFlvdXIgTGFzdCBOYW1lXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiYW4tZm9ybS1jb250cm9sIHdvdyBmYWRlSW5VcFwiIHBsYWNlaG9sZGVyPVwiWW91ciBFbWFpbCBBZGRyZXNzIChFLmcgZXhhbXBsZUBtYWlsLmNvbSlcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJhbi1mb3JtLWNvbnRyb2wgd293IGZhZGVJblVwXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBhIFBhc3N3b3JkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiYW4tZm9ybS1jb250cm9sIHdvdyBmYWRlSW5VcFwiIHBsYWNlaG9sZGVyPVwiQ29uZmlybSBZb3VyIFBhc3N3b3JkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhbi1idG4gYW4tYnRuLWRlZmF1bHQgd293IGZhZGVJbkRvd25cIj5SZWdpc3RlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9QdWJsaWMvSG9tZVBhZ2VDb250YWluZXIudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvaGVhZGVyXCI7XHJcbmltcG9ydCB7IFB1YmxpY1dyYXBwZXIgfSBmcm9tIFwiLi9QdWJsaWNXcmFwcGVyXCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQdWJsaWNBcHA6IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDx7fT4gPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxQdWJsaWNXcmFwcGVyPlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9QdWJsaWNXcmFwcGVyPlxyXG4gICAgICAgIFxyXG4gICAgKTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL1B1YmxpY0FwcC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQdWJsaWNXcmFwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHt9LCBhbnk+IHtcclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbi1ob21lLXNlY3Rpb25cIiBpZD1cImhvbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImFuLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhci1kZWZhdWx0XCIgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiIzJjMzUzYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCAjMTYxYjFkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlIGNvbGxhcHNlZFwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNicy1leGFtcGxlLW5hdmJhci1jb2xsYXBzZS0xXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+VG9nZ2xlIG5hdmlnYXRpb248L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJhclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiL1wiPkhvYmJ5aXN0PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJicy1leGFtcGxlLW5hdmJhci1jb2xsYXBzZS0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2YmFyLW5hdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFjdGl2ZVwiPjxhIGhyZWY9XCIjaG9tZVwiPjxpIGNsYXNzTmFtZT1cImlvbi1ob21lXCI+PC9pPkhvbWU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhY3RpdmVcIj48YSBocmVmPVwiL2Jsb2dzXCI+PGkgY2xhc3NOYW1lPVwiaW9uLWRvY3VtZW50LXRleHRcIj48L2k+QmxvZzwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFjdGl2ZVwiPjxhIGhyZWY9XCIjY29udGFjdFwiPjxpPjwvaT5Mb2dpbjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIG1pbkhlaWdodDogXCIxMDB2aFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJhbi1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW4tZm9vdGVyLWJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTMgY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW4td2lkZ2V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYW4tbG9nb1wiIGhyZWY9XCIjXCI+SG9iYnlpc3Q8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29weXJpZ2h0c1wiPsKpIDIwMTggSG9iYnlpc3QuPGI+QWxsIHJpZ2h0cyByZXNlcnZlZDwvYj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTIgY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW4td2lkZ2V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImFuLXNtYWxsLXRpdGxlIGxpZ2h0LWNvbG9yXCI+Q29udGFjdDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+MTQ5IEJhY2sgU3RyZWV0LCBOWTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5XMyA3UVI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+KyAyMjMgNTQ2IDc4OTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5kaXJlY3RvcnlAZXguY29tPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zIGNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuLXdpZGdldFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJhbi1zbWFsbC10aXRsZSBsaWdodC1jb2xvclwiPkhlbHA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb250cmFyeSB0byBwb3B1bGFyIGJlbGllZiwgTG9yZW0gSXBzdW0gaXMgbm90IHNpbXBseSByYW5kb20gdGV4dC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJdCBoYXMgcm9vdHMgaW4gYSBwaWVjZSBvZiBjbGFzc05hbWVpY2FsIExhdGluLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zIGNvbC1tZC1wdXNoLTEgY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW4td2lkZ2V0IG5ld3NsZXR0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiYW4tc21hbGwtdGl0bGUgbGlnaHQtY29sb3JcIj5TdWJzY3JpYmUgdG8gb3VyIG5ld3M8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIiNcIiBjbGFzc05hbWU9XCJhbi1mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBjbGFzc05hbWU9XCJhbi1mb3JtLWNvbnRyb2wgZGFya1wiIHBsYWNlaG9sZGVyPVwiRS1tYWlsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYW4tYnRuIGFuLWJ0bi1kZWZhdWx0IGJ0bi1zdWJtaXQtZnVsbFwiPjxpIGNsYXNzTmFtZT1cImlvbi1pb3MtcGFwZXJwbGFuZVwiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL1B1YmxpY1dyYXBwZXIudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJsb2dBcGkgfSBmcm9tIFwiLi4vLi4vYXBpL0Jsb2dzL1wiO1xyXG5pbXBvcnQge1dlYlNjcmFwZUFwaX0gZnJvbSBcIi4uLy4uL2FwaS9XZWJTY3JhcGVcIjtcclxuaW1wb3J0IHsgQmxvZ0Zvcm0sQmxvZ2xpc3QsQmxvZ0hlYWRlciB9IGZyb20gXCIuLi9CbG9ncy9cIjtcclxuaW1wb3J0IHsgSUVycm9yLCBJS2V5VmFsdWUgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgeyBJQmxvZ0VudGl0eSwgSVJhbmRvbVF1b3RlIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvQmxvZ3MvXCI7XHJcblxyXG5pbnRlcmZhY2UgSUJsb2dTdGF0ZSB7XHJcbiAgICBibG9nRW50aXR5OiBJQmxvZ0VudGl0eTtcclxuICAgIGJsb2dFbnRpdHlJdGVtcyA6IElCbG9nRW50aXR5W107XHJcbiAgICAvL3JhbmRvbVF1b3RlRW50aXR5IDogSVJhbmRvbVF1b3RlO1xyXG4gICAgcXVvdGUgOiBzdHJpbmc7XHJcbiAgICBhdXRob3IgOiBzdHJpbmc7XHJcbiAgICAvL3NlbGVjdGVkVmFsdWU6IHN0cmluZztcclxuICAgIC8vdGllclR5cGVBcnJheTogSUtleVZhbHVlW107XHJcbiAgICAvL3N1YnNjcmlwdGlvbkVudGl0eUl0ZW1zOiBJU3Vic2NyaXB0aW9uVGllckZvcm1FbnRpdHlbXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJsb2dDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30sIElCbG9nU3RhdGU+e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgYmxvZ0VudGl0eToge1xyXG4gICAgICAgICAgICAgICAgTmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgIEJvZHkgOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgSXNQdWJsaWM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgSW1hZ2UgOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgVXNlckJhc2VJZCA6IDQsXHJcbiAgICAgICAgICAgICAgICBDcmVhdGVkRGF0ZTpcIlwiLFxyXG4gICAgICAgICAgICAgICAgTW9kaWZpZWREYXRlIDogXCJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBibG9nRW50aXR5SXRlbXMgOiBbXSxcclxuICAgICAgICAgICAgYXV0aG9yIDogXCJcIixcclxuICAgICAgICAgICAgcXVvdGUgOiBcIlwiXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uU3VibWl0ID0gdGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25DaGVjayA9IHRoaXMub25DaGVjay5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25CdXR0b25DbGljayA9IHRoaXMub25CdXR0b25DbGljay5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgLy8gSU5JVElBTCBTVEFURVxyXG4gICAgLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgcHJpdmF0ZSBzZXRJbml0aWFsU3RhdGUgKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgYmxvZ0VudGl0eToge1xyXG4gICAgICAgICAgICAgICAgTmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgIEJvZHkgOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgSXNQdWJsaWM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgSW1hZ2UgOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgVXNlckJhc2VJZCA6IDQsXHJcbiAgICAgICAgICAgICAgICBDcmVhdGVkRGF0ZTpcIlwiLFxyXG4gICAgICAgICAgICAgICAgTW9kaWZpZWREYXRlIDogXCJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIC8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgIC8vIE9OIENIQU5HRVxyXG4gICAgLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgcHJpdmF0ZSBvbkNoYW5nZShmaWVsZE5hbWU6IHN0cmluZywgZmllbGRWYWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgbmV4dFN0YXRlID0ge1xyXG4gICAgICAgICAgICAvL3NwcmVhZCBvcGVyYXRvciBpcyB1c2VkIHRvIGluaGVyaXQgcHJvcGVydGllcyBvZiBhbiBvYmplY3QuIE9ubHkgJ3N1YnNjcmlwdGlvbkVudGl0eScgaXMgYWx0ZXJlZC5cclxuICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICAgICAgYmxvZ0VudGl0eToge1xyXG4gICAgICAgICAgICAgICAgLy9hbGwgcHJvcGVydGllcyBhcmUgaW5oZXJlaXRlZCB3aXRoaW4gdGhlIFwiYmxvZ0VudGl0eVwiXHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLmJsb2dFbnRpdHksXHJcbiAgICAgICAgICAgICAgICBbZmllbGROYW1lXTogZmllbGRWYWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUobmV4dFN0YXRlKTtcclxuICAgIH1cclxuICAgIC8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgIC8vIE9OIENIRUNLXHJcbiAgICAvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICBwcml2YXRlIG9uQ2hlY2sobmFtZTogc3RyaW5nLCBjaGVja2VkOiBib29sZWFuKSB7XHJcbiAgICAgICAgY29uc3QgbmV4dFN0YXRlID0ge1xyXG4gICAgICAgICAgICBibG9nRW50aXR5OiB7XHJcbiAgICAgICAgICAgICAgICAvL1VwZGF0ZSB0aGUgY2hlY2tib3ggc3RhdGUgaW4gdGhlICdibG9nRW50aXR5J1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5ibG9nRW50aXR5LFxyXG4gICAgICAgICAgICAgICAgSXNQdWJsaWM6IGNoZWNrZWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKG5leHRTdGF0ZSk7XHJcbiAgICB9XHJcbiAgICAvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAvLyBXSEVOIEVESVQgT1IgREVMRVRFIEJVVFRPTiBJUyBQUkVTU0VEXHJcbiAgICAvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICBwcml2YXRlIG9uQnV0dG9uQ2xpY2soZmllbGRWYWx1ZTogbnVtYmVyLCBmaWVsZE5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIC8vbGV0ICdpbmQnIGdyYWIgdGhlIGluZGV4IHZhbHVlIHRoYXQgd2FzIGNsaWNrZWQuXHJcbiAgICAgICAgbGV0IGluZCA9IHRoaXMuc3RhdGUuYmxvZ0VudGl0eUl0ZW1zLmZpbmRJbmRleCh4ID0+IHguSWQgPT09IGZpZWxkVmFsdWUpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpbmQ6IFwiLCBpbmQpO1xyXG4gICAgICAgIGlmIChmaWVsZE5hbWUgPT09IFwiZWRpdFwiKSB7XHJcbiAgICAgICAgICAgIGlmIChmaWVsZFZhbHVlID49IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZERhdGFMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYmxvZ0VudGl0eTogdGhpcy5zdGF0ZS5ibG9nRW50aXR5SXRlbXNbaW5kXSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGROYW1lID09PSBcImRlbGV0ZVwiKSB7XHJcbiAgICAgICAgICAgIEJsb2dBcGkuQmxvZ19EZWxldGUoZmllbGRWYWx1ZSkgXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9yZWxvYWQgdGhlIGxpc3QgZW50cnkuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkRGF0YUxpc3QoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAvLyBPTiBTVUJNSVRcclxuICAgIC8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgIHByaXZhdGUgb25TdWJtaXQoKSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmJsb2dFbnRpdHkuSWQgPiAwKSB7XHJcbiAgICAgICAgICAgIC8vUFVUIFxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIC8vYWZ0ZXIgcmVwb3B1bGF0aW9uIG9mIHRleHQgY2hhbmdlcywgYW5kIGFsdGVyYXRpb25zLCBzZXQgc3RhdGUgb2YgdGhlIHN1YnNjcmlwdGlvbmVudGl0eS5cclxuICAgICAgICAgICAgICAgIGJsb2dFbnRpdHk6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmJsb2dFbnRpdHlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIEJsb2dBcGkuQmxvZ19VcGRhdGUodGhpcy5zdGF0ZS5ibG9nRW50aXR5KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vcmVzZXQgdG8gaW5pdGlhbCBzdGF0ZSwgcmVwb3B1bGF0ZSB0aWVyIFR5cGUgbGlzdCwgYW5kIHJlbG9hZCB0aGUgdGllciBsaXN0LlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkRGF0YUxpc3QoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy9QT1NUXHJcbiAgICAgICAgICAgIEJsb2dBcGkuQmxvZ19Qb3N0KHRoaXMuc3RhdGUuYmxvZ0VudGl0eSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWREYXRhTGlzdCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgLy8gR0VUIEFMTCBMSVNUXHJcbiAgICAvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICBwdWJsaWMgbG9hZERhdGFMaXN0KCl7XHJcbiAgICBCbG9nQXBpLkJsb2dfR2V0QWxsKClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Jsb2dFbnRpdHlJdGVtcyA6IHJlc3BvbnNlLkl0ZW1zfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgLy8gV0hFTiBUSEUgUEFHRSBMT0FEU1xyXG4gICAgLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgcHVibGljIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIC8vTG9hZCBsaXN0IERhdGEgdGhhdCBhcHBlYXJzIHRvIHRoZSByaWdodCBvZiB0aGUgZm9ybS5cclxuICAgICAgICB0aGlzLmxvYWREYXRhTGlzdCgpO1xyXG5cclxuICAgICAgICAvL0xvYWQgQmFubmVyIERhdGEgOiBSYW5kb20gUXVvdGUgR2VuZXJhdG9yXHJcbiAgICAgICAgV2ViU2NyYXBlQXBpLkdldFJhbmRvbVF1b3RlKClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHthdXRob3IgOiByZXNwb25zZS5BdXRob3J9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3F1b3RlIDogcmVzcG9uc2UuUXVvdGV9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgIFxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZSA9IHt7d2lkdGg6IFwiMTAwJVwiLCBtaW5IZWlnaHQ6IFwiMTUwdmhcIn19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbi1zZWN0aW9uXCIgaWQgPSBcIndvcmtcIj5cclxuICAgICAgICAgICAgICAgIHsvKlxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAqL31cclxuICAgICAgICAgICAgICAgICAgICAgPEJsb2dIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICBxdW90ZSA9IHt0aGlzLnN0YXRlLnF1b3RlfVxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhvciA9IHt0aGlzLnN0YXRlLmF1dGhvcn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCbG9nRm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9nRW50aXR5PXt0aGlzLnN0YXRlLmJsb2dFbnRpdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGVjayA9IHt0aGlzLm9uQ2hlY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCbG9nbGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhSXRlbXMgPSB7dGhpcy5zdGF0ZS5ibG9nRW50aXR5SXRlbXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQnV0dG9uQ2xpY2sgPSB7dGhpcy5vbkJ1dHRvbkNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93RWRpdEJ1dHRvbj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0RlbGV0ZUJ1dHRvbj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAvPiBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9CbG9ncy9CbG9nQ29udGFpbmVyLnRzeCIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjsgLy9heGlvcyB3b3VsZCBiZSBvdXIgYWpheFxyXG5cclxuLy9wYXRjaCBheGlvcyB0byB1c2UgYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXHJcbi8vaHR0cHM6Ly9naXRodWIuY29tL2F4aW9zL2F4aW9zL2lzc3Vlcy8zNTAjaXNzdWVjb21tZW50LTIyNzI3MDA0NlxyXG5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLnBvc3RbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc7XHJcbi8vYXhpb3MuZGVmYXVsdHMudHJhbnNmb3JtUmVxdWVzdCA9IFtmdW5jdGlvbiAoZGF0YSwgaGVhZGVycykgeyAvL3RoaXMgZnVuY3Rpb24gc3RhdGVzIHRoYXQgd2hhdGV2ZXIgcmVxdWVzdCB3ZSBwdXQgdGhyb3VnaCB3aWxsIGJlIHRyYW5zZm9ybWVkIHNvIGl0IHdpbGwgd29ya1xyXG4vLyAgICB2YXIgc3RyID0gW107XHJcbi8vICAgIGZvciAodmFyIHAgaW4gZGF0YSlcclxuLy8gICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KHApICYmIGRhdGFbcF0pIHtcclxuLy8gICAgICAgICAgICBzdHIucHVzaChlbmNvZGVVUklDb21wb25lbnQocCkgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudChkYXRhW3BdKSk7XHJcbi8vICAgICAgICB9XHJcbi8vICAgIHJldHVybiBzdHIuam9pbihcIiZcIik7XHJcbi8vfV07XHJcblxyXG5leHBvcnQgY29uc3QgYXBpRXhlY3V0ZSA9ICh1cmw6IHN0cmluZywgYWN0aW9uOiBzdHJpbmcsIGRhdGE6IGFueSk6IFByb21pc2U8YW55PiA9PiB7XHJcblxyXG4gICAgc3dpdGNoIChhY3Rpb24pIHtcclxuICAgICAgICBjYXNlIFwiR0VUXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBheGlvcy5nZXQodXJsLCB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiAocmVzcG9uc2UuZGF0YSksIChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2F0Y2ggZXJyXCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICBjYXNlIFwiUE9TVFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gYXhpb3MucG9zdCh1cmwsIGRhdGEsIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IChyZXNwb25zZS5kYXRhKSwgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjYXRjaCBlcnJcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGNhc2UgXCJQVVRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnB1dCh1cmwsIGRhdGEsIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IChyZXNwb25zZS5kYXRhKSwgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjYXRjaCBlcnJcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGNhc2UgXCJERUxFVEVcIjpcclxuICAgICAgICAgICAgcmV0dXJuIGF4aW9zLmRlbGV0ZSh1cmwsIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IChyZXNwb25zZS5kYXRhKSwgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjYXRjaCBlcnJcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBpL2FwaUV4ZWN1dGUudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IHsgQXBwUm91dGVyIH0gZnJvbSBcIi4vcm91dGVyXCI7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgICA8QXBwUm91dGVyLz4sXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIilcclxuKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9pbmRleC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZSwgYnJvd3Nlckhpc3RvcnksIEluZGV4Um91dGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XHJcbmltcG9ydCB7IEFib3V0UGFnZSwgSG9tZVBhZ2UgfSBmcm9tIFwiLi9jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IEJsb2dDb250YWluZXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL0Jsb2dzL0Jsb2dDb250YWluZXJcIjtcclxuaW1wb3J0IHsgSG9tZVBhZ2VDb250YWluZXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL1B1YmxpYy9Ib21lUGFnZUNvbnRhaW5lclwiO1xyXG5pbXBvcnQgeyBQdWJsaWNBcHAgfSBmcm9tIFwiLi9QdWJsaWNBcHBcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBcHBSb3V0ZXI6IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDx7fT4gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSb3V0ZXIgaGlzdG9yeT17YnJvd3Nlckhpc3Rvcnl9PlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e1B1YmxpY0FwcH0+XHJcbiAgICAgICAgICAgICAgICA8SW5kZXhSb3V0ZSBjb21wb25lbnQ9e0hvbWVQYWdlQ29udGFpbmVyfSAvPlxyXG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYmxvZ3NcIiBjb21wb25lbnQ9e0Jsb2dDb250YWluZXJ9Lz5cclxuICAgICAgICAgICAgPC9Sb3V0ZT5cclxuICAgICAgICA8L1JvdXRlcj5cclxuICAgICk7XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcm91dGVyLnRzeCJdLCJzb3VyY2VSb290IjoiIn0=