<template>
  <section>
    <div class="max-w-2xl mx-auto py-8">
      <div
        class="flex flex-col md:flex-row gap-y-4 justify-between items-center mb-8 sticky top-0 bg-white z-50 px-4 py-2"
      >
        <article class="text-center md:text-left">
          <h1 class="text-2xl font-semibold tracking-tight text-neutral-700">
            Catalogue
          </h1>

          <p class="text-neutral-700 text-sm">Our Best Selling Products</p>
        </article>

        <div class="flex gap-2">
          <NuxtLink to="/shop/add">
            <Button label="Add Product" icon="pi pi-plus" size="small" />
          </NuxtLink>

          <NuxtLink to="/shop/cart">
            <Button
              label="Cart"
              icon="pi pi-shopping-cart"
              size="small"
              severity="secondary"
            />
          </NuxtLink>
        </div>
      </div>

      <div v-if="isLoading" class="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
        <Skeleton height="15rem" />
        <Skeleton height="15rem" />
        <Skeleton height="15rem" />
      </div>

      <ul
        v-if="data"
        class="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-5 px-4"
      >
        <li
          v-for="product in data.products"
          :key="product._id"
          class="overflow-hidden bg-white"
        >
          <img
            :src="product.image_url"
            alt="image"
            class="w-full h-44 rounded-tr rounded-tl object-cover transition hover:scale-105"
          />

          <article class="p-4 border rounded-br rounded-bl">
            <p class="font-semibold tracking-tight truncate">
              {{ product.title }}
            </p>
            <p class="text-sm font-light truncate mb-1">
              {{ product.description }}
            </p>
            <p class="text-lg font-semibold tracking-tight">
              NGN {{ product.price }}
            </p>

            <p class="text-xs text-neutral-500 mb-4">
              {{ product.quantity }} left in stock
            </p>

            <AddToCartButton v-bind="product" />
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const { data, isLoading } = useProducts();
</script>
