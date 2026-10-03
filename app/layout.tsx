import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const displayFont = Outfit({
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
  themeColor: "#090a0f",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.augustolima.adv.br"),
  title: "Augusto Lima Advocacia | Dr. Augusto Lima · Passos - MG · Direito Bancário & Cível",
  description:
    "Augusto Lima Advocacia — Escritório jurídico de alta performance liderado pelo Dr. Augusto Lima em Passos - MG e com atuação em todo o Brasil. Foco estratégico em Direito Bancário, revisão de contratos de empréstimo e financiamento, cancelamento de juros abusivos, gestão de passivos bancários para empresas, litígios cíveis, trabalhistas e direito de família. Avaliação máxima 5,0 estrelas no Google (70 avaliações).",
  keywords: [
    "Augusto Lima Advogado",
    "Augusto Lima Advocacia",
    "Dr. Augusto Lima",
    "advogado em Passos MG",
    "advogado direito bancario Passos",
    "revisao de juros abusivos Passos MG",
    "gestao de passivos bancarios empresas",
    "revisao contrato emprestimo Passos",
    "trava de recebiveis advogado",
    "desconto indevido RMC RCC Passos",
    "advogado civel Passos MG",
    "litigio trabalhista Passos",
    "divorcio e partilha Passos MG",
    "inventario em cartorio Passos MG",
    "advocacia especializada Minas Gerais",
  ],
  authors: [{ name: "Dr. Augusto Lima" }],
  creator: "Augusto Lima Advocacia",
  publisher: "Augusto Lima Advocacia",
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
    url: "https://www.augustolima.adv.br",
    title: "Augusto Lima Advocacia | Dr. Augusto Lima · Soluções Jurídicas Estratégicas",
    description:
      "Existe uma diferença entre dever e ser cobrado indevidamente. Advocacia combativa com foco em Direito Bancário, revisão de juros e defesa patrimonial em Passos - MG e em todo o Brasil.",
    siteName: "Augusto Lima Advocacia",
    images: [
      {
        url: "/logo-augusto-lima-dark.png",
        width: 1840,
        height: 685,
        alt: "Augusto Lima Advocacia",
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
      <body className="min-h-screen overflow-x-clip bg-slate-50 font-sans text-slate-900 antialiased selection:bg-amber-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
