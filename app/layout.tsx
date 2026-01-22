import type { Metadata } from "next";
import { Pixelify_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const pixelify = Pixelify_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "VibeBros - The Creator Economy Platform",
  description: "Join the next generation of digital creators and innovators.",
  icons: {
    icon: '/logo-no-text.png',
    apple: '/logo-no-text.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        pixelify.variable
      )}>
        {children}
      </body>
    </html>
  );
}
