import musicData from "@/data/music.json";
import config from "@/data/config.json";
import Image from "next/image";

export default function Home() {
  const latest = [...musicData]
    .filter(r => r.type === "Single" || r.type === "Album")
    .sort((a, b) => new Date(b.release_date) - new Date(a.release_date))[0];

  return (
    <main className="min-h-screen pt-20">
      <section className="h-[70vh] flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-7xl md:text-[10rem] font-black italic uppercase tracking-tighter text-[#FF5F1F] leading-[0.8]">
          {config.artistName}
        </h1>
        <p className="mt-6 text-[10px] tracking-[0.5em] uppercase text-cyan-400">
          {config.location} // Neural Trap
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="relative bg-white/5 border border-white/10 p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
          <div className="w-72 h-72 relative">
             <Image src={latest.image_path} alt={latest.title} fill className="object-cover" />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter">Latest: {latest.title}</h2>
            <p className="text-cyan-400 text-[10px] tracking-[0.4em] uppercase my-4">{latest.type} // {latest.release_date}</p>
            <a href={latest.youtube_link} className="inline-block bg-white text-black px-8 py-3 font-bold uppercase text-[10px] tracking-widest hover:bg-[#FF5F1F] transition">
              Watch Visuals
            </a>
          </div>
        </div>
      </section>
    </main>
  );
  }
