import useLogout from "../hooks/useLogout";
import PageTitle from "../components/PageTitle";
import Button from "../components/ui/Button";

export default function AccountSettings() {
  const logout = useLogout();

  return (
    <>
      <PageTitle title="Account settings" />
      <p className="mb-4 text-sm md:text-md">
        You are currently on the Spotify Premium plan!
      </p>
      <div className="md:hidden">
        <Button color="green" fullWidth onClick={logout}>
          Logout
        </Button>
      </div>
      <div className="hidden md:block">
        <Button className="w-20" color="green" onClick={logout}>
          Logout
        </Button>
      </div>
    </>
  );
}
