import './globals.css'
import { Source_Serif_4 } from 'next/font/google'
import NavBar from '@/components/NavBar'

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-source-serif',
})

export const metadata = {
  title: 'Calebe H. Lamb',
  description: 'Feito por Calebe',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sourceSerif.variable} font-source-serif min-h-screen overflow-y-auto`}>
        <NavBar />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  )
}
