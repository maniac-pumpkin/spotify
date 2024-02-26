import { Route } from "wouter";
import { lazyImport } from "../utils/lazyImport";

const { default: Home } = lazyImport(() => import("../pages/Home"), "default");
const { default: Search } = lazyImport(
  () => import("../pages/Search"),
  "default",
);

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/search",
    component: Search,
  },
];

function PublicRoutes() {
  return (
    <>
      {routes.map((route, i) => (
        <Route path={route.path} component={route.component} key={i + 1} />
      ))}
    </>
  );
}

export default PublicRoutes;
