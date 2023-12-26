import { LoaderCircleIcon } from "../icons/BoxIcons";

function Spinner({ size = 45 }) {
  return (
    <div className="w-fit h-fit animate-spin-slow">
      <LoaderCircleIcon size={size} />
    </div>
  );
}

export default Spinner;
