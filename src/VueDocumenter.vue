<template>
<div :class="cssClasses.container">

    <div style="display: none;">
        <slot></slot>
    </div>

    <div :class="cssClasses.row">
        <div :class="cssClasses.tableOfContentsColumn">
            <div :class="cssClasses.card">
                <h2>Components</h2>
                <ul :class="cssClasses.tableOfContentsColumnList">
                   <li v-for="component in loadedComponents" :key="`table-of-contents-${component.name}`">
                       <a :href="`#${getKebabCaseFromCamelCase(component.name)}`">{{ getKebabCaseFromCamelCase(component.name) }}</a>
                   </li>
                </ul>
            </div>
        </div>
        <div :class="cssClasses.componentsColumn">
            <div v-for="component in loadedComponents" :class="cssClasses.componentsColumnComponent" style="margin-bottom: 3rem;" :key="`component-${component.name}`">

                <h1 :id="getKebabCaseFromCamelCase(component.name)">&lt;{{ getKebabCaseFromCamelCase(component.name) }}&gt;</h1>

                <h2>Properties</h2>

                <div :class="cssClasses.componentsColumnComponentTableWrapper" style="margin-bottom: 1rem;">
                    <table :class="cssClasses.componentsColumnComponentTable">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Default Value</th>
                                <th>Example</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-if="component.properties.length > 0">
                                <tr v-for="property in component.properties" :key="`property-${property.name}`" :class="{ 'deprecated': property.deprecated }">
                                    <td style="white-space: nowrap;">
                                        {{ property.type !== 'string' ? ':' : '' }}{{ property.name }}
                                        <span v-if="property.required" :class="cssClasses.badgeDanger" :title="property.required">Required</span>
                                        <span v-if="property.deprecated" :class="cssClasses.badgeDeprecated" :title="property.deprecated" data-tippy>Deprecated <i class="fas fa-question-circle"></i></span>
                                    </td>
                                    <td style="white-space: nowrap;">{{ property.type }}</td>
                                    <td v-html="getHighlightedCodeString(property.defaultValue, 'javascript')"></td>
                                    <td v-html="getHighlightedCodeString(property.example, 'javascript')"></td>
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

                <div :class="cssClasses.componentsColumnComponentTableWrapper" style="margin-bottom: 1rem;">
                    <table :class="cssClasses.componentsColumnComponentTable">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>On</th>
                                <th>Example Value</th>
                                <th>Usage</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-if="component.events.length > 0">
                                <tr v-for="event in component.events" :key="`event-${event.name}`">
                                    <td style="white-space: nowrap;">{{ event.name }}</td>
                                    <td style="white-space: nowrap;">{{ event.on }}</td>
                                    <td style="white-space: nowrap;">{{ event.example }}</td>
                                    <td style="white-space: nowrap;">
                                        <div class="code-highlight">
                                            <span class="property" style="margin: 0;">@{{ event.name }}</span>="<span class="value">someFunction</span>"
                                        </div>
                                    </td>
                                </tr>
                            </template>
                            <tr v-else>
                                <td colspan="999">No events</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div :class="cssClasses.row">
                    <div :class="cssClasses.exampleMinimal">
                        <h2>Minimal Example</h2>
                        <div v-html="getHighlightedCodeString(getComponentExampleHtml(component, true), 'html')"></div>
                    </div>
                    <div :class="cssClasses.exampleFull">
                        <h2>Full Example</h2>
                        <div v-html="getHighlightedCodeString(getComponentExampleHtml(component), 'html')"></div>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <div :class="cssClasses.instructions">
        <div>
            <h2>If you're building a new Vue component and you want it to be auto-documented here</h2>
            <div>
                <p>
                    <span :class="cssClasses.badgeRequired">Required</span> The component must have it's properties defined with <code>type</code> and <code>default</code> properties, see <a href="https://vuejs.org/v2/guide/components-props.html#Prop-Validation" target="_blank">Prop Validation</a>
                </p>
                <p>
                    <span :class="cssClasses.badgeOptional">Optional</span>  The component maybe also include a top level <code>meta</code> property with slot and event availability, ex.
<code style="white-space: pre;">
meta: {
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
        on: 'click',
        example: '2019-02-11',
    }],
},
</code>
                </p>
                <p>
                    <span :class="cssClasses.badgeOptional">Optional</span>  The component's properties may also include an additional <code>meta</code> property in the property definition, ex.
<code style="white-space: pre;">
meta: {
    required: [true|false],
    example: 'Example implementation code',
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
        slots: {
            default: {
                type: 'component',
                valid: ['Any'],
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
                example: '{ card: \'your-custom-card-class\' }',
            }
        },
    },
    data() {
        return {
            loadedComponents: [],
            cssClasses: {},
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


            // Build the properties HTML
            const componentProperties = minimal ? component.properties && component.properties.filter(property => property.required && !property.deprecated) : component.properties && component.properties.filter(property => !property.deprecated);

            let properties = componentProperties.map(property => `\t${property.type === 'string' ? '' : ':'}${property.name}="${property.example.replace(/[\r\n\t]+/g, ' ')}"`).join("\n");

            if (properties) {
                properties = `\n${properties}\n`;
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

                                    slots = `${slots}\t&lt;template v-slot:${componentSlot.name}>\t\t&lt;${validComponentTagName}>&lt;/${validComponentTagName}>&lt;/template>`;
                                });
                            }
                        });
                    }

                    if (component.slots.default) {

                        slots = `${slots}\n\t&lt;template v-slot:default>`;

                        if (component.slots.default.type === 'component') {
                            component.slots.default.valid.forEach((validComponent) => {

                                const validComponentTagName = this.getKebabCaseFromCamelCase(validComponent);

                                slots = `${slots}\n\t\t<a href="#${validComponentTagName}">&lt;${validComponentTagName}>&lt;/${validComponentTagName}></a>`;
                            });
                        }

                        slots = `${slots}\n\t&lt;/template>`;
                    }
                }

                if (slots) {
                    slots = `${slots}\n`;
                }
            }

            const html = `&lt;${componentTag}${properties}>${slots}&lt;/${componentTag}>`;

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

                    switch (type) {
                    case 'array':
                        example = example || '[4, 8, 15, 16, 23, 42]';

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

                        if (defaultValue) {
                            const cleanedDefaultValue = defaultValue.match(/{(.*)}/);

                            if (cleanedDefaultValue && cleanedDefaultValue[1] !== undefined) {
                                defaultValue = cleanedDefaultValue[1];

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

                    if(example) {
                        example = example.replace(/"/g, "'");
                    }

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
