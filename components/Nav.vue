<template>
	<nav class="px-2 py-4 w-full">
		<ul class="flex gap-x-3 font-semibold">
			<li class="absolute w-fit -translate-x-full top-0 px-2 py-4 bg-[#191819] opacity-0 focus-within:translate-x-0 focus-within:opacity-100"><a class="text-white" href="#main">Skip to content</a></li>
			<li><nuxt-link class="text-white" to="/">Home</nuxt-link></li>
			<li><nuxt-link class="text-white" to="/blog">Blog</nuxt-link></li>
		</ul>
	</nav>
</template>