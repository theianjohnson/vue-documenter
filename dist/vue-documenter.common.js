module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "980f");
/******/ })
/************************************************************************/
/******/ ({

/***/ "02b5":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("19d8");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("7fd1a97e", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "19d8":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "h2[data-v-1e6e30cc]{margin-top:1rem}.alert h2[data-v-1e6e30cc]{margin-top:.25rem;margin-bottom:1rem}.indent[data-v-1e6e30cc]{margin-left:2rem}.code-highlight[data-v-1e6e30cc]{background:#f5f2f0;color:#999;font-family:Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;overflow-x:scroll;padding:1em;text-shadow:0 1px #fff;white-space:nowrap}.code-highlight[data-v-1e6e30cc] .property,.code-highlight[data-v-1e6e30cc] .tag,.code-highlight[data-v-1e6e30cc] .value{display:inline-block}.code-highlight[data-v-1e6e30cc] .tag{color:#905}.code-highlight[data-v-1e6e30cc] .property{color:#690;margin-left:2em}.code-highlight[data-v-1e6e30cc] .value{color:#07a}.code-highlight[data-v-1e6e30cc] .slot{margin-left:2em}.code-highlight[data-v-1e6e30cc] .slot .property{margin-left:0}.code-highlight[data-v-1e6e30cc] .slot .slot-contents{margin-left:4em}", ""]);

// exports


/***/ }),

/***/ "2350":
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

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "955d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_nvm_versions_node_v10_5_0_lib_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueDocumenter_vue_vue_type_style_index_0_id_1e6e30cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("02b5");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_nvm_versions_node_v10_5_0_lib_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueDocumenter_vue_vue_type_style_index_0_id_1e6e30cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_nvm_versions_node_v10_5_0_lib_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueDocumenter_vue_vue_type_style_index_0_id_1e6e30cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_nvm_versions_node_v10_5_0_lib_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueDocumenter_vue_vue_type_style_index_0_id_1e6e30cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "980f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /Users/ianjohnson/.nvm/versions/node/v10.5.0/lib/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("e165")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"cdceb08a-vue-loader-template"}!/Users/ianjohnson/.nvm/versions/node/v10.5.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/VueDocumenter.vue?vue&type=template&id=1e6e30cc&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticStyle:{"display":"none"}},[_vm._t("default")],2),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3"},[_c('div',{staticClass:"card card-body"},[_c('h2',{staticClass:"mt-0"},[_vm._v("Components")]),_c('ul',_vm._l((_vm.loadedComponents),function(component){return _c('li',{key:("table-of-contents-" + (component.name))},[_c('a',{attrs:{"href":"#{component.name}"}},[_vm._v(_vm._s(component.name))])])}),0)])]),_c('div',{staticClass:"col-sm-9"},_vm._l((_vm.loadedComponents),function(component){return _c('div',{key:("component-" + (component.name)),staticClass:"card card-body mb-5"},[_c('h1',{attrs:{"id":_vm.getKebabCaseFromCamelCase(component.name)}},[_vm._v("<"+_vm._s(_vm.getKebabCaseFromCamelCase(component.name))+">")]),_c('h2',[_vm._v("Properties")]),_c('div',{staticClass:"table-responsive mb-3"},[_c('table',{staticClass:"table table-striped"},[_vm._m(0,true),_c('tbody',_vm._l((component.properties),function(property){return _c('tr',{key:("property-" + (property.name)),class:{ 'deprecated': property.deprecated }},[_c('td',{staticStyle:{"white-space":"nowrap"}},[_vm._v("\n                                "+_vm._s(property.type !== 'string' ? ':' : '')+_vm._s(property.name)+"\n                                "),(property.required)?_c('span',{staticClass:"badge badge-danger",attrs:{"title":property.required}},[_vm._v("Required")]):_vm._e(),(property.deprecated)?_c('span',{staticClass:"badge badge-warning",attrs:{"title":property.deprecated,"data-tippy":""}},[_vm._v("Deprecated "),_c('i',{staticClass:"fas fa-question-circle"})]):_vm._e()]),_c('td',{staticStyle:{"white-space":"nowrap"}},[_vm._v(_vm._s(property.type))]),_c('td',{staticStyle:{"white-space":"nowrap"}},[_vm._v(_vm._s(property.defaultValue))]),_c('td',[_c('code',[_vm._v(_vm._s(property.example))])])])}),0)])]),_vm._m(1,true),_c('div',{staticClass:"row mb-3"},[_c('div',{staticClass:"col"},[(component.events)?_c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"table table-striped"},[_vm._m(2,true),_c('tbody',_vm._l((component.events),function(event){return _c('tr',{key:("event-" + (event.name))},[_c('td',{staticStyle:{"white-space":"nowrap"}},[_vm._v(_vm._s(event.name))]),_c('td',{staticStyle:{"white-space":"nowrap"}},[_vm._v(_vm._s(event.selector))]),_c('td',{staticStyle:{"white-space":"nowrap"}},[_vm._v(_vm._s(event.on))]),_c('td',{staticStyle:{"white-space":"nowrap"}},[_vm._v(_vm._s(event.example))])])}),0)])]):_c('h3',[_vm._v("None")])])]),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-6"},[_c('h2',[_vm._v("Minimal Example")]),_c('div',{staticClass:"code-highlight",domProps:{"innerHTML":_vm._s(_vm.getComponentExampleHtml(component, { onlyRequired: true }))}})]),_c('div',{staticClass:"col-sm-6"},[_c('h2',[_vm._v("Full Example")]),_c('div',{staticClass:"code-highlight",domProps:{"innerHTML":_vm._s(_vm.getComponentExampleHtml(component))}})])])])}),0)]),_vm._m(3)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('th',[_vm._v("Name")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Default Value")]),_c('th',[_vm._v("Example")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',[_vm._v("Events ("),_c('a',{attrs:{"href":"https://vuejs.org/v2/api/#vm-emit","target":"_blank"}},[_vm._v("Vue Docs")]),_vm._v(")")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('th',[_vm._v("Name")]),_c('th',[_vm._v("Selector")]),_c('th',[_vm._v("On")]),_c('th',[_vm._v("Example Value")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"alert alert-info d-flex"},[_c('i',{staticClass:"fas fa-exclamation-triangle fa-2x mr-4"}),_c('div',[_c('h2',[_vm._v("If you're building a new Vue component and you want it to be auto-documented here")]),_c('div',[_c('p',[_c('span',{staticClass:"badge badge-danger"},[_vm._v("Required")]),_vm._v(" The component must have it's properties defined with "),_c('code',[_vm._v("type")]),_vm._v(" and "),_c('code',[_vm._v("default")]),_vm._v(" properties, see "),_c('a',{attrs:{"href":"https://vuejs.org/v2/guide/components-props.html#Prop-Validation","target":"_blank"}},[_vm._v("Prop Validation")])]),_c('p',[_c('span',{staticClass:"badge badge-secondary"},[_vm._v("Optional")]),_vm._v("  The component maybe also include a top level "),_c('code',[_vm._v("meta")]),_vm._v(" property with slot and event availability, ex.\n"),_c('code',{staticStyle:{"white-space":"pre"}},[_vm._v("\nmeta: {\nslots: {\n    default: {\n        type: 'component',\n        valid: ['ComponentNameOne', 'ComponentNameTwo'],\n    ],\n    named: [{\n        name: 'filters',\n        type: 'component',\n        valid: ['OtherComponentName'],\n    }],\n},\nevents: [{\n    name: 'date-selected',\n    selector: '.dates li',\n    on: 'click',\n    example: '2019-02-11',\n}],\n},\n")])]),_c('p',[_c('span',{staticClass:"badge badge-secondary"},[_vm._v("Optional")]),_vm._v("  The component's properties may also include an additional "),_c('code',[_vm._v("meta")]),_vm._v(" property in the property definition, ex.\n"),_c('code',{staticStyle:{"white-space":"pre"}},[_vm._v("\nmeta: {\nrequired: [true|false],\nexample: 'Example implementation code',\ndeprecated: 'Deprecation note that will appear on hover',\n},\n")])])])])])}]


// CONCATENATED MODULE: ./src/VueDocumenter.vue?vue&type=template&id=1e6e30cc&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/VueDocumenter.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var VueDocumentervue_type_script_lang_js_ = ({
    data() {
        return {
            loadedComponents: [],
        };
    },
    mounted() {
        this.loadComponents();
    },
    methods: {
        loadComponents() {
            const components = this.$slots.default.filter(vnode => vnode.tag !== undefined);

            if (!components) {
                return [];
            }
            for (let i = 0; i < components.length; i += 1) {
                const properties = this.loadProperties(components[i]);
                const component = {
                    name: components[i].componentOptions.tag,
                    properties: [...properties],
                    events: (components[i].componentInstance.$options.meta && components[i].componentInstance.$options.meta.events) ? components[i].componentInstance.$options.meta.events : null,
                    slots: (components[i].componentInstance.$options.meta && components[i].componentInstance.$options.meta.slots) ? components[i].componentInstance.$options.meta.slots : null,
                };
                this.loadedComponents.push(component);
            }

            return true;
        },
        getComponentExampleHtml(component, minimal = false) {

            const componentTag = this.getKebabCaseFromCamelCase(component.name);


            // Build the properties HTML
            const componentProperties = minimal ? component.properties && component.properties.filter(property => property.required && !property.deprecated) : component.properties && component.properties.filter(property => !property.deprecated);

            let properties = componentProperties.map(property => `<span class="property">${property.type === 'string' ? '' : ':'}${property.name}</span>="<span class="value">${property.example}</span>"`).join('<br>');

            if (properties) {
                properties = `<br>${properties}<br>`;
            }

            // Build the slots HTML
            let slots = '';
            if(!minimal) {
                if (component.slots) {
                    if (component.slots.named.length > 0) {
                        component.slots.named.forEach((componentSlot) => {
                            if (componentSlot.type === 'component') {
                                componentSlot.valid.forEach((validComponent) => {

                                    const validComponentTagName = this.getKebabCaseFromCamelCase(validComponent);

                                    slots = `
                                        ${slots}
                                        <br>
                                        <div class="slot">
                                            &lt;template v-slot:${componentSlot.name}&gt;
                                            <br>
                                            <span class="slot-contents">&lt;${validComponentTagName}&gt;&lt;/${validComponentTagName}&gt;</span>
                                            <br>
                                            &lt;/template&gt;
                                        </div>
                                    `;
                                });
                            }
                        });
                    }

                    if (component.slots.default) {

                        slots = `${slots}
                            <br>
                            <div class="slot">
                                &lt;<span class="tag">template</span> <span class="property">v-slot:default</span>&gt;
                        `;

                        if (component.slots.default.type === 'component') {
                            component.slots.default.valid.forEach((validComponent) => {

                                const validComponentTagName = this.getKebabCaseFromCamelCase(validComponent);

                                slots = `${slots}<br><span class="slot-contents"><a href="#${validComponentTagName}">&lt;<span class="tag">${validComponentTagName}</span>&gt;&lt;/<span class="tag">${validComponentTagName}</span>&gt;</a></span>`;
                            });
                        }

                        slots = `${slots}
                                <br>
                                &lt;/<span class="tag">template</span>&gt;
                            </div>
                        `;
                    }
                }

                if (slots) {
                    slots = `${slots}`;
                }
            }

            const html = `&lt;<span class="tag">${componentTag}</span>${properties}&gt;${slots}&lt;/<span class="tag">${componentTag}</span>&gt;`;

            return html;
        },
        loadProperties(vnode) {
            if (!vnode) {
                return false;
            }

            const properties = [];
            const propertyKeys = Object.keys(vnode.componentInstance.$options.props);

            propertyKeys.sort();

            for (let i = 0; i < propertyKeys.length; i += 1) {
                const item = propertyKeys[i];
                const name = this.getKebabCaseFromCamelCase(item);
                const type = this.getPropertyType(vnode.componentInstance.$options.props[item].type);
                let defaultValue = vnode.componentInstance.$options.props[item].default && vnode.componentInstance.$options.props[item].default.toString();
                const required = vnode.componentInstance.$options.props[item].meta && vnode.componentInstance.$options.props[item].meta.required;
                const deprecated = vnode.componentInstance.$options.props[item].meta && vnode.componentInstance.$options.props[item].meta.deprecated;
                let example = vnode.componentInstance.$options.props[item].meta && vnode.componentInstance.$options.props[item].meta.example;

                switch (type) {
                case 'array':
                    example = example || '[4, 8, 15, 16, 23, 42]';

                    if (defaultValue) {
                        const cleanedDefaultValue = defaultValue.match(/{\s*return\s*(.*);?\s*}/);

                        if (cleanedDefaultValue && cleanedDefaultValue[1] !== undefined) {
                            [, defaultValue] = cleanedDefaultValue;
                        }
                    }
                    break;

                case 'object':
                    example = example || '{ key1: value1, key2: value2 }';

                    if (defaultValue) {
                        const cleanedDefaultValue = defaultValue.match(/(?:_default|function)\(\)\s*(.*)/);

                        if (cleanedDefaultValue && cleanedDefaultValue[1] !== undefined) {
                            [, defaultValue] = cleanedDefaultValue;
                        }
                    }
                    break;

                case 'string':
                    example = example || 'Some text';
                    break;

                case 'function':
                    example = example || '(value) => { return value.toUpperCase() }';

                    if (defaultValue) {
                        const cleanedDefaultValue = defaultValue.match(/{(.*)}/);

                        if (cleanedDefaultValue && cleanedDefaultValue[1] !== undefined) {
                            [, defaultValue] = cleanedDefaultValue;

                        }
                    }
                    break;

                case 'number':
                    example = example || '14';
                    break;

                case 'boolean':
                    example = example || 'true';
                    break;

                default:
                    example = example || '';
                }

                example = example.replace(/"/g, "'");

                properties.push({
                    name,
                    type,
                    defaultValue,
                    example,
                    required,
                    deprecated,
                });
            }

            if (properties.length > 0) {
                properties.sort((a, b) => {
                    const aIsRequired = !!a.required;
                    const bIsRequired = !!b.required;

                    if (aIsRequired === bIsRequired) {
                        return a.name > b.name;
                    }

                    if (aIsRequired !== bIsRequired) {
                        if (aIsRequired && !bIsRequired) {
                            return -1;
                        }
                        return 1;
                    }
                    return 1;
                });
            }

            return properties;
        },
        getKebabCaseFromCamelCase(internalName) {
            return internalName && internalName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
        },
        getPropertyType(typeFunctionString) {
            const typeFunction = typeFunctionString.toString().split(' ')[1];

            return typeFunction.substr(0, typeFunction.length - 2).toLowerCase();
        },
    },
});

// CONCATENATED MODULE: ./src/VueDocumenter.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_VueDocumentervue_type_script_lang_js_ = (VueDocumentervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/VueDocumenter.vue?vue&type=style&index=0&id=1e6e30cc&lang=scss&scoped=true&
var VueDocumentervue_type_style_index_0_id_1e6e30cc_lang_scss_scoped_true_ = __webpack_require__("955d");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/VueDocumenter.vue






/* normalize component */

var component = normalizeComponent(
  src_VueDocumentervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "1e6e30cc",
  null
  
)

/* harmony default export */ var VueDocumenter = (component.exports);
// CONCATENATED MODULE: /Users/ianjohnson/.nvm/versions/node/v10.5.0/lib/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (VueDocumenter);



/***/ }),

/***/ "e165":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ })

/******/ })["default"];
//# sourceMappingURL=vue-documenter.common.js.map