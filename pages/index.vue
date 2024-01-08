<template>
  <div>
    <!-- landing banner -->
    <section
      class="h-[50vh] bg-[url(https://images.unsplash.com/photo-1568819317551-31051b37f69f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center"
    >
      <article class="text-white text-center pt-20 px-4">
        <p class="text-2xl">Life moments are captured in</p>
        <p class="text-2xl">beautiful photos</p>
      </article>
    </section>

    <div
      class="grid grid-cols-12 gap-2 max-w-5xl mx-auto bg-white py-7 px-4 shadow-2xl -mt-[3.2rem]"
    >
      <div class="col-span-9 p-input-icon-left">
        <i class="pi pi-search"></i>
        <InputText class="w-[100%]" placeholder="Search beautiful photos" />
      </div>

      <Button label="Search" class="col-span-3" />
    </div>

    <!-- gallery -->
    <section class="px-4 pt-12 pb-12">
      <div class="max-w-5xl mx-auto">
        <article class="text-center mb-10">
          <h1 class="text-xl font-semibold">Photos of The Day</h1>
          <p>Beautiful and captivating photos to make your day</p>
        </article>

        <div
          v-if="photoData"
          class="grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-8"
        >
          <div
            v-for="photo in photoData.photos"
            :key="photo.id"
            class="hover:scale-[.99] transition"
          >
            <img
              @click="$router.push('/photos/' + photo.id)"
              :src="photo.image"
              alt="photo"
              class="w-full h-[280px] object-cover cursor-pointer"
            />

            <div class="flex justify-between items-center gap-4 mt-2">
              <p>{{ photo.title }}</p>

              <Button
                @click="
                  favouriteStore.toggle({
                    id: photo.id,
                    image: photo.image,
                    title: photo.title,
                  })
                "
                icon="pi pi-heart"
                severity="danger"
                size="small"
                :outlined="!favouriteStore.checkExists(photo.id)"
              />
            </div>
          </div>
        </div>

        <div v-else>
          <p class="text-center">Loading photos...</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const photoData = await $fetch("/api/photos/all");
const favouriteStore = useFavouriteStore();
</script>
