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

const queryClient = useQueryClient();

const { isPending, mutate } = useMutation({
  mutationFn: () =>
    $fetch("/api/shop/cart/" + props.itemId, { method: "DELETE" }),
});

const handleRemove = () => {
  mutate(
    {},
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ["cart"] });
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};
</script>
