export default {
	name: 'HelloWorld',
	template: `
		<div>
			Hello World!
		</div>
	`,
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