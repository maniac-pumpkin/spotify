import { Link } from "wouter";
import { useFormContext } from "../contexts/FormContext";
import { useAccountContext } from "../contexts/AccountContext";
import useLogout from "../hooks/useLogout";
import Button from "./ui/Button";
import { UserIcon } from "../icons/BoxIcons";

function UserButtons() {
  const { formAction } = useFormContext();
  const { signedIn } = useAccountContext();
  const logout = useLogout();

  return (
    <div className="flex gap-3">
      {!signedIn && (
        <>
          <Button onClick={formAction.showSignUpForm}>Sign up</Button>
          <Button onClick={formAction.showSignInForm}>Sign in</Button>
        </>
      )}
      {signedIn && (
        <>
          <Button onClick={logout}>Sign out</Button>
          <Link to="/account-settings">
            <Button shape="square">
              <UserIcon className="h-1.6 w-1.6 fill-pureBlack md:h-2 md:w-2" />
            </Button>
          </Link>
        </>
      )}
    </div>
  );
}

export default UserButtons;
