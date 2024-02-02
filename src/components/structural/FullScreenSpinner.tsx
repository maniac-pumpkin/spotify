import BackdropLayer from "./BackdropLayer";
import Spinner from "../ui/Spinner";

function FullScreenSpinner() {
  return (
    <BackdropLayer>
      <Spinner className="h-8 w-8" />
    </BackdropLayer>
  );
}

export default FullScreenSpinner;
