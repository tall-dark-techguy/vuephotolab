export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => $fetch("/api/shop/products"),
  });
};

export const useAddProduct = () => {
  return useMutation({
    mutationFn: (body: Object) =>
      $fetch("/api/shop/products", { method: "POST", body }),
  });
};
