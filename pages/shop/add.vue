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

    <article class="px-6 text-neutral-700 mb-8">
      <h1 class="text-2xl font-semibold tracking-tight flex items-center gap-2">
        <i class="pi pi-plus-circle"></i> New Product
      </h1>

      <p class="text-sm">Add a product to your shop</p>
    </article>

    <form @submit.prevent="handleSubmit" class="px-6 mb-20">
      <div class="space-y-3 mb-4">
        <div class="flex flex-col gap-2">
          <label class="text-sm" for="image_url">Image URL</label>
          <InputText
            name="image_url"
            id="image_url"
            v-model="form.image_url"
            placeholder="https://"
            required
          />
        </div>

        <div class="flex flex-col gap-2">
          <label class="text-sm" for="title">Title</label>
          <InputText name="title" id="title" v-model="form.title" required />
        </div>

        <div class="flex flex-col gap-2">
          <label class="text-sm" for="description">Description</label>
          <Textarea
            id="description"
            v-model="form.description"
            placeholder="Describe your product..."
            :maxlength="100"
            modelValue=""
            required
          />
        </div>

        <div class="flex flex-col gap-2">
          <label class="text-sm" for="price">Price</label>
          <InputNumber
            v-model="form.price"
            mode="currency"
            currency="NGN"
            required
            :min="0"
          />
        </div>

        <div class="flex flex-col gap-2">
          <label class="text-sm" for="quantity">Quantity In Stock</label>
          <InputNumber v-model="form.quantity" :min="0" :max="100" required />
        </div>
      </div>

      <Button type="submit" label="Add product" />
    </form>
  </div>
</template>

<script setup>
import { useMountedTodos } from "~/composables/todos";

const image_url = ref(null);
const title = ref(null);
const description = ref("");
const price = ref(0);
const quantity = ref(0);

const form = reactive({
  image_url: null,
  title: null,
  description: null,
  price: 0,
  quantity: 0,
});

const handleSubmit = () => {
  // const payload = {
  //   image_url: image_url.value,
  //   title: title.value,
  //   description: description.value,
  //   price: price.value,
  //   quantity: quantity.value,
  // };

  // console.log(payload);
  console.log(form.image_url);
};

console.log(useTodos());
console.log(usePerfectTodos());

useMountedTodos();
</script>
