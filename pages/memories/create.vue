<script setup lang="ts">


</script>

<template>
  <div class="flex flex-1 flex-col gap-4">
    <NuxtLink
      to="/"
      class="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100"
    >
      <Icon name="ph:caret-left" class="h-4 w-4" />
      Voltar á timeline
    </NuxtLink>

    <form class="flex flex-1 flex-col gap-2">
      <fieldset class="flex items-center gap-4">
        <label
          for="media"
          class="flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
        >
          <Icon name="ph:camera" class="h-4 w-4" />
          Anexar mídia
        </label>
        <label
          for="isPublic"
          class="flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
        >
          <input
            id="isPublic"
            type="checkbox"
            name="isPublic"
            class="h-4 w-4 rounded border-gray-400 bg-gray-700 text-purple-500"
          />
          Tornar memória pública
        </label>
      </fieldset>
      <input id="media" type="file" class="invisible h-0 w-0" />
      <textarea
        name="content"
        spellcheck="false"
        class="w-full flex-1 resize-none rounded border-0 bg-transparent text-sm leading-relaxed text-gray-100 placeholder:text-gray-400 focus:ring-0"
        placeholder="Escreva sua memória aqui..."
      />
    </form>
  </div>
</template>
