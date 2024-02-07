import Button from "../components/ui/Button";
import { SpotifyIcon } from "../icons/BoxIcons";

const pageReload = () => {
  location.reload();
};

export default function ErrorBoundaryPage() {
  return (
    <section className="mt-40 flex flex-col items-center gap-4 md:ml-40 md:items-start">
      <SpotifyIcon />
      <h1 className="text-center font-bold text-2xl md:max-w-4xl md:text-left md:text-4xl">
        Oops! Something went wrong.
      </h1>
      <Button color="green" onClick={pageReload}>
        Try Again
      </Button>
    </section>
  );
}
