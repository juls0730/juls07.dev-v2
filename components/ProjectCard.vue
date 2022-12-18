<script>
export default {
	props: ["name", "icons", "headerIcon", "githubLink", "externalLink"],
}
</script>

<template>
	<div
		class="bg-[#201F20] relative border p-6 col-span-12 sm:col-span-10 sm:col-start-2 md:col-start-auto md:col-span-6 xl:!col-span-4 h-[60vw] max-h-[425px] min-h-[375px] border-zinc-700/30 shadow-md rounded-lg">
		<div class="flex mb-4 items-center"
			v-if="headerIcon">
			<Icon size="64"
				class="text-[#00FFC2]"
				:name="headerIcon" />
			<div role="links"
				class="ml-auto flex">
				<a v-if="githubLink"
					:href="githubLink"
					class="text-zinc-300/80 hover:text-zinc-200 focus:text-zinc-200 rounded transition-colors duration-300 focus:outline-3 focus:outline focus:outline-[#EB0066]">
					<Icon size="38"
						name="tabler:brand-github" />
				</a>
				<a v-if="externalLink"
					:href="externalLink"
					class="text-zinc-300/80 hover:text-zinc-200 focus:text-zinc-200 rounded transition-colors duration-300 focus:outline-3 focus:outline focus:outline-[#EB0066]">
					<Icon size="38"
						name="tabler:external-link" />
				</a>
			</div>
		</div>
		<h4 class="text-xl mb-1 capitalize font-jetbrains">{{ name }}</h4>
		<div id="body"
			class="mb-4">
			<slot />
		</div>
		<div class="flex flex-wrap gap-2 absolute bottom-6"
			v-if="icons">
			<IconTag v-for="icon in icons"
				size="16"
				:name="icon.name"
				:iconName="icon.icon"></IconTag>
		</div>
	</div>
</template>