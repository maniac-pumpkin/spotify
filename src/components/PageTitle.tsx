type TpageTitle = {
  title: string;
};

function PageTitle({ title }: TpageTitle) {
  return (
    <h2 className="mb-4 mt-4 font-bold text-lg md:mt-0 md:text-xl lg:text-2xl">
      {title}
    </h2>
  );
}

export default PageTitle;
