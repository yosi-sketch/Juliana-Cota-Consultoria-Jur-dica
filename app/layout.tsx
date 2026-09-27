import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "SG Advocacia | Consultoria e Assessoria em Belo Horizonte",
  description:
    "Atendimento jurídico próximo em Belo Horizonte e on-line. Conheça a SG Advocacia, suas áreas de atuação e formas de contato.",
  keywords: [
    "SG Advocacia",
    "advocacia em Belo Horizonte",
    "advogada no Lindéia",
    "direito de família",
    "direito previdenciário",
    "pensão por morte",
    "orientação jurídica",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={bodyFont.variable + " " + displayFont.variable + " scroll-smooth"}>
      <body className="min-h-screen overflow-x-clip bg-ivory font-sans text-ink antialiased selection:bg-brand-700 selection:text-white">
        {children}
      </body>
    </html>
  );
}
