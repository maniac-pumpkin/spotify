import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useAuthStore } from "./stores/authStore";
import useLocalStorage from "./hooks/useLocalStorage";

import Layout from "./components/structural/Layout";
import Routes from "./routes/Routes";

export default function App() {
  const accountSignIn = useAuthStore((state) => state.accountSignIn);
  const { getItem } = useLocalStorage("user");
  const queryClient = useQueryClient();

  useEffect(() => {
    const item = getItem();
    if (item) {
      queryClient.setQueryData(["user"], item);
      accountSignIn();
    }
  }, [queryClient, getItem, accountSignIn]);

  return (
    <Layout>
      <Routes />
    </Layout>
  );
}
