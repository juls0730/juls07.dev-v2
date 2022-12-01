<template>
	<Nav />
	<main class="grid grid-cols-12 gap-5 justify-center">
		<div class="py-6 !col-start-2 md:!col-start-3 lg:!col-start-4 lg:col-span-6 md:col-span-8 col-span-10">
			<ContentDoc v-slot="{ doc }">
				<img :src="doc.image.src"
					class="mb-2" />
				<h1 class="text-3xl md:text-4xl font-semibold mb-2">{{ doc.title }}</h1>
				<p class="mb-1 text-zinc-400">
					{{ doc.description }}
				</p>
				<p class="mb-2 text-zinc-600 dark:text-zinc-400">
					{{ new Date(doc.date).toDateString().split(' ').slice(1).join(' ') }}
				</p>
				<div class="flex flex-wrap w-full gap-2 justify-start mb-7">
					<tagButton v-for="tag in doc.tags"
						:name="tag"
						:iconName='tag' />
				</div>
				<ContentRenderer :value="doc" />
			</ContentDoc>
		</div>
	</main>
	<footer class="grid grid-cols-12 gap-5 justify-center">
		<div class="py-2 mb-4 !col-start-3 md:!col-start-4 xl:!col-start-5 xl:col-span-4 md:col-span-6 col-span-8">
			<NewsletterSignup class="mb-2" />
			© 2022 Juls07 - GPL v3.0 License
		</div>
	</footer>
</template>
