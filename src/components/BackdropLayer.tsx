import { ReactNode } from "react";

type TbackdropLayer = {
  children: ReactNode;
};

function BackdropLayer({ children }: TbackdropLayer) {
  return (
    <div className="fixed inset-0 z-20 flex h-full w-full items-center justify-center backdrop-blur-3xl backdrop-grayscale">
      {children}
    </div>
  );
}

export default BackdropLayer;
