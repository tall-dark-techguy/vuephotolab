<template>
  <div class="max-w-2xl mx-auto py-8">
    <NuxtLink to="/shop">
      <Button
        label="Back to shop"
        icon="pi pi-arrow-left"
        size="small"
        link
        class="mb-4"
      />
    </NuxtLink>

    <article class="px-4 text-neutral-700 mb-8">
      <h1 class="text-2xl font-semibold tracking-tight flex items-center gap-2">
        <i class="pi pi-plus-circle"></i> New Product
      </h1>

      <p class="text-sm">Add a product to your shop</p>
    </article>

    <form action="" class="px-4 mb-20">
      <div class="space-y-3 mb-4">
        <div class="flex flex-col gap-2">
          <label class="text-sm" for="image_url">Image URL</label>
          <InputText
            id="image_url"
            v-model="image_url"
            placeholder="https://"
          />
        </div>

        <div class="flex flex-col gap-2">
          <label class="text-sm" for="title">Title</label>
          <InputText id="title" v-model="title" />
        </div>

        <div class="flex flex-col gap-2">
          <label class="text-sm" for="">Description</label>
          <Editor v-model="description" editorStyle="height: 150px" />
        </div>

        <div class="flex flex-col gap-2">
          <label class="text-sm" for="price">Price</label>
          <InputNumber v-model="price" mode="currency" currency="NGN" />
        </div>

        <div class="flex flex-col gap-2">
          <label class="text-sm" for="quantity">Quantity In Stock</label>
          <InputNumber v-model="quantity" :min="0" :max="100" />
        </div>
      </div>

      <Button label="Add product" />
    </form>
  </div>
</template>

<script setup>
import Editor from "primevue/editor";

const image_url = ref(null);
const title = ref(null);
const description = ref("");
const price = ref(0);
const quantity = ref(0);
</script>
