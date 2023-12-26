import Button from "./Button";

function BottomPreview() {
  return (
    <section className="flex h-8 items-center justify-between gap-1 bg-pureBlack">
      <div>
        <h3 className="mb-1 font-bold text-md md:text-lg">
          Preview of Spotify
        </h3>
        <p className="text-xsm md:text-md">
          Sign up to get unlimited songs without any annoying ads. No credit
          card needed!
        </p>
      </div>
      <Button className="w-20">Sign up now</Button>
    </section>
  );
}

export default BottomPreview;
