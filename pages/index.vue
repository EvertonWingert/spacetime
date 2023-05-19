<script setup lang="ts">
definePageMeta({
  layout: "default",
});
const headers = useRequestHeaders(["cookie"]) as HeadersInit;

const { data } = await useFetch("/api/memories", {
  credentials: "include",
  headers,
});

//19 de maio, 2023
function formatDate(date: Date) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}
</script>
<template>
  <div>
    <div v-if="!data" class="flex flex-1 items-center justify-center">
      <EmptyMemories />
    </div>
    <div v-else class="flex flex-col gap-10 p-8">
      <div v-for="memory in data" :key="memory.id">
        <time
          class="-ml-8 flex items-center gap-2 text-sm text-gray-100 before:h-px before:w-5 before:bg-gray-50"
          >{{ formatDate(new Date(memory.createdAt)) }}</time
        >
        <img :src="memory.coverUrl" height="592" width="280" alt="" class="w-full aspect-video rounded-lg object-cover"/>
        <p class="text-lg leading-relaxed text-gray-100">
          {{memory.excerpt}}
        </p>

        <NuxtLink :to="`/memories/${memory.id}`" class="flex items-center gap-2 text-sm text-gray-200 hover:text-gray-100">
            Ler mais
            <Icon name="ph:arrow-right" class="h-4 w-4" />
          </NuxtLink>
      </div>
    </div>
  </div>
</template>
