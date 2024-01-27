import { useLocation } from "wouter";
import useLocalStorage from "./useLocalStorage";
import { useAccountContext } from "../contexts/AccountContext";

function useLogout() {
  const [, setLocation] = useLocation();
  const { removeItem } = useLocalStorage("user");
  const { accountAction } = useAccountContext();

  return () => {
    removeItem();
    setLocation("/");
    accountAction.accountSignOut();
  };
}

export default useLogout;
