import { FormEvent, useState } from "react";
import { toast } from "react-hot-toast";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useFormStore } from "../../stores/formStore";
import { useAuthStore } from "../../stores/authStore";
import useOutsideClick from "../../hooks/useOutsideClick";
import useLocalStorage from "../../hooks/useLocalStorage";
import BackdropLayer from "../structural/BackdropLayer";
import Spinner from "../ui/Spinner";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { CloseIcon, SpotifyIcon } from "../../icons/BoxIcons";
import { handleSignIn } from "../../services/apiUsers";

function SignInForm() {
  const [formInfo, setFormInfo] = useState({
    inputUsername: "",
    inputPassword: "",
  });
  const queryClient = useQueryClient();
  const accountSignIn = useAuthStore((state) => state.accountSignIn);
  const { setItem } = useLocalStorage("user");
  const hideSignInForm = useFormStore((state) => state.hideSignInForm);
  const formRef = useOutsideClick<HTMLFormElement>(hideSignInForm);

  const { refetch, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      handleSignIn(
        formInfo.inputUsername,
        formInfo.inputPassword,
        (user) => {
          setItem(user);
          queryClient.invalidateQueries({
            queryKey: ["playlists"],
          });
          hideSignInForm();
          accountSignIn();
          toast.success("Successfully signed in");
        },
        () => {
          toast.error("Credentials are incorrect");
        },
      ),
    enabled: false,
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    refetch();
  };

  return (
    <BackdropLayer>
      <form
        id="sign-in-form"
        className="relative flex w-30 flex-col items-center justify-center gap-4 rounded-md bg-gunMetalBlack p-5 md:w-50"
        onSubmit={handleSubmit}
        ref={formRef}
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
        <Button
          className="gap-1"
          type="submit"
          color="green"
          disabled={isLoading}
          fullWidth
        >
          SignIn
          {isLoading && <Spinner className="fill-gunMetalBlack" />}
        </Button>
        <Button
          type="button"
          shape="transparent"
          className="absolute right-2 top-2"
          onClick={hideSignInForm}
        >
          <CloseIcon />
        </Button>
      </form>
    </BackdropLayer>
  );
}

export default SignInForm;
