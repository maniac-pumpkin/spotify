import LikedSongsLink from "../components/LikedSongsLink";
import SongPreview from "../components/SongPreview";
import PageTitle from "../components/PageTitle";

export default function Home() {
  return (
    <>
      <PageTitle title="Good afternoon, Pumpkin!" />
      <LikedSongsLink />
      <section className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 20 }, (_, i) => (
          <SongPreview key={i + 1} />
        ))}
      </section>
    </>
  );
}
