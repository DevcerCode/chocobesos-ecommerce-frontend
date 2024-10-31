import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/config/fonts";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: "ChocoBesos",
  description: "Florería y regalos",

};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const GAId = process.env.GOOGLE_ANALYTICS_ID ?? ''
  const gtmId = process.env.GTMID ?? ''

  return (
    <html lang="en"
    >
      <head>

      </head>
      {/* <GoogleAnalytics gaId={GAId} /> */}
      <GoogleTagManager gtmId={gtmId} />
      <body
        className={poppins.className}
      >
        {children}
      </body>
    </html>
  );
}
