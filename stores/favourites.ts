import { defineStore } from "pinia";

type Favourite = {
  id: number;
  title: string;
  image: string;
}[];

export const useFavouriteStore = defineStore("favourites", {
  state: (): { favourites: Favourite } => {
    return {
      favourites: [],
    };
  },

  getters: {
    total(state) {
      return state.favourites.length || "0";
    },

    checkExists(state) {
      return (photo_id: number) => {
        return state.favourites.find((p) => p.id === photo_id) ? true : false;
      };
    },
  },

  actions: {
    add(photo: { id: number; image: string; title: string }) {
      this.favourites = [photo, ...this.favourites];
      alert("Photo added to favourites");
      return;
    },

    toggle(photo: { id: number; image: string; title: string }) {
      if (this.checkExists(photo.id)) {
        this.favourites = this.favourites.filter((p) => p.id !== photo.id);
        return;
      }
      this.favourites = [photo, ...this.favourites];
      return;
    },
  },
});
