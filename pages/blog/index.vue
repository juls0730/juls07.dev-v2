<template>
	<div>
		<Nav />
		<div class="gap-4 justify-evenly grid grid-cols-[repeat(auto-fit,_minmax(50px,_450px))]">
			<div v-for="article in articles"
				:key="article._path"
				class="mb-5 px-1.5">
				<div
					class="text-white bg-[#201F20] max-h-[563.25px] h-[563.25px] overflow-hidden rounded-lg border border-zinc-700/30 shadow-md">
					<img v-if="article.image.src"
						:src="article.image.src"
						class="w-full rounded-tl-lg rounded-tr-lg aspect-video" />
					<div
						class="p-3 overflow-hidden pt-2 before:w-full before:h-2/6 before:absolute before:left-0 before:bottom-0 before:bg-gradient-to-b before:from-transparent before:to-[#201F20] mb-1 pb-1 relative">
						<h3>
							<nuxt-link class="text-lg"
								:to="article._path">
								{{ article.title }}
							</nuxt-link>
						</h3>
						<p class="text-zinc-400">
							{{ article.description }}
						</p>
						<p class="text-zinc-500">
							{{ new Date(article.date).toDateString().split(' ').slice(1).join(' ') }}
						</p>
						<p class="text-zinc-200 max-h-56">
							<ContentDoc :head="false" :value="article"
								:path="article._path"
								v-slot="{ doc }">
								<div class="flex flex-wrap w-full gap-2 justify-start my-1">
									<IconTag v-for="tag in doc.tags"
										:name="tag"
										:iconName='tag'
										isTag="true" />
								</div>
								<ContentRenderer :value="doc"
									:excerpt="true" />
							</ContentDoc>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const { data: articles } = await useAsyncData('posts-list', () => queryContent('/blog')
	.where({ _draft: false })
	.sort({ date: -1, $numeric: true, })
	.find()
);

useHead({
	title: 'Juls07',
})
</script>
