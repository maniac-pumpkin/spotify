import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useFormContext } from "../contexts/FormContext";
import { useAccountContext } from "../contexts/AccountContext";
import { toast } from "react-hot-toast";
import BackdropLayer from "./BackdropLayer";
import Input from "./Input";
import Button from "./Button";
import { CloseIcon, SpotifyIcon } from "../icons/BoxIcons";
import { handleSignIn } from "../services/apiUsers";

function SignInForm() {
  const [formInfo, setFormInfo] = useState({
    inputUsername: "",
    inputPassword: "",
  });
  const { formAction } = useFormContext();
  const { accountAction } = useAccountContext();

  const { refetch } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      handleSignIn(
        formInfo.inputUsername,
        formInfo.inputPassword,
        () => {
          formAction.hideSignInForm();
          accountAction.accountSignIn();
          toast.success("Successfully signed in");
        },
        () => {
          toast.error("Credentials are incorrect");
        },
      ),
    enabled: false,
  });

  return (
    <BackdropLayer>
      <form
        id="sign-in-form"
        className="relative flex w-30 flex-col items-center justify-center gap-4 rounded-md bg-gunMetalBlack p-5 md:w-50"
        onSubmit={(event) => {
          event.preventDefault();
          refetch();
        }}
      >
        <div className="mb-5">
          <SpotifyIcon />
        </div>
        <Input
          type="text"
          variant="classic"
          label="Your username"
          placeholder="Username..."
          value={formInfo.inputUsername}
          onChange={(e) =>
            setFormInfo((p) => ({ ...p, inputUsername: e.target.value }))
          }
          required
        />
        <Input
          type="password"
          variant="classic"
          label="Your password"
          placeholder="Password..."
          value={formInfo.inputPassword}
          onChange={(e) =>
            setFormInfo((p) => ({ ...p, inputPassword: e.target.value }))
          }
          required
        />
        <Button type="submit" color="green" fullWidth>
          SignIn
        </Button>
        <Button
          type="button"
          shape="transparent"
          className="absolute right-2 top-2"
          onClick={formAction.hideSignInForm}
        >
          <CloseIcon />
        </Button>
      </form>
    </BackdropLayer>
  );
}

export default SignInForm;
