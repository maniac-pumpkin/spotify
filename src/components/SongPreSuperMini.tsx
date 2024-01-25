type TsongPrevSuperMini = {
  title?: string;
  artist?: string;
  image?: string;
};

function SongPreSuperMini({ title, artist, image }: TsongPrevSuperMini) {
  return (
    <figure className="flex items-center gap-2">
      <img
        src={image}
        alt={title}
        className="w-4 rounded-md bg-cover bg-center"
      />
      <div>
        <h3 className="mb-1 font-bold text-xsm">{title}</h3>
        <figcaption className="text-tn text-silverGray">{artist}</figcaption>
      </div>
    </figure>
  );
}

export default SongPreSuperMini;
