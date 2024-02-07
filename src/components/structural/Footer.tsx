import { PropsWithChildren } from "react";

function Footer({ children }: PropsWithChildren) {
  return (
    <footer
      className={`fixed bottom-0 left-0 right-0 z-10 flex h-9 w-full items-center bg-pureBlack px-3`}
    >
      {children}
    </footer>
  );
}

export default Footer;
