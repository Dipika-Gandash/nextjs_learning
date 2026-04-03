import { Inter, JetBrains_Mono, Noto_Serif, EB_Garamond } from "next/font/google";

export const InterFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const JetBrainsMonoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const NotoSerifFont = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto",
});

export const EBGaramondFont = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
});