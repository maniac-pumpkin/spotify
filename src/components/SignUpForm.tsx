import { FormEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useFormContext } from "../contexts/FormContext";
import BackdropLayer from "./BackdropLayer";
import Button from "./Button";
import Input from "./Input";
import { CloseIcon, SpotifyIcon } from "../icons/BoxIcons";
import { addUser } from "../services/apiUsers";

function SignUpForm() {
  const [formInfo, setFormInfo] = useState({
    inputUsername: "",
    inputPassword: "",
    inputConfPass: "",
  });
  const { formAction } = useFormContext();

  const { mutate } = useMutation({
    mutationFn: () =>
      addUser({
        username: formInfo.inputUsername,
        password: formInfo.inputPassword,
      }),
    onSuccess: () => {
      formAction.hideSignUpForm();
      toast.success("You've successfully signed up");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formInfo.inputConfPass !== formInfo.inputPassword) {
      toast.error("Passwords do not match");
      return;
    }
    mutate();
  };

  return (
    <BackdropLayer>
      <form
        id="sign-up-form"
        className="relative flex w-30 flex-col items-center justify-center gap-4 rounded-md bg-gunMetalBlack p-5 md:w-50"
        onSubmit={handleSubmit}
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
        <Input
          type="password"
          variant="classic"
          label="Confirm your password"
          placeholder="Re-type..."
          value={formInfo.inputConfPass}
          onChange={(e) =>
            setFormInfo((p) => ({ ...p, inputConfPass: e.target.value }))
          }
          required
        />
        <Button type="submit" color="green" fullWidth>
          SignUp
        </Button>
        <Button
          type="button"
          shape="transparent"
          className="absolute right-2 top-2"
          onClick={formAction.hideSignUpForm}
        >
          <CloseIcon />
        </Button>
      </form>
    </BackdropLayer>
  );
}

export default SignUpForm;
