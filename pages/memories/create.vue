<template>
  <div class="flex flex-1 flex-col gap-4 p-6">
    <NuxtLink
      to="/"
      class="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100"
    >
      <Icon name="ph:caret-left" class="h-4 w-4" />
      Voltar á timeline
    </NuxtLink>

    <CreateMemoryForm/>
  </div>
</template>
