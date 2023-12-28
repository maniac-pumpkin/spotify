import { ReactNode } from "react";

type Theader = {
  children: ReactNode;
};

function Header({ children }: Theader) {
  return (
    <header className="fixed left-0 right-0 top-0 z-10 flex items-center justify-between p-4 backdrop-blur-lg md:p-5">
      {children}
    </header>
  );
}

export default Header;
