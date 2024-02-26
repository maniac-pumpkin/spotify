import { Suspense } from "react";
import FullScreenSpinner from "../components/structural/FullScreenSpinner";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";

function Routes() {
  return (
    <Suspense fallback={<FullScreenSpinner />}>
      <PublicRoutes />
      <PrivateRoutes />
    </Suspense>
  );
}

export default Routes;
