import musicData from "@/data/music.json";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function ReleasePage({ params }) {
  const { slug } = params;
  const track = musicData.find((t) => t.slug === slug);

  // If the slug doesn't exist in music.json, show 404
  if (!track) notFound();

  // Find other tracks if this is part of an album
  const isAlbum = track.type === "Album";
  const albumTracks = isAlbum 
    ? musicData.filter(t => t.album_name === track.title && t.type === "Album Track").sort((a, b) => a.track_no - b.track_no)
    : [];

  return (
    <main className="min-h-screen bg-black text-[#eee] pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-start md:items-center">
          
          {/* Artwork Section */}
          <div className="w-full md:w-2/5 aspect-square relative shadow-[0_0_50px_rgba(0,255,255,0.1)] border border-white/10">
            <Image 
              src={track.image_path} 
              alt={track.title} 
              fill 
              className="object-cover" 
              priority
            />
          </div>

          {/* Content Section */}
          <div className="w-full md:w-3/5 space-y-8">
            <div>
              <p className="text-cyan-400 text-[10px] tracking-[0.6em] uppercase font-black mb-4">
                {track.album_name ? `From the Album: ${track.album_name}` : track.type}
              </p>
              <h1 className="text-6xl md:text-9xl font-black italic uppercase tracking-tighter leading-[0.85] text-[#FF5F1F]">
                {track.title}
              </h1>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              {track.youtube_link && (
                <a href={track.youtube_link} target="_blank" className="bg-white text-black px-10 py-4 font-black uppercase text-xs tracking-widest hover:bg-cyan-400 transition-colors">
                  Watch Visuals
                </a>
              )}
              {track.apple_link && (
                <a href={track.apple_link} target="_blank" className="border border-white/20 px-10 py-4 font-black uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all">
                  Apple Music
                </a>
              )}
            </div>

            <div className="pt-10 grid grid-cols-2 gap-8 border-t border-white/5">
              <div className="space-y-1">
                <span className="text-[9px] uppercase tracking-widest text-gray-600 font-bold">Release Date</span>
                <p className="text-sm font-mono uppercase">{track.release_date}</p>
              </div>
              {track.featured_artist && (
                <div className="space-y-1">
                  <span className="text-[9px] uppercase tracking-widest text-gray-600 font-bold">Featuring</span>
                  <p className="text-sm italic uppercase">{track.featured_artist}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Dynamic Tracklist for Albums */}
        {isAlbum && (
          <section className="mt-32">
            <div className="flex items-center gap-6 mb-12">
              <h2 className="text-2xl font-black italic uppercase tracking-tighter">Tracklist</h2>
              <div className="h-[1px] flex-grow bg-white/10"></div>
            </div>
            <div className="grid gap-2">
              {albumTracks.map((t) => (
                <Link 
                  href={`/${t.slug}`} 
                  key={t.slug} 
                  className="group flex items-center justify-between p-6 bg-zinc-900/20 border border-white/5 hover:bg-white/5 transition-all"
                >
                  <div className="flex items-center gap-8">
                    <span className="text-xs font-mono text-gray-600">{t.track_no?.toString().padStart(2, '0')}</span>
                    <span className="text-lg font-bold uppercase tracking-widest group-hover:text-cyan-400 transition-colors">{t.title}</span>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity text-cyan-500">
                    Neural_Access_
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

// Generates static paths for SEO and speed
export async function generateStaticParams() {
  return musicData.map((track) => ({
    slug: track.slug,
  }));
}
