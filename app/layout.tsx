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
  themeColor: "#081017",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.silvacabral.adv.br"),
  title: "Dra. Bianca Santos | Silva Cabral Advocacia Previdenciária · Conselheiro Lafaiete - MG",
  description:
    "Dra. Bianca Santos (Silva Cabral Advocacia Previdenciária) — Atendimento humanizado e especializado em Direito Previdenciário em Conselheiro Lafaiete/MG e em todo o Brasil. Foco em aposentadorias rápidas, BPC/LOAS, benefícios por incapacidade (auxílio-doença), pensão por morte, planejamento previdenciário e revisões do INSS. Avaliação 4,9 estrelas com 133+ avaliações no Google.",
  keywords: [
    "Dra. Bianca Santos",
    "Bianca Santos Advogada",
    "Silva Cabral Advocacia Previdenciária",
    "Silva Cabral Advogados",
    "advogada previdenciária Conselheiro Lafaiete",
    "advogado INSS Conselheiro Lafaiete",
    "aposentadoria Conselheiro Lafaiete MG",
    "BPC LOAS Conselheiro Lafaiete",
    "auxílio doença advogado Lafaiete",
    "planejamento previdenciário Minas Gerais",
    "revisão de benefício INSS",
    "advocacia previdenciária MG",
    "pensão por morte INSS Lafaiete",
    "concessão de aposentadoria rápida",
  ],
  authors: [{ name: "Dra. Bianca Santos" }],
  creator: "Silva Cabral Advocacia Previdenciária",
  publisher: "Silva Cabral Advocacia Previdenciária",
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
    url: "https://www.silvacabral.adv.br",
    title: "Dra. Bianca Santos | Silva Cabral Advocacia Previdenciária",
    description:
      "Aposentadoria e benefícios do INSS conquistados com agilidade, respeito e excelência técnica. Sede no Centro de Conselheiro Lafaiete - MG e atendimento em todo o Brasil.",
    siteName: "Silva Cabral Advocacia Previdenciária",
    images: [
      {
        url: "/logo.png",
        width: 2020,
        height: 427,
        alt: "Dra. Bianca Santos - Silva Cabral Advocacia Previdenciária",
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
      <body className="min-h-screen overflow-x-clip bg-slate-50 font-sans text-slate-900 antialiased selection:bg-[#c99738] selection:text-white">
        {children}
      </body>
    </html>
  );
}
