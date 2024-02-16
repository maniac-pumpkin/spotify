import { useLocation } from "wouter";
import { useAccountContext } from "../contexts/AccountContext";
import useLocalStorage from "./useLocalStorage";

function useSignOut() {
  const [, setLocation] = useLocation();
  const { removeItem } = useLocalStorage("user");
  const { accountAction } = useAccountContext();

  return () => {
    removeItem();
    setLocation("/");
    accountAction.accountSignOut();
  };
}

export default useSignOut;