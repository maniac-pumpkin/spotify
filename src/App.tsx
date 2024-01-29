import { Suspense, lazy, useLayoutEffect } from "react";
import { Route, useLocation } from "wouter";
import { useQueryClient } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { useAccountContext } from "./contexts/AccountContext";
import { useFormContext } from "./contexts/FormContext";
import useLocalStorage from "./hooks/useLocalStorage";
import isMobile from "./utils/isMobile";
import "./css/custom.css";

const Home = lazy(() => import("./pages/Home"));
const Search = lazy(() => import("./pages/Search"));
const Playlist = lazy(() => import("./pages/Playlist"));
const LikedSongs = lazy(() => import("./pages/LikedSongs"));
const AccountSettings = lazy(() => import("./pages/AccountSettings"));

import SignIn from "./components/SignInForm";
import SignUp from "./components/SignUpForm";
import CreatePlaylist from "./components/CreatePlaylistForm";

import FullScreenSpinner from "./components/FullScreenSpinner";
import MediaController from "./components/MediaController";
import BottomPreview from "./components/BottomPreview";
import UserButtons from "./components/UserButtons";
import NavButtons from "./components/NavButtons";
import NavLinks from "./components/NavLinks";
import SideBar from "./components/SideBar";

/* Todo list (Logic)
TODO: Ability to create playlist
TODO: Ability to delete playlist
TODO: Ability to navigate to playlist page
TODO: Play song and media controller
TODO: Auth access, and protect routes
TODO: SEO best practices
TODO: Proper way of loading images
TODO: Error Boundaries and handling additional errors in api
TODO: Another color for green hover
TODO: Taking advantage of isLoading (spinner)
TODO: Not totally responsive (make sure to include container)
TODO: Sort imports, states and modules
TODO: Better Warnings
TODO: Delete tanstack devtool library
TODO: better search results in search page
TODO: move reusable JSX codes into component
TODO: Optimization and memoization
TODO: Readme.md
*/

export default function App() {
  const { signedIn, accountAction } = useAccountContext();
  const queryClient = useQueryClient();
  const [location] = useLocation();
  const { forms } = useFormContext();
  const { getItem } = useLocalStorage("user");
  const itIsMobile = isMobile();

  useLayoutEffect(() => {
    const item = getItem();
    if (item) {
      queryClient.setQueryData(["user"], item);
      accountAction.accountSignIn();
    }
  }, [queryClient, accountAction, getItem]);

  return (
    <div className="flex h-screen gap-2 p-2 pb-[9rem]">
      {!itIsMobile && <SideBar />}
      {forms.signIn && <SignIn />}
      {forms.signUp && <SignUp />}
      {forms.createPlaylist && <CreatePlaylist />}
      <section
        className={`h-full w-full overflow-y-scroll rounded-md ${
          location === "/" ? "bg-greenGradient" : "bg-charcoalBlack"
        }`}
      >
        <div className="relative">
          <header className="sticky left-0 right-0 top-0 z-10 flex items-center justify-between p-4 backdrop-blur-lg md:px-5 md:py-4">
            {itIsMobile && <NavLinks />}
            {!itIsMobile && <NavButtons />}
            <UserButtons />
          </header>
          <main className="mx-4 mb-4 md:mx-5 md:mb-5">
            <Suspense fallback={<FullScreenSpinner />}>
              <Route path="/" component={Home} />
              <Route path="/search" component={Search} />
              <Route path="/liked-songs" component={LikedSongs} />
              <Route path="/account-settings" component={AccountSettings} />
              <Route path="/playlist" component={Playlist} />
            </Suspense>
          </main>
        </div>
        <footer
          className={`fixed bottom-0 left-0 right-0 z-10 flex h-9 w-full items-center bg-pureBlack px-3`}
        >
          {signedIn && <MediaController />}
          {!signedIn && <BottomPreview />}
        </footer>
      </section>
      <Toaster
        toastOptions={{
          className: "bg-neroBlack text-pureWhite",
          position: "top-right",
          duration: 2500,
        }}
      />
    </div>
  );
}
