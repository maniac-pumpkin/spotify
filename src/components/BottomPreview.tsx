import { useFormStore } from "../stores/formStore";
import Button from "./ui/Button";

function BottomPreview() {
  const showSignUpForm = useFormStore((state) => state.showSignUpForm);

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-10 flex h-9 w-full items-center bg-pureBlack px-3">
      <section className="flex w-full items-center justify-between gap-1">
        <div>
          <h3 className="mb-1 font-bold text-md md:text-lg">
            Preview of Spotify
          </h3>
          <p className="text-xsm md:text-md">
            Sign up to get unlimited songs without any annoying ads. No credit
            card needed!
          </p>
        </div>
        <Button className="w-20" onClick={showSignUpForm}>
          Sign up now
        </Button>
      </section>
    </footer>
  );
}

export default BottomPreview;
