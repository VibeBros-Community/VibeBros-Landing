import type { Metadata, Viewport } from "next";
import { Pixelify_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { PWAInstaller } from "@/components/PWAInstaller";
import { StructuredData } from "@/components/seo/StructuredData";

const pixelify = Pixelify_Sans({ subsets: ["latin"], variable: "--font-sans" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vibebros.dev';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#428ebd',
};

export const metadata: Metadata = {
  title: "VibeBros - Level Up Your Network",
  description: "Join VibeBros: A thriving community of 250+ developers, gamers, and creators. Weekly coding sessions, hackathons, Web3 workshops, and 24/7 Discord support. Level up your network today!",
  applicationName: "VibeBros",
  metadataBase: new URL(siteUrl),
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "VibeBros",
  },
  formatDetection: {
    telephone: false,
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'VibeBros',
    title: 'VibeBros - Level Up Your Network',
    description: 'Join VibeBros: A thriving community of 250+ developers, gamers, and creators. Weekly coding sessions, hackathons, Web3 workshops, and 24/7 Discord support. Level up your network today!',
    images: [
      {
        url: `${siteUrl}/landing-og.png`,
        width: 1200,
        height: 630,
        alt: 'VibeBros - Level Up Your Network',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@vibebros',
    creator: '@vibebros',
    title: 'VibeBros - Level Up Your Network',
    description: 'Join VibeBros: A thriving community of 250+ developers, gamers, and creators. Weekly coding sessions, hackathons, Web3 workshops, and 24/7 Discord support. Level up your network today!',
    images: [`${siteUrl}/landing-og.png`],
  },
  keywords: [
    'VibeBros',
    'developer community',
    'tech community',
    'programming community',
    'coding community',
    'developers',
    'creators',
    'gaming',
    'coding',
    'web3',
    'web3 development',
    'discord',
    'discord community for developers',
    'hackathon',
    'coding bootcamp',
    'coding workshops',
    'live coding sessions',
    'vibe coding',
  ],
  authors: [{ name: 'VibeBros Community' }],
  creator: 'VibeBros',
  publisher: 'VibeBros',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* SEO Meta Tags */}
        <link rel="canonical" href={siteUrl} />
        <meta name="author" content="VibeBros Community" />

        {/* Favicons - Multiple sizes for better compatibility */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/icon-48x48.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/icon-192x192.png" />

        {/* Preload Critical Resources */}
        <link rel="preload" href="/logo-no-text.png" as="image" type="image/png" />
        <link rel="preload" href="/landing-og.png" as="image" type="image/png" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://discord.gg" crossOrigin="anonymous" />

        {/* PWA Configuration */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="VibeBros" />

        {/* JSON-LD Organization Schema */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "VibeBros",
              "url": "${siteUrl}",
              "logo": "${siteUrl}/logo-no-text.png",
              "description": "An elite community of gamers, developers, and creators building the future of tech together.",
              "sameAs": [
                "https://discord.gg/vibebros",
                "https://twitter.com/vibebros",
                "https://github.com/vibebros"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Community Support",
                "url": "https://discord.gg/vibebros"
              }
            }`
          }}
        />

        {/* JSON-LD WebSite Schema */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "${siteUrl}",
              "name": "VibeBros",
              "description": "Join an elite community of gamers, developers, and creators"
            }`
          }}
        />

        {/* JSON-LD BreadcrumbList Schema */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "${siteUrl}"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "About",
                  "item": "${siteUrl}#about"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Projects",
                  "item": "${siteUrl}#projects"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Events",
                  "item": "${siteUrl}#events"
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "name": "Team",
                  "item": "${siteUrl}#team"
                },
                {
                  "@type": "ListItem",
                  "position": 6,
                  "name": "FAQ",
                  "item": "${siteUrl}#faq"
                }
              ]
            }`
          }}
        />
      </head>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        pixelify.variable
      )}>
        <StructuredData />
        <PWAInstaller />
        {children}
      </body>
    </html>
  );
}
