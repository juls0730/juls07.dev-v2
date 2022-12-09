import { defineNuxtConfig } from 'nuxt/config';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	target: 'static',

	app: {
		head: {
			title: 'Juls07',
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },

				// hid is used as unique identifier. Do not use `vmid` for it as it will not work
				{ hid: 'description', name: 'description', content: 'Juls07 is a fullstack web developer' }
			]
		},
	},

	css: ['~/assets/css/main.css'],

	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},

	modules: ['nuxt-icon', '@nuxt/content'],

	nitro: {
		prerender: {
			routes: ['/sitemap.xml']
		}
	},

	content: {		
		highlight: {
			theme: {
				default: 'github-dark'
			},
			preload: ['json', 'js', 'ts', 'html', 'css', 'vue', 'svelte', 'diff', 'shell', 'markdown', 'yaml', 'bash', 'ini'],
		},
	},
})
