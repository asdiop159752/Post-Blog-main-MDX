import './globals.css'
import Navbar from './components/Navbar'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Xuan Truong Blog',
  description: 'Created by Xuan Truong',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-slate-500 '>
        <Navbar />
        <main className="px-4 md:px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
          {children}
        </main>
        </body>
    </html>
  )
}
