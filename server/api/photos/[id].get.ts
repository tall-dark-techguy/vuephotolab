import { photos } from "../../../fakedata/photodata";

export default defineEventHandler(async (event) => {
  const photo_id = getRouterParam(event, "id") || "";
  const photo = photos.find((p) => p.id === parseFloat(photo_id));

  return {
    photo,
  };
});
