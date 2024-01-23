<template>
  <Button
    @click="handleRemove"
    label="Remove"
    size="small"
    severity="danger"
    outlined
    icon="pi pi-trash"
    :loading="isPending"
  />
</template>

<script setup>
const props = defineProps({
  itemId: String,
});

const { isPending, mutate } = useMutation({
  mutationFn: () =>
    $fetch("/api/shop/cart/" + props.itemId, { method: "DELETE" }),
});

const handleRemove = () => {
  mutate(
    {},
    {
      onSuccess: (data) => {
        console.log(data);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};
</script>
