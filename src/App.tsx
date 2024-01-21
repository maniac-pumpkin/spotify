import { Suspense, lazy, useEffect } from "react";
import { Route, useLocation } from "wouter";
import { Toaster } from "react-hot-toast";
import { useSelector } from "./contexts/Global";
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
import NavButtons from "./components/NavButtons";
import NavLinks from "./components/NavLinks";
import UserButtons from "./components/UserButtons";
import MediaController from "./components/MediaController";
import BottomPreview from "./components/BottomPreview";
import SideBar from "./components/SideBar";
import { getSongs } from "./services/apiSongs";
import { getUsers } from "./services/apiUsers";

/* Todo list (Logic)
TODO: supabase
TODO: Get back to song and remove albumPreview
TODO: useOutsideClick hook for forms
*/

export default function App() {
  const { signedIn, forms } = useSelector();
  const [location] = useLocation();
  const itIsMobile = isMobile();

  useEffect(() => {
    (async () => {
      const songs = await getSongs();
      console.log(songs);
      const users = await getUsers();
      console.log(users);
    })();
  }, []);

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
        <footer className="fixed bottom-0 left-0 right-0 z-10 flex h-9 w-full items-center bg-pureBlack px-4 md:px-5">
          {signedIn && <MediaController />}
          {!signedIn && <BottomPreview />}
        </footer>
      </section>
      <Toaster
        toastOptions={{
          className: "bg-neroBlack text-pureWhite",
          position: "top-right",
          duration: 2000,
        }}
      />
    </div>
  );
}
