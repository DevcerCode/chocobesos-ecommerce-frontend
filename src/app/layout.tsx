import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/config/fonts";
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: "ChocoBesos",
  description: "Florería y regalos",

};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
    >
      <body
        className={poppins.className}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-G1N67BNELR" />
    </html>
  );
}
