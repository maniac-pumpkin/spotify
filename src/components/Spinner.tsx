import { LoaderCircleIcon } from "../icons/BoxIcons";

function Spinner({ size = 45 }) {
  return (
    <div className="h-fit w-fit animate-spin-slow">
      <LoaderCircleIcon size={size} className="fill-green" />
    </div>
  );
}

export default Spinner;
