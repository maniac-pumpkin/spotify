import { SpotifyIcon } from "../icons/BoxIcons";
import BackdropLayer from "./BackdropLayer";
import Input from "./Input";
import Button from "./Button";

function SignIn() {
  return (
    <BackdropLayer>
      <form className="flex w-50 flex-col items-center justify-center gap-4 rounded-md bg-gunMetalBlack p-5 md:w-50">
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
        <Button type="submit" color="green" fullWidth>
          SignIn
        </Button>
      </form>
    </BackdropLayer>
  );
}

export default SignIn;
