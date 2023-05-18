<script setup lang="ts">
const auth = user();
</script>
<template>
  <div class="bg-gray-900 text-gray-100">
    <main class="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      <!--Left-->
      <div
        class="flex-start relative flex flex-col justify-between overflow-hidden border-r border-white/10 bg-[url(~/assets/imgs/bg-stars.svg)] bg-cover px-6 py-16 lg:px-28"
      >
        <!--Blur-->

        <div
          class="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-x-1/2 animate-pulse rounded-full bg-purple-700 opacity-50 blur-full lg:-translate-y-1/2 lg:translate-x-1/2"
        />

        <!--Stripes -->
        <div class="absolute bottom-0 right-2 top-0 w-2 rotate-0 bg-stripes" />

        <Profile v-if="auth"/>
        <SignIn v-else />

        <Hero />

        <!--Copyright-->
        <span>Em desenvolvimento</span>
      </div>
      <!--Right-->
      <div
        class="flex flex-col bg-[url(~/assets/imgs/bg-stars.svg)] bg-cover px-6 py-16 lg:p-16"
      >
        <slot />
      </div>
    </main>
  </div>
</template>
