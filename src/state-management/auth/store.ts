import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface AuthStore {
  user: string;
  login: (userName: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  user: "",
  login: (userName) => set(() => ({ user: userName })),
  logout: () => set(() => ({ user: "" })),
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("Auth Store", useAuthStore); // mountStoreDevtool(name, customHook);

export default useAuthStore;
