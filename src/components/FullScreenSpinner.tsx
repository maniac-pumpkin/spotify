import Spinner from "./Spinner";

function FullScreenSpinner() {
  return (
    <section className="fixed inset-0 z-10 flex h-full w-full items-center justify-center backdrop-blur-3xl backdrop-grayscale">
      <Spinner size={80} />
    </section>
  );
}

export default FullScreenSpinner;
