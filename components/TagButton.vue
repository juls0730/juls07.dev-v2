<script>
export default {
	data() {
		return {
			iconMap: {
				'nuxtjs': 'nuxt-icon',
				'nuxt': 'nuxt-icon',
				'nuxtjs-3': 'nuxt-icon',
				'web-dev': 'web-dev-icon',
				'fullstack-development': 'jamstack-icon',
				'angular': 'angular-icon',
				'nodejs': 'nodejs-icon',
				'mongodb': 'mongodb-icon',
				'docker': 'docker-icon',
				'linux': 'linux-tux',
				'bittorrent': 'webtorrent',
				'web-server': 'nginx'
			},
		}
	},
    props: ['iconName', 'name']
}
</script>

<template>
	<button :aria-label="name"
		class="font-inter md:text-lg w-fit max-h-9 min-w-fit bg-zinc-800 border border-zinc-700/30 py-1 px-2 rounded shadow flex items-center">
		<Icon size="20"
			class="mr-2"
			:name="('logos:' + (iconMap[iconName.toLowerCase().split(' ').join('-')] || iconName.toLowerCase()))" />
		{{name}}
	</button>
</template>