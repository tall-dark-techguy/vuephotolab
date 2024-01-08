import { defineStore } from "pinia";

export const usePhotoStore = defineStore("photos", {
  state: () => {
    return {
      photos: [
        {
          id: 1,
          image:
            "https://images.unsplash.com/photo-1582205524573-ac35c641d947?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "Beautiful Model",
        },
        {
          id: 2,
          image:
            "https://images.unsplash.com/photo-1568819317551-31051b37f69f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "Watermellon Women",
        },
        {
          id: 3,
          image:
            "https://images.unsplash.com/photo-1574539602047-548bf9557352?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "I am Wet",
        },
        {
          id: 4,
          image:
            "https://images.unsplash.com/flagged/photo-1556151994-b611e5ab3675?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "Sexy Alicia",
        },
        {
          id: 5,
          image:
            "https://images.unsplash.com/photo-1607187517174-1aa8ff91d93c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "Stretch Marks Sexyy",
        },
      ],
    };
  },
});
