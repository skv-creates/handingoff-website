import type { Metadata } from "next";
import { Manrope, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Handingoff — Screen recordings for AI",
  description:
    "Screen recordings transcribed into structured context — video, network requests, console logs — ready for any AI agent.",
  icons: {
    icon: "/assets/favicon-32.png",
    apple: "/assets/favicon-180.png",
  },
  openGraph: {
    images: ["/assets/handingoff-graph-cover-01.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/handingoff-graph-cover-01.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} ${geistMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
