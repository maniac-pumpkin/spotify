type TSongPreview = {
  title?: string;
  artist?: string;
  image?: string;
};

function SongPreview({ title, artist, image }: TSongPreview) {
  return (
    <figure className="w-fit cursor-pointer rounded-md bg-gunMetalBlack p-2 transition hover:bg-neroBlack">
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="w-full rounded-md bg-cover bg-center"
      />
      <div className="mt-3">
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