export const useAddToCart = () => {
  return useMutation({
    mutationFn: (body: Object) =>
      $fetch("/api/shop/cart", { method: "POST", body }),
  });
};

export const useCart = () => {
  return useQuery({
    queryKey: ["cart"],
    queryFn: () => $fetch("/api/shop/cart"),
  });
};
