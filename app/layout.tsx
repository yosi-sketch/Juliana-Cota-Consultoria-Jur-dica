import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const displayFont = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0a110b",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.julianacota.adv.br"),
  title: "Dra. Juliana Cota | Consultoria Jurídica & Advocacia · João Monlevade - MG",
  description:
    "Juliana Cota Consultoria Jurídica & Advocacia — Atendimento acolhedor, combativo e especializado em Direito do Trabalho (defesa do trabalhador, rescisão indireta, horas extras, justa causa), consultoria empresarial, causas cíveis e previdenciárias em João Monlevade/MG e em todo o Brasil. Avaliação 5,0 estrelas com 97 avaliações no Google.",
  keywords: [
    "Dra. Juliana Cota",
    "Juliana Cota Advogada",
    "Juliana Cota Consultoria Jurídica & Advocacia",
    "Juliana Cota João Monlevade",
    "advogada João Monlevade",
    "advogado trabalhista João Monlevade",
    "direito do trabalho João Monlevade MG",
    "rescisão indireta João Monlevade",
    "consultoria jurídica João Monlevade",
    "advocacia trabalhista Minas Gerais",
    "demissão sem justa causa advogado",
    "acidente de trabalho advogado João Monlevade",
    "advogada Carneirinhos João Monlevade",
    "horas extras advogado João Monlevade",
  ],
  authors: [{ name: "Dra. Juliana Cota" }],
  creator: "Juliana Cota Consultoria Jurídica & Advocacia",
  publisher: "Juliana Cota Consultoria Jurídica & Advocacia",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.png?v=2026", sizes: "64x64", type: "image/png" },
      { url: "/icon.png?v=2026", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.png?v=2026",
    apple: [
      { url: "/apple-icon.png?v=2026", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.julianacota.adv.br",
    title: "Dra. Juliana Cota | Consultoria Jurídica & Advocacia",
    description:
      "Defesa firme dos seus direitos com técnica, ética e acolhimento humano. Sede em Carneirinhos, João Monlevade - MG e atendimento especializado em todo o Brasil.",
    siteName: "Juliana Cota Consultoria Jurídica & Advocacia",
    images: [
      {
        url: "/logo.png",
        width: 1774,
        height: 887,
        alt: "Juliana Cota Consultoria Jurídica & Advocacia",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${displayFont.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.png?v=2026" type="image/png" sizes="64x64" />
        <link rel="icon" href="/icon.png?v=2026" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/apple-icon.png?v=2026" sizes="180x180" />
      </head>
      <body className="min-h-screen overflow-x-clip bg-[#fcfbf8] font-sans text-[#0a130c] antialiased selection:bg-[#cda34f] selection:text-[#070d08]">
        {children}
      </body>
    </html>
  );
}
