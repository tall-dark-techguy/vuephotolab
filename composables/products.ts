export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => $fetch("/api/shop/products"),
  });
};
