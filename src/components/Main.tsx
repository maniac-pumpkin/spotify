import { ReactNode } from "react";

type Tmain = {
  children: ReactNode;
};

function Main({ children }: Tmain) {
  return (
    <main className="px-4 pb-[10rem] pt-[7rem] md:px-5 md:pt-[12.5rem]">
      {children}
    </main>
  );
}

export default Main;
