<template>
	<div class="hello">
		<p>
			For a guide and recipes on how to configure / customize this project,<br>
			check out the
			<a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
		</p>
		<h3>Installed CLI Plugins</h3>
		<ul>
			<li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
			<li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
		</ul>
		<h3>Essential Links</h3>
		<ul>
			<li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
			<li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
			<li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
			<li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
			<li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
		</ul>
		<h3>Ecosystem</h3>
		<ul>
			<li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
			<li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
			<li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
			<li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
			<li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'HelloWorld',
	meta: {
		events: [{
			name: 'an-event-on-load',
			description: 'On component load',
			example: '{ someKey: \'someValue\' }',
		}, {
			name: 'another-click-event',
			description: 'On sample element click',
			example: '4',
		}],
		slots: {
			default: {
				type: 'component',
				valid: ['ComponentOne', 'AnotherComponent'],
			},
			named: [
				{
					name: 'a-named-slot',
					type: 'html',
				},
			],
		},
	},
	props: {
		anEmptyString: {
			type: String,
			default: '',
			meta: {
				example: 'An example string',
			}
		},
		someString: {
			type: String,
			default: 'A default value',
			meta: {
				example: 'An example string',
			}
		},
		anEmptyArray: {
			type: Array,
			default: () => [],
			meta: {
				example: `[]`,
			},
		},
		someArray: {
			type: Array,
			default: () => [],
			meta: {
				example: `
				[
					{
						label: 'Item 1',
						value: 'different value 1',
					},
					'item2',
					'item3',
				]`,
			},
		},
		anotherArray: {
			type: Array,
			default: () => [],
			meta: {
				example: `
				[
					'another item 1',
					'another item 2',
				]`,
			},
		},
		anEmptyObject: {
			type: Object,
			default: () => {},
			meta: {
				example: `{}`,
			},
		},
		someObject: {
			type: Object,
			default: () => {},
			meta: {
				example: `
				{
					key1: 'value1',
					key2: 43,
				}`,
			},
		},
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
