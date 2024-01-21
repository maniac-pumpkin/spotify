import {
  useSelector,
  showSignInForm,
  showSignUpForm,
} from "../contexts/Global";
import Button from "./Button";
// import { UserIcon } from "../icons/BoxIcons";

function UserButtons() {
  const { dispatch } = useSelector();

  return (
    <div className="flex gap-3">
      <Button onClick={() => dispatch(showSignUpForm())}>Sign up</Button>
      <Button onClick={() => dispatch(showSignInForm())}>Sign in</Button>
    </div>
  );
}

export default UserButtons;
