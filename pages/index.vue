<script setup lang="ts">
definePageMeta({
  layout: "default",
});
</script>
<template>
  <main class="grid min-h-screen grid-cols-2">
    <!--Left-->
    <div
      class="flex-start relative flex flex-col justify-between overflow-hidden border-r border-white/10 bg-[url(~/assets/imgs/bg-stars.svg)] bg-cover px-28 py-16"
    >
      <!--Blur-->
      <div
        class="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full"
      />

      <!--Stripes -->
      <div class="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

      <!--Sign In-->
      <NuxtLink class="group flex items-center gap-3 text-left">
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

      <!--Hero-->
      <div class="space-y-5">
        <img alt="NLW logo" src="~/assets/imgs/nlw-spacetime-logo.svg" />

        <div class="max-w-[420px] space-y-1">
          <h1 class="text-5xl font-bold leading-tight text-gray-50">
            Sua cápsula do tempo
          </h1>
          <p class="text-lg leading-relaxed">
            Colecione momentos marcantes da sua jornada e compartilhe com o
            mundo
          </p>
        </div>

        <NuxtLink
          class="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm leading-none text-black hover:bg-green-600"
          >CADASTRAR LEMBRANÇA</NuxtLink
        >
      </div>

      <!--Copyright-->
      <span>Em desenvolvimento</span>
    </div>
    <!--Right-->
    <div
      class="flex flex-col bg-[url(~/assets/imgs/bg-stars.svg)] bg-cover p-16"
    >
      <div class="flex flex-1 items-center justify-center">
        <p class="w-[360px] text-center leading-relaxed">
          Você ainda não registrou nenhuma lembrança, comece a
          <NuxtLink to="" class="underline transition-colors hover:text-gray-50"
            >criar agora!</NuxtLink
          >
        </p>
      </div>
    </div>
  </main>
</template>
