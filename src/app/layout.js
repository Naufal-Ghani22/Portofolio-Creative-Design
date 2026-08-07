import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  weight: ["400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Naufal Ghani — Creative UI/UX Designer & Engineer",
  description: "Portofolio kreatif Naufal Ghani - Vibrant Cobalt Blue & Acid Lime aesthetic, UI/UX Designer & Frontend Engineer.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${plusJakartaSans.variable} ${outfit.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full bg-[#2B38F6] text-white font-sans selection:bg-[#CCFF00] selection:text-[#000000]">
        {children}
      </body>
    </html>
  );
}
