<template>
	<div>
		<Nav />
		<div class="gap-4 justify-evenly grid grid-cols-[repeat(auto-fit,_minmax(50px,_450px))]">
			<div v-for="article in articles"
				:key="article._path"
				class="mb-5 px-1.5">
				<p v-show="false">{{ article.date }}</p>
				<div class="text-white rounded-lg border border-neutral-700 bg-zinc-800 shadow-md">
					<img v-if="article.img"
						:src="article.img"
						class="w-full rounded-tl-lg rounded-tr-lg" />
					<div class="p-3">
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
						<p style="max-height: 224px;"
							class="overflow-hidden pt-2 before:w-full before:h-2/6 before:absolute before:left-0 before:bottom-0 before:bg-gradient-to-b before:from-transparent before:to-zinc-800 mb-1 pb-1 relative text-zinc-200">
							<ContentDoc :value="article" :path="article._path" v-slot="{ doc }">
								<div class="flex flex-wrap w-full gap-2 justify-start mb-2">
									<tagButton v-for="tag in doc.tags"
										:name="tag"
										:iconName='tag' />
								</div>
								<ContentRenderer :value="doc" />
							</ContentDoc>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const { data: articles } = await useAsyncData('posts-list', () => queryContent('/blog')
	.where({ _draft: false })
	.sort({ date: -1, $numeric: true, })
	.find()
);
</script>

<script>
export default {
	head: {
		title: "Juls07",
		htmlAttrs: {
			lang: "en",
		},
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ name: "google", content: "notranslate" },
			{
				hid: "description",
				name: "description",
				content: "Juls07 is a game developer, web developer and pixel artist.",
			},
			{ property: "og:type", content: "website" },
			{ property: "og:image", content: "/og.png" },
			{ property: "og:title", content: "Juls07" },
			{ property: "og:description", content: "Juls07's website" },
			{ property: "og:url", content: "https://juls07.dev" },
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
	},
};
</script>