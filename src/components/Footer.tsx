import { ReactNode } from "react";

type Tfooter = {
  children: ReactNode;
};

function Footer({ children }: Tfooter) {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-10 w-full bg-pureBlack px-4 md:px-5">
      {children}
    </footer>
  );
}

export default Footer;
