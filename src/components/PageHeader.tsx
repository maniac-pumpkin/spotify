import PageTitle from "./PageTitle";
import { HeartFilledIcon } from "../icons/BoxIcons";

type TpageHeader = {
  upperText: string;
  downerText: string;
};

function PageHeader({ downerText, upperText }: TpageHeader) {
  return (
    <section className="mt-4 flex items-center gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-purpleGradient md:h-14 md:w-14 lg:h-16 lg:w-16">
        <HeartFilledIcon className="h-5 w-5 fill-pureWhite md:h-7 md:w-7" />
      </div>
      <div>
        <p className="mb-2 lg:text-lg">{upperText}</p>
        <PageTitle title={downerText} noSpace />
      </div>
    </section>
  );
}

export default PageHeader;
