import type { Metadata } from "next";
import { Inter_Tight, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter-tight",
  display: "swap",
});

const notoJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "QUBE – Performance Marketing Agency",
  description: "QUBE is Asia’s leading performance-based marketing agency.",
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
    other: [{ rel: "icon", url: "/logo.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${notoJP.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
