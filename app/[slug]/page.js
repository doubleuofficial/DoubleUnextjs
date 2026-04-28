import musicData from "@/data/music.json";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function TrackPage({ params }) {
  const track = musicData.find((t) => t.slug === params.slug);

  if (!track) notFound();

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12 items-center md:items-end">
        {/* Artwork */}
        <div className="relative w-full aspect-square md:w-96 shadow-2xl shadow-cyan-500/10">
          <Image src={track.image_path} alt={track.title} fill className="object-cover" />
        </div>

        {/* Info */}
        <div className="flex-grow space-y-4">
          <p className="text-cyan-400 text-[10px] tracking-[0.5em] uppercase font-bold">
            {track.album_name ? `From: ${track.album_name}` : track.type}
          </p>
          <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-none">
            {track.title}
          </h1>
          <div className="flex gap-4 pt-6">
            {track.spotify_link && <a href={track.spotify_link} className="text-[10px] font-bold border border-white/20 px-6 py-2 hover:bg-white hover:text-black transition">SPOTIFY</a>}
            {track.apple_link && <a href={track.apple_link} className="text-[10px] font-bold border border-white/20 px-6 py-2 hover:bg-white hover:text-black transition">APPLE</a>}
            {track.youtube_link && <a href={track.youtube_link} className="text-[10px] font-bold bg-[#FF5F1F] text-black px-6 py-2 hover:opacity-80 transition">VISUALS</a>}
          </div>
        </div>
      </div>

      {/* Metadata Section */}
      <div className="mt-20 border-t border-white/5 pt-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <label className="text-[8px] text-gray-600 uppercase tracking-widest block mb-1">Release Date</label>
          <p className="text-sm font-mono">{track.release_date}</p>
        </div>
        {track.featured_artist && (
          <div>
            <label className="text-[8px] text-gray-600 uppercase tracking-widest block mb-1">Featuring</label>
            <p className="text-sm">{track.featured_artist}</p>
          </div>
        )}
      </div>
    </main>
  );
}

// Next.js will pre-generate all these pages at build time for instant loading
export async function generateStaticParams() {
  return musicData.map((track) => ({
    slug: track.slug,
  }));
}
