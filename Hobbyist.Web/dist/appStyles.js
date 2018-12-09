webpackJsonp([3],{

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(135);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(21)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!./site.css", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!./site.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato:100,300,400);", ""]);

// module
exports.push([module.i, ".top-buffer {\r\n    margin-top: 20px;\r\n}\r\n\r\n.about-page {\r\n    position: relative;\r\n    top: -20px;\r\n}\r\n\r\n    .about-page .jumbotron {\r\n        margin: 0;\r\n        background: rgba(9,69,95,0.8);\r\n        color: white;\r\n        border-radius: 0 !important;\r\n    }\r\n/*React apply activeClassName to <a> element, but Bootstrap active class is over <li> element*/\r\n.navbar .nav .active, .navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus {\r\n    /*background: #e7e7e7 !important;*/\r\n    color: #38a6a6 !important;\r\n}\r\n\r\n.avatar {\r\n    max-width: 80px;\r\n}\r\n\r\n.navbar-default .navbar-nav > li > a:hover, .navbar-default .navbar-nav > li > a:focus {\r\n    /* color: #333; */\r\n    background-color: transparent !important;\r\n}\r\n\r\n.navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus {\r\n    color: #38a6a6 !important;\r\n    /* background-color: #e7e7e7; } */\r\n}\r\n\r\ninput::-webkit-input-placeholder, textarea::-webkit-input-placeholder {\r\n    color: #aca49c;\r\n    font-size: 0.875em;\r\n}\r\n\r\ninput:focus::-webkit-input-placeholder, textarea:focus::-webkit-input-placeholder {\r\n    color: #bbb5af;\r\n}\r\n\r\ninput::-moz-placeholder, textarea::-moz-placeholder {\r\n    color: #aca49c;\r\n    font-size: 0.875em;\r\n}\r\n\r\ninput:focus::-moz-placeholder, textarea:focus::-moz-placeholder {\r\n    color: #bbb5af;\r\n}\r\n\r\ninput::placeholder, textarea::placeholder {\r\n    color: #aca49c;\r\n    font-size: 0.875em;\r\n}\r\n\r\ninput:focus::placeholder, textarea::focus:placeholder {\r\n    color: #bbb5af;\r\n}\r\n\r\ninput::-ms-placeholder, textarea::-ms-placeholder {\r\n    color: #aca49c;\r\n    font-size: 0.875em;\r\n}\r\n\r\ninput:focus::-ms-placeholder, textarea:focus::-ms-placeholder {\r\n    color: #bbb5af;\r\n}\r\n\r\n/* on hover placeholder */\r\n\r\ninput:hover::-webkit-input-placeholder, textarea:hover::-webkit-input-placeholder {\r\n    color: #e2dedb;\r\n    font-size: 0.875em;\r\n}\r\n\r\ninput:hover:focus::-webkit-input-placeholder, textarea:hover:focus::-webkit-input-placeholder {\r\n    color: #cbc6c1;\r\n}\r\n\r\ninput:hover::-moz-placeholder, textarea:hover::-moz-placeholder {\r\n    color: #e2dedb;\r\n    font-size: 0.875em;\r\n}\r\n\r\ninput:hover:focus::-moz-placeholder, textarea:hover:focus::-moz-placeholder {\r\n    color: #cbc6c1;\r\n}\r\n\r\ninput:hover::placeholder, textarea:hover::placeholder {\r\n    color: #e2dedb;\r\n    font-size: 0.875em;\r\n}\r\n\r\ninput:hover:focus::placeholder, textarea:hover:focus::placeholder {\r\n    color: #cbc6c1;\r\n}\r\n\r\ninput:hover::placeholder, textarea:hover::placeholder {\r\n    color: #e2dedb;\r\n    font-size: 0.875em;\r\n}\r\n\r\ninput:hover:focus::-ms-placeholder, textarea:hover::focus:-ms-placeholder {\r\n    color: #cbc6c1;\r\n}\r\n\r\n#form {\r\n    position: relative;\r\n    width: 500px;\r\n    margin: 50px auto 100px auto;\r\n}\r\n\r\n.blogInput{\r\n    font-family: 'Lato', sans-serif;\r\n    font-size: 0.875em;\r\n    width: 470px;\r\n    height: 50px;\r\n    padding: 0px 15px 0px 15px;\r\n    background: transparent;\r\n    outline: none;\r\n    color: #726659;\r\n    border: solid 1px #b3aca7;\r\n    border-bottom: none;\r\n    transition: all 0.3s ease-in-out;\r\n    -webkit-transition: all 0.3s ease-in-out;\r\n    -moz-transition: all 0.3s ease-in-out;\r\n    -ms-transition: all 0.3s ease-in-out;\r\n}\r\n\r\n/*input:hover {\r\n        background: #b3aca7;\r\n        color: #e2dedb;\r\n    }*/\r\n\r\ntextarea {\r\n    width: 470px;\r\n    max-width: 470px;\r\n    height: 110px;\r\n    max-height: 110px;\r\n    padding: 15px;\r\n    background: transparent;\r\n    outline: none;\r\n    color: #726659;\r\n    font-family: 'Lato', sans-serif;\r\n    font-size: 0.875em;\r\n    border: solid 1px #b3aca7;\r\n    transition: all 0.3s ease-in-out;\r\n    -webkit-transition: all 0.3s ease-in-out;\r\n    -moz-transition: all 0.3s ease-in-out;\r\n    -ms-transition: all 0.3s ease-in-out;\r\n}\r\n\r\n/*textarea:hover {\r\n        background: #b3aca7;\r\n        color: #e2dedb;\r\n    }*/\r\n\r\n#submit {\r\n    width: 502px;\r\n    padding: 0;\r\n    margin: -5px 0px 0px 0px;\r\n    font-family: 'Lato', sans-serif;\r\n    font-size: 0.875em;\r\n    color: #b3aca7;\r\n    outline: none;\r\n    cursor: pointer;\r\n    border: solid 1px #b3aca7;\r\n    border-top: none;\r\n}\r\n\r\n    #submit:hover {\r\n        color: #e2dedb;\r\n    }\r\n\r\n.headerBlogForm {\r\n    position: relative;\r\n    margin: 25px 0 25px 0;\r\n    font-size: 2.3em;\r\n    text-align: center;\r\n    letter-spacing: 7px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*Banner */\r\n.an-profile-banner {\r\n    position: relative;\r\n    width: 100%;\r\n    padding: 60px 0;\r\n    display: block;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n\r\n.an-profile-banner .an-profile-overlay {\r\n    background: rgba(0, 0, 0, 0.6);\r\n}\r\n\r\n\r\n.overlay-utility, .an-user-single .profile-pic-blur-bg .overlay, .an-profile-banner .an-profile-overlay, .an-page-consturction .overlay, .an-porfolio-single a .overlay {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    left: 0;\r\n    top: 0;\r\n    z-index: 10;\r\n}\r\n\r\n.an-inner-page-title {\r\n    position: relative;\r\n    padding: 40px 0;\r\n    z-index: 10;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nHTML SCSS Result Edit on * {\r\n    padding: 0;\r\n    /* Standard Reset, and we're adding box-sizing:border-box because it's awesome. */\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    -webkit-box-sizing: border-box;\r\n    -webkit-transition: all 0s ease-in-out;\r\n    -moz-transition: all 0s ease-in-out;\r\n    -o-transition: all 0s ease-in-out;\r\n    transition: all 0s ease-in-out;\r\n}\r\n\r\n.content-box {\r\n    width: 100%;\r\n    height: 400px;\r\n    max-width: 80%;\r\n    margin: 94px auto 0 auto;\r\n    position: relative;\r\n    /* So we can position the banner within the box */\r\n    background: gray;\r\n    border: 5px solid white;\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, .3);\r\n    -moz-box-shadow: 0 0 10px rgba(0, 0, 0, .3);\r\n    -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, .3);\r\n}\r\n\r\n#ribbon-container {\r\n    position: absolute;\r\n    top: 15px;\r\n    right: -20px;\r\n    overflow: visible;\r\n    /* so we can see the pseudo-elements we're going to add to the anchor */\r\n    font-size: 18px;\r\n    /* font-size and line-height must be equal so we can account for the height of the banner */\r\n    line-height: 18px;\r\n}\r\n\r\n    #ribbon-container:before {\r\n        content: \"\";\r\n        height: 0;\r\n        width: 0;\r\n        display: block;\r\n        position: absolute;\r\n        top: 3px;\r\n        left: 0;\r\n        border-top: 29px solid rgba(0, 0, 0, .3);\r\n        /* These 4 border properties create the first part of our drop-shadow */\r\n        border-bottom: 29px solid rgba(0, 0, 0, .3);\r\n        border-right: 29px solid rgba(0, 0, 0, .3);\r\n        border-left: 29px solid transparent;\r\n    }\r\n\r\n    #ribbon-container:after {\r\n        /* This adds the second part of our dropshadow */\r\n        content: \"\";\r\n        height: 3px;\r\n        background: rgba(0, 0, 0, .3);\r\n        display: block;\r\n        position: absolute;\r\n        bottom: -3px;\r\n        left: 58px;\r\n        right: 3px;\r\n    }\r\n\r\n    #ribbon-container a {\r\n        display: block;\r\n        padding: 20px;\r\n        position: relative;\r\n        /* allows us to position our pseudo-elements properly */\r\n        background: #0089d0;\r\n        overflow: visible;\r\n        height: 58px;\r\n        margin-left: 29px;\r\n        color: #fff;\r\n        text-decoration: none;\r\n    }\r\n\r\n        #ribbon-container a:after {\r\n            /* this creates the \"folded\" part of our ribbon */\r\n            content: \"\";\r\n            height: 0;\r\n            width: 0;\r\n            display: block;\r\n            position: absolute;\r\n            bottom: -15px;\r\n            right: 0;\r\n            border-top: 15px solid #004a70;\r\n            border-right: 15px solid transparent;\r\n        }\r\n\r\n        #ribbon-container a:before {\r\n            /* this creates the \"forked\" part of our ribbon */\r\n            content: \"\";\r\n            height: 0;\r\n            width: 0;\r\n            display: block;\r\n            position: absolute;\r\n            top: 0;\r\n            left: -29px;\r\n            border-top: 29px solid #0089d0;\r\n            border-bottom: 29px solid #0089d0;\r\n            border-right: 29px solid transparent;\r\n            border-left: 29px solid transparent;\r\n        }\r\n\r\n        #ribbon-container a:hover {\r\n            background: #009ff1;\r\n        }\r\n\r\n            #ribbon-container a:hover:before {\r\n                /* this makes sure that the \"forked\" part of the ribbon changes color with the anchor on :hover */\r\n                border-top: 29px solid #009ff1;\r\n                border-bottom: 29px solid #009ff1;\r\n     \r\n                \r\n                \r\n             }\r\n\r\n\r\n/*CHECKBOX*/\r\n\r\n/* Customize the label (the container) */\r\n.checkBoxContainer {\r\n    display: block;\r\n    position: relative;\r\n    padding-left: 35px;\r\n    margin-bottom: 12px;\r\n   \r\n}\r\n\r\n\r\n    .checkBoxContainer input {\r\n        position: absolute;\r\n        opacity: 0;\r\n        cursor: pointer;\r\n    }\r\n\r\n/* Create a custom checkbox */\r\n.checkmark {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 25px;\r\n    width: 25px;\r\n    background-color: #eee;\r\n}\r\n\r\n/* On mouse-over, add a grey background color */\r\n.checkBoxContainer:hover input ~ .checkmark {\r\n    background-color: #ccc;\r\n}\r\n\r\n/* When the checkbox is checked, add a blue background */\r\n.checkBoxContainer input:checked ~ .checkmark {\r\n    background-color: #38a6a6;\r\n}\r\n\r\n/* Create the checkmark/indicator (hidden when not checked) */\r\n.checkmark:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: none;\r\n}\r\n\r\n/* Show the checkmark when checked */\r\n.checkBoxContainer input:checked ~ .checkmark:after {\r\n    display: block;\r\n}\r\n\r\n/* Style the checkmark/indicator */\r\n.checkBoxContainer .checkmark:after {\r\n    left: 9px;\r\n    top: 5px;\r\n    width: 5px;\r\n    height: 10px;\r\n    border: solid white;\r\n    border-width: 0 3px 3px 0;\r\n    -webkit-transform: rotate(45deg);\r\n    -ms-transform: rotate(45deg);\r\n    transform: rotate(45deg);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*\r\ninput[type=\"checkbox\"] + label, input[type=\"radio\"] + label {\r\n    color: #000000;\r\n}\r\n\r\ninput[type=\"checkbox\"] + label, input[type=\"radio\"] + label {\r\n    text-decoration: none;\r\n    -moz-user-select: none;\r\n    -webkit-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    font-size: 1rem;\r\n    font-weight: 300;\r\n    padding-left: 2.4rem;\r\n    padding-right: 0.75rem;\r\n    position: relative;\r\n    margin-bottom: 0;\r\n}\r\n*/\r\nlabel {\r\n    display: block;\r\n    font-size: 0.9rem;\r\n    font-weight: 400;\r\n    margin: 0 0 1rem 0;\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    font-size: 100%;\r\n    font: inherit;\r\n    vertical-align: baseline;\r\n}\r\n\r\n#style-4::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n    background-color: #F5F5F5;\r\n}\r\n\r\n#style-4::-webkit-scrollbar {\r\n    width: 2px;\r\n    background-color: #F5F5F5;\r\n}\r\n\r\n#style-4::-webkit-scrollbar-thumb {\r\n    background-color: #000000;\r\n    border: 2px solid #555555;\r\n}\r\n\r\n.blogScrollbar {\r\n    margin-left: 30px;\r\n    float: left;\r\n    height: 300px;\r\n    width: 65px;\r\n    background: #F5F5F5;\r\n    overflow-y: scroll;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.force-overflow {\r\n    min-height: 450px;\r\n}\r\n\r\n.blogscrollbar {\r\n    max-height: 500px !important;\r\n    border-left: 1px solid rgb(237, 237, 237) !important;\r\n    margin: 0px auto !important;\r\n    overflow-y: scroll !important;\r\n    overflow-x : hidden !important;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.divider {\r\n    width: 5px;\r\n    height: auto;\r\n    display: inline-block;\r\n}\r\n\r\n.gridDiv {\r\n    height: 60%;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ 20:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(33);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 33:
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })

},[134]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jc3Mvc2l0ZS5jc3M/MGU0MyIsIndlYnBhY2s6Ly8vLi9jc3Mvc2l0ZS5jc3MiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0EsRUFBRTs7QUFFRixnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUM1Q0E7QUFDQTtBQUNBLCtGQUFnRzs7QUFFaEc7QUFDQSxzQ0FBdUMseUJBQXlCLEtBQUsscUJBQXFCLDJCQUEyQixtQkFBbUIsS0FBSyxvQ0FBb0Msc0JBQXNCLDBDQUEwQyx5QkFBeUIsd0NBQXdDLFNBQVMsMFFBQTBRLHlDQUF5QyxvQ0FBb0MsS0FBSyxpQkFBaUIsd0JBQXdCLEtBQUssZ0dBQWdHLHVCQUF1QixvREFBb0QsS0FBSyxxSkFBcUosa0NBQWtDLHFDQUFxQyxFQUFFLFFBQVEsK0VBQStFLHVCQUF1QiwyQkFBMkIsS0FBSywyRkFBMkYsdUJBQXVCLEtBQUssNkRBQTZELHVCQUF1QiwyQkFBMkIsS0FBSyx5RUFBeUUsdUJBQXVCLEtBQUssbURBQW1ELHVCQUF1QiwyQkFBMkIsS0FBSywrREFBK0QsdUJBQXVCLEtBQUssMkRBQTJELHVCQUF1QiwyQkFBMkIsS0FBSyx1RUFBdUUsdUJBQXVCLEtBQUssNkhBQTZILHVCQUF1QiwyQkFBMkIsS0FBSyx1R0FBdUcsdUJBQXVCLEtBQUsseUVBQXlFLHVCQUF1QiwyQkFBMkIsS0FBSyxxRkFBcUYsdUJBQXVCLEtBQUssK0RBQStELHVCQUF1QiwyQkFBMkIsS0FBSywyRUFBMkUsdUJBQXVCLEtBQUssK0RBQStELHVCQUF1QiwyQkFBMkIsS0FBSyxtRkFBbUYsdUJBQXVCLEtBQUssZUFBZSwyQkFBMkIscUJBQXFCLHFDQUFxQyxLQUFLLG1CQUFtQix3Q0FBd0MsMkJBQTJCLHFCQUFxQixxQkFBcUIsbUNBQW1DLGdDQUFnQyxzQkFBc0IsdUJBQXVCLGtDQUFrQyw0QkFBNEIseUNBQXlDLGlEQUFpRCw4Q0FBOEMsNkNBQTZDLEtBQUssdUJBQXVCLGdDQUFnQywyQkFBMkIsU0FBUyxvQkFBb0IscUJBQXFCLHlCQUF5QixzQkFBc0IsMEJBQTBCLHNCQUFzQixnQ0FBZ0Msc0JBQXNCLHVCQUF1Qix3Q0FBd0MsMkJBQTJCLGtDQUFrQyx5Q0FBeUMsaURBQWlELDhDQUE4Qyw2Q0FBNkMsS0FBSywwQkFBMEIsZ0NBQWdDLDJCQUEyQixTQUFTLG1CQUFtQixxQkFBcUIsbUJBQW1CLGlDQUFpQyx3Q0FBd0MsMkJBQTJCLHVCQUF1QixzQkFBc0Isd0JBQXdCLGtDQUFrQyx5QkFBeUIsS0FBSywyQkFBMkIsMkJBQTJCLFNBQVMseUJBQXlCLDJCQUEyQiw4QkFBOEIseUJBQXlCLDJCQUEyQiw0QkFBNEIsS0FBSyxtRkFBbUYsMkJBQTJCLG9CQUFvQix3QkFBd0IsdUJBQXVCLDRCQUE0QixLQUFLLG9EQUFvRCx1Q0FBdUMsS0FBSyxxTEFBcUwsMkJBQTJCLG9CQUFvQixxQkFBcUIsZ0JBQWdCLGVBQWUsb0JBQW9CLEtBQUssOEJBQThCLDJCQUEyQix3QkFBd0Isb0JBQW9CLEtBQUssb0VBQW9FLG1CQUFtQiw0R0FBNEcsK0JBQStCLG9DQUFvQyx1Q0FBdUMsK0NBQStDLDRDQUE0QywwQ0FBMEMsdUNBQXVDLEtBQUssc0JBQXNCLG9CQUFvQixzQkFBc0IsdUJBQXVCLGlDQUFpQywyQkFBMkIsbUZBQW1GLGdDQUFnQywrQ0FBK0Msb0RBQW9ELHVEQUF1RCxLQUFLLDJCQUEyQiwyQkFBMkIsa0JBQWtCLHFCQUFxQiwwQkFBMEIsd0dBQXdHLDhIQUE4SCxLQUFLLHNDQUFzQywwQkFBMEIsc0JBQXNCLHFCQUFxQiwyQkFBMkIsK0JBQStCLHFCQUFxQixvQkFBb0IscURBQXFELDRJQUE0SSx1REFBdUQsZ0RBQWdELFNBQVMscUNBQXFDLHVGQUF1Rix3QkFBd0IsMENBQTBDLDJCQUEyQiwrQkFBK0IseUJBQXlCLHVCQUF1Qix1QkFBdUIsU0FBUyxpQ0FBaUMsMkJBQTJCLDBCQUEwQiwrQkFBK0Isb0dBQW9HLDhCQUE4Qix5QkFBeUIsOEJBQThCLHdCQUF3QixrQ0FBa0MsU0FBUywyQ0FBMkMsa0dBQWtHLDBCQUEwQix5QkFBeUIsK0JBQStCLG1DQUFtQyw4QkFBOEIseUJBQXlCLCtDQUErQyxxREFBcUQsYUFBYSw0Q0FBNEMsa0dBQWtHLDBCQUEwQix5QkFBeUIsK0JBQStCLG1DQUFtQyx1QkFBdUIsNEJBQTRCLCtDQUErQyxrREFBa0QscURBQXFELG9EQUFvRCxhQUFhLDJDQUEyQyxvQ0FBb0MsYUFBYSxzREFBc0QsMktBQTJLLHNEQUFzRCxtRUFBbUUsaUdBQWlHLHVCQUF1QiwyQkFBMkIsMkJBQTJCLDRCQUE0QixZQUFZLDBDQUEwQywrQkFBK0IsdUJBQXVCLDRCQUE0QixTQUFTLHNEQUFzRCwyQkFBMkIsZUFBZSxnQkFBZ0IscUJBQXFCLG9CQUFvQiwrQkFBK0IsS0FBSyx5R0FBeUcsK0JBQStCLEtBQUssb0hBQW9ILGtDQUFrQyxLQUFLLDRGQUE0RixzQkFBc0IsMkJBQTJCLHNCQUFzQixLQUFLLHNHQUFzRyx1QkFBdUIsS0FBSyxvRkFBb0Ysa0JBQWtCLGlCQUFpQixtQkFBbUIscUJBQXFCLDRCQUE0QixrQ0FBa0MseUNBQXlDLHFDQUFxQyxpQ0FBaUMsS0FBSywyR0FBMkcsdUJBQXVCLEtBQUsseUVBQXlFLDhCQUE4QiwrQkFBK0Isa0NBQWtDLDhCQUE4QiwwQkFBMEIsd0JBQXdCLDhCQUE4Qix3QkFBd0IseUJBQXlCLDZCQUE2QiwrQkFBK0IsMkJBQTJCLHlCQUF5QixLQUFLLGlCQUFpQix1QkFBdUIsMEJBQTBCLHlCQUF5QiwyQkFBMkIsa0JBQWtCLG1CQUFtQixrQkFBa0Isd0JBQXdCLHNCQUFzQixpQ0FBaUMsS0FBSywyQ0FBMkMsMERBQTBELGtDQUFrQyxLQUFLLHFDQUFxQyxtQkFBbUIsa0NBQWtDLEtBQUssMkNBQTJDLGtDQUFrQyxrQ0FBa0MsS0FBSyx3QkFBd0IsMEJBQTBCLG9CQUFvQixzQkFBc0Isb0JBQW9CLDRCQUE0QiwyQkFBMkIsNEJBQTRCLEtBQUsseUJBQXlCLDBCQUEwQixLQUFLLHdCQUF3QixxQ0FBcUMsNkRBQTZELG9DQUFvQyxzQ0FBc0MsdUNBQXVDLEtBQUssa0NBQWtDLG1CQUFtQixxQkFBcUIsOEJBQThCLEtBQUssa0JBQWtCLG9CQUFvQixLQUFLOztBQUUxM1k7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxnQkFBZ0I7QUFDbkQsSUFBSTtBQUNKO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9CQUFvQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsY0FBYzs7QUFFbEU7QUFDQTs7Ozs7Ozs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLG1CQUFtQjtBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDOztBQUVBO0FBQ0EsbUJBQW1CLDJCQUEyQjs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixtQkFBbUI7QUFDbkM7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQiwyQkFBMkI7QUFDNUM7QUFDQTs7QUFFQSxRQUFRLHVCQUF1QjtBQUMvQjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlCQUFpQix1QkFBdUI7QUFDeEM7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjOztBQUVkLGtEQUFrRCxzQkFBc0I7QUFDeEU7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdFhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxXQUFXLEVBQUU7QUFDckQsd0NBQXdDLFdBQVcsRUFBRTs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxzQ0FBc0M7QUFDdEMsR0FBRztBQUNIO0FBQ0EsOERBQThEO0FBQzlEOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHBTdHlsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zaXRlLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zaXRlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc2l0ZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Nzcy9zaXRlLmNzc1xuLy8gbW9kdWxlIGlkID0gMTM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86MTAwLDMwMCw0MDApO1wiLCBcIlwiXSk7XG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnRvcC1idWZmZXIge1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtcGFnZSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdG9wOiAtMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuICAgIC5hYm91dC1wYWdlIC5qdW1ib3Ryb24ge1xcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSg5LDY5LDk1LDAuOCk7XFxyXFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XFxyXFxuICAgIH1cXHJcXG4vKlJlYWN0IGFwcGx5IGFjdGl2ZUNsYXNzTmFtZSB0byA8YT4gZWxlbWVudCwgYnV0IEJvb3RzdHJhcCBhY3RpdmUgY2xhc3MgaXMgb3ZlciA8bGk+IGVsZW1lbnQqL1xcclxcbi5uYXZiYXIgLm5hdiAuYWN0aXZlLCAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgPiAuYWN0aXZlID4gYSwgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2ID4gLmFjdGl2ZSA+IGE6aG92ZXIsIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiA+IC5hY3RpdmUgPiBhOmZvY3VzIHtcXHJcXG4gICAgLypiYWNrZ3JvdW5kOiAjZTdlN2U3ICFpbXBvcnRhbnQ7Ki9cXHJcXG4gICAgY29sb3I6ICMzOGE2YTYgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLmF2YXRhciB7XFxyXFxuICAgIG1heC13aWR0aDogODBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2ID4gbGkgPiBhOmhvdmVyLCAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgPiBsaSA+IGE6Zm9jdXMge1xcclxcbiAgICAvKiBjb2xvcjogIzMzMzsgKi9cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2ID4gLmFjdGl2ZSA+IGEsIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiA+IC5hY3RpdmUgPiBhOmhvdmVyLCAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgPiAuYWN0aXZlID4gYTpmb2N1cyB7XFxyXFxuICAgIGNvbG9yOiAjMzhhNmE2ICFpbXBvcnRhbnQ7XFxyXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNlN2U3ZTc7IH0gKi9cXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsIHRleHRhcmVhOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXHJcXG4gICAgY29sb3I6ICNhY2E0OWM7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsIHRleHRhcmVhOmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXHJcXG4gICAgY29sb3I6ICNiYmI1YWY7XFxyXFxufVxcclxcblxcclxcbmlucHV0OjotbW96LXBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7XFxyXFxuICAgIGNvbG9yOiAjYWNhNDljO1xcclxcbiAgICBmb250LXNpemU6IDAuODc1ZW07XFxyXFxufVxcclxcblxcclxcbmlucHV0OmZvY3VzOjotbW96LXBsYWNlaG9sZGVyLCB0ZXh0YXJlYTpmb2N1czo6LW1vei1wbGFjZWhvbGRlciB7XFxyXFxuICAgIGNvbG9yOiAjYmJiNWFmO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dDo6cGxhY2Vob2xkZXIsIHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxyXFxuICAgIGNvbG9yOiAjYWNhNDljO1xcclxcbiAgICBmb250LXNpemU6IDAuODc1ZW07XFxyXFxufVxcclxcblxcclxcbmlucHV0OmZvY3VzOjpwbGFjZWhvbGRlciwgdGV4dGFyZWE6OmZvY3VzOnBsYWNlaG9sZGVyIHtcXHJcXG4gICAgY29sb3I6ICNiYmI1YWY7XFxyXFxufVxcclxcblxcclxcbmlucHV0OjotbXMtcGxhY2Vob2xkZXIsIHRleHRhcmVhOjotbXMtcGxhY2Vob2xkZXIge1xcclxcbiAgICBjb2xvcjogI2FjYTQ5YztcXHJcXG4gICAgZm9udC1zaXplOiAwLjg3NWVtO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dDpmb2N1czo6LW1zLXBsYWNlaG9sZGVyLCB0ZXh0YXJlYTpmb2N1czo6LW1zLXBsYWNlaG9sZGVyIHtcXHJcXG4gICAgY29sb3I6ICNiYmI1YWY7XFxyXFxufVxcclxcblxcclxcbi8qIG9uIGhvdmVyIHBsYWNlaG9sZGVyICovXFxyXFxuXFxyXFxuaW5wdXQ6aG92ZXI6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsIHRleHRhcmVhOmhvdmVyOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXHJcXG4gICAgY29sb3I6ICNlMmRlZGI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6aG92ZXI6Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsIHRleHRhcmVhOmhvdmVyOmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXHJcXG4gICAgY29sb3I6ICNjYmM2YzE7XFxyXFxufVxcclxcblxcclxcbmlucHV0OmhvdmVyOjotbW96LXBsYWNlaG9sZGVyLCB0ZXh0YXJlYTpob3Zlcjo6LW1vei1wbGFjZWhvbGRlciB7XFxyXFxuICAgIGNvbG9yOiAjZTJkZWRiO1xcclxcbiAgICBmb250LXNpemU6IDAuODc1ZW07XFxyXFxufVxcclxcblxcclxcbmlucHV0OmhvdmVyOmZvY3VzOjotbW96LXBsYWNlaG9sZGVyLCB0ZXh0YXJlYTpob3Zlcjpmb2N1czo6LW1vei1wbGFjZWhvbGRlciB7XFxyXFxuICAgIGNvbG9yOiAjY2JjNmMxO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dDpob3Zlcjo6cGxhY2Vob2xkZXIsIHRleHRhcmVhOmhvdmVyOjpwbGFjZWhvbGRlciB7XFxyXFxuICAgIGNvbG9yOiAjZTJkZWRiO1xcclxcbiAgICBmb250LXNpemU6IDAuODc1ZW07XFxyXFxufVxcclxcblxcclxcbmlucHV0OmhvdmVyOmZvY3VzOjpwbGFjZWhvbGRlciwgdGV4dGFyZWE6aG92ZXI6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcXHJcXG4gICAgY29sb3I6ICNjYmM2YzE7XFxyXFxufVxcclxcblxcclxcbmlucHV0OmhvdmVyOjpwbGFjZWhvbGRlciwgdGV4dGFyZWE6aG92ZXI6OnBsYWNlaG9sZGVyIHtcXHJcXG4gICAgY29sb3I6ICNlMmRlZGI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6aG92ZXI6Zm9jdXM6Oi1tcy1wbGFjZWhvbGRlciwgdGV4dGFyZWE6aG92ZXI6OmZvY3VzOi1tcy1wbGFjZWhvbGRlciB7XFxyXFxuICAgIGNvbG9yOiAjY2JjNmMxO1xcclxcbn1cXHJcXG5cXHJcXG4jZm9ybSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgd2lkdGg6IDUwMHB4O1xcclxcbiAgICBtYXJnaW46IDUwcHggYXV0byAxMDBweCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uYmxvZ0lucHV0e1xcclxcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDAuODc1ZW07XFxyXFxuICAgIHdpZHRoOiA0NzBweDtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBwYWRkaW5nOiAwcHggMTVweCAwcHggMTVweDtcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGNvbG9yOiAjNzI2NjU5O1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjYjNhY2E3O1xcclxcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXHJcXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXHJcXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4vKmlucHV0OmhvdmVyIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6ICNiM2FjYTc7XFxyXFxuICAgICAgICBjb2xvcjogI2UyZGVkYjtcXHJcXG4gICAgfSovXFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgICB3aWR0aDogNDcwcHg7XFxyXFxuICAgIG1heC13aWR0aDogNDcwcHg7XFxyXFxuICAgIGhlaWdodDogMTEwcHg7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDExMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgY29sb3I6ICM3MjY2NTk7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2IzYWNhNztcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLyp0ZXh0YXJlYTpob3ZlciB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiAjYjNhY2E3O1xcclxcbiAgICAgICAgY29sb3I6ICNlMmRlZGI7XFxyXFxuICAgIH0qL1xcclxcblxcclxcbiNzdWJtaXQge1xcclxcbiAgICB3aWR0aDogNTAycHg7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogLTVweCAwcHggMHB4IDBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAwLjg3NWVtO1xcclxcbiAgICBjb2xvcjogI2IzYWNhNztcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjYjNhY2E3O1xcclxcbiAgICBib3JkZXItdG9wOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4gICAgI3N1Ym1pdDpob3ZlciB7XFxyXFxuICAgICAgICBjb2xvcjogI2UyZGVkYjtcXHJcXG4gICAgfVxcclxcblxcclxcbi5oZWFkZXJCbG9nRm9ybSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbWFyZ2luOiAyNXB4IDAgMjVweCAwO1xcclxcbiAgICBmb250LXNpemU6IDIuM2VtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiA3cHg7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbi8qQmFubmVyICovXFxyXFxuLmFuLXByb2ZpbGUtYmFubmVyIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogNjBweCAwO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmFuLXByb2ZpbGUtYmFubmVyIC5hbi1wcm9maWxlLW92ZXJsYXkge1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5vdmVybGF5LXV0aWxpdHksIC5hbi11c2VyLXNpbmdsZSAucHJvZmlsZS1waWMtYmx1ci1iZyAub3ZlcmxheSwgLmFuLXByb2ZpbGUtYmFubmVyIC5hbi1wcm9maWxlLW92ZXJsYXksIC5hbi1wYWdlLWNvbnN0dXJjdGlvbiAub3ZlcmxheSwgLmFuLXBvcmZvbGlvLXNpbmdsZSBhIC5vdmVybGF5IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHotaW5kZXg6IDEwO1xcclxcbn1cXHJcXG5cXHJcXG4uYW4taW5uZXItcGFnZS10aXRsZSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgcGFkZGluZzogNDBweCAwO1xcclxcbiAgICB6LWluZGV4OiAxMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuSFRNTCBTQ1NTIFJlc3VsdCBFZGl0IG9uICoge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAvKiBTdGFuZGFyZCBSZXNldCwgYW5kIHdlJ3JlIGFkZGluZyBib3gtc2l6aW5nOmJvcmRlci1ib3ggYmVjYXVzZSBpdCdzIGF3ZXNvbWUuICovXFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDBzIGVhc2UtaW4tb3V0O1xcclxcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwcyBlYXNlLWluLW91dDtcXHJcXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDBzIGVhc2UtaW4tb3V0O1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMHMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LWJveCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDQwMHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDgwJTtcXHJcXG4gICAgbWFyZ2luOiA5NHB4IGF1dG8gMCBhdXRvO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIC8qIFNvIHdlIGNhbiBwb3NpdGlvbiB0aGUgYmFubmVyIHdpdGhpbiB0aGUgYm94ICovXFxyXFxuICAgIGJhY2tncm91bmQ6IGdyYXk7XFxyXFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIC4zKTtcXHJcXG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIC4zKTtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIC4zKTtcXHJcXG59XFxyXFxuXFxyXFxuI3JpYmJvbi1jb250YWluZXIge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMTVweDtcXHJcXG4gICAgcmlnaHQ6IC0yMHB4O1xcclxcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXHJcXG4gICAgLyogc28gd2UgY2FuIHNlZSB0aGUgcHNldWRvLWVsZW1lbnRzIHdlJ3JlIGdvaW5nIHRvIGFkZCB0byB0aGUgYW5jaG9yICovXFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgLyogZm9udC1zaXplIGFuZCBsaW5lLWhlaWdodCBtdXN0IGJlIGVxdWFsIHNvIHdlIGNhbiBhY2NvdW50IGZvciB0aGUgaGVpZ2h0IG9mIHRoZSBiYW5uZXIgKi9cXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XFxyXFxufVxcclxcblxcclxcbiAgICAjcmliYm9uLWNvbnRhaW5lcjpiZWZvcmUge1xcclxcbiAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgICAgICBoZWlnaHQ6IDA7XFxyXFxuICAgICAgICB3aWR0aDogMDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgdG9wOiAzcHg7XFxyXFxuICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgYm9yZGVyLXRvcDogMjlweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zKTtcXHJcXG4gICAgICAgIC8qIFRoZXNlIDQgYm9yZGVyIHByb3BlcnRpZXMgY3JlYXRlIHRoZSBmaXJzdCBwYXJ0IG9mIG91ciBkcm9wLXNoYWRvdyAqL1xcclxcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMjlweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zKTtcXHJcXG4gICAgICAgIGJvcmRlci1yaWdodDogMjlweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zKTtcXHJcXG4gICAgICAgIGJvcmRlci1sZWZ0OiAyOXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNyaWJib24tY29udGFpbmVyOmFmdGVyIHtcXHJcXG4gICAgICAgIC8qIFRoaXMgYWRkcyB0aGUgc2Vjb25kIHBhcnQgb2Ygb3VyIGRyb3BzaGFkb3cgKi9cXHJcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICAgICAgaGVpZ2h0OiAzcHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC4zKTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgYm90dG9tOiAtM3B4O1xcclxcbiAgICAgICAgbGVmdDogNThweDtcXHJcXG4gICAgICAgIHJpZ2h0OiAzcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI3JpYmJvbi1jb250YWluZXIgYSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICAvKiBhbGxvd3MgdXMgdG8gcG9zaXRpb24gb3VyIHBzZXVkby1lbGVtZW50cyBwcm9wZXJseSAqL1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogIzAwODlkMDtcXHJcXG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcclxcbiAgICAgICAgaGVpZ2h0OiA1OHB4O1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI5cHg7XFxyXFxuICAgICAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAgICAgI3JpYmJvbi1jb250YWluZXIgYTphZnRlciB7XFxyXFxuICAgICAgICAgICAgLyogdGhpcyBjcmVhdGVzIHRoZSBcXFwiZm9sZGVkXFxcIiBwYXJ0IG9mIG91ciByaWJib24gKi9cXHJcXG4gICAgICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDA7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDA7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgIGJvdHRvbTogLTE1cHg7XFxyXFxuICAgICAgICAgICAgcmlnaHQ6IDA7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMTVweCBzb2xpZCAjMDA0YTcwO1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICNyaWJib24tY29udGFpbmVyIGE6YmVmb3JlIHtcXHJcXG4gICAgICAgICAgICAvKiB0aGlzIGNyZWF0ZXMgdGhlIFxcXCJmb3JrZWRcXFwiIHBhcnQgb2Ygb3VyIHJpYmJvbiAqL1xcclxcbiAgICAgICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMDtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMDtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgICAgIGxlZnQ6IC0yOXB4O1xcclxcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDI5cHggc29saWQgIzAwODlkMDtcXHJcXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAyOXB4IHNvbGlkICMwMDg5ZDA7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAyOXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAyOXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI3JpYmJvbi1jb250YWluZXIgYTpob3ZlciB7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwOWZmMTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAjcmliYm9uLWNvbnRhaW5lciBhOmhvdmVyOmJlZm9yZSB7XFxyXFxuICAgICAgICAgICAgICAgIC8qIHRoaXMgbWFrZXMgc3VyZSB0aGF0IHRoZSBcXFwiZm9ya2VkXFxcIiBwYXJ0IG9mIHRoZSByaWJib24gY2hhbmdlcyBjb2xvciB3aXRoIHRoZSBhbmNob3Igb24gOmhvdmVyICovXFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDI5cHggc29saWQgIzAwOWZmMTtcXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMjlweCBzb2xpZCAjMDA5ZmYxO1xcclxcbiAgICAgXFxyXFxuICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgfVxcclxcblxcclxcblxcclxcbi8qQ0hFQ0tCT1gqL1xcclxcblxcclxcbi8qIEN1c3RvbWl6ZSB0aGUgbGFiZWwgKHRoZSBjb250YWluZXIpICovXFxyXFxuLmNoZWNrQm94Q29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcclxcbiAgIFxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4gICAgLmNoZWNrQm94Q29udGFpbmVyIGlucHV0IHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4vKiBDcmVhdGUgYSBjdXN0b20gY2hlY2tib3ggKi9cXHJcXG4uY2hlY2ttYXJrIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxyXFxufVxcclxcblxcclxcbi8qIE9uIG1vdXNlLW92ZXIsIGFkZCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciAqL1xcclxcbi5jaGVja0JveENvbnRhaW5lcjpob3ZlciBpbnB1dCB+IC5jaGVja21hcmsge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBXaGVuIHRoZSBjaGVja2JveCBpcyBjaGVja2VkLCBhZGQgYSBibHVlIGJhY2tncm91bmQgKi9cXHJcXG4uY2hlY2tCb3hDb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcmsge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzhhNmE2O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDcmVhdGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKGhpZGRlbiB3aGVuIG5vdCBjaGVja2VkKSAqL1xcclxcbi5jaGVja21hcms6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTaG93IHRoZSBjaGVja21hcmsgd2hlbiBjaGVja2VkICovXFxyXFxuLmNoZWNrQm94Q29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrOmFmdGVyIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi8qIFN0eWxlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yICovXFxyXFxuLmNoZWNrQm94Q29udGFpbmVyIC5jaGVja21hcms6YWZ0ZXIge1xcclxcbiAgICBsZWZ0OiA5cHg7XFxyXFxuICAgIHRvcDogNXB4O1xcclxcbiAgICB3aWR0aDogNXB4O1xcclxcbiAgICBoZWlnaHQ6IDEwcHg7XFxyXFxuICAgIGJvcmRlcjogc29saWQgd2hpdGU7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbi8qXFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSArIGxhYmVsLCBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdICsgbGFiZWwge1xcclxcbiAgICBjb2xvcjogIzAwMDAwMDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSArIGxhYmVsLCBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdICsgbGFiZWwge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMi40cmVtO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjc1cmVtO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxyXFxufVxcclxcbiovXFxyXFxubGFiZWwge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXHJcXG4gICAgZm9udDogaW5oZXJpdDtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4jc3R5bGUtNDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjMpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xcclxcbn1cXHJcXG5cXHJcXG4jc3R5bGUtNDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgICB3aWR0aDogMnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xcclxcbn1cXHJcXG5cXHJcXG4jc3R5bGUtNDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNTU1NTU1O1xcclxcbn1cXHJcXG5cXHJcXG4uYmxvZ1Njcm9sbGJhciB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gICAgd2lkdGg6IDY1cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNGNUY1RjU7XFxyXFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcmNlLW92ZXJmbG93IHtcXHJcXG4gICAgbWluLWhlaWdodDogNDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5ibG9nc2Nyb2xsYmFyIHtcXHJcXG4gICAgbWF4LWhlaWdodDogNTAwcHggIWltcG9ydGFudDtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2IoMjM3LCAyMzcsIDIzNykgIWltcG9ydGFudDtcXHJcXG4gICAgbWFyZ2luOiAwcHggYXV0byAhaW1wb3J0YW50O1xcclxcbiAgICBvdmVyZmxvdy15OiBzY3JvbGwgIWltcG9ydGFudDtcXHJcXG4gICAgb3ZlcmZsb3cteCA6IGhpZGRlbiAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uZGl2aWRlciB7XFxyXFxuICAgIHdpZHRoOiA1cHg7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZERpdiB7XFxyXFxuICAgIGhlaWdodDogNjAlO1xcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL2Nzcy9zaXRlLmNzc1xuLy8gbW9kdWxlIGlkID0gMTM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDMiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvICsgXCIgXCIgKyBvcHRpb25zLmluc2VydEF0LmJlZm9yZSk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDIgMyJdLCJzb3VyY2VSb290IjoiIn0=