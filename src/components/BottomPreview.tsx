import { useSelector, showSignUpForm } from "../contexts/Global";
import Button from "./Button";

function BottomPreview() {
  const { dispatch } = useSelector();

  return (
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
      <Button className="w-20" onClick={() => dispatch(showSignUpForm())}>
        Sign up now
      </Button>
    </section>
  );
}

export default BottomPreview;
