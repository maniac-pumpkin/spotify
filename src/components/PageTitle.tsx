type TpageTitle = {
  title: string;
  noSpace?: boolean;
};

function PageTitle({ title, noSpace }: TpageTitle) {
  return (
    <h1
      className={`font-bold text-lg md:text-xl lg:text-2xl ${
        !noSpace && "my-4"
      }`}
    >
      {title}
    </h1>
  );
}

export default PageTitle;
