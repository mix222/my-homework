import type { Metadata } from "next";
import { Noto_Sans_Lao } from "next/font/google";
import "./globals.css";

const notoSansLao = Noto_Sans_Lao({
  subsets: ["lao", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans-lao",
});

export const metadata: Metadata = {
  title: "My Next.js App",
  description: "Next.js with Noto Sans Lao",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="lo" className={notoSansLao.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}