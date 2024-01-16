import PageTitle from "./PageTitle";
import { HeartFilledIcon } from "../icons/BoxIcons";
import isMobile from "../utils/isMobile";

type TpageHeader = {
  upperText: string;
  downerText: string;
};

function PageHeader({ downerText, upperText }: TpageHeader) {
  const itIsMobile = isMobile();

  return (
    <div className="mt-4 flex items-center gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-purpleGradient md:h-14 md:w-14 lg:h-16 lg:w-16">
        <HeartFilledIcon
          className="fill-pureWhite"
          size={itIsMobile ? 50 : 70}
        />
      </div>
      <div>
        <p className="mb-2 lg:text-lg">{upperText}</p>
        <PageTitle title={downerText} noSpace />
      </div>
    </div>
  );
}

export default PageHeader;
