<template>
	<div class="h-screen text-white">
		<Nav />
		<main>
			<div id="main"
				class="gap-4 justify-evenly py-2 grid grid-cols-[repeat(auto-fit,_minmax(50px,_450px))]">
				<div v-for="article in articles"
					:key="article._path"
					class="mb-5 px-1.5">
					<div
						class="text-white bg-[#201F20] max-h-[563.25px] h-[563.25px] overflow-hidden rounded-lg border border-zinc-700/30 shadow-md">
						<img v-if="article.image.src"
							:src="article.image.src"
							class="w-full rounded-tl-lg rounded-tr-lg aspect-video" />
						<div
							class="p-3 overflow-hidden pt-2 text-fade mb-1 pb-1 relative">
							<h3>
								<nuxt-link tabindex="0"
									class="text-lg"
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
							<p class="text-zinc-200 max-h-[13.75rem]">
								<ContentDoc :head="false"
									:value="article"
									:path="article._path"
									v-slot="{ doc }">
									<div class="flex flex-wrap w-full gap-2 justify-start my-1">
										<IconTag v-for="tag in doc.tags"
											:name="tag"
											:iconName='tag'
											isTag="true" />
									</div>
									<div class="max-h-full">
										<ContentRenderer :value="doc"
											:excerpt="true" />
									</div>
								</ContentDoc>
							</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<style>
.text-fade::before {
	content: '';
	position: absolute;
	width: 100%;
	height: 33.333333%;
	left: 0px;
	bottom: 0px;
	background-image: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(12,12,12,0) 36%, rgba(32,31,32,1) 95%, rgba(32,31,32,1) 100%);
}
</style>

<script setup lang="ts">
const { data: articles } = await useAsyncData('posts-list', () => queryContent('/blog')
	.only(['image', '_path', 'title', 'description', 'date'])
	.where({ _draft: false })
	.sort({ date: -1, $numeric: true, })
	.find()
);

useHead({
	title: 'Juls07',
})
</script>
