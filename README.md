# Vue Documenter
An automatic, living Vue component documenter - yes - a component that documents components, with no build step (ie Webpack or Rollup or extra commands to run, because it's just another component).

# Usage
```
// YourVueDocumentationPage.vue

<template>
	<div>
		<vue-documenter>
			<some-component></some-component>
			<another-component></another-component>
		</vue-documenter>
	</div>
</template>
<script>

	import VueDocumenter from 'vue-documenter';

	import SomeComponent from './components/SomeComponent.vue';
	import AnotherComponent from './components/AnotherComponent.vue';

	export default {
		components: {
			VueDocumenter,
			SomeComponent,
			AnotherComponent,
		},
		data () {
			return {}
		}
	}
</script>

```

# Output
![Example Vue Documenter output](example/vue-documenter-example.png)

# Why?
For when you don't always have time to keep secondary documentation updated, or aren't able to roll out something like Storybook for everybody on your team.

# Read more
https://medium.com/skilljar-engineering/the-quickest-dirtiest-automatic-est-vue-documenter-ever-cf55845b4df9