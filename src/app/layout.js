import "./globals.css";
import Header from "@/components/Header";
import { Playfair_Display, Inter } from "next/font/google";

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

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font--playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font--inter",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}

export { playfair };
