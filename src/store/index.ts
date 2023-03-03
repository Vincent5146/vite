import { defineStore } from "pinia";
import { RootState } from "@/types/index";

export const useRootStore = defineStore("rootStore", {
  state: (): RootState => {
    return {
      photos: [],
      videos: [],
    };
  },
  getters: {},
  actions: {
    async fetchPhotos(search: string) {
      const headers = {
        Authorization:
          "563492ad6f91700001000001d4bfd73691c24786accf5bfa2d13b084",
      };
      try {
        const response = await fetch(
          `https://api.pexels.com/v1/search?query=${search}&per_page=60`,
          { headers }
        );
        const data = await response.json();
        this.photos = data.photos;
      } catch (error: unknown) {
        console.log(error);
      }
    },
    async fetchVideos(search: string) {
      const headers = {
        Authorization:
          "563492ad6f91700001000001d4bfd73691c24786accf5bfa2d13b084",
      };
      try {
        const response = await fetch(
          `https://api.pexels.com/videos/search?query=${search}&per_page=60`,
          { headers }
        );
        const data = await response.json();
        console.log(data);
      } catch (error: unknown) {
        console.log(error);
      }
    },
  },
});
