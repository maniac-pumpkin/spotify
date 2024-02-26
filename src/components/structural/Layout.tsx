import { PropsWithChildren } from "react";
import { useLocation } from "wouter";
import { ToastOptions, Toaster } from "react-hot-toast";
import { usePlayerStore } from "../../stores/playerStore";
import { useAuthStore } from "../../stores/authStore";

import MediaController from "../controller/MediaController";
import BottomPreview from "../BottomPreview";
import Navigation from "../navigation/Navigation";
import FormPopup from "../form/FormPopup";
import SideBar from "../sidebar/SideBar";
import Header from "./Header";
import Main from "./Main";

const toastOptions: ToastOptions = {
  className: "bg-neroBlack text-pureWhite",
  position: "top-right",
  duration: 2500,
};

function Layout({ children }: PropsWithChildren) {
  const signedIn = useAuthStore((state) => state.signedIn);
  const audioId = usePlayerStore((state) => state.audioID);
  const [location] = useLocation();

  return (
    <div className={`flex h-screen gap-2 p-2 ${audioId && "pb-[9rem]"}`}>
      <div className="hidden md:block">
        <SideBar />
      </div>
      <FormPopup />
      <section
        className={`relative h-full w-full overflow-y-scroll rounded-md pb-5 ${
          location === "/" ? "bg-greenGradient" : "bg-charcoalBlack"
        }`}
      >
        <Header>
          <Navigation />
        </Header>
        <Main>{children}</Main>
      </section>
      {signedIn && audioId && <MediaController />}
      {!signedIn && <BottomPreview />}
      <Toaster toastOptions={toastOptions} />
    </div>
  );
}

export default Layout;
