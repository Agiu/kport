import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Golos_Text, Gabarito} from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://nim-fawn.vercel.app/'),
  alternates: {
    canonical: '/'
  },
  title: {
    default: 'Caleb Aguiar - Portfolio',
    template: '%s | Nim'
  },
  description:  'Product Designer - Caleb Aguiar',
};

const IBM_plex_400 = Gabarito({
  variable: '--font-ibm-plex-sans',
  subsets: ['latin'],
  weight: '400',
})

const IBM_plex_700 = Gabarito({
  variable: '--font-ibm-plex-sans',
  subsets: ['latin'],
  weight: '700',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${IBM_plex_400.variable} ${IBM_plex_700.variable} bg-white tracking-tight antialiased dark:bg-zinc-900`}
      >
        {/* Theme support */}
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="dark"
        >
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-ibm-plex-sans)]">
            <div className="relative mx-auto w-full max-w-250 flex-1 px-4 ">
              
              {/* Subtle defense-style border frame */}
              <div className="relative  border-zinc-800 border-l-1 border-r-1 pt-20">
                
                {/* Corner accents */}

                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-rose-500 " />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-rose-500 " />

                {/* Main content */}
                <Header />
                <div className="p-6">
                  {children}
                </div>
                <Footer />
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
