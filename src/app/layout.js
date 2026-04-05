import "./globals.css";
import {
  InterFont,
  JetBrainsMonoFont,
  NotoSerifFont,
  EBGaramondFont,
} from "./font.js";
import Header from "@/components/Header";

export const metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: "ExploreIndia",
  description:
    "Explore India by discovering states, cities, culture, food, and famous travel destinations.",
  keywords: [
    "India travel",
    "tourism in India",
    "Indian cities",
    "travel guide",
  ],
  icons:{
    icon: "/favicon.png",
    optional: "/favicon.png"
  },
  openGraph: {
    title: "Explore India",
    description:
      "Discover Indian states, cities, culture, and travel destinations.",
    url: "",
    images: [
      {
        url: "/ogImage.jpg",
        width: 1200,
        height: 630,
        alt: "Explore India travel website",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Explore India",
    description:
      "Discover Indian states, cities, culture, and travel destinations.",
    images: [
      {
        url: "/ogImage.jpg",
        width: 1200,
        height: 630,
        alt: "Explore India travel website",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"   className={`
        ${InterFont.variable} 
        ${JetBrainsMonoFont.variable} 
        ${NotoSerifFont.variable} 
        ${EBGaramondFont.variable}
      `}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
