export const useTodos = () => {
  return "These are the todos...";
};

export const usePerfectTodos = () => {
  return "There are no perfect todos!";
};

export const useMountedTodos = () => {
  onMounted(() => {
    document.title = "Add a product";

    const titleElement = document.querySelector("#title");
    console.log("dom mounted: ", titleElement);
  });

  return "Mounted todos";
};
