<template>
  <div class="max-w-2xl mx-auto py-8 px-6">
    <article class="text-center md:text-left mb-8">
      <h1 class="text-2xl font-semibold tracking-tight text-neutral-700">
        Your Cart
      </h1>

      <p class="text-neutral-700 text-sm">
        <span v-if="data">{{ data.cart.items.length }}</span> items in cart
      </p>
    </article>

    <div v-if="isLoading" class="space-y-4">
      <Skeleton height="7rem" />
      <Skeleton height="7rem" />
      <Skeleton height="7rem" />
    </div>

    <ul v-if="data">
      <li
        v-for="item in data.cart.items"
        :key="item.id"
        class="flex gap-4 items-center border rounded p-4 mb-4 shadow"
      >
        <img
          :src="item.image_url"
          class="w-20 h-20 rounded object-cover"
          alt=""
        />

        <article>
          <h1 class="tracking-tight">{{ item.title }}</h1>

          <p class="text-sm mb-4 font-light">
            NGN {{ item.price }} | Qty: {{ item.quantity }}
          </p>

          <RemoveFromCart :itemId="item.id" />
        </article>
      </li>

      <li
        v-if="data.cart.items.length === 0"
        class="text-center border py-12 px-4"
      >
        <p class="mb-2">
          <i class="pi pi-shopping-cart text-5xl text-neutral-500"></i>
        </p>

        <p class="text-neutral-700 mb-6">Your cart is empty</p>

        <NuxtLink to="/shop">
          <Button label="Start shopping" />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
const { isLoading, data } = useCart();
</script>
