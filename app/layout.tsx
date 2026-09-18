import type { Metadata, Viewport } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "LA LEGENDA｜大人世代のパーソナルトレーニング＆ボディケア",
  description: "星川のLA LEGENDA。パーソナルトレーニングと身体のケアをひとつの場所で。営業提案用サンプルLPです。",
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false, noimageindex: true } },
  icons: { icon: `${basePath}/images/brand/la_legenda_favicon.png`, apple: `${basePath}/images/brand/la_legenda_favicon.png` },
  openGraph: { title: "LA LEGENDA｜Train. Care. Live Well.", description: "大人世代のためのパーソナルトレーニング＆ボディケア。", type: "website" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#1A1815" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body>{children}</body></html>;
}
