import { LoaderCircleIcon } from "../../icons/BoxIcons";

function Spinner({ className = "" }) {
  return (
    <div className="h-fit w-fit animate-spin-slow">
      <LoaderCircleIcon className={`fill-green ${className}`} />
    </div>
  );
}

export default Spinner;
