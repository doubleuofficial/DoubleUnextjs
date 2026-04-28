import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#050505] text-[#eee] antialiased selection:bg-cyan-500/30">
        <nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-center backdrop-blur-md border-b border-white/5">
          <Link href="/" dir="ltr" className="text-[#FF5F1F] font-black italic tracking-tighter text-2xl hover:text-white transition">
            DoubleU
          </Link>
          <div className="flex items-center space-x-6 text-[10px] font-bold uppercase tracking-[0.3em]">
            <Link href="/music" className="hover:text-cyan-400">Music</Link>
            <Link href="/about" className="hover:text-cyan-400">About</Link>
            <Link href="/contact" className="hover:text-cyan-400">Contact</Link>
            <a href="https://www.youtube.com/@DoubleUOTB" target="_blank" className="hover:text-cyan-400">YT</a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
