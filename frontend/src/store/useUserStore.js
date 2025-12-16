import { create } from "zustand";
import api from "../api/axiosConfig";
import { serverURL } from "../App";

export const useUserStore = create((set) => ({
  loggedInUserData: null,
  getCurrentLoggedInUser: async () => {
    try {
      const res = await api.get(`${serverURL}/api/user`, {
        withCredentials: true,
      });
      set({ loggedInUserData: res.data });
    } catch (error) {
      console.log(error);
      set({ loggedInUserData: null });
    }
  },
  logout: async () => {
    try {
      await api.post(`${serverURL}/api/auth/logout`, null, {
        withCredentials: true,
      });
      set({ loggedInUserData: null });
    } catch (error) {
      console.log(error);
    }
  },
  setLoggedInUserData: (user) => set({ loggedInUserData: user }),
}));