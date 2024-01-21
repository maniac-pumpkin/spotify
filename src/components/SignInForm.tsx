import { useSelector, hideSignInForm } from "../contexts/Global";
import { CloseIcon, SpotifyIcon } from "../icons/BoxIcons";
import BackdropLayer from "./BackdropLayer";
import Input from "./Input";
import Button from "./Button";

function SignInForm() {
  const { dispatch } = useSelector();

  return (
    <BackdropLayer>
      <form className="relative flex w-30 flex-col items-center justify-center gap-4 rounded-md bg-gunMetalBlack p-5 md:w-50">
        <div className="mb-5">
          <SpotifyIcon />
        </div>
        <Input
          type="text"
          variant="classic"
          label="Your username"
          placeholder="Username..."
        />
        <Input
          type="password"
          variant="classic"
          label="Your password"
          placeholder="Password..."
        />
        <Button type="submit" color="green" fullWidth>
          SignIn
        </Button>
        <Button
          type="button"
          shape="transparent"
          className="absolute right-2 top-2"
          onClick={() => dispatch(hideSignInForm())}
        >
          <CloseIcon />
        </Button>
      </form>
    </BackdropLayer>
  );
}

export default SignInForm;
