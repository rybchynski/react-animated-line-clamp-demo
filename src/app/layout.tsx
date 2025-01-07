import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Provider } from "@/components/ui/provider";
import Header from "@/components/header";
import { metadata as meta } from "../config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  generator: meta.generator,
  referrer: meta.referrer,
  keywords: meta.keywords,
  authors: meta.authors,
  creator: meta.creator,
  publisher: meta.publisher,
  openGraph: meta.openGraph,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
