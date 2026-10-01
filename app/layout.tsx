import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0e0c0a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.giovanafranklin.adv.br"),
  title: "Advocacia Giovana Franklin | Dra. Giovana Franklin · OAB/MG 208.554 · Passos - MG",
  description:
    "Advocacia especializada e combativa conduzida pela Dra. Giovana Franklin (OAB/MG 208.554). Atuação de destaque em Direito Previdenciário, Planejamento Previdenciário, Direito do Trabalho, Cível e Família. Sede na Av. Arlindo Figueiredo em Passos - MG e atendimento digital em todo o Brasil.",
  keywords: [
    "Advocacia Giovana Franklin",
    "Dra. Giovana Franklin",
    "Giovana Franklin Advogada",
    "advogada em Passos MG",
    "OAB MG 208554",
    "direito previdenciario Passos MG",
    "planejamento previdenciario Passos MG",
    "desconto indevido aposentadoria INSS Passos",
    "aposentadoria INSS Passos",
    "advogada trabalhista Passos MG",
    "direito do trabalho Passos",
    "direito civil Passos MG",
    "direito de família Passos MG",
    "inventário em cartório Passos MG",
    "advocacia especializada Minas Gerais",
  ],
  authors: [{ name: "Dra. Giovana Franklin" }],
  creator: "Advocacia Giovana Franklin",
  publisher: "Advocacia Giovana Franklin",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.png?v=3", sizes: "64x64", type: "image/png" },
      { url: "/icon.png?v=3", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.png?v=3",
    apple: [
      { url: "/apple-icon.png?v=3", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.giovanafranklin.adv.br",
    title: "Advocacia Giovana Franklin | Dra. Giovana Franklin · OAB/MG 208.554",
    description:
      "Assessoria jurídica estratégica, dedicação artesanal a cada caso e combatividade comprovada. Sede em Passos - MG e atendimento digital em todo o Brasil.",
    siteName: "Advocacia Giovana Franklin",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Advocacia Giovana Franklin — OAB/MG 208.554",
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
        <link rel="icon" href="/favicon.png?v=3" type="image/png" sizes="64x64" />
        <link rel="icon" href="/icon.png?v=3" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/apple-icon.png?v=3" sizes="180x180" />
      </head>
      <body className="min-h-screen overflow-x-clip bg-ivory font-sans text-ink antialiased selection:bg-brand-700 selection:text-white">
        {children}
      </body>
    </html>
  );
}
