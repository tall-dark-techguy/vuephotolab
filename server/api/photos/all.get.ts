import { photos } from "../../../fakedata/photodata";

export default defineEventHandler(async (event) => {
  return {
    photos,
  };
});
