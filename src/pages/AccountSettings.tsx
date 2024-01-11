import PageTitle from "../components/PageTitle";
import Button from "../components/Button";
import isMobile from "../utils/isMobile";

export default function AccountSettings() {
  const itIsMobile = isMobile();

  return (
    <>
      <PageTitle title="Account settings" />
      <p className="mb-4 text-sm md:text-md">
        You are currently on the Spotify Premium plan!
      </p>
      {itIsMobile ? (
        <Button color="green" fullWidth>
          Logout
        </Button>
      ) : (
        <Button className="w-20" color="green">
          Logout
        </Button>
      )}
    </>
  );
}
