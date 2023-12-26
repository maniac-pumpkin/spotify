import { ReactNode } from "react";

type Tmain = {
  children: ReactNode;
};

function Main({ children }: Tmain) {
  return <main className="px-4 md:px-5">{children}</main>;
}

export default Main;
