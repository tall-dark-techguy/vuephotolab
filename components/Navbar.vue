<template>
  <header class="px-4 bg-white shadow">
    <nav class="flex items-center justify-between max-w-5xl mx-auto py-1">
      <NuxtLink to="/">
        <div class="font-bold tracking-tight text-primary-500">PHOTOLAB</div>
      </NuxtLink>

      <div class="flex items-center">
        <NuxtLink to="/shop">
          <Button label="Shop" link class="text-neutral-700" />
        </NuxtLink>

        <NuxtLink to="/favourites">
          <Button
            icon="pi pi-heart"
            :label="favouriteStore.total"
            link
            class="text-red-500"
          />
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script setup>
const favouriteStore = useFavouriteStore();
</script>
