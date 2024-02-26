import { create } from "zustand";

type TformStore = {
  form: {
    signIn: boolean;
    signUp: boolean;
    createPlaylist: boolean;
  };
  showSignInForm(): void;
  showSignUpForm(): void;
  showCreatePlaylistForm(): void;
  hideSignInForm(): void;
  hideSignUpForm(): void;
  hideCreatePlaylistForm(): void;
};

export const useFormStore = create<TformStore>()((set) => ({
  form: {
    signIn: false,
    signUp: false,
    createPlaylist: false,
  },
  
  showSignInForm() {
    set((state) => ({ form: { ...state.form, signIn: true } }));
  },
  showSignUpForm() {
    set((state) => ({ form: { ...state.form, signUp: true } }));
  },
  showCreatePlaylistForm() {
    set((state) => ({ form: { ...state.form, createPlaylist: true } }));
  },
  hideSignInForm() {
    set((state) => ({ form: { ...state.form, signIn: false } }));
  },
  hideSignUpForm() {
    set((state) => ({ form: { ...state.form, signUp: false } }));
  },
  hideCreatePlaylistForm() {
    set((state) => ({ form: { ...state.form, createPlaylist: false } }));
  },
}));
