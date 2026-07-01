import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://docs.cookeiscan.wtf"),
  title: {
    default: "Cookie Chain Docs",
    template: "%s | Cookie Chain Docs",
  },
  description:
    "Official Cookie Chain documentation for builders, degens, validators, wallets, COOK, bridge mechanics, governance, and Solana-compatible development.",
  keywords: [
    "Cookie Chain",
    "COOK",
    "Cookie Chain docs",
    "SVM network",
    "SVM",
    "sCOOK",
    "cCOOK",
    "bridge",
    "validators",
    "Squads multisig",
  ],
  applicationName: "Cookie Chain Docs",
  authors: [{ name: "Cookie Chain Community" }],
  creator: "Cookie Chain Community",
  publisher: "Cookie Chain Community",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      {
        url: "/cookie.jpeg",
        type: "image/jpeg",
      },
    ],
    shortcut: "/cookie.jpeg",
    apple: "/cookie.jpeg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Cookie Chain Docs",
    title: "Cookie Chain Docs",
    description:
      "Learn Cookie Chain: COOK, wallets, validators, bridge mechanics, governance, and Solana-compatible app development.",
    images: [
      {
        url: "/cookie.jpeg",
        width: 512,
        height: 512,
        alt: "Cookie Chain logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Chain Docs",
    description:
      "Documentation for building, bridging, validating, and participating on Cookie Chain.",
    images: ["/cookie.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <Analytics />
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
