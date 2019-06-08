const VueDocumenter = import('../dist/vue-documenter.umd.js');
const HelloWorld = import('./HelloWorld.js');

export default {
  name: 'App',
  components: {
  	VueDocumenter,
  	HelloWorld,
  },
  template: `
    <div>
      <vue-documenter>
      	<hello-world></hello-world>
      </vue-documenter>
    </div>
  `,
};