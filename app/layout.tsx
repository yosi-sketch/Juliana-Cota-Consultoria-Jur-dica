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
  themeColor: "#16100c",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.draizabellarenno.com"),
  title: "Dra. Izabella Rennó | Advocacia & Consultoria Jurídica em Itajubá - MG",
  description:
    "Advocacia estratégica, rigor técnico e atendimento dedicado conduzido pela Dra. Izabella Rennó (OAB/MG 201.285). Formação HarvardX em Direito Contratual, Cível, Consumidor, Bancário, Família e Trabalhista. Atendimento presencial no Ed. Santa Clara em Itajubá e on-line em todo o Brasil.",
  keywords: [
    "Dra. Izabella Rennó",
    "Izabella Rennó Advocacia",
    "advogada em Itajubá",
    "Edifício Santa Clara Itajubá",
    "OAB MG 201285",
    "direito civil Itajubá",
    "contratos HarvardX",
    "direito bancário e consumidor",
    "direito de família e sucessões",
    "advocacia especializada Minas Gerais",
  ],
  authors: [{ name: "Dra. Izabella Rennó Del-Ducca de Souza" }],
  creator: "Izabella Rennó Advocacia",
  publisher: "Izabella Rennó Advocacia",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.draizabellarenno.com",
    title: "Dra. Izabella Rennó | Advocacia de Alta Precisão em Itajubá - MG",
    description:
      "Advocacia estratégica com dedicação exclusiva a cada causa. Atendimento presencial em Itajubá - MG e on-line para todo o Brasil.",
    siteName: "Izabella Rennó Advocacia",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 410,
        alt: "Izabella Rennó Advocacia",
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
      <body className="min-h-screen overflow-x-clip bg-ivory font-sans text-ink antialiased selection:bg-brand-700 selection:text-white">
        {children}
      </body>
    </html>
  );
}
