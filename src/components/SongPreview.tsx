type TSongPreview = {
  title?: string;
  artist?: string;
  image?: string;
  type?: "superMini" | "mini" | "normal";
};

function SongPreview({ title, artist, image, type = "normal" }: TSongPreview) {
  image =
    "https://cdn11.bigcommerce.com/s-1xa2dhlu0a/images/stencil/1280x1280/products/83262/84267/LDE9764__24164.1657985409.jpg?c=1";
  title = "Find Yourself";
  artist = "Eminem";

  if (type === "superMini")
    return (
      <figure className="flex items-center gap-2">
        <img
          src={image}
          alt={title}
          className="w-4 rounded-md bg-cover bg-center"
        />
        <div className="mt-1">
          <h3 className="mb-1 font-bold text-xsm">{title}</h3>
          <figcaption className="text-tn text-silverGray">{artist}</figcaption>
        </div>
      </figure>
    );

  if (type === "mini")
    return (
      <figure className="flex cursor-pointer items-center gap-2">
        <img
          src={image}
          alt={title}
          className="w-6 rounded-md bg-cover bg-center"
        />
        <div className="mt-1">
          <h3 className="mb-1 font-bold text-md">{title}</h3>
          <figcaption className="text-sm text-silverGray">{artist}</figcaption>
        </div>
      </figure>
    );

  if (type === "normal")
    return (
      <figure className="w-fit cursor-pointer rounded-md bg-gunMetalBlack p-2 transition hover:bg-neroBlack">
        <img
          src={image}
          alt={title}
          className="w-full rounded-md bg-cover bg-center"
        />
        <div className="mt-1">
          <h3 className="mb-1 font-bold text-xsm md:text-sm lg:text-md">
            {title}
          </h3>
          <figcaption className="text-tn text-silverGray md:text-xsm lg:text-sm">
            {artist}
          </figcaption>
        </div>
      </figure>
    );
}

export default SongPreview;
