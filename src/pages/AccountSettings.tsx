import useLogout from "../hooks/useLogout";
import PageTitle from "../components/PageTitle";
import Button from "../components/Button";
import isMobile from "../utils/isMobile";

export default function AccountSettings() {
  const logout = useLogout();
  const itIsMobile = isMobile();

  return (
    <>
      <PageTitle title="Account settings" />
      <p className="mb-4 text-sm md:text-md">
        You are currently on the Spotify Premium plan!
      </p>
      {itIsMobile && (
        <Button color="green" fullWidth onClick={logout}>
          Logout
        </Button>
      )}
      {!itIsMobile && (
        <Button className="w-20" color="green" onClick={logout}>
          Logout
        </Button>
      )}
    </>
  );
}
