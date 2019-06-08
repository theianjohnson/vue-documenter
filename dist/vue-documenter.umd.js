(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-documenter"] = factory(require("vue"));
	else
		root["vue-documenter"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
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

/***/ "19a8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _nvm_versions_node_v10_5_0_lib_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_nvm_versions_node_v10_5_0_lib_node_modules_vue_cli_service_node_modules_css_loader_index_js_ref_8_oneOf_1_1_nvm_versions_node_v10_5_0_lib_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_2_nvm_versions_node_v10_5_0_lib_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_nvm_versions_node_v10_5_0_lib_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_VueDocumenter_vue_vue_type_style_index_0_id_64944014_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5e91");
/* harmony import */ var _nvm_versions_node_v10_5_0_lib_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_nvm_versions_node_v10_5_0_lib_node_modules_vue_cli_service_node_modules_css_loader_index_js_ref_8_oneOf_1_1_nvm_versions_node_v10_5_0_lib_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_2_nvm_versions_node_v10_5_0_lib_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_nvm_versions_node_v10_5_0_lib_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_VueDocumenter_vue_vue_type_style_index_0_id_64944014_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nvm_versions_node_v10_5_0_lib_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_nvm_versions_node_v10_5_0_lib_node_modules_vue_cli_service_node_modules_css_loader_index_js_ref_8_oneOf_1_1_nvm_versions_node_v10_5_0_lib_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_2_nvm_versions_node_v10_5_0_lib_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_nvm_versions_node_v10_5_0_lib_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_VueDocumenter_vue_vue_type_style_index_0_id_64944014_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_nvm_versions_node_v10_5_0_lib_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_nvm_versions_node_v10_5_0_lib_node_modules_vue_cli_service_node_modules_css_loader_index_js_ref_8_oneOf_1_1_nvm_versions_node_v10_5_0_lib_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_2_nvm_versions_node_v10_5_0_lib_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_nvm_versions_node_v10_5_0_lib_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_VueDocumenter_vue_vue_type_style_index_0_id_64944014_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "5e91":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

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

  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: /Users/ianjohnson/.nvm/versions/node/v10.5.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4fbe77fb-vue-loader-template"}!/Users/ianjohnson/.nvm/versions/node/v10.5.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/ianjohnson/.nvm/versions/node/v10.5.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/ianjohnson/.nvm/versions/node/v10.5.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/VueDocumenter.vue?vue&type=template&id=64944014&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._l((_vm.getComponents()),function(component){return _c('div',{key:("component-" + (component.name)),staticClass:"card card-body mb-5"},[_c('h1',{attrs:{"id":_vm.getKebabCaseFromCamelCase(component.name)}},[_vm._v("<"+_vm._s(_vm.getKebabCaseFromCamelCase(component.name))+">")]),_c('h2',[_vm._v("Properties")]),_c('div',{staticClass:"table-responsive mb-3"},[_c('table',{staticClass:"table table-striped"},[_vm._m(0,true),_c('tbody',_vm._l((component.properties),function(property){return _c('tr',{key:("property-" + (property.name)),class:{ 'deprecated': property.deprecated }},[_c('td',{staticStyle:{"white-space":"nowrap"}},[_vm._v("\n                            "+_vm._s(property.type !== 'string' ? ':' : '')+_vm._s(property.name)+"\n                            "),(property.required)?_c('span',{staticClass:"badge badge-danger",attrs:{"title":property.required}},[_vm._v("Required")]):_vm._e(),(property.deprecated)?_c('span',{staticClass:"badge badge-warning",attrs:{"title":property.deprecated,"data-tippy":""}},[_vm._v("Deprecated "),_c('i',{staticClass:"fas fa-question-circle"})]):_vm._e()]),_c('td',{staticStyle:{"white-space":"nowrap"}},[_vm._v(_vm._s(property.type))]),_c('td',{staticStyle:{"white-space":"nowrap"}},[_vm._v(_vm._s(property.defaultValue))]),_c('td',[_c('code',[_vm._v(_vm._s(property.example))])])])}),0)])]),_vm._m(1,true),_c('div',{staticClass:"row mb-3"},[_c('div',{staticClass:"col"},[(component.events)?_c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"table table-striped"},[_vm._m(2,true),_c('tbody',_vm._l((component.events),function(event){return _c('tr',{key:("event-" + (event.name))},[_c('td',{staticStyle:{"white-space":"nowrap"}},[_vm._v(_vm._s(event.name))]),_c('td',{staticStyle:{"white-space":"nowrap"}},[_vm._v(_vm._s(event.selector))]),_c('td',{staticStyle:{"white-space":"nowrap"}},[_vm._v(_vm._s(event.on))]),_c('td',{staticStyle:{"white-space":"nowrap"}},[_vm._v(_vm._s(event.example))])])}),0)])]):_c('h3',[_vm._v("None")])])]),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-6"},[_c('h2',[_vm._v("Minimal Example")]),_c('div',{staticClass:"code-highlight",domProps:{"innerHTML":_vm._s(_vm.getComponentExampleHtml(component, { onlyRequired: true }))}})]),_c('div',{staticClass:"col-sm-6"},[_c('h2',[_vm._v("Full Example")]),_c('div',{staticClass:"code-highlight",domProps:{"innerHTML":_vm._s(_vm.getComponentExampleHtml(component))}})])])])}),_vm._m(3)],2)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('th',[_vm._v("Name")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Default Value")]),_c('th',[_vm._v("Example")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',[_vm._v("Events ("),_c('a',{attrs:{"href":"https://vuejs.org/v2/api/#vm-emit","target":"_blank"}},[_vm._v("Vue Docs")]),_vm._v(")")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('th',[_vm._v("Name")]),_c('th',[_vm._v("Selector")]),_c('th',[_vm._v("On")]),_c('th',[_vm._v("Example Value")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"alert alert-info d-flex"},[_c('i',{staticClass:"fas fa-exclamation-triangle fa-2x mr-4"}),_c('div',[_c('h2',[_vm._v("If you're building a new Vue component and you want it to be auto-documented here")]),_c('div',[_c('p',[_c('span',{staticClass:"badge badge-danger"},[_vm._v("Required")]),_vm._v(" The component must have it's own name property match its registered component name, ex -\n                        "),_c('br'),_vm._v("\n                        If you register "),_c('code',[_vm._v("Datatable.vue")]),_vm._v(" with "),_c('code',[_vm._v("Vue.component('sj-datatable', Datatable);")]),_vm._v(", then "),_c('code',[_vm._v("Datatable.vue")]),_c('em',[_vm._v("itself")]),_vm._v(" needs a top-level "),_c('code',[_vm._v("{ name: 'SjDatatable' }")]),_vm._v(" property\n                    ")]),_c('p',[_c('span',{staticClass:"badge badge-danger"},[_vm._v("Required")]),_vm._v(" The component must have it's properties defined with "),_c('code',[_vm._v("type")]),_vm._v(" and "),_c('code',[_vm._v("default")]),_vm._v(" properties, see "),_c('a',{attrs:{"href":"https://vuejs.org/v2/guide/components-props.html#Prop-Validation","target":"_blank"}},[_vm._v("Prop Validation")])]),_c('p',[_c('span',{staticClass:"badge badge-secondary"},[_vm._v("Optional")]),_vm._v("  The component can also add an additional "),_c('code',[_vm._v("meta")]),_vm._v(" property to the property definition, ex.\n"),_c('code',{staticStyle:{"white-space":"pre"}},[_vm._v("\nmeta: {\n    required: [true|false],\n    example: 'Example implementation code',\n    deprecated: 'Deprecation note that will appear on hover',\n},\n")])]),_c('p',[_c('span',{staticClass:"badge badge-secondary"},[_vm._v("Optional")]),_vm._v("  The component can also add a top level "),_c('code',[_vm._v("meta")]),_vm._v(" property with slot and event availability, ex.\n"),_c('code',{staticStyle:{"white-space":"pre"}},[_vm._v("\nmeta: {\n    slots: {\n        default: {\n            type: 'component',\n            valid: ['ComponentNameOne', 'ComponentNameTwo'],\n        ],\n        named: [{\n            name: 'filters',\n            type: 'component',\n            valid: ['OtherComponentName'],\n        }],\n    },\n    events: [{\n        name: 'date-selected',\n        selector: '.dates li',\n        on: 'click',\n        example: '2019-02-11',\n    }],\n},\n")])])])])])}]


// CONCATENATED MODULE: ./src/VueDocumenter.vue?vue&type=template&id=64944014&scoped=true&

// CONCATENATED MODULE: /Users/ianjohnson/.nvm/versions/node/v10.5.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/ianjohnson/.nvm/versions/node/v10.5.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/VueDocumenter.vue?vue&type=script&lang=js&
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




// import ComponentOne from './ComponentOne.vue';
// import ComponentTwo from './ComponentTwo.vue';

/* harmony default export */ var VueDocumentervue_type_script_lang_js_ = ({
    props: {
        componentToDocument: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            componentsToDocument: [
                // ComponentOne,
                // ComponentTwo,
            ],
        };
    },
    methods: {
        getComponents() {

            const components = [];
            const vms = [];

            const componentWrapperElement = document.createElement('div');
            componentWrapperElement.style.display = 'none';
            componentWrapperElement.id = 'temporary-components-wrapper';
            document.body.appendChild(componentWrapperElement);

            for (let i = 0; i < this.componentsToDocument.length; i++) {

                const LoadedComponent = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend(this.componentsToDocument[i]);
                vms[i] = new LoadedComponent();

                const componentHtmlId = `temporary-component-${this.componentsToDocument[i].name.toLowerCase()}`;

                const componentElement = document.createElement('div');
                componentElement.id = componentHtmlId;
                document.querySelector('#temporary-components-wrapper').appendChild(componentElement);

                try {

                    vms[i].$mount(`#${componentHtmlId}`);

                    if (vms[i]) {

                        const properties = this.getProperties(vms[i]);

                        components.push({
                            name: this.componentsToDocument[i].name,
                            properties: [...properties],
                            events: (vms[i].$options.meta && vms[i].$options.meta.events) ? vms[i].$options.meta.events : null,
                            slots: (vms[i].$options.meta && vms[i].$options.meta.slots) ? vms[i].$options.meta.slots : null,
                        });

                        vms[i].$destroy();

                    }

                } catch (e) {
                    // eslint-disable-next-line
                    console.log(e);
                }

            }

            document.getElementById('temporary-components-wrapper').remove();

            return components;

        },
        getComponentExampleHtml(component, minimal = false) {

            const componentTag = this.getKebabCaseFromCamelCase(component.name);


            // Build the properties HTML
            const componentProperties = minimal ? component.properties.filter(property => property.required && !property.deprecated) : component.properties.filter(property => !property.deprecated);

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
        getProperties(vm) {

            if (!vm) {

                return false;

            }

            const properties = [];
            const propertyKeys = Object.keys(vm.$options.props);

            propertyKeys.sort();

            for (let i = 0; i < propertyKeys.length; i++) {

                const item = propertyKeys[i];

                const name = this.getKebabCaseFromCamelCase(item);
                const type = this.getPropertyType(vm.$options.props[item].type);
                let defaultValue = vm.$options.props[item].default && vm.$options.props[item].default.toString();
                const required = vm.$options.props[item].meta && vm.$options.props[item].meta.required;
                const deprecated = vm.$options.props[item].meta && vm.$options.props[item].meta.deprecated;
                let example = vm.$options.props[item].meta && vm.$options.props[item].meta.example;

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

            return properties;

        },
        getKebabCaseFromCamelCase(internalName) {

            return internalName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

        },
        getPropertyType(typeFunctionString) {

            const typeFunction = typeFunctionString.toString().split(' ')[1];

            return typeFunction.substr(0, typeFunction.length - 2).toLowerCase();

        },
        getNonDeprecatedProperties(properties) {

            const propertiesArray = Object.values(properties);
            let nonDeprecatedProperties = [];

            if (!propertiesArray.length) {

                return [];

            }

            nonDeprecatedProperties = propertiesArray.filter(property => !property.deprecated);

            return nonDeprecatedProperties;

        },
        getRequiredNonDeprecatedProperties(properties) {

            const propertiesArray = Object.values(properties);
            let requiredNonDeprecatedProperties = [];

            if (!propertiesArray.length) {

                return [];

            }

            requiredNonDeprecatedProperties = propertiesArray.filter(property => property.required && !property.deprecated);

            return requiredNonDeprecatedProperties;

        },
    },
    mounted() {
    },
});

// CONCATENATED MODULE: ./src/VueDocumenter.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_VueDocumentervue_type_script_lang_js_ = (VueDocumentervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/VueDocumenter.vue?vue&type=style&index=0&id=64944014&lang=scss&scoped=true&
var VueDocumentervue_type_style_index_0_id_64944014_lang_scss_scoped_true_ = __webpack_require__("19a8");

// CONCATENATED MODULE: /Users/ianjohnson/.nvm/versions/node/v10.5.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js
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
  "64944014",
  null
  
)

/* harmony default export */ var VueDocumenter = (component.exports);
// CONCATENATED MODULE: ./src/index.js



external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component('vue-documenter', VueDocumenter);

/* harmony default export */ var src = (VueDocumenter);
// CONCATENATED MODULE: /Users/ianjohnson/.nvm/versions/node/v10.5.0/lib/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src);



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

/******/ });
});
//# sourceMappingURL=vue-documenter.umd.js.map