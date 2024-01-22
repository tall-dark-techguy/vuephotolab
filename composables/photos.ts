export const usePhotos = () => {
  return useQuery({
    queryKey: ["photos"],
    queryFn: () => $fetch("/api/photos/all"),
  });
};

export const usePhoto = async (photo_id: number) => {
  const data = await $fetch("/api/photos/" + photo_id);
  return { data };
};

export const usePhotoAlbum = () => {
  return useQuery({
    queryKey: ["photos"],
    queryFn: () => $fetch("/api/photos/all"),
  });
};
