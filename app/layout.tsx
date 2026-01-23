import type { Metadata, Viewport } from "next";
import { Pixelify_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { PWAInstaller } from "@/components/PWAInstaller";

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
  description: "Join an elite community of gamers, developers, and creators. Experience the VibeBros ecosystem today.",
  applicationName: "VibeBros",
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
    description: 'Join an elite community of gamers, developers, and creators. Experience the VibeBros ecosystem today.',
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
    description: 'Join an elite community of gamers, developers, and creators. Experience the VibeBros ecosystem today.',
    images: [`${siteUrl}/landing-og.png`],
  },
  keywords: [
    'VibeBros',
    'community',
    'developers',
    'creators',
    'gaming',
    'coding',
    'web3',
    'discord',
    'hackathon',
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
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="VibeBros" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </head>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        pixelify.variable
      )}>
        <PWAInstaller />
        {children}
      </body>
    </html>
  );
}
