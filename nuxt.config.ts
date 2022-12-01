import { defineNuxtConfig } from 'nuxt/config';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	target: 'static',

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
		documentDriven: true,
		highlight: {
			theme: {
				default: 'github-dark'
			},
			preload: ['json', 'js', 'ts', 'html', 'css', 'vue', 'svelte', 'diff', 'shell', 'markdown', 'yaml', 'bash', 'ini'],
		},
	},
})
