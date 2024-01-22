export const usePhotos = async () => {
  const data = await $fetch("/api/photos/all");
  return { data };
};

export const usePhoto = async (photo_id: number) => {
  const data = await $fetch("/api/photos/" + photo_id);
  return { data };
};
