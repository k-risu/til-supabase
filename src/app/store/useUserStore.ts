import { create } from "zustand";

interface UserStore {
  name: string;
  email: string;
  uid: string;
  setUser: (name: string, email: string, uid: string) => void;
}
export const useUserStore = create<UserStore>((set) => ({
  name: "",
  email: "",
  uid: "",
  setUser: (name, email, uid) => set({ name, email, uid }),
}));
