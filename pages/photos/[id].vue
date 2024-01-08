<template>
  <article class="max-w-5xl mx-auto pt-2">
    <NuxtLink to="/">
      <Button label="Back to home" link icon="pi pi-arrow-left" />
    </NuxtLink>
  </article>

  <div class="max-w-xl mx-auto py-10 px-4">
    <div class="flex justify-between items-center mb-3 gap-4">
      <p class="text-lg tracking-tight">
        <i class="pi pi-image"></i> {{ data.photo.title }}
      </p>

      <Button
        @click="
          favouriteStore.toggle({
            id: data.photo.id,
            image: data.photo.image,
            title: data.photo.title,
          })
        "
        icon="pi pi-heart"
        :outlined="!favouriteStore.checkExists(data.photo.id)"
        severity="danger"
        size="small"
      />
    </div>

    <img :src="data.photo.image" alt="image" class="w-full rounded-xl" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const favouriteStore = useFavouriteStore();

const data: { photo: { id: number; image: string; title: string } } =
  await $fetch("/api/photos/" + route.params.id);
</script>
