type TSongPreview = {
  songName?: string;
  artist?: string;
  src?: string;
  type: "mini" | "superMini";
};

function SongPreview({ src, songName, artist, type }: TSongPreview) {
  src =
    "https://cdn11.bigcommerce.com/s-1xa2dhlu0a/images/stencil/1280x1280/products/83262/84267/LDE9764__24164.1657985409.jpg?c=1";
  songName = "Freemasons must die";
  artist = "Eminem";

  if (type === "superMini")
    return (
      <figure className="flex items-center gap-2">
        <img
          src={src}
          alt={songName}
          className="w-4 rounded-md bg-cover bg-center"
        />
        <div className="mt-1">
          <h3 className="mb-1 font-bold text-xsm">{songName}</h3>
          <figcaption className="text-tn text-silverGray">{artist}</figcaption>
        </div>
      </figure>
    );

  if (type === "mini")
    return (
      <figure className="flex cursor-pointer items-center gap-2">
        <img
          src={src}
          alt={songName}
          className="w-6 rounded-md bg-cover bg-center"
        />
        <div className="mt-1">
          <h3 className="mb-1 font-bold text-md">{songName}</h3>
          <figcaption className="text-sm text-silverGray">{artist}</figcaption>
        </div>
      </figure>
    );
}

export default SongPreview;
