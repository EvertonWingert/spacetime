<script setup lang="ts">
const config = useRuntimeConfig();
</script>
<template>
  <NuxtLink
    :to="`https://github.com/login/oauth/authorize?client_id=${config.public.github.clientId}`"
    external
    class="group flex items-center gap-3 text-left"
  >
    <div
      class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 transition-colors group-hover:bg-gray-50"
    >
      <Icon name="ph:user" class="h-5 w-5 text-gray-500" />
    </div>

    <p
      class="max-w-[140px] text-sm leading-snug transition-colors group-hover:text-gray-50"
    >
      <span class="underline">Crie sua conta</span> e salve suas memórias!
    </p>
  </NuxtLink>
</template>
