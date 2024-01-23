<template>
  <Button
    @click="handleAddToCart"
    label="Add To Cart"
    size="small"
    outlined
    severity="secondary"
    class="w-full"
    :loading="isPending"
  />
</template>

<script setup>
const router = useRouter();

const props = defineProps({
  _id: String,
  title: String,
  price: Number,
  quantity: Number,
  image_url: String,
});

const { isPending, mutate } = useAddToCart();

const handleAddToCart = () => {
  const payload = {
    id: props._id,
    title: props.title,
    price: props.price,
    quantity: 1,
    image_url: props.image_url,
  };

  mutate(payload, {
    onSuccess: (data) => {
      router.push("/shop/cart");
    },
    onError: (error) => {
      if (error.response) {
        console.log(error.response);
      } else {
        console.log(error.message);
      }
    },
  });
};
</script>
