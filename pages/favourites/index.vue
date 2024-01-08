<template>
  <section class="px-4 py-12">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-lg font-semibold mb-8">
        <i class="pi pi-heart text-red-500"></i> Your Favourites
      </h1>

      <div v-if="favouriteStore.total === '0'" class="text-center">
        <p class="mb-5">You don't have any favourites, yet.</p>

        <NuxtLink to="/">
          <Button label="Explore Photos" />
        </NuxtLink>
      </div>

      <ul class="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
        <li
          v-for="fav in favouriteStore.favourites"
          :key="fav.id"
          class="flex justify-between gap-4 border px-3 py-5 rounded-lg bg-neutral-50 items-center"
        >
          <figure class="flex gap-4 items-center">
            <img
              @click="$router.push('/photos/' + fav.id)"
              :src="fav.image"
              alt="image"
              class="cursor-pointer w-20 h-20 object-cover rounded"
            />

            <article>
              <p>{{ fav.title }}</p>
              <p>Photo ID: {{ fav.id }}</p>
            </article>
          </figure>

          <Button
            @click="
              favouriteStore.toggle({
                id: fav.id,
                title: fav.title,
                image: fav.image,
              })
            "
            icon="pi pi-heart"
            class="p-1"
            :outlined="!favouriteStore.checkExists(fav.id)"
            severity="danger"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const favouriteStore = useFavouriteStore();
</script>
