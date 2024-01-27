import { Link } from "wouter";
import useLogout from "../hooks/useLogout";
import { useFormContext } from "../contexts/FormContext";
import { useAccountContext } from "../contexts/AccountContext";
import Button from "./Button";
import { UserIcon } from "../icons/BoxIcons";
import isMobile from "../utils/isMobile";

function UserButtons() {
  const { formAction } = useFormContext();
  const { signedIn } = useAccountContext();
  const logout = useLogout();
  const itIsMobile = isMobile();

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
              <UserIcon
                className="fill-pureBlack"
                size={itIsMobile ? 16 : 20}
              />
            </Button>
          </Link>
        </>
      )}
    </div>
  );
}

export default UserButtons;
