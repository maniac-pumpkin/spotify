import BackdropLayer from "./BackdropLayer";
import Spinner from "./Spinner";

function FullScreenSpinner() {
  return (
    <BackdropLayer>
      <Spinner size={80} />
    </BackdropLayer>
  );
}

export default FullScreenSpinner;
