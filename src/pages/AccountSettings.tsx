import { useLocation } from "wouter";
import { useAccountContext } from "../contexts/AccountContext";
import PageTitle from "../components/PageTitle";
import Button from "../components/Button";
import isMobile from "../utils/isMobile";

export default function AccountSettings() {
  const [, setLocation] = useLocation();
  const { accountAction } = useAccountContext();
  const itIsMobile = isMobile();

  const handleSignOut = () => {
    accountAction.accountSignOut();
    setLocation("/");
  };

  return (
    <>
      <PageTitle title="Account settings" />
      <p className="mb-4 text-sm md:text-md">
        You are currently on the Spotify Premium plan!
      </p>
      {itIsMobile && (
        <Button color="green" fullWidth onClick={handleSignOut}>
          Logout
        </Button>
      )}
      {!itIsMobile && (
        <Button className="w-20" color="green" onClick={handleSignOut}>
          Logout
        </Button>
      )}
    </>
  );
}
