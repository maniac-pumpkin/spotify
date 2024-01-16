import { SpotifyIcon } from "../icons/BoxIcons";
import BackdropLayer from "./BackdropLayer";
import Button from "./Button";
import Input from "./Input";

function SignUp() {
  return (
    <BackdropLayer>
      <form className="flex w-30 flex-col items-center justify-center gap-4 rounded-md bg-gunMetalBlack p-5 md:w-50">
        <div className="mb-5">
          <SpotifyIcon />
        </div>
        <Input
          type="email"
          variant="classic"
          label="Email address"
          placeholder="Email..."
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
      </form>
    </BackdropLayer>
  );
}

export default SignUp;
