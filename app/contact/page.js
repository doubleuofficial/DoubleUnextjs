import config from "@/data/config.json";

export default function Contact() {
  return (
    <main className="bg-black text-white flex items-center min-h-screen p-8">
      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-24">
        <div className="space-y-6">
          <h1 className="text-8xl font-black italic uppercase tracking-tighter leading-none">Connect</h1>
          <div className="h-1 w-24 bg-cyan-500"></div>
          <p className="text-gray-500 uppercase tracking-[0.3em] text-[10px] font-bold italic">For features, booking, and production.</p>
        </div>

        <div className="flex flex-col justify-center space-y-12">
          <div>
            <label className="text-[9px] uppercase tracking-[0.4em] text-gray-600 font-bold block mb-2">Email Address</label>
            <a href={`mailto:${config.email}`} className="text-3xl md:text-4xl font-light hover:text-cyan-400 transition-all underline decoration-gray-800 underline-offset-8">
              {config.email}
            </a>
          </div>

          <div>
            <label className="text-[9px] uppercase tracking-[0.4em] text-gray-600 font-bold block mb-2">Direct / Management</label>
            <p className="text-3xl md:text-4xl font-light tracking-tighter">{config.phone}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
