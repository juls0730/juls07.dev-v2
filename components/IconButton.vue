<script>
export default {
    data() {
        return {
            tagMap: {
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
                'web-server': 'nginx',
                'supabase': 'supabase-icon'
            },
        }
    },
    props: ['iconName', 'name', 'isTag', 'size']
}
</script>
<template>
    <button :aria-label="name"
        class="font-inter md:text-lg w-fit max-h-9 min-w-fit bg-zinc-800 border border-zinc-700/30 py-1 px-2 rounded shadow flex items-center"
        :class="(isTag) ? 'select-none' : 'select-text'" :style="(size) ? 'font-size: ' + size + 'px;' : ''">
        <Icon :size="(size) ? size : '20'"
            class="mr-2"
            :name="(isTag) ? ('logos:' + (tagMap[iconName.toLowerCase().split(' ').join('-')] || iconName.toLowerCase())) : iconName" />
        {{name}}
    </button>
</template>