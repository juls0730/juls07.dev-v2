<script>
export default {
    props: ['iconSrc', 'name']
}
</script>
<template>
    <button class="font-inter md:text-lg w-fit min-w-fit bg-zinc-800 py-1 px-2 rounded shadow flex items-center"><img
            :src="iconSrc"
            class="mr-2 w-5 h-5" />{{name}}</button>
</template>