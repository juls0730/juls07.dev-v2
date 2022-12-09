<template>
	<div>
		<Nav />
		<div class="gap-4 justify-evenly grid grid-cols-[repeat(auto-fit,_minmax(50px,_450px))]">
			<div v-for="article in articles"
				:key="article._path"
				class="mb-5 px-1.5">
				<div class="text-white bg-zinc-800 max-h-[563.25px] h-[563.25px] overflow-hidden rounded-lg border border-neutral-700 shadow-md">
					<img v-if="article.image.src"
						:src="article.image.src"
						class="w-full rounded-tl-lg rounded-tr-lg" />
					<div class="p-3 overflow-hidden pt-2 before:w-full before:h-2/6 before:absolute before:left-0 before:bottom-0 before:bg-gradient-to-b before:from-transparent before:to-zinc-800 mb-1 pb-1 relative">
						<h3>
							<nuxt-link class="text-lg"
								:to="article._path">
								{{ article.title }}
							</nuxt-link>
						</h3>
						<p class="text-zinc-600 dark:text-zinc-500">
							{{ new Date(article.date).toDateString().split(' ').slice(1).join(' ') }}
						</p>
						<p class="text-zinc-400 dark:text-zinc-400">
							{{ article.description }}
						</p>
						<p
							class="text-zinc-200 max-h-56">
							<ContentDoc :value="article"
								:path="article._path"
								v-slot="{ doc }">
								<div class="flex flex-wrap w-full gap-2 justify-start mb-2">
									<IconButton v-for="tag in doc.tags"
										:name="tag"
										:iconName='tag'
										isTag="true" />
								</div>
								<ContentRenderer :value="doc" :excerpt="true" />
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
</script>

<script lang="ts">
export default {
	head: {
		title: 'Juls07'
	}
}
</script>