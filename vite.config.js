import { resolve } from 'path'
import { sveltekit } from '@sveltejs/kit/vite'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$libs: resolve('./src/libs')
		}
	}
}

export default config
