import { useLocation } from "wouter";
import { useAuthStore } from "../stores/authStore";
import { usePlayerStore } from "../stores/playerStore";
import useLocalStorage from "./useLocalStorage";

function useSignOut() {
  const [, setLocation] = useLocation();
  const { removeItem } = useLocalStorage("user");
  const accountSignOut = useAuthStore((state) => state.accountSignOut);
  const resetPlayer = usePlayerStore((state) => state.resetPlayer);

  return () => {
    removeItem();
    setLocation("/");
    accountSignOut();
    resetPlayer();
  };
}

export default useSignOut;
