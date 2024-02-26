import Button from "../ui/Button";
import { ArrowLeftIcon, ArrowRightIcon } from "../../icons/BoxIcons";

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
        <ArrowLeftIcon className="h-4 w-4 fill-pureBlack" />
      </Button>
      <Button shape="circle" onClick={stepForward}>
        <ArrowRightIcon className="h-4 w-4 fill-pureBlack" />
      </Button>
    </div>
  );
}

export default NavButtons;
