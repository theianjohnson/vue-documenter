<template>
<div :class="cssClassContainer || cssOverrideClasses.container">

    <div style="display: none;">
        <slot></slot>
    </div>

    <div :class="cssClassRow ||cssOverrideClasses.row">
        <div v-if="enableTableOfContents" :class="cssClassTableOfContentsColumn || cssOverrideClasses.tableOfContentsColumn">
            <div :class="cssClassCard || cssOverrideClasses.card" style="position: sticky; top: 0;">
                <h2>Components</h2>
                <ul :class="cssClassTableOfContentsColumnList || cssOverrideClasses.tableOfContentsColumnList">
                   <li v-for="component in loadedComponents" :key="`table-of-contents-${component.name}`">
                       <a :href="`#${getKebabCaseFromCamelCase(component.name)}`">{{ getKebabCaseFromCamelCase(component.name) }}</a>
                   </li>
                </ul>
            </div>
        </div>
        <div :class="cssClassComponentsColumn || cssOverrideClasses.componentsColumn">
            <div v-for="component in loadedComponents" :class="cssClassComponentsColumnComponent || cssOverrideClasses.componentsColumnComponent" style="margin-bottom: 3rem;" :key="`component-${component.name}`">

                <h1 :id="getKebabCaseFromCamelCase(component.name)">&lt;{{ getKebabCaseFromCamelCase(component.name) }}&gt;</h1>
                <p v-if="component.description" v-html="component.description"></p>

                <h2>Properties</h2>

                <div :class="cssClassComponentsColumnComponentTableWrapper || cssOverrideClasses.componentsColumnComponentTableWrapper" style="margin-bottom: 1rem;">
                    <table :class="cssClassComponentsColumnComponentTable || cssOverrideClasses.componentsColumnComponentTable">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Type</th>
                                <th>Default Value</th>
                                <th>Example</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-if="component.properties.length > 0">
                                <tr v-for="property in component.properties" :key="`property-${property.name}`" :class="{ 'deprecated': property.deprecated }">
                                    <td>
                                        {{ property.type !== 'string' ? ':' : '' }}{{ property.name }}
                                        <span v-if="property.required" :class="cssClassBadgeRequired || cssOverrideClasses.badgeRequired" :title="property.required">Required</span>
                                        <span v-if="property.deprecated" :class="cssClassBadgeDeprecated || cssOverrideClasses.badgeDeprecated" :title="property.deprecated" data-tippy>Deprecated <i class="fas fa-question-circle"></i></span>
                                    </td>
                                    <td v-html="property.description"></td>
                                    <td>{{ property.type }}</td>
                                    <td>
                                        <div v-html="getHighlightedCodeString(property.defaultValue, (property.type === 'string' ? 'none' : 'javascript'))"></div>
                                    </td>
                                    <td>
                                        <div v-html="getHighlightedCodeString(property.example, (property.type === 'string' ? 'none' : 'javascript'))"></div>
                                    </td>
                                </tr>
                            </template>
                            <tr v-else>
                                <td colspan="999">
                                    No properties
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2>Events (<a href="https://vuejs.org/v2/api/#vm-emit" target="_blank">Vue Docs</a>)</h2>

                <div :class="cssClassComponentsColumnComponentTableWrapper || cssOverrideClasses.componentsColumnComponentTableWrapper" style="margin-bottom: 1rem;">
                    <table :class="cssClassComponentsColumnComponentTable || cssOverrideClasses.componentsColumnComponentTable">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Example Value</th>
                                <th>Usage</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-if="component.events.length > 0">
                                <tr v-for="event in component.events" :key="`event-${event.name}`">
                                    <td>{{ event.name }}</td>
                                    <td v-html="event.description"></td>
                                    <td v-html="getHighlightedCodeString(event.example, 'javascript')"></td>
                                    <td v-html="getEventExampleString(component, event)"></td>
                                </tr>
                            </template>
                            <tr v-else>
                                <td colspan="999">No events</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div :class="cssClassRow || cssOverrideClasses.row">
                    <div :class="cssClassExampleMinimalColumn || cssOverrideClasses.exampleMinimal">
                        <h2>Minimal Example</h2>
                        <div v-html="getHighlightedCodeString(getComponentExampleHtml(component, true), 'html')"></div>
                    </div>
                    <div :class="cssClassExampleFullColumn || cssOverrideClasses.exampleFull">
                        <h2>Full Example</h2>
                        <div v-html="getHighlightedCodeString(getComponentExampleHtml(component), 'html')"></div>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <div :class="cssClassInstructions || cssOverrideClasses.instructions">
        <div>
            <h2>If you're building a new Vue component and you want it to be auto-documented here</h2>
            <div>
                <p>
                    <span :class="cssClassBadgeRequired || cssOverrideClasses.badgeRequired">Required</span> The component must have it's properties defined with <code>type</code> and <code>default</code> properties, see <a href="https://vuejs.org/v2/guide/components-props.html#Prop-Validation" target="_blank">Prop Validation</a>
                </p>
                <p>
                    <span :class="cssClassBadgeOptional || cssOverrideClasses.badgeOptional">Optional</span>  The component maybe also include a top level <code>meta</code> property with slot and event availability, ex.
<code style="white-space: pre;">
meta: {
    description: 'Optional component description that\'ll get piped into the documentation',
    slots: {
        default: {
            type: 'component',
            valid: ['ComponentNameOne', 'ComponentNameTwo'],
        },
        named: [{
            name: 'filters',
            type: 'component',
            valid: ['OtherComponentName'],
        }],
    },
    events: [{
        name: 'date-selected',
        description: 'On date click',
        example: '2019-02-11',
    }],
},
</code>
                </p>
                <p>
                    <span :class="cssClassBadgeOptional || cssOverrideClasses.badgeOptional">Optional</span>  The component's properties may also include an additional <code>meta</code> property in the property definition, ex.
<code style="white-space: pre;">
meta: {
    required: [true|false],
    example: 'Example implementation code',
    description: 'Optional description of the property',
    deprecated: 'Deprecation note that will appear on hover',
},
</code>
                </p>
            </div>
        </div>
    </div>

</div>
</template>

<script>

import Prism from 'prismjs';
import NormalizeWhitespace from 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';

Prism.plugins.NormalizeWhitespace.setDefaults({
    'remove-trailing': true,
    'remove-indent': true,
    'left-trim': true,
    'right-trim': true,
});

export default {
    name: 'vue-datatable',
    meta: {
        description: 'See Vue Documenter on <a href="https://github.com/theianjohnson/vue-documenter" target="_blank">Github</a> and <a href="https://npmjs.org/vue-documenter" target="_blank">NPM</a>',
        slots: {
            default: {
                type: 'component',
                valid: ['AnyComponent'],
            },
        },
    },
    components: {

    },
    props: {
        cssOverrideClasses: {
            type: Object,
            default: () => {
                return {
                    badgeDeprecated: 'badge badge-warning',
                    badgeOptional: 'badge badge-secondary',
                    badgeRequired: 'badge badge-danger',
                    card: 'card card-body',
                    componentsColumn: 'col-sm-9',
                    componentsColumnComponent: 'card card-body',
                    componentsColumnComponentTableWrapper: 'table-responsive',
                    componentsColumnComponentTable: 'table table-striped',
                    container: 'container-fluid',
                    exampleMinimal: 'col-sm-6',
                    exampleFull: 'col-sm-6',
                    instructions: 'alert alert-info',
                    tableOfContentsColumn: 'col-sm-3',
                    tableOfContentsColumnList: '',
                    row: 'row',
                }
            },
            meta: {
                deprecated: 'Override classes are now split out into their own properties',
                example: '{ card: \'your-custom-card-class\' }',
            }
        },
        cssClassBadgeDeprecated: {
            type: String,
            default: 'badge badge-warning',
            meta: {
                example: 'your-custom-css-class-string',
            },
        },
        cssClassBadgeOptional: {
            type: String,
            default: 'badge badge-secondary',
            meta: {
                example: 'your-custom-css-class-string',
            },
        },
        cssClassBadgeRequired: {
            type: String,
            default: 'badge badge-danger',
            meta: {
                example: 'your-custom-css-class-string',
            },
        },
        cssClassCard: {
            type: String,
            default: 'card card-body',
            meta: {
                example: 'your-custom-css-class-string',
            },
        },
        cssClassComponentsColumn: {
            type: String,
            default: 'col-sm-9',
            meta: {
                example: 'your-custom-css-class-string',
            },
        },
        cssClassComponentsColumnComponent: {
            type: String,
            default: 'card card-body',
            meta: {
                example: 'your-custom-css-class-string',
            },
        },
        cssClassComponentsColumnComponentTableWrapper: {
            type: String,
            default: 'table-responsive',
            meta: {
                example: 'your-custom-css-class-string',
            },
        },
        cssClassComponentsColumnComponentTable: {
            type: String,
            default: 'table table-striped',
            meta: {
                example: 'your-custom-css-class-string',
            },
        },
        cssClassContainer: {
            type: String,
            default: 'container-fluid',
            meta: {
                example: 'your-custom-css-class-string',
            },
        },
        cssClassExampleMinimalColumn: {
            type: String,
            default: 'col-sm-6',
            meta: {
                example: 'your-custom-css-class-string',
            },
        },
        cssClassExampleFullColumn: {
            type: String,
            default: 'col-sm-6',
            meta: {
                example: 'your-custom-css-class-string',
            },
        },
        cssClassInstructions: {
            type: String,
            default: 'alert alert-info',
            meta: {
                example: 'your-custom-css-class-string',
            },
        },
        cssClassTableOfContentsColumn: {
            type: String,
            default: 'col-sm-3',
            meta: {
                example: 'your-custom-css-class-string',
            },
        },
        cssClassTableOfContentsColumnList: {
            type: String,
            default: '',
            meta: {
                example: 'your-custom-css-class-string',
            },
        },
        cssClassRow: {
            type: String,
            default: 'row',
            meta: {
                example: 'your-custom-css-class-string',
            },
        },
        enableTableOfContents: {
            type: Boolean,
            default: true,
            meta: {
                example: 'false',
                description: 'Show or hide the table of contents',
            },
        },
    },
    data() {
        return {
            loadedComponents: [],
        };
    },
    created() {
        this.cssClasses = { ...this.cssClasses, ...this.cssOverrideClasses };
    },
    mounted() {
        this.loadComponents();
    },
    methods: {
        loadComponents() {
            const components = this.$slots.default && this.$slots.default.filter(vnode => vnode.tag !== undefined);

            if (!components) {
                return [];
            }
            for (let i = 0; i < components.length; i += 1) {
                const properties = this.loadProperties(components[i]);
                const component = {
                    name: components[i].componentOptions.tag,
                    description: components[i].componentInstance.$options.meta && components[i].componentInstance.$options.meta.description,
                    properties: [...properties],
                    events: (components[i].componentInstance.$options.meta && components[i].componentInstance.$options.meta.events) ? components[i].componentInstance.$options.meta.events : [],
                    slots: (components[i].componentInstance.$options.meta && components[i].componentInstance.$options.meta.slots) ? components[i].componentInstance.$options.meta.slots : [],
                };
                this.loadedComponents.push(component);
            }

            return true;
        },
        getComponentExampleHtml(component, minimal = false) {

            const componentTag = this.getKebabCaseFromCamelCase(component.name);


            // Build the events HTML
            let events = '';
            if(!minimal) {
                events = component.events.map(event => `\t@${event.name}="someFunction"`).join("\n");

                if (events) {
                    events = `\n${events}\n`;
                }
            }
            

            // Build the properties HTML
            const componentProperties = minimal ? component.properties && component.properties.filter(property => property.required && !property.deprecated) : component.properties && component.properties.filter(property => !property.deprecated);

            let properties = componentProperties.map(property => `\t${property.type === 'string' ? '' : ':'}${property.name}="${property.example.replace(/[\r\n\t]+/g, ' ').replace(/\s+/g, ' ').trim()}"`).join("\n");

            if (properties) {
                properties = `${(events ? '' : "\n")}${properties}\n`;
            }

            // Build the slots HTML
            let slots = '';
            if(!minimal) {
                if (component.slots) {

                    if (component.slots.named && component.slots.named.length > 0) {
                        component.slots.named.forEach((componentSlot) => {
                            let validSlotContents = '';

                            if (componentSlot.type === 'component') {
                                componentSlot.valid.forEach((validComponent) => {
                                    const validComponentTagName = this.getKebabCaseFromCamelCase(validComponent);
                                    validSlotContents = `&lt;${validComponentTagName}>&lt;/${validComponentTagName}>`;
                                });
                            }

                            slots = `\n${slots}\t&lt;template v-slot:${componentSlot.name}>${validSlotContents}&lt;/template>`;
                        });
                    }

                    if (component.slots.default) {

                        slots = `${slots}\n\t&lt;template v-slot:default>`;

                        let validSlotContents = '';

                        if (component.slots.default.type === 'component') {
                            component.slots.default.valid.forEach((validComponent) => {

                                const validComponentTagName = this.getKebabCaseFromCamelCase(validComponent);
                                validSlotContents = `&lt;${validComponentTagName}>&lt;/${validComponentTagName}>`;

                                slots = `${slots}\n\t\t${validSlotContents}`;
                            });
                        }

                        slots = `${slots}\n\t&lt;/template>`;
                    }
                }

                if (slots) {
                    slots = `${slots}\n`;
                }
            }

            const html = `&lt;${componentTag}${events}${properties}>${slots}&lt;/${componentTag}>`;

            return html;
        },
        /*
        getComponentExampleHtmlWithMarkup(component, minimal = false) {

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
                    if (component.slots.named && component.slots.named.length > 0) {
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
        */
        getHighlightedCodeString(html, language) {
            return `<pre style="background: none; margin: 0; padding: 0;"><code class="language-${language}">${html}</code></pre>`;
        },
        loadProperties(vnode) {
            if (!vnode) {
                return false;
            }

            const properties = [];
            const propertyKeys = vnode.componentInstance.$options.props && Object.keys(vnode.componentInstance.$options.props);

            if(propertyKeys) {
                propertyKeys.sort();

                for (let i = 0; i < propertyKeys.length; i += 1) {
                    const item = propertyKeys[i];
                    const name = this.getKebabCaseFromCamelCase(item);
                    const type = this.getPropertyType(vnode.componentInstance.$options.props[item].type);
                    let defaultValue = vnode.componentInstance.$options.props[item].default && vnode.componentInstance.$options.props[item].default.toString();
                    const required = vnode.componentInstance.$options.props[item].meta && vnode.componentInstance.$options.props[item].meta.required;
                    const deprecated = vnode.componentInstance.$options.props[item].meta && vnode.componentInstance.$options.props[item].meta.deprecated;
                    let example = vnode.componentInstance.$options.props[item].meta && vnode.componentInstance.$options.props[item].meta.example;
                    const description = vnode.componentInstance.$options.props[item].meta && vnode.componentInstance.$options.props[item].meta.description;

                    switch (type) {
                    case 'array':
                        example = example || '[4, 8, 15, 16, 23, 42]';
                        example = this.attemptCodeUnindent(example);

                        if (defaultValue) {
                            const cleanedDefaultValue = defaultValue.match(/{\s*return\s*(.*);?\s*}/);

                            if (cleanedDefaultValue && cleanedDefaultValue[1] !== undefined) {
                                defaultValue = cleanedDefaultValue[1];
                            }

                            // Attempt to de-indent if necessary
                            defaultValue = this.attemptCodeUnindent(defaultValue);
                        }
                        break;

                    case 'object':
                        example = example || '{ key1: value1, key2: value2 }';
                        example = this.attemptCodeUnindent(example);

                        if (defaultValue) {

                            let cleanedDefaultValue;

                            const containsFunction = defaultValue.match(/(?:_default|function)\(\)/);

                            if(containsFunction) {
                                cleanedDefaultValue = defaultValue.match(/(?:_default|function)\(\) (?:{\s*return )?([\s\S]*)/);
                            } else {
                                cleanedDefaultValue = defaultValue.match(/{\s*return\s*([\s\S]*});?\s*}$/);
                            }

                            if (cleanedDefaultValue && cleanedDefaultValue[1] !== undefined) {
                                defaultValue = cleanedDefaultValue[1].replace(/;\s*}$/, '');
                            }

                            // Attempt to de-indent if necessary
                            defaultValue = this.attemptCodeUnindent(defaultValue);
                        }
                        break;

                    case 'string':
                        example = example || 'Some text';
                        break;

                    case 'function':
                        example = example || '(value) => { return value.toUpperCase() }';
                        example = this.attemptCodeUnindent(example);

                        if (defaultValue) {
                            const cleanedDefaultValue = defaultValue.match(/{(.*)}/);

                            if (cleanedDefaultValue && cleanedDefaultValue[1] !== undefined) {
                                defaultValue = cleanedDefaultValue[1];
                            }

                            // Attempt to de-indent if necessary
                            defaultValue = this.attemptCodeUnindent(defaultValue);
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

                    if(example) {
                        example = example.replace(/"/g, "'");
                    }

                    properties.push({
                        name,
                        type,
                        defaultValue,
                        example,
                        description,
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
            }

            return properties;
        },
        getEventExampleString(component, event) {
            const html = `&lt;${this.getKebabCaseFromCamelCase(component.name)} @${event.name}=&quot;someFunction&quot; />`;
            return this.getHighlightedCodeString(html, 'html');
        },
        getKebabCaseFromCamelCase(internalName) {
            return internalName && internalName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
        },
        getPropertyType(typeFunctionString) {
            if(typeFunctionString) {
                const typeFunction = typeFunctionString.toString().split(' ')[1];

                return typeFunction.substr(0, typeFunction.length - 2).toLowerCase();
            }

            return 'unknown';
        },
        attemptCodeUnindent(string) {
            const codeLines = string.split("\n");
            const lastLine = codeLines.slice(-1)[0];
            const leadSpacingToRemove = lastLine.match(/^\s*/)[0];
            
            if(leadSpacingToRemove) {
                let adjustedCodeLines = [];
                codeLines.forEach(line => {
                    adjustedCodeLines.push(line.replace(new RegExp(`^${leadSpacingToRemove}`), ''));
                });

                string = adjustedCodeLines.join("\n");
            }

            return string;
        },
    },
};
</script>

<style lang="scss" scoped>

    @import '../node_modules/prismjs/themes/prism.css';

    h2 {
        margin-top: 1rem;
    }

    table td {
        white-space: nowrap;
    }

    .alert {
        h2 {
            margin-top: .25rem;
            margin-bottom: 1rem;
        }
    }

    /*
    .indent {
        margin-left: 2rem;
    }
    */

</style>
