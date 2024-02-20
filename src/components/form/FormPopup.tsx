import { useFormStore } from "../../stores/formStore";
import CreatePlaylistForm from "./CreatePlaylistForm";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

function FormPopup() {
  const form = useFormStore((state) => state.form);

  if (form.signIn) return <SignInForm />;
  if (form.signUp) return <SignUpForm />;
  if (form.createPlaylist) return <CreatePlaylistForm />;
}

export default FormPopup;
