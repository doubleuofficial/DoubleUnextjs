import musicData from "@/data/music.json";
import TrackCard from "@/components/TrackCard";

export default function MusicPage() {
  // Sorting is done instantly on the server
  const sortedMusic = [...musicData].sort(
    (a, b) => new Date(b.release_date) - new Date(a.release_date)
  );

  return (
    <main class="p-10">
      <h1 className="text-6xl font-black italic text-[#FF5F1F]">DISCOGRAPHY</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {sortedMusic.map((track) => (
          <TrackCard key={track.slug} track={track} />
        ))}
      </div>
    </main>
  );
}
