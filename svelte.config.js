import sveltePreprocess from 'svelte-preprocess'
import node from '@sveltejs/adapter-node'
import Icons from 'unplugin-icons/vite'
// import pkg from './package.json';


/** @type {import('@sveltejs/kit').Config} */
export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    sveltePreprocess({
      postcss: true
    })
  ],
  kit: {
    // By default, `npm run build` will create a standard Node app.
    // You can create optimized builds for different platforms by
    // specifying a different adapter
    adapter: node(),

    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',

    vite: {
      plugins: [
        Icons({
          compiler: 'svelte',
        }),
      ],
    },
    // vite: {
    // 	ssr: {
    // 		noExternal: Object.keys(pkg.dependencies || {})
    // 	}
    // }
  }
}
