import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, type Plugin } from 'vite';

const debugPlugin: Plugin = {
	name: 'debug'
	// configResolved(config) {
	// 	 console.log(config);
	// }
};

export default defineConfig({
	plugins: [sveltekit(), debugPlugin],
	build: {
		reportCompressedSize: false
	}
});
