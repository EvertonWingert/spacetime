<script setup lang="ts">
const preview = ref<string | null>(null);

function onMediaSelected(event: Event) {
  const target = event.target as HTMLInputElement;
  const file = target.files;

  if (!file) return;

  preview.value = URL.createObjectURL(file[0]);
}
</script>
<template>
  <div>
    <input
      id="media"
      type="file"
      class="invisible h-0 w-0"
      @change="onMediaSelected"
      accept="image/*"
      name="coverUrl"
    />

    <img
      v-if="preview"
      :src="preview"
      alt=""
      class="aspect-video w-full rounded-lg object-cover"
    />
  </div>
</template>
