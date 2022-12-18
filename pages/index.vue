<template>
	<div class="h-screen text-white">
		<Nav class="absolute z-10" />
		<header class="w-full h-3/6 sm:h-2/5 md:h-3/5">
			<div
				class="p-6 bg-[#12121233] justify-center grid sm:grid-cols-12 gap-5 items-center sm:justify-start w-full h-full blur-background">
				<div
					class="sm:h-32 sm:!col-start-2 sm:col-span-8 md:col-span-6 lg:col-span-5 w-32 sm:w-fit max-h-full md:h-40 items-center grid grid-rows-1 grid-cols-1 sm:grid-cols-2 drop-shadow-md">
					<nuxt-img alt="juls07 profile picture"
						src="/images/juls07.png"
						sizes="128px md:160px"
						class="h-32 md:h-40 max-h-full rounded-full mb-3 sm:mb-0 sm:mr-2" />
					<div class="grid grid-rows-5 grid-cols-1 h-fit">
						<h1 class="text-4xl md:text-5xl row-span-3 font-jetbrains">Juls07</h1>
						<p class="text-[#00FFC2] row-span-2 md:text-lg h-fit">
							<span
								class="after:border after:h-[1.0em] after:border-current after:inline-block after:ml-0.5 after:animate-blink">
								{{ tagLine }}
							</span>
						</p>
					</div>
				</div>
			</div>
		</header>
		<main id="main"
			class="grid grid-cols-12 gap-5 justify-center">
			<section
				class="py-6 mb-4 !col-start-2 md:!col-start-3 lg:!col-start-4 lg:col-span-6 md:col-span-8 col-span-10">
				<h2 class="md:text-4xl text-3xl mb-1">About me</h2>
				<hr
					class="border-2 my-1.5 border-[#EB0066] rounded-md w-7/12 min-w-[200px] max-w-xs lg:max-w-sm mb-1" />
				<p class="max-w-md sm:max-w-xl md:max-w-3xl lg:max-w-4xl mb-4">
					Hi there, I'm juls07, I am 14 years old and I <span tabindex="0"
						class="love">love</span> web
					development. I first dabbled in web development
					when I was ten, and here we are today! I mainly use
					<a href="https://nuxtjs.org">NuxtJs</a> to
					build my websites since I absolutely
					adore Vuejs. For me, I love being able to imagine anything and it to come to life. Finally, go
					checkout my <a href="https://github.com/juls0730">Github</a> and also my <a
						href="https://twitter.com/julie4055_">Twitter</a>.
				</p>
				<h3 class="text-2xl md:text-3xl mb-1.5 ml-0.5">Skills</h3>
				<section class="flex flex-wrap w-full gap-2 justify-start ml-1">
					<IconTag name="Javascript"
						iconName='logos:javascript' />
					<IconTag name="Nuxt.js"
						iconName="logos:nuxt-icon" />
					<IconTag name="Ruby on rails"
						iconName="logos:ruby" />
					<IconTag name="php"
						iconName="logos:laravel" />
					<IconTag name="Angular"
						iconName="logos:angular-icon" />
					<IconTag name="React"
						iconName="logos:react" />
					<IconTag name="Bash"
						iconName="logos:bash-icon" />
					<IconTag name="Tailwindcss"
						iconName="logos:tailwindcss-icon" />
					<IconTag name="Rust"
						iconName="logos:rust" />
					<IconTag name="Node.js"
						iconName="logos:nodejs-icon" />
					<IconTag name="Svelte"
						iconName="logos:svelte-icon" />
					<IconTag name="Supabase"
						iconName="logos:supabase-icon" />
					<IconTag name="tRPC"
						iconName="logos:trpc" />
					<IconTag name="Python"
						iconName="logos:python" />
					<IconTag name="Deno"
						iconName="logos:deno" />
				</section>
			</section>
			<div class="!col-start-2 md:!col-start-3 lg:!col-start-4 lg:col-span-6 md:col-span-8 col-span-10">
				<h2 class="md:text-4xl text-3xl mb-1">Projects</h2>
			</div>
			<section
				class="pb-6 grid mb-4 col-start-2 xs:!col-start-3 col-span-10 xs:col-span-8 grid-cols-12 gap-y-6 sm:gap-x-6 max-w-full">
				<ProjectCard name="Juls07.dev V2"
					headerIcon="mdi:nuxt"
					githubLink="https://github.com/juls0730/vuefullstack"
					:icons="[{ 'icon': 'logos:nuxt-icon', 'name': 'nuxtjs v3' }, { 'icon': 'logos:supabase-icon', 'name': 'supabase' }]">
					this is a small forum project I made to mock my ruby on rails forum I am
					working on but in vuejs.
				</ProjectCard>
				<ProjectCard name="PHP Forum"
					headerIcon="mdi:language-php"
					githubLink="https://github.com/juls0730/php-forum"
					:icons="[{ 'icon': 'logos:laravel', 'name': 'php' }]">
					This is my attempt at a forum written in php, its not great but it works.
				</ProjectCard>
				<ProjectCard name="Cyansplash.net"
					headerIcon="mdi:nuxt"
					githubLink="https://github.com/juls0730/cyansplash.net"
					:icons="[{ 'icon': 'logos:nuxt-icon', 'name': 'nuxtjs v2' }]">
					This is the old cyansplash.net site, not amazing but taught me a lot about web
					development.
				</ProjectCard>
				<ProjectCard name="Discord.js bot"
					headerIcon="mdi:robot-excited-outline"
					githubLink="https://github.com/juls0730/Echo"
					:icons="[{ 'icon': 'logos:javascript', 'name': 'Javascript' }]">
					This is one of the first projects that wasn't just a dinky website, this project brought me to where
					I am today.
				</ProjectCard>
				<ProjectCard name="juls07.dev V1"
					headerIcon="mdi:nuxt"
					githubLink="https://github.com/juls0730/juls07.dev"
					:icons="[{ 'icon': 'logos:nuxt-icon', 'name': 'nuxtjs v2' }, { 'icon': 'logos:tailwindcss-icon', 'name': 'tailwindcss' }]">
					This stie is the site you are currently on, this site is just a place to show
					off my projects and my skills.
				</ProjectCard>
				<ProjectCard name="vuefullstack"
					headerIcon="mdi:vuejs"
					githubLink="https://github.com/juls0730/vuefullstack"
					:icons="[{ 'icon': 'logos:vue', 'name': 'vue v3' }, { 'icon': 'logos:nodejs-icon', 'name': 'nodejs' }]">
					this is a small forum project I made to mock my ruby on rails forum I am
					working on but in vuejs.
				</ProjectCard>
			</section>
		</main>
	</div>
</template>
  
<script setup lang="ts">
useHead({
	title: 'Juls07',
})
</script>

<script lang="ts">
export default {
	data: () => {
		return {
			tagLine: "",
			typeStatus: false,
			displayTextArray: ["Fullstack dev", "Designer", "Blogger", "Freelancer"],
			displayTextArrayIndex: 0,
			charIndex: 0,
		};
	},
	methods: {
		typeText() {
			if (this.charIndex < this.displayTextArray[this.displayTextArrayIndex].length) {
				if (!this.typeStatus) this.typeStatus = true;
				this.tagLine += this.displayTextArray[this.displayTextArrayIndex].charAt(
					this.charIndex
				);
				this.charIndex += 1;
				setTimeout(this.typeText, 100);
			} else {
				this.typeStatus = false;
				setTimeout(this.eraseText, Math.min(Math.floor(Math.random() * 2001), 1750));
			}
		},
		eraseText() {
			if (this.charIndex > 0) {
				if (!this.typeStatus) this.typeStatus = true;
				this.tagLine = this.displayTextArray[this.displayTextArrayIndex].substring(
					0,
					this.charIndex - 1
				);
				this.charIndex -= 1;
				setTimeout(this.eraseText, 50);
			} else {
				this.typeStatus = false;
				this.displayTextArrayIndex += 1;
				if (this.displayTextArrayIndex >= this.displayTextArray.length)
					this.displayTextArrayIndex = 0;
				setTimeout(this.typeText, 1100);
			}
		},
	},
	created() {
		setTimeout(this.typeText, 2200);
	},
}
</script>