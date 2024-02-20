import { Suspense, lazy, useEffect } from "react";
import { Route, useLocation } from "wouter";
import { ToastOptions, Toaster } from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { useAuthStore } from "./stores/authStore";
import { usePlayerStore } from "./stores/playerStore";
import useLocalStorage from "./hooks/useLocalStorage";
import NavigateToHome from "./components/helper/NavigateToHome";

const Home = lazy(() => import("./pages/Home"));
const Search = lazy(() => import("./pages/Search"));
const Playlist = lazy(() => import("./pages/Playlist"));
const LikedSongs = lazy(() => import("./pages/LikedSongs"));
const AccountSettings = lazy(() => import("./pages/AccountSettings"));

import FullScreenSpinner from "./components/structural/FullScreenSpinner";
import MediaController from "./components/MediaController";
import BottomPreview from "./components/BottomPreview";
import FormPopup from "./components/form/FormPopup";
import Navigation from "./components/Navigation";
import SideBar from "./components/SideBar";
import Header from "./components/structural/Header";
import Main from "./components/structural/Main";

const toastOptions: ToastOptions = {
  className: "bg-neroBlack text-pureWhite",
  position: "top-right",
  duration: 2500,
};

export default function App() {
  const signedIn = useAuthStore((state) => state.signedIn);
  const accountSignIn = useAuthStore((state) => state.accountSignIn);
  const audioId = usePlayerStore((state) => state.audioID);
  const { getItem } = useLocalStorage("user");
  const queryClient = useQueryClient();
  const [location] = useLocation();

  useEffect(() => {
    const item = getItem();
    if (item) {
      queryClient.setQueryData(["user"], item);
      accountSignIn();
    }
  }, [queryClient, getItem, accountSignIn]);

  return (
    <div className={`flex h-screen gap-2 p-2 ${audioId && "pb-[9rem]"}`}>
      <div className="hidden md:block">
        <SideBar />
      </div>
      <FormPopup />
      <section
        className={`relative h-full w-full overflow-y-scroll rounded-md pb-5 ${
          location === "/" ? "bg-greenGradient" : "bg-charcoalBlack"
        }`}
      >
        <Header>
          <Navigation />
        </Header>
        <Main>
          <Suspense fallback={<FullScreenSpinner />}>
            <Route path="/" component={Home} />
            <Route path="/search" component={Search} />
            <Route
              path="/liked-songs"
              component={signedIn ? LikedSongs : NavigateToHome}
            />
            <Route
              path="/account-settings"
              component={signedIn ? AccountSettings : NavigateToHome}
            />
            <Route
              path="/playlist/:name"
              component={signedIn ? Playlist : NavigateToHome}
            />
          </Suspense>
        </Main>
      </section>
      {signedIn && audioId && <MediaController />}
      {!signedIn && <BottomPreview />}
      <Toaster toastOptions={toastOptions} />
    </div>
  );
}
