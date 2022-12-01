---
title: My nuxtjs + trpc fullstack web app
description: My experiences with nuxtjs 3 and tRPC
img: /images/how-i-made-my-site-fast.png
alt: how i made snowball fast
writer: juls07
date: 2022-09-20
_draft: true
tags:
  - web dev
  - fullstack development
  - nuxtjs 3
  - tRPC
  - redis
---

Recently I've been working with nuxtjs 3 and tTRPC. I've heard a lot of things about nuxtjs 3 and tRPC lately, mostly bad with nuxtjs 3 and mostly good with trpc. These are not technoligies I've been interested in working with for a while

## JS Code Block

```js
const a = 5;
```

## One liners
`here` `and here` `count` you don't even know what you're asking me to confess

## Vue Code Block

```vue
<template>
  <input v-model.lazy="message"/>
</template>

<script setup>
import { watch, ref } from 'vue'

const message = ref('');

const saveMessage = () => {
  // do anything with the message
}

watch(message, (newMessage) => {
  saveMessage(newMessage) // only called on change events
})
</script>
```

## Vue Code Block With Line Highlighting

```svelte
<script>
{#if tags.length > 0}
 {#each tags as tag}
     <Tag {tag} />
 {/each}
{:else}
 <p>This release has no tags</p>
{/if}
</script>
```

```lua {2,6-10}
local name = "juls07"
```

## Vue Code Block With Filename

```vue [pages/[...slug.vue]]
<template>
  <input v-model.lazy="message" />
</template>
```
