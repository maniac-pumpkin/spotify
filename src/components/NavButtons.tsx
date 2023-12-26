import Button from "./Button";
import { ArrowLeftIcon, ArrowRightIcon } from "../icons/BoxIcons";

// I know this is really awkward however i didn't want to use react-router-dom anyway cause there are tons of features that i don't really need to use!

const stepBack = () => {
  history.back();
};

const stepForward = () => {
  history.forward();
};

function NavButtons() {
  return (
    <div className="flex items-center gap-3">
      <Button shape="circle" onClick={stepBack}>
        <ArrowLeftIcon size={40} />
      </Button>
      <Button shape="circle" onClick={stepForward}>
        <ArrowRightIcon size={40} />
      </Button>
    </div>
  );
}

export default NavButtons;
