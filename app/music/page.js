import musicData from "@/data/music.json";
import Image from "next/image";
import Link from "next/link";

export default function DiscographyPage() {
  // Sorting: Newest to Oldest as requested
  // We filter for Singles and Albums for the main grid
  const sortedMusic = [...musicData]
    .filter((track) => track.type === "Single" || track.type === "Album")
    .sort((a, b) => new Date(b.release_date) - new Date(a.release_date));

  return (
    <main className="min-h-screen bg-[#050505] text-[#eee] pt-32 px-6 pb-20 max-w-7xl mx-auto">
      <header className="mb-16 border-l-4 border-[#FF5F1F] pl-6">
        <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter text-[#FF5F1F]">
          Discography
        </h1>
        <p className="text-[10px] uppercase tracking-[0.5em] text-gray-500 mt-2">
          Full Catalog // Oklahoma City
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {sortedMusic.map((release) => (
          <Link 
            href={`/${release.slug}`} 
            key={release.slug} 
            className="group relative bg-zinc-900/20 border border-white/5 p-5 hover:border-cyan-500/40 transition-all duration-500"
          >
            <div className="relative aspect-square mb-6 overflow-hidden">
              <Image
                src={release.image_path}
                alt={release.title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
            </div>
            
            <div className="space-y-2">
              <h4 className="text-2xl font-black italic uppercase tracking-tighter group-hover:text-cyan-400 transition-colors">
                {release.title}
              </h4>
              <div className="flex justify-between items-center border-t border-white/5 pt-3">
                <p className="text-[9px] tracking-[0.3em] font-bold text-gray-500 uppercase">
                  {release.type}
                </p>
                <p className="text-[9px] font-mono text-cyan-500/60">
                  {new Date(release.release_date).getFullYear()}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
