import { Suspense, lazy } from "react";
import { Route } from "wouter";
import isMobile from "./utils/isMobile";

const Home = lazy(() => import("./pages/Home"));
const Search = lazy(() => import("./pages/Search"));
const LikedSongs = lazy(() => import("./pages/LikedSongs"));
const AccountSettings = lazy(() => import("./pages/AccountSettings"));

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import FullScreenSpinner from "./components/FullScreenSpinner";
import NavButtons from "./components/NavButtons";
import NavLinks from "./components/NavLinks";
import UserButtons from "./components/UserButtons";
import MediaController from "./components/MediaController";
import BottomPreview from "./components/BottomPreview";

/* Todo list (UI)
// TODO: navButtons
// TODO: NavLinks
// TODO: make the header section first
// TODO: work on making reusable buttons
// TODO: make a bottom preview
// TODO: song preview mini and fullCover
TODO: make the media controller
TODO: liked songs
TODO: liked songs page
TODO: homepage gradient bg
TODO: grid layout for homepage
TODO: slider component
*/

export default function App() {
  return (
    <div className="relative h-screen">
      <Header>
        {isMobile() ? <NavLinks /> : <NavButtons />}
        <UserButtons />
      </Header>

      <Main>
        <Suspense fallback={<FullScreenSpinner />}>
          <Route path="/" component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/liked-songs" component={LikedSongs} />
          <Route path="/account-settings" component={AccountSettings} />
        </Suspense>
      </Main>

      <Footer>
        <MediaController />
        {/* <BottomPreview /> */}
      </Footer>
    </div>
  );
}
