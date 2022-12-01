<template>
	<div class="h-screen text-white">
		<Nav class="absolute z-10" />
		<header class="w-screen h-3/6 sm:h-2/5 md:h-3/5">
			<div
				class="p-6 bg-[#12121233] justify-center grid sm:grid-cols-12 gap-5 items-center sm:justify-start w-full h-full backdrop-blur-md backdrop-saturate-[1.15]">
				<div
					class="sm:h-32 sm:!col-start-2 sm:col-span-8 md:col-span-6 lg:col-span-5 w-32 sm:w-fit max-h-full md:h-40 items-center grid grid-rows-1 grid-cols-1 sm:grid-cols-2 drop-shadow-md">
					<img src="~/assets/pictues/juls07.png"
						class="h-32 md:h-40 max-h-full rounded-full mb-3 sm:mb-0 sm:mr-2" />
					<div class="grid grid-rows-5 grid-cols-1 h-fit">
						<h1 class="text-4xl md:text-5xl row-span-3 font-jetbrains">Juls07</h1>
						<p class="text-zinc-200 row-span-2 md:text-lg h-fit">Fullstack dev</p>
					</div>
				</div>
			</div>
		</header>
		<main class="grid grid-cols-12 gap-5 justify-center">
			<section
				class="py-6 mb-4 !col-start-2 md:!col-start-3 lg:!col-start-4 lg:col-span-6 md:col-span-8 col-span-10">
				<h2 class="md:text-4xl text-3xl mb-1">About me</h2>
				<hr class="border-2 border-[#EB0066] rounded-md w-7/12 min-w-[200px] max-w-xs lg:max-w-sm mb-1" />
				<p class="max-w-md sm:max-w-xl md:max-w-3xl lg:max-w-4xl mb-4">
					Hi there, I'm juls07, I am 14 years old and I <span tabindex="1"
						class="love">love</span> web
					development. I first dabbled in web development
					when I was ten, and here we are today! I mainly use
					<a
						href="https://nuxtjs.org">NuxtJs</a> to
					build my websites since I absolutely
					adore Vuejs. For me, I love being able to imagine anything and it to come to life. Finally, go
					checkout my <a
						href="https://github.com/juls0730">Github</a> and also my <a
						href="https://twitter.com/julie4055_">Twitter</a>.
				</p>
				<h3 class="text-2xl md:text-3xl mb-1">Skills</h3>
				<section class="flex flex-wrap w-full gap-2 justify-start">
					<SkillButton name="Javascript"
						iconName='logos:javascript' />
					<SkillButton name="Nuxt.js"
						iconName="logos:nuxt-icon" />
					<SkillButton name="Ruby on rails"
						iconName="logos:ruby" />
					<SkillButton name="php"
						iconName="logos:laravel" />
					<SkillButton name="Angular"
						iconName="logos:angular-icon" />
					<SkillButton name="React"
						iconName="logos:react" />
					<SkillButton name="Bash"
						iconName="logos:bash-icon" />
					<SkillButton name="Tailwindcss"
						iconName="logos:tailwindcss-icon" />
					<SkillButton name="Rust"
						iconName="logos:rust" />
					<SkillButton name="Node.js"
						iconName="logos:nodejs-icon" />
					<SkillButton name="Svelte"
						iconName="logos:svelte-icon" />
					<SkillButton name="Supabase"
						iconName="logos:supabase-icon" />
					<SkillButton name="tRPC"
						iconName="logos:trpc" />
					<SkillButton name="Python"
						iconName="logos:python" />
					<SkillButton name="Deno"
						iconName="logos:deno" />
				</section>
			</section>
		</main>
	</div>
</template>
  