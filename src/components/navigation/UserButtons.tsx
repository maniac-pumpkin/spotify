import { Link } from "wouter";
import { useFormStore } from "../../stores/formStore";
import { useAuthStore } from "../../stores/authStore";
import useSignOut from "../../hooks/useSignOut";
import Button from "../ui/Button";
import { UserIcon } from "../../icons/BoxIcons";

function UserButtons() {
  const showSignInForm = useFormStore((state) => state.showSignInForm);
  const showSignUpForm = useFormStore((state) => state.showSignUpForm);
  const signedIn = useAuthStore((state) => state.signedIn);
  const signOut = useSignOut();

  return (
    <div className="flex gap-3">
      {!signedIn && (
        <>
          <Button onClick={showSignUpForm}>Sign up</Button>
          <Button onClick={showSignInForm}>Sign in</Button>
        </>
      )}
      {signedIn && (
        <>
          <Button onClick={signOut}>Sign out</Button>
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
