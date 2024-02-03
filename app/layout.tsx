import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "EchelonScript",
  description: "Empowering Devs, Hosting Dreams",
  icons: {
    icon: "/assets/images/echelonscript-high-resolution-logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://echelonscript.com",
    siteName: "EchelonScript",
    title: "EchelonScript",
    description: "Empowering Devs, Hosting Dreams",
    images: [
      {
        url: "/assets/images/echelonscript-high-resolution-logo.png",
        width: 1200,
        height: 630,
        alt: "EchelonScript",
      },
    ],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.variable}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
