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

  return (
    <html lang="en"
    >
      <head>

      </head>
      {/* <GoogleAnalytics gaId={GAId} /> */}
      <GoogleTagManager gtmId="GTM-KLVM56Z7" />
      <body
        className={poppins.className}
      >
        {children}
      </body>
    </html>
  );
}
