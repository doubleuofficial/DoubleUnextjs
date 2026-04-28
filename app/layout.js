import "./globals.css";
import Nav from "@/components/Nav";
import Marquee from "@/components/Marquee";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#050505] text-[#eee] antialiased">
        <Marquee />
        <Nav />
        {children}
      </body>
    </html>
  );
}
