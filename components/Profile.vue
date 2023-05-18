<script setup lang="ts">
const auth = user();
</script>
<template>
  <div
    class="group flex items-center gap-3 text-left"
  >
    <div
      class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 transition-colors group-hover:bg-gray-50"
    >
      <img :src="auth?.avatarUrl" class="rounded-full" />
    </div>

    <p
      class="max-w-[140px] text-sm leading-snug transition-colors group-hover:text-gray-50"
    >
        {{auth?.name}}
        <NuxtLink class="block text-red-400 hover:text-red-400">Quero sair</NuxtLink>
    </p>
  </div>
</template>