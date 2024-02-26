import { Route } from "wouter";
import { useAuthStore } from "../stores/authStore";
import NavigateToHome from "../components/helper/NavigateToHome";
import { lazyImport } from "../utils/lazyImport";

const { default: AccountSettings } = lazyImport(
  () => import("../pages/AccountSettings"),
  "default",
);
const { default: LikedSongs } = lazyImport(
  () => import("../pages/LikedSongs"),
  "default",
);
const { default: Playlist } = lazyImport(
  () => import("../pages/Playlist"),
  "default",
);

const routes = [
  {
    path: "/account-settings",
    component: AccountSettings,
  },
  {
    path: "/liked-songs",
    component: LikedSongs,
  },
  {
    path: "/playlist/:name",
    component: Playlist,
  },
];

function PrivateRoutes() {
  const signedIn = useAuthStore((state) => state.signedIn);
  if (!signedIn) return <NavigateToHome />;

  return (
    <>
      {routes.map((route, i) => (
        <Route path={route.path} component={route.component} key={i + 1} />
      ))}
    </>
  );
}

export default PrivateRoutes;
