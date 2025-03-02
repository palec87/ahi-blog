// import adapter from '@sveltejs/adapter-auto';
// import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
// import { mdsvex } from 'mdsvex';
// import mdsvexConfig from './mdsvex.config.js';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	extensions: ['.svelte', ...mdsvexConfig.extensions],
// 	kit: {
// 		adapter: adapter(),

// 		// remove this if you're not using comment system
// 		csp: { mode: 'auto' }
// 	},
// 	preprocess: [mdsvex(mdsvexConfig), vitePreprocess()]
// };

// export default config;



import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	kit: {
		adapter: adapter(),
		csp: { mode: 'auto' },
		alias: {
			$components: 'src/lib/components',
			$lib: 'src/lib',
			$routes: 'src/routes'
		}
	},
	preprocess: [mdsvex(mdsvexConfig), vitePreprocess()]
};

export default config;


// import adapter from '@sveltejs/adapter-auto';
// import preprocess from 'svelte-preprocess';
// import mdsvexConfig from './mdsvex.config.js';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
//   extensions: ['.svelte', ...mdsvexConfig.extensions],
//   preprocess: preprocess(),

//   kit: {
//     adapter: adapter(),
//     alias: {
//       $components: 'src/lib/components',
//       $lib: 'src/lib',
//       $routes: 'src/routes'
//     }
//   }
// };

// export default config;
