<script setup lang="ts">
async function onSubmitForm(event: Event) {
  const form = event.target as HTMLFormElement;
  const formData = new FormData(form);

  const fileToUpload = formData.get("coverUrl") as File;

  let coverUrl = ''
  if(fileToUpload) {
    const uploadFormData = new FormData();
    uploadFormData.set("file", fileToUpload);

    const response = await $fetch<{fileUrl: string}>("/api/upload", {
      method: "POST",
      body: uploadFormData,
    });


    coverUrl = response.fileUrl;
  }

  await $fetch('/api/memories', {
    method: 'POST',
    body: JSON.stringify({
      content: formData.get('content'),
      isPublic: formData.get('isPublic'),
      coverUrl
    }),
    credentials: 'include'
  })

  await navigateTo('/')
}
</script>
<template>
  <form class="flex flex-1 flex-col gap-2" @submit.prevent="onSubmitForm">
    <fieldset>
      <div class="flex items-center gap-4">
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
            value="false"
            class="h-4 w-4 rounded border-gray-400 bg-gray-700 text-purple-500"
          />
          Tornar memória pública
        </label>
      </div>

      <MediaPicker />
      <textarea
        name="content"
        spellcheck="false"
        class="w-full flex-1 resize-none rounded border-0 bg-transparent text-sm leading-relaxed text-gray-100 placeholder:text-gray-400 focus:ring-0"
        placeholder="Escreva sua memória aqui..."
      />
      <button
        class="inline-block rounded-full self-end bg-green-500 px-5 py-3 font-alt text-sm font-black leading-none text-black hover:bg-green-600"
      >
        Salvar
      </button>
    </fieldset>
  </form>
</template>
