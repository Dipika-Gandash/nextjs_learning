import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '@/components/Navigation'

export const metadata = {
   title: 'My Next.js App',
  description: 'This is my first Next.js app',
}

export default function RootLayout({children}) {
  return (
    <html lang='en'>
      <body>
      <Navigation />
        {children}
      </body>
    </html>
  )
}