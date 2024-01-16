import { Suspense, lazy } from "react";
import { Route, useLocation } from "wouter";
import { Toaster } from "react-hot-toast";
import isMobile from "./utils/isMobile";
import "./css/custom.css";

const Home = lazy(() => import("./pages/Home"));
const Search = lazy(() => import("./pages/Search"));
const Playlist = lazy(() => import("./pages/Playlist"));
const LikedSongs = lazy(() => import("./pages/LikedSongs"));
const AccountSettings = lazy(() => import("./pages/AccountSettings"));

// import SignIn from "./components/SignIn";
// import SignUp from "./components/SignUp";
// import CreatePlaylist from "./components/CreatePlaylist";

import FullScreenSpinner from "./components/FullScreenSpinner";
import NavButtons from "./components/NavButtons";
import NavLinks from "./components/NavLinks";
import UserButtons from "./components/UserButtons";
import MediaController from "./components/MediaController";
import BottomPreview from "./components/BottomPreview";
import SideBar from "./components/SideBar";

/* Todo list (UI)
TODO: Custom select menu
*/

export default function App() {
  const [location] = useLocation();
  const itIsMobile = isMobile();

  return (
    <div className="flex h-screen gap-2 p-2 pb-[9rem]">
      {!itIsMobile && <SideBar />}

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
          {/* <MediaController /> */}
          <BottomPreview />
        </footer>
      </section>
      <Toaster />
    </div>
  );
}
