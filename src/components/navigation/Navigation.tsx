import UserButtons from "./UserButtons";
import NavButtons from "./NavButtons";
import NavLinks from "./NavLinks";

function Navigation() {
  return (
    <>
      <div className="md:hidden">
        <NavLinks />
      </div>
      <div className="hidden md:block">
        <NavButtons />
      </div>
      <UserButtons />
    </>
  );
}

export default Navigation;
