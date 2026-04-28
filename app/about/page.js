import config from "@/data/config.json";

export default function About() {
  return (
    <main className="min-h-screen flex flex-col p-8 md:p-24 pt-32">
      <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-16 items-start">
        <div className="md:col-span-2">
          <h1 className="text-8xl font-black italic uppercase tracking-tighter leading-none">
            Double<br/><span className="text-cyan-500 text-9xl">U</span>
          </h1>
          <p className="text-[10px] uppercase tracking-[0.5em] text-gray-600 mt-8 font-bold">{config.location}</p>
        </div>
        
        <div className="md:col-span-3 text-gray-400 text-lg leading-relaxed space-y-6 tracking-wide italic">
          {config.bio.split('\n').map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </div>
    </main>
  );
}
