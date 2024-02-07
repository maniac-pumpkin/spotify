import { PropsWithChildren } from "react";
import Container from "./Container";

function Header({ children }: PropsWithChildren) {
  return (
    <header className="sticky left-0 right-0 top-0 z-10 py-4 backdrop-blur-lg">
      <Container className="flex items-center justify-between">
        {children}
      </Container>
    </header>
  );
}

export default Header;
