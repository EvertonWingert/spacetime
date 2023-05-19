<template>
  <div class="space-y-5">
    <img alt="NLW logo" src="~/assets/imgs/nlw-spacetime-logo.svg" />

    <div class="max-w-[420px] space-y-1">
      <h1 class="text-5xl font-bold leading-tight text-gray-50">
        Sua cápsula do tempo
      </h1>
      <p class="text-lg leading-relaxed">
        Colecione momentos marcantes da sua jornada e compartilhe com o mundo
      </p>
    </div>

    <NuxtLink
      to="/memories/create"
      external
      class="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm font-black leading-none text-black hover:bg-green-600"
      >CADASTRAR LEMBRANÇA</NuxtLink
    >
  </div>
</template>
