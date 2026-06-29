import type { Metadata } from "next"
import { Inter } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import SoundEffects from "@/components/sound-effects"
import SafariThemeColor from "@/components/safari-theme-color"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const oldLondon = localFont({
  src: "../public/fonts/Old London Font.woff",
  variable: "--font-old-london",
})

const boulevardSaintDenis = localFont({
  src: "../public/fonts/Boulevard-Saint-Denis-1.ttf",
  variable: "--font-boulevard-saint-denis",
})

const schoolsOut = localFont({
  src: "../public/fonts/Schools-Out-2.otf",
  variable: "--font-schools-out",
})

const fuluMelody = localFont({
  src: "../public/fonts/FuluMelody-2.ttf",
  variable: "--font-fulu-melody",
})

export const metadata: Metadata = {
  title: "Gallery by Qkunio",
  description: "Lets Explore the World",
  // Set initial theme-color meta tag for iOS Safari
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oldLondon.variable} ${boulevardSaintDenis.variable} ${schoolsOut.variable} ${fuluMelody.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SafariThemeColor />
          <SoundEffects />
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
