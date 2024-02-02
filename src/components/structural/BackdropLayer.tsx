import { ReactNode } from "react";

type TbackdropLayer = {
  children: ReactNode;
};

function BackdropLayer({ children }: TbackdropLayer) {
  return (
    <section className="fixed inset-0 z-20 flex h-full w-full items-center justify-center backdrop-blur-3xl backdrop-grayscale">
      {children}
    </section>
  );
}

export default BackdropLayer;
