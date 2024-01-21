import { useSelector, hideSignUpForm } from "../contexts/Global";
import { CloseIcon, SpotifyIcon } from "../icons/BoxIcons";
import BackdropLayer from "./BackdropLayer";
import Button from "./Button";
import Input from "./Input";

function SignUpForm() {
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
        <Input
          type="password"
          variant="classic"
          label="Confirm your password"
          placeholder="Re-type..."
        />
        <Button type="submit" color="green" fullWidth>
          SignUp
        </Button>
        <Button
          type="button"
          shape="transparent"
          className="absolute right-2 top-2"
          onClick={() => dispatch(hideSignUpForm())}
        >
          <CloseIcon />
        </Button>
      </form>
    </BackdropLayer>
  );
}

export default SignUpForm;
