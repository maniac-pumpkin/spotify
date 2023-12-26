import { ReactNode } from "react";

type Theader = {
  children: ReactNode;
};

function Header({ children }: Theader) {
  return (
    <header className="flex items-center justify-between p-4 md:p-5">
      {children}
    </header>
  );
}

export default Header;
