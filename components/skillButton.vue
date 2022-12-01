<script>
export default {
    props: ['iconName', 'name']
}
</script>
<template>
    <button :aria-label="name" class="font-inter md:text-lg w-fit max-h-9 min-w-fit bg-zinc-800 border border-zinc-700/30 py-1 px-2 rounded shadow flex items-center">
        <Icon size="20" class="mr-2" :name="iconName" />
        {{name}}</button>
</template>