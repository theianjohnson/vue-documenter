<template>
<div>

    <div style="display: none;">
        <slot></slot>
    </div>

    <div class="row">
        <div class="col-sm-3">
            <div class="card card-body">
                <h2 class="mt-0">Components</h2>
                <ul>
                   <li v-for="component in loadedComponents" :key="`table-of-contents-${component.name}`">
                       <a :href="`#{component.name}`">{{ component.name }}</a>
                   </li>
                </ul>
            </div>
        </div>
        <div class="col-sm-9">
            <div v-for="component in loadedComponents" class="card card-body mb-5" :key="`component-${component.name}`">

                <h1 :id="getKebabCaseFromCamelCase(component.name)">&lt;{{ getKebabCaseFromCamelCase(component.name) }}&gt;</h1>

                <h2>Properties</h2>

                <div class="table-responsive mb-3">
                    <table class="table table-striped">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Default Value</th>
                            <th>Example</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="property in component.properties" :key="`property-${property.name}`" :class="{ 'deprecated': property.deprecated }">
                            <td style="white-space: nowrap;">
                                {{ property.type !== 'string' ? ':' : '' }}{{ property.name }}
                                <span v-if="property.required" class="badge badge-danger" :title="property.required">Required</span>
                                <span v-if="property.deprecated" class="badge badge-warning" :title="property.deprecated" data-tippy>Deprecated <i class="fas fa-question-circle"></i></span>
                            </td>
                            <td style="white-space: nowrap;">{{ property.type }}</td>
                            <td style="white-space: nowrap;">{{ property.defaultValue }}</td>
                            <td><code>{{ property.example }}</code></td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <h2>Events (<a href="https://vuejs.org/v2/api/#vm-emit" target="_blank">Vue Docs</a>)</h2>

                <div class="row mb-3">
                    <div class="col">
                        <div v-if="component.events" class="table-responsive">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Selector</th>
                                        <th>On</th>
                                        <th>Example Value</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="event in component.events" :key="`event-${event.name}`">
                                        <td style="white-space: nowrap;">{{ event.name }}</td>
                                        <td style="white-space: nowrap;">{{ event.selector }}</td>
                                        <td style="white-space: nowrap;">{{ event.on }}</td>
                                        <td style="white-space: nowrap;">{{ event.example }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <h3 v-else>None</h3>
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-6">
                        <h2>Minimal Example</h2>
                        <div class="code-highlight" v-html="getComponentExampleHtml(component, { onlyRequired: true })"></div>
                    </div>
                    <div class="col-sm-6">
                        <h2>Full Example</h2>
                        <div class="code-highlight" v-html="getComponentExampleHtml(component)"></div>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <div class="alert alert-info d-flex">
        <i class="fas fa-exclamation-triangle fa-2x mr-4"></i>
        <div>
            <h2>If you're building a new Vue component and you want it to be auto-documented here</h2>
            <div>
                <p>
                    <span class="badge badge-danger">Required</span> The component must have it's properties defined with <code>type</code> and <code>default</code> properties, see <a href="https://vuejs.org/v2/guide/components-props.html#Prop-Validation" target="_blank">Prop Validation</a>
                </p>
                <p>
                    <span class="badge badge-secondary">Optional</span>  The component maybe also include a top level <code>meta</code> property with slot and event availability, ex.
<code style="white-space: pre;">
meta: {
slots: {
    default: {
        type: 'component',
        valid: ['ComponentNameOne', 'ComponentNameTwo'],
    ],
    named: [{
        name: 'filters',
        type: 'component',
        valid: ['OtherComponentName'],
    }],
},
events: [{
    name: 'date-selected',
    selector: '.dates li',
    on: 'click',
    example: '2019-02-11',
}],
},
</code>
                </p>
                <p>
                    <span class="badge badge-secondary">Optional</span>  The component's properties may also include an additional <code>meta</code> property in the property definition, ex.
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

export default {
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
};
</script>

<style lang="scss" scoped>

    h2 {
        margin-top: 1rem;
    }

    .alert {
        h2 {
            margin-top: .25rem;
            margin-bottom: 1rem;
        }
    }

    .indent {
        margin-left: 2rem;
    }

    /* Code highlighting */
    .code-highlight {

        background: #f5f2f0;
        color: #999999;
        font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
        overflow-x: scroll;
        padding: 1em;
        text-shadow: 0 1px #ffffff;
        white-space: nowrap;

        /deep/ .tag,
        /deep/ .property,
        /deep/ .value {
            display: inline-block;
        }

        /deep/ .tag {
            color: #990055;
        }

        /deep/ .property {
            color: #669900;
            margin-left: 2em;
        }

        /deep/ .value {
            color: #0077aa;
        }

        /deep/ .slot {
            margin-left: 2em;

            .property {
                margin-left: 0;
            }

            .slot-contents {
                margin-left: 4em;
            }
        }
    }

</style>
