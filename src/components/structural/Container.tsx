import { PropsWithChildren } from "react";

interface Icontainer extends PropsWithChildren {
  className?: string;
}

function Container({ children, className }: Icontainer) {
  return (
    <div
      className={`mx-auto w-full px-2 md:w-35 lg:w-40 xl:w-60 min-[1200px]:w-[80rem] min-[1400px]:w-[110rem] ${className}`}
    >
      {children}
    </div>
  );
}

export default Container;
