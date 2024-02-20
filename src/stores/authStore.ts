import { create } from "zustand";

type TuseAuthStore = {
  signedIn: boolean;
  accountSignOut(): void;
  accountSignIn(): void;
};

export const useAuthStore = create<TuseAuthStore>()((set) => ({
  signedIn: false,
  accountSignIn() {
    set(() => ({ signedIn: true }));
  },
  accountSignOut() {
    set(() => ({ signedIn: false }));
  },
}));
