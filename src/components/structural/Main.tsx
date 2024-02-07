import { PropsWithChildren } from "react";
import Container from "./Container";

function Main({ children }: PropsWithChildren) {
  return (
    <main>
      <Container>{children}</Container>
    </main>
  );
}

export default Main;
