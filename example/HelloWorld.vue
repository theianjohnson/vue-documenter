<template>
	<div>

		Hello World!

	</div>
</template>

<script>

export default {
	props: {
		sampleProperty: {
			type: String,
			default: 'Sample property\'s default value',
		},
		sampleBoolean: {
			type: Boolean,
			default: false,
		},
	},
};
</script>

<style lang="scss" scoped>

</style>
