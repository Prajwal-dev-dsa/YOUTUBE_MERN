import { create } from "zustand";
import api from "../api/axiosConfig";
import { serverURL } from "../App";

export const useContentStore = create((set) => ({
  videos: null,
  shorts: null,
  setVideos: (data) => set({ videos: data }),
  setShorts: (data) => set({ shorts: data }),
  getAllVideos: async () => {
    try {
      const res = await api.get(`${serverURL}/api/content/getAllVideos`, {
        withCredentials: true,
      });
      set({ videos: res.data });
    } catch (error) {
      console.log(error);
    }
  },
  getAllShorts: async () => {
    try {
      const res = await api.get(`${serverURL}/api/content/getAllShorts`, {
        withCredentials: true,
      });
      set({ shorts: res.data });
    } catch (error) {
      console.log(error);
    }
  },
  resetContentStore: () => set({ videos: null, shorts: null }),
}));