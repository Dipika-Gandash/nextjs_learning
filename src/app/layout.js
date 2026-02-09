import './globals.css';
import Header from '@/components/Header'
import { Playfair_Display, Inter } from "next/font/google"

export const metadata = {
   title: 'ExploreIndia',
  description: 'This is my first Next.js app',
}

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font--playfair"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font--inter"
})

export default function RootLayout({children}) {
  return (
    <html lang='en'>
      <body className={inter.className} >
      <Header />
        {children}
      </body>
    </html>
  )
}

export {playfair};