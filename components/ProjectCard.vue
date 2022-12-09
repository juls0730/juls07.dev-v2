<script>
import { LOGICAL_OPERATORS } from '@babel/types';
import { Icon } from '@iconify/vue';

export default {
    props: ["name", "body", "icons", "headerIcon"],
}
</script>

<template>
	<div class="bg-[#1a191a] border p-6 col-span-1 md:col-span-2 border-zinc-700/70 shadow-md rounded-lg">
		<div class="flex" v-if="headerIcon">
			<!-- <Icon size="64" :name="logo.name" :iconName="logo.icon" /> -->
			<Icon size="64" :iconName="headerIcon.src" :name="headerIcon.name" />
		</div>
		<h4 class="text-xl md:text-2xl mb-1 font-semibold">{{ name }}</h4>
		<p>{{ body }}</p>
		<div class="ml-1 my-1.5 flex flex-wrap gap-2"
			v-if="icons">
			<div v-for="icon in icons">
				<IconButton size="16"
					:name="icon.name"
					:iconName="icon.icon"></IconButton>
			</div>
		</div>
	</div>
</template>