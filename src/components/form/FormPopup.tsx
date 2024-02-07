import { useFormContext } from "../../contexts/FormContext";
import CreatePlaylistForm from "./CreatePlaylistForm";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

function FormPopup() {
  const { forms } = useFormContext();

  if (forms.signIn) return <SignInForm />;
  if (forms.signUp) return <SignUpForm />;
  if (forms.createPlaylist) return <CreatePlaylistForm />;
}

export default FormPopup;
