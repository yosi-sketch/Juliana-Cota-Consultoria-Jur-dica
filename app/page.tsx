"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Briefcase,
  CheckCircle2,
  Clock,
  HeartHandshake,
  Landmark,
  Mail,
  MapPin,
  Menu,
  Phone,
  Scale,
  Star,
  X,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5535997405607";
const PHONE_DISPLAY = "(35) 99740-5607";
const EMAIL_CONTACT = "contato@draizabellarenno.com";

function getWhatsAppUrl(message?: string) {
  const defaultText =
    "Olá, Dra. Izabella Rennó. Gostaria de solicitar uma consulta jurídica especializada.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message || defaultText
  )}`;
}

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Dra.+Izabella+Renn%C3%B3+Del-Ducca+de+Souza%2C+Edif%C3%ADcio+Santa+Clara%2C+R.+Cel.+Francisco+Braz%2C+185+-+Sl+205+-+Centro%2C+Itajub%C3%A1+-+MG%2C+37500-005";

function WhatsAppIcon({
  size = 17,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.69C7.02 10.9 7.9 12.07 8.02 12.23C8.15 12.39 9.74 14.85 12.19 15.91C12.77 16.16 13.23 16.31 13.58 16.42C14.17 16.61 14.71 16.58 15.13 16.52C15.6 16.45 16.58 15.93 16.78 15.35C16.99 14.77 16.99 14.27 16.93 14.17C16.86 14.07 16.71 14.01 16.47 13.89C16.24 13.77 15.11 13.21 14.9 13.14C14.69 13.06 14.54 13.02 14.39 13.25C14.23 13.47 13.8 13.98 13.67 14.13C13.54 14.27 13.41 14.29 13.18 14.17C12.95 14.06 11.98 13.74 10.84 12.72C9.95 11.92 9.34 10.94 9.17 10.65C9.01 10.36 9.15 10.2 9.27 10.08C9.37 9.98 9.5 9.8 9.62 9.66C9.74 9.52 9.78 9.42 9.86 9.26C9.94 9.1 9.9 8.95 9.84 8.83C9.78 8.71 9.32 7.57 9.13 7.11C8.94 6.66 8.75 6.72 8.6 6.71C8.47 6.71 8.31 6.71 8.15 6.71L8.53 7.33Z" />
    </svg>
  );
}

const reveal: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.04 } },
};

interface PracticeArea {
  id: string;
  title: string;
  icon: typeof Scale;
  tag: string;
  summary: string;
  details: string;
  topics: string[];
  whatsAppText: string;
}

const practiceAreas: PracticeArea[] = [
  {
    id: "civel-contratos",
    title: "Direito Cível & Contratos",
    icon: Scale,
    tag: "Padrão HarvardX",
    summary:
      "Assessoria estratégica em contratos com padrão internacional, auditoria de riscos, responsabilidade civil e litígios patrimoniais.",
    details:
      "Com formação especializada e certificada pela Harvard Law School (HarvardX em Contract Law), a Dra. Izabella Rennó atua na elaboração e revisão minuciosa de contratos civis e comerciais de alta relevância. A atuação abrange também o cancelamento e anulação de doações por ingratidão (Artigo 555 do Código Civil), rescisões contratuais, reparações por danos morais e materiais e disputas patrimoniais complexas.",
    topics: [
      "Auditoria preventiva & elaboração de contratos (HarvardX)",
      "Anulação e revogação de doações por ingratidão",
      "Responsabilidade civil e reparação por danos",
      "Execução de títulos e disputas patrimoniais",
    ],
    whatsAppText:
      "Olá, Dra. Izabella Rennó. Gostaria de uma consulta especializada em Direito Cível e Contratos.",
  },
  {
    id: "consumidor-bancario",
    title: "Direito do Consumidor & Bancário",
    icon: Landmark,
    tag: "Defesa Intransigente",
    summary:
      "Combate incisivo a abusos de instituições financeiras, juros abusivos, fraudes, negativações indevidas e violações de tempo.",
    details:
      "Proteção rigorosa contra práticas abusivas de bancos e fornecedores. Atuação especializada em fraudes bancárias, empréstimos consignados não solicitados, cobrança de juros extorsivos, negativações indevidas no SPC/Serasa e ressarcimento pelo desvio produtivo do consumidor — incluindo indenizações por tempo excessivo e prejudicial em filas de agências bancárias.",
    topics: [
      "Fraudes financeiras e empréstimos fraudulentos",
      "Revisão de juros e cláusulas bancárias abusivas",
      "Tempo excessivo em fila de banco (desvio produtivo)",
      "Indenizações por negativação indevida e cobrança vexatória",
    ],
    whatsAppText:
      "Olá, Dra. Izabella Rennó. Gostaria de uma consulta especializada em Direito do Consumidor e Bancário.",
  },
  {
    id: "familia-sucessoes",
    title: "Família & Sucessões",
    icon: HeartHandshake,
    tag: "Atendimento Humanizado",
    summary:
      "Condução sensível, técnica e discreta em inventários, partilhas judiciais e extrajudiciais, divórcios e planejamento sucessório.",
    details:
      "As questões de família e sucessões exigem equilíbrio entre firmeza jurídica e sensibilidade humana. Atuação estruturada em inventários judiciais e extrajudiciais rápidos em cartório, planejamento sucessório para resguardo do patrimônio familiar, divórcios consensuais e litigiosos, partilha de bens, fixação e revisão de pensão alimentícia e guarda de menores.",
    topics: [
      "Inventários judiciais e extrajudiciais ágeis",
      "Planejamento sucessório e proteção patrimonial",
      "Divórcio consensual e litigioso com partilha",
      "Pensão alimentícia, guarda e convivência",
    ],
    whatsAppText:
      "Olá, Dra. Izabella Rennó. Gostaria de uma consulta especializada em Direito de Família e Sucessões.",
  },
  {
    id: "trabalhista-previdenciario",
    title: "Trabalhista & Previdenciário",
    icon: Briefcase,
    tag: "Rigor & Direitos",
    summary:
      "Resguardo enfático de direitos trabalhistas, consultoria preventiva empresarial e concessão de benefícios e pensões do INSS.",
    details:
      "Defesa dos direitos de profissionais e empresas nas relações de trabalho: rescisão indireta, verbas rescisórias inadimplidas, horas extraordinárias, equiparação salarial e compliance preventivo. No âmbito previdenciário, atuação detalhada para concessão de pensão por morte, aposentadorias especiais, auxílios e planejamento previdenciário minucioso.",
    topics: [
      "Reclamatórias trabalhistas e rescisões contratuais",
      "Concessão de pensão por morte e auxílios do INSS",
      "Planejamento e revisão de aposentadorias",
      "Consultoria jurídica preventiva e contratos de trabalho",
    ],
    whatsAppText:
      "Olá, Dra. Izabella Rennó. Gostaria de uma consulta especializada em Direito Trabalhista e Previdenciário.",
  },
];

const clientReviews = [
  {
    name: "Louise Bianca",
    reviewsCount: "5 avaliações",
    date: "Há 1 ano",
    highlight: "Lê todo o processo com cuidado absoluto",
    content:
      "Dra Izabella é extremamente dedicada ao que faz, uma das únicas - senão a única - que realmente lê todo o processo e escreve todas as suas manifestações com determinação, atenção e cuidado! Só tenho elogios ao escritório, ao atendimento e ao desempenho da Dra! Excepcional! 🙏🏻",
  },
  {
    name: "Henrique Nunes",
    reviewsCount: "1 avaliação",
    date: "Há 3 anos",
    highlight: "Atendimento diferenciado e segurança técnica",
    content:
      "Atendimento diferenciado! Uma grande profissional que transmite confiança para o cliente, pois fala com segurança mostrando que entende do que fala. O investimento vale a pena. Serviço de qualidade e com seriedade! Recomendo!",
  },
  {
    name: "Valter Luiz Arruda",
    reviewsCount: "4 avaliações",
    date: "Há 9 meses",
    highlight: "Séria, dedicada e objetivos alcançados",
    content:
      "Excelente profissional. Séria e dedicada. Foi muito bom tê-la como advogada. Objetivos alcançados.",
  },
  {
    name: "Caique Oliveira",
    reviewsCount: "3 avaliações",
    date: "Há 2 anos",
    highlight: "Conhecimento incrível e muita cordialidade",
    content:
      "Dra Izabella é uma excelente advogada e de um conhecimento incrível. Muito responsável e profissional no que faz. Super dedicada com seus clientes, trata a todos de maneira cordial. Esclarece todas às dúvidas de maneira clara.",
  },
  {
    name: "Izabel Nogueira",
    reviewsCount: "1 avaliação",
    date: "Há 1 ano",
    highlight: "Confiança e empenho ao máximo",
    content:
      "A Doutora Izabella é muito atenciosa e competente, sentimos muita confiança que ela vai se empenhar ao máximo para que consigamos atingir nossos objetivos.",
  },
  {
    name: "Carlos Jader",
    reviewsCount: "5 avaliações",
    date: "Há 2 anos",
    highlight: "Grande conhecimento e cuidado com o cliente",
    content:
      "Excelente advogada! Se preocupa com os clientes, trata todos muito bem! Recomendo, pois além de uma ótima pessoa é uma profissional dedicada e com grande conhecimento!",
  },
  {
    name: "Edson Lima",
    reviewsCount: "9 avaliações",
    date: "Há 3 anos",
    highlight: "Serviço que superou expectativas",
    content:
      "A Drª Izabella é uma excelente profissional. Foi indicada por um amigo meu e prestou um excepcional serviço superando minhas expectativas. Eu a recomendo.",
  },
  {
    name: "Isabela Santos",
    reviewsCount: "1 avaliação",
    date: "Há 4 anos",
    highlight: "Trabalho impecável e correto",
    content:
      "A Dra. é uma excelente advogada, extremamente correta e competente, trabalha de forma impecável. Recomendo demais!",
  },
];

function Heading({
  eyebrow,
  children,
  description,
  light = false,
}: {
  eyebrow: string;
  children: ReactNode;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <p className={light ? "eyebrow-light mb-4" : "eyebrow mb-4"}>{eyebrow}</p>
      <h2
        className={
          light
            ? "font-serif text-4xl leading-[1.07] tracking-[-0.035em] text-white sm:text-5xl lg:text-[3.55rem]"
            : "font-serif text-4xl leading-[1.07] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[3.55rem]"
        }
      >
        {children}
      </h2>
      {description && (
        <p
          className={
            light
              ? "mt-5 max-w-xl text-[15px] leading-7 text-white/70"
              : "mt-5 max-w-xl text-[15px] leading-7 text-ink-soft"
          }
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeArea, setActiveArea] = useState<PracticeArea | null>(null);

  useEffect(() => {
    if (!activeArea) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveArea(null);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [activeArea]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <MotionConfig reducedMotion="user">
      <main className="overflow-hidden bg-ivory text-ink">
        {/* Navigation Bar */}
        <header className="sticky top-0 z-40 border-b border-ink/10 bg-ivory/95 backdrop-blur-xl">
          <div className="mx-auto flex h-[90px] max-w-7xl items-center justify-between gap-5 px-5 sm:h-[105px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label="Izabella Rennó Advocacia — Início"
              onClick={closeMenu}
              className="flex items-center gap-3 transition-opacity hover:opacity-90"
            >
              <Image
                src="/logo.png"
                width={500}
                height={171}
                alt="Izabella Rennó Advocacia — OAB/MG 201.285"
                priority
                className="h-16 w-auto object-contain sm:h-[77px]"
              />
            </a>

            <nav
              aria-label="Navegação principal"
              className="hidden items-center gap-8 lg:flex"
            >
              <a className="nav-link" href="#inicio">
                Início
              </a>
              <a className="nav-link" href="#sobre">
                A Advogada
              </a>
              <a className="nav-link" href="#atuacao">
                Atuação
              </a>
              <a className="nav-link" href="#artigos">
                Conteúdo Jurídico
              </a>
              <a className="nav-link" href="#avaliacoes">
                Avaliações
              </a>
              <a className="nav-link" href="#contato">
                Contato
              </a>
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp da Dra. Izabella Rennó"
                className="grid size-10 place-items-center rounded-full border border-ink/15 text-brand-700 transition-all hover:border-brand-700 hover:bg-brand-50 hover:text-brand-800"
              >
                <WhatsAppIcon size={18} />
              </a>
              <GlowingButton
                href={getWhatsAppUrl()}
                target="_blank"
                size="sm"
                className="rounded-full shadow-sm"
              >
                Consulta no WhatsApp <ArrowUpRight size={14} />
              </GlowingButton>
            </div>

            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="grid size-11 place-items-center rounded-full border border-ink/15 text-ink lg:hidden"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                id="mobile-navigation"
                aria-label="Navegação móvel"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.22 }}
                className="overflow-hidden border-t border-ink/10 bg-ivory px-6 lg:hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1 py-4">
                  {[
                    ["Início", "#inicio"],
                    ["A Advogada", "#sobre"],
                    ["Áreas de Atuação", "#atuacao"],
                    ["Conteúdo Jurídico", "#artigos"],
                    ["Avaliações no Google", "#avaliacoes"],
                    ["Contato & Localização", "#contato"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={closeMenu}
                      className="py-3 text-sm font-medium text-ink-soft hover:text-brand-700"
                    >
                      {label}
                    </a>
                  ))}
                  <a
                    className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-brand-700 px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.13em] text-white shadow-md transition-all hover:bg-brand-800"
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noreferrer"
                    onClick={closeMenu}
                  >
                    <WhatsAppIcon size={16} /> Falar no WhatsApp
                  </a>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        {/* Hero Section */}
        <section
          id="inicio"
          className="relative isolate scroll-mt-24 border-b border-ink/10"
        >
          <div className="pointer-events-none absolute -right-32 top-8 -z-10 size-[36rem] rounded-full bg-brand-200/40 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-10 -z-10 size-[28rem] rounded-full bg-brand-100/50 blur-3xl" />

          <div className="mx-auto grid min-h-[660px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[720px] lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-12 lg:py-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:py-6"
            >
              <motion.p variants={reveal} className="eyebrow mb-6">
                <span className="size-2 rounded-full bg-brand-700" />
                OAB/MG 201.285 · Edifício Santa Clara · Itajubá - MG
              </motion.p>

              <motion.h1
                variants={reveal}
                className="max-w-[760px] font-serif text-[3.2rem] leading-[0.98] tracking-[-0.045em] text-ink sm:text-6xl lg:text-[4.9rem]"
              >
                Alta precisão jurídica com{" "}
                <span className="italic text-brand-700 font-serif">
                  dedicação exclusiva
                </span>{" "}
                a cada causa.
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-7 max-w-xl text-[15px] leading-7 text-ink-soft sm:text-base sm:leading-8"
              >
                Atendimento humanizado, ético e resolutivo conduzido pela Dra.
                Izabella Rennó. Soluções jurídicas seguras nas áreas Cível,
                Contratos, Consumidor & Bancário, Família e Trabalhista —
                presencial em Itajubá e on-line em todo o Brasil.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl()}
                  target="_blank"
                  size="lg"
                  className="rounded-full shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar com a Dra. Izabella
                </GlowingButton>
                <a
                  href="#atuacao"
                  className="group inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold text-ink transition-colors hover:text-brand-700"
                >
                  Conhecer áreas de atuação{" "}
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-ink/10 pt-6 text-xs text-ink-soft"
              >
                <span className="inline-flex items-center gap-2 font-medium">
                  <Award size={16} className="text-brand-700" /> Formação
                  HarvardX em Contratos
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <Star size={15} className="fill-brand-700 text-brand-700" />{" "}
                  4,9 estrelas no Google (50+ avaliações)
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <MapPin size={15} className="text-brand-700" /> Presencial em
                  Itajubá e on-line
                </span>
              </motion.div>
            </motion.div>

            {/* Hero Image Presentation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.95,
                delay: 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mx-auto w-full max-w-[470px] lg:ml-auto lg:mr-3"
            >
              {/* Outer decorative gold border */}
              <div className="absolute -inset-3 -rotate-2 rounded-[46%_46%_5%_5%] border border-brand-700/25 sm:-inset-4" />

              {/* Main portrait */}
              <div className="relative aspect-[0.82] overflow-hidden rounded-[46%_46%_5%_5%] bg-[#ded7d0] shadow-card">
                <Image
                  src="/imgi_8_652076002_18074248049545715_1199206770821780813_n.jpg"
                  alt="Dra. Izabella Rennó Del-Ducca de Souza — Advogada OAB/MG 201.285"
                  fill
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 42vw"
                  className="object-cover object-[50%_15%]"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-brand-950/85 via-brand-950/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3 text-white sm:bottom-8 sm:left-8 sm:right-8">
                  <div>
                    <p className="font-serif text-2xl font-normal tracking-wide">
                      Dra. Izabella Rennó
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-brand-200">
                      OAB/MG 201.285 · Advocacia
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-brand-300/40 bg-brand-950/40 text-brand-200 backdrop-blur-sm">
                    <Scale size={18} />
                  </span>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -left-4 top-[14%] rounded-full border border-brand-700/20 bg-ivory px-4 py-2.5 text-[10px] font-bold tracking-[0.14em] text-brand-800 shadow-card sm:-left-9 sm:px-5">
                ATENDIMENTO MINUCIOSO
              </div>

              <div className="absolute -right-3 bottom-[22%] rounded-2xl border border-brand-700/20 bg-white/95 p-3.5 shadow-card backdrop-blur-md sm:-right-8">
                <div className="flex items-center gap-2 text-brand-700">
                  <Star size={14} className="fill-brand-700" />
                  <span className="font-serif text-lg font-bold text-ink">
                    4,9 / 5,0
                  </span>
                </div>
                <p className="mt-0.5 text-[10px] uppercase tracking-wider text-ink-soft">
                  50+ Avaliações Google
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Highlights Banner */}
        <section
          aria-label="Credenciais e Destaques"
          className="border-b border-ink/10 bg-white/70"
        >
          <div className="mx-auto grid max-w-7xl gap-7 px-5 py-8 sm:grid-cols-4 sm:gap-4 sm:px-8 lg:px-12">
            {[
              ["4,9 ★", "nota máxima com 50+ avaliações no Google"],
              ["HarvardX", "certificação em Direito Contratual"],
              ["OAB/MG", "nº 201.285 com atuação especializada"],
              ["Itajubá & Brasil", "atendimento presencial e 100% on-line"],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={
                  index > 0
                    ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-ink/10"
                    : "flex items-center gap-4 sm:justify-center"
                }
              >
                <span className="font-serif text-3xl font-semibold text-brand-700">
                  {value}
                </span>
                <span className="max-w-[155px] text-[11px] leading-5 text-ink-soft">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Sobre a Dra. Izabella Rennó */}
        <section
          id="sobre"
          className="scroll-mt-24 bg-white py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.94fr_1.06fr] lg:gap-20 lg:px-12">
            {/* Office photo with HarvardX Certificate */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[540px]"
            >
              <div className="relative aspect-[0.95] overflow-hidden rounded-[2px] bg-[#ded7d0] shadow-card">
                <Image
                  src="/imgi_46_669839595_18577841050053593_6416266873760283509_n.jpg"
                  alt="Dra. Izabella Rennó em seu escritório com certificado HarvardX em Contract Law"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover object-[50%_25%]"
                />
              </div>

              {/* Authority card */}
              <div className="absolute -bottom-6 right-3 max-w-[270px] border-l-2 border-brand-700 bg-ivory px-5 py-4 shadow-card sm:-right-6 sm:px-6">
                <div className="flex items-center gap-2 text-brand-700">
                  <Award size={16} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em]">
                    Harvard Law School
                  </p>
                </div>
                <p className="mt-1 font-serif text-lg leading-snug text-ink">
                  Contract Law Certification
                </p>
                <p className="mt-1 text-[11px] leading-4 text-ink-soft">
                  Formação contínua de padrão internacional aplicada à sua
                  defesa.
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l border-t border-brand-700/40 sm:-left-7 sm:-top-7 sm:size-32" />
            </motion.div>

            {/* Text description */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              <motion.p variants={reveal} className="eyebrow">
                TRAJETÓRIA & RIGOR TÉCNICO
              </motion.p>
              <motion.h2
                variants={reveal}
                className="mt-4 max-w-2xl font-serif text-4xl leading-[1.09] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[3.45rem]"
              >
                Uma advocacia que une{" "}
                <span className="italic text-brand-700">
                  profundidade jurídica
                </span>{" "}
                e compromisso pessoal.
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-ink-soft"
              >
                A Dra. Izabella Rennó Del-Ducca de Souza (OAB/MG 201.285)
                consolida sua prática na advocacia sob um princípio
                fundamental: cada causa é única e merece atenção artesanal. Não
                utilizamos petições genéricas nem respostas padronizadas.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-ink-soft"
              >
                Com certificação de excelência internacional pela prestigiada{" "}
                <strong className="text-ink">
                  Harvard Law School (HarvardX em Contract Law)
                </strong>
                , a Dra. Izabella alia rigor analítico, clareza absoluta na
                comunicação e atuação combativa em litígios cíveis, bancários,
                contratuais e familiares.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2"
              >
                <div className="flex items-center gap-2.5 text-xs text-ink font-medium">
                  <CheckCircle2 size={16} className="text-brand-700 shrink-0" />
                  <span>Leitura minuciosa de cada lauda processual</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-ink font-medium">
                  <CheckCircle2 size={16} className="text-brand-700 shrink-0" />
                  <span>Transparência total em cada etapa do caso</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-ink font-medium">
                  <CheckCircle2 size={16} className="text-brand-700 shrink-0" />
                  <span>Escritório sediado no Centro de Itajubá</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-ink font-medium">
                  <CheckCircle2 size={16} className="text-brand-700 shrink-0" />
                  <span>Atendimento on-line em todo o país</span>
                </div>
              </motion.div>

              <motion.div variants={reveal} className="mt-9">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Izabella Rennó. Gostaria de entender como o escritório pode atuar no meu caso."
                  )}
                  target="_blank"
                  size="md"
                  className="rounded-full shadow-md"
                >
                  <WhatsAppIcon size={16} /> Agendar consulta com a Dra.
                  Izabella
                </GlowingButton>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Áreas de Atuação */}
        <section
          id="atuacao"
          className="scroll-mt-24 bg-ivory py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
            >
              <Heading
                eyebrow="ÁREAS DE ATUAÇÃO ESTRATÉGICA"
                description="Atuação técnica aprofundada para proteger seu patrimônio, sua família e seus direitos fundamentais."
              >
                Segurança jurídica e estratégia nos{" "}
                <span className="italic text-brand-700">
                  momentos mais decisivos.
                </span>
              </Heading>
              <p className="max-w-[260px] pb-1 text-xs leading-6 text-ink-soft">
                Toque em uma área para visualizar os temas atendidos e consultar
                diretamente a Dra. Izabella.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={stagger}
              className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4"
            >
              {practiceAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <motion.article
                    key={area.id}
                    variants={reveal}
                    className="group flex min-h-[340px] flex-col border border-ink/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-700/40 hover:shadow-card sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-full bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-700 group-hover:text-white">
                        <Icon size={22} strokeWidth={1.5} />
                      </span>
                      <span className="font-serif text-2xl text-brand-700/50">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-6">
                      <span className="inline-block rounded-full bg-brand-50 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-brand-800">
                        {area.tag}
                      </span>
                      <h3 className="mt-3 font-serif text-[1.65rem] leading-tight text-ink">
                        {area.title}
                      </h3>
                      <p className="mt-3 text-[13px] leading-6 text-ink-soft">
                        {area.summary}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveArea(area)}
                      className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-800 hover:text-brand-700"
                    >
                      Ver detalhes e tópicos{" "}
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover/link:translate-x-1"
                      />
                    </button>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Informação e Análise Jurídica (Posts reais fornecidos) */}
        <section id="artigos" className="bg-[#ede7df] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid items-end gap-7 md:grid-cols-[1fr_auto]">
              <Heading
                eyebrow="ANÁLISE & CONTEÚDO JURÍDICO"
                description="Orientações e esclarecimentos práticos da Dra. Izabella Rennó sobre situações concretas do dia a dia."
              >
                Esclarecimento de direitos sobre{" "}
                <span className="italic text-brand-700">temas reais.</span>
              </Heading>
              <a
                href={getWhatsAppUrl(
                  "Olá, Dra. Izabella. Vi seus conteúdos informativos e gostaria de tirar uma dúvida jurídica."
                )}
                target="_blank"
                rel="noreferrer"
                className="group mb-1 inline-flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-brand-800 hover:text-brand-700"
              >
                Fazer uma pergunta <ArrowUpRight size={15} />
              </a>
            </div>

            <div className="mt-11 grid gap-8 md:grid-cols-2">
              {/* Card 1: Banco / Tempo na fila */}
              <motion.article
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65 }}
                className="group relative flex flex-col overflow-hidden rounded-[2px] border border-brand-700/20 bg-brand-950 text-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-700/40"
              >
                <div className="relative aspect-[1080/840] w-full overflow-hidden bg-[#1a120c]">
                  <Image
                    src="/imgi_37_624713445_18079582943205098_4776356004155678095_n.jpg"
                    alt="Quanto vale seu tempo na fila do banco? — Dra. Izabella Rennó"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-7 sm:p-8">
                  <div>
                    <span className="inline-block rounded-full bg-brand-700/35 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-brand-200">
                      Direito do Consumidor & Bancário
                    </span>
                    <h3 className="mt-4 font-serif text-2xl leading-snug sm:text-3xl text-white">
                      Quanto vale seu tempo na fila do banco?
                    </h3>
                    <p className="mt-3 text-xs leading-6 text-white/70">
                      A espera excessiva e desarrazoada em agências bancárias que
                      ultrapassa os limites legais pode ensejar reparação civil
                      com base na teoria do desvio produtivo do consumidor.
                    </p>
                  </div>
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Izabella. Gostaria de orientações sobre problemas com banco ou tempo abusivo de espera."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-200 transition-colors hover:text-white"
                  >
                    Analisar minha situação <ArrowUpRight size={14} />
                  </a>
                </div>
              </motion.article>

              {/* Card 2: Doação e Ingratidão */}
              <motion.article
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="group relative flex flex-col overflow-hidden rounded-[2px] border border-brand-700/20 bg-[#1f1814] text-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-700/40"
              >
                <div className="relative aspect-[1080/840] w-full overflow-hidden bg-[#18110d]">
                  <Image
                    src="/imgi_40_623014577_18101084674836895_2038662800172169102_n.jpg"
                    alt="Posso cancelar uma doação por ingratidão de quem recebeu? — Dra. Izabella Rennó"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-7 sm:p-8">
                  <div>
                    <span className="inline-block rounded-full bg-brand-700/35 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-brand-200">
                      Direito Civil & Patrimonial
                    </span>
                    <h3 className="mt-4 font-serif text-2xl leading-snug sm:text-3xl text-white">
                      Posso cancelar uma doação por ingratidão de quem recebeu?
                    </h3>
                    <p className="mt-3 text-xs leading-6 text-white/70">
                      O Código Civil resguarda expressamente hipóteses legais em
                      que a doação pode ser revogada quando comprovada conduta
                      grave do donatário ou descumprimento de obrigações.
                    </p>
                  </div>
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Izabella. Gostaria de tirar dúvidas sobre cancelamento de doação ou proteção de bens."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-200 transition-colors hover:text-white"
                  >
                    Analisar minha situação <ArrowUpRight size={14} />
                  </a>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* Nosso Compromisso Ético e Operacional */}
        <section className="relative overflow-hidden bg-brand-950 py-20 text-white sm:py-28 lg:py-32">
          <div className="pointer-events-none absolute -left-28 top-1/4 size-96 rounded-full bg-brand-700/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-1/4 size-96 rounded-full bg-brand-800/15 blur-3xl" />

          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-12">
            <Heading
              eyebrow="NOSSO COMPROMISSO PROFISSIONAL"
              light
              description="A condução de cada demanda com a máxima técnica, transparência irrestrita e respeito ao tempo e aos anseios de quem nos procura."
            >
              A precisão jurídica aliada ao{" "}
              <span className="italic text-brand-200">
                respeito que sua causa merece.
              </span>
            </Heading>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="divide-y divide-white/15"
            >
              {[
                [
                  "01",
                  "Estudo aprofundado de cada linha processual",
                  "Como ressaltam nossos clientes em depoimentos públicos, lemos o processo inteiro com extremo critério e redigimos manifestações minuciosas, sem modelos genéricos.",
                ],
                [
                  "02",
                  "Comunicação direta, transparente e acessível",
                  "Você é mantido informado sobre cada movimentação em linguagem clara, sabendo exatamente quais são as chances, os riscos e as estratégias em curso.",
                ],
                [
                  "03",
                  "Estratégia e combatividade de alto padrão",
                  "Aliamos atualização doutrinária contínua e jurisprudência dos tribunais superiores para defender seus interesses com a máxima firmeza e combatividade.",
                ],
              ].map(([number, title, description]) => (
                <motion.div
                  key={number}
                  variants={reveal}
                  className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-6 sm:py-7"
                >
                  <span className="font-serif text-2xl font-semibold text-brand-300">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-white">{title}</h3>
                    <p className="mt-2 max-w-lg text-[13px] leading-6 text-white/70">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Avaliações no Google (Depoimentos Reais) */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 bg-white py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:items-center">
              <div>
                <Heading
                  eyebrow="PROVA SOCIAL & AVALIAÇÕES REAIS"
                  description="A reputação consolidada da Dra. Izabella Rennó é construída através da dedicação extrema em cada caso. Confira as avaliações no perfil público do Google."
                >
                  Confiança comprovada por quem{" "}
                  <span className="italic text-brand-700">
                    já alcançou seus objetivos.
                  </span>
                </Heading>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 border-b-2 border-brand-700/60 pb-1.5 text-xs font-bold uppercase tracking-[0.14em] text-brand-800 hover:border-brand-700 hover:text-brand-700"
                  >
                    Ver todas as avaliações no Google <ArrowUpRight size={15} />
                  </a>
                </div>

                {/* Rating highlights pills */}
                <div className="mt-9 flex flex-wrap gap-2">
                  {[
                    "Clareza nas explicações",
                    "Extremamente atenciosa",
                    "Profundo conhecimento técnico",
                    "Leitura minuciosa do processo",
                    "Objetivos alcançados",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-ivory px-3.5 py-1.5 text-[11px] font-medium text-ink-soft"
                    >
                      <CheckCircle2 size={13} className="text-brand-700" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Public score box */}
              <div className="relative flex min-h-[260px] flex-col justify-between overflow-hidden border border-brand-700/20 bg-ivory p-8 shadow-card sm:p-10">
                <div className="absolute -right-10 -top-16 size-56 rounded-full border border-brand-700/10" />
                <div className="absolute -right-2 -top-8 size-40 rounded-full border border-brand-700/10" />

                <div className="relative flex items-center justify-between gap-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-800">
                    Avaliações Verificadas · Google Maps
                  </span>
                  <div className="flex gap-1 text-brand-700" aria-label="5 estrelas">
                    {Array.from({ length: 5 }, (_, index) => (
                      <Star
                        key={index}
                        size={17}
                        fill="currentColor"
                        strokeWidth={1}
                      />
                    ))}
                  </div>
                </div>

                <div className="relative mt-8 flex flex-wrap items-end justify-between gap-6">
                  <div>
                    <span className="font-serif text-7xl font-normal leading-none text-ink sm:text-8xl">
                      4,9
                    </span>
                    <p className="mt-2 text-xs font-semibold text-brand-800">
                      Excelente · Classificação Máxima
                    </p>
                  </div>
                  <div className="pb-1 text-right">
                    <p className="font-serif text-3xl font-semibold text-brand-700">
                      50+ avaliações
                    </p>
                    <p className="mt-1 text-xs text-ink-soft">
                      Perfil profissional verificado no Google
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials Grid */}
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {clientReviews.slice(0, 4).map((review) => (
                <div
                  key={review.name}
                  className="flex flex-col justify-between border border-ink/10 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-card"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-0.5 text-brand-700">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            size={13}
                            fill="currentColor"
                            strokeWidth={1}
                          />
                        ))}
                      </div>
                      <span className="text-[10px] text-ink-soft">
                        {review.date}
                      </span>
                    </div>

                    <p className="mt-4 text-xs font-bold text-brand-800">
                      &ldquo;{review.highlight}&rdquo;
                    </p>

                    <p className="mt-2.5 text-[13px] leading-6 text-ink-soft italic">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 border-t border-ink/10 pt-4">
                    <p className="font-serif text-base font-semibold text-ink">
                      {review.name}
                    </p>
                    <p className="text-[10px] uppercase tracking-wider text-ink-soft">
                      {review.reviewsCount} no Google
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Second row of reviews */}
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {clientReviews.slice(4, 8).map((review) => (
                <div
                  key={review.name}
                  className="flex flex-col justify-between border border-ink/10 bg-ivory/60 p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-card"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-0.5 text-brand-700">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            size={13}
                            fill="currentColor"
                            strokeWidth={1}
                          />
                        ))}
                      </div>
                      <span className="text-[10px] text-ink-soft">
                        {review.date}
                      </span>
                    </div>

                    <p className="mt-4 text-xs font-bold text-brand-800">
                      &ldquo;{review.highlight}&rdquo;
                    </p>

                    <p className="mt-2.5 text-[13px] leading-6 text-ink-soft italic">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 border-t border-ink/10 pt-4">
                    <p className="font-serif text-base font-semibold text-ink">
                      {review.name}
                    </p>
                    <p className="text-[10px] uppercase tracking-wider text-ink-soft">
                      {review.reviewsCount} no Google
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contato & Localização */}
        <section
          id="contato"
          className="scroll-mt-24 bg-ivory py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                eyebrow="CONTATO & LOCALIZAÇÃO"
                description="Agende sua consulta presencial no coração de Itajubá ou realize seu atendimento de forma totalmente on-line com total segurança."
              >
                Estamos prontos para{" "}
                <span className="italic text-brand-700">ouvir sua história.</span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl()}
                  target="_blank"
                  size="lg"
                  className="rounded-full shadow-md"
                >
                  <WhatsAppIcon size={17} /> Iniciar conversa no WhatsApp
                </GlowingButton>
                <p className="text-[11px] leading-5 text-ink-soft">
                  Atendimento direto e retorno com prontidão:{" "}
                  <strong className="text-ink">{PHONE_DISPLAY}</strong>.
                </p>
              </div>

              <div className="mt-10 space-y-4 text-xs text-ink-soft">
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-brand-700" />
                  <span>Segunda a Sexta: 09h às 18h (sob agendamento)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-brand-700" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="hover:text-brand-700 transition-colors"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-brand-700" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="hover:text-brand-700 transition-colors"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>
              </div>
            </div>

            {/* Address & Office Card */}
            <div className="relative overflow-hidden border border-ink/10 bg-white p-7 sm:p-10 shadow-card">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-brand-700" />

              <div className="flex items-center gap-4">
                <span className="grid size-12 place-items-center rounded-full bg-brand-50 text-brand-700">
                  <MapPin size={22} strokeWidth={1.6} />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-700">
                    Sede do Escritório
                  </p>
                  <p className="mt-1 font-serif text-2xl text-ink">
                    Itajubá · Minas Gerais
                  </p>
                </div>
              </div>

              <address className="mt-7 max-w-md not-italic text-[14px] leading-7 text-ink-soft">
                <strong className="text-ink font-semibold">
                  Edifício Santa Clara
                </strong>
                <br />
                Rua Cel. Francisco Braz, 185 - Sala 205
                <br />
                Centro, Itajubá - MG, CEP 37500-005, Brasil
              </address>

              <div className="my-7 h-px bg-ink/10" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-ink-soft">
                  Atendimento presencial no Centro e on-line em todo o Brasil
                </p>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-ink transition-colors hover:border-brand-700 hover:bg-brand-50 hover:text-brand-800"
                >
                  Abrir no Google Maps <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Footer CTA Strip */}
        <section className="bg-brand-700 px-5 py-14 text-white sm:px-8 sm:py-16 lg:px-12 shadow-inner">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-200">
                IZABELLA RENNÓ ADVOCACIA · OAB/MG 201.285
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight sm:text-4xl text-white">
                Pronto para defender seus direitos com quem realmente se dedica
                à sua causa?
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá, Dra. Izabella. Gostaria de agendar uma consulta inicial para avaliar meu caso."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-white px-7 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-brand-900 shadow-md transition-all hover:-translate-y-0.5 hover:bg-brand-50 hover:shadow-lg"
            >
              <WhatsAppIcon size={17} /> Falar no WhatsApp <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-brand-950 px-5 py-14 text-white sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <div className="inline-flex rounded-sm bg-white/95 p-3.5 shadow-md">
                <Image
                  src="/logo.png"
                  width={450}
                  height={154}
                  alt="Izabella Rennó Advocacia"
                  className="h-16 w-auto object-contain"
                />
              </div>
              <p className="mt-5 max-w-xs text-xs leading-6 text-white/65">
                Advocacia estratégica, rigor técnico e dedicação exclusiva. Sede
                no Centro de Itajubá - MG e atendimento digital em todo o Brasil.
              </p>
              <p className="mt-3 text-[11px] font-semibold text-brand-300">
                Inscrição OAB/MG 201.285
              </p>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-300">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-white/70">
                <a className="footer-link" href="#inicio">
                  Início
                </a>
                <a className="footer-link" href="#sobre">
                  A Advogada & Credenciais
                </a>
                <a className="footer-link" href="#atuacao">
                  Áreas de Atuação
                </a>
                <a className="footer-link" href="#artigos">
                  Conteúdos Jurídicos
                </a>
                <a className="footer-link" href="#avaliacoes">
                  Avaliações no Google
                </a>
                <a className="footer-link" href="#contato">
                  Contato & Localização
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-300">
                Contato Direto
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-white/70">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2"
                >
                  <WhatsAppIcon size={15} /> WhatsApp: {PHONE_DISPLAY}
                </a>
                <a
                  href={`mailto:${EMAIL_CONTACT}`}
                  className="footer-link inline-flex items-center gap-2"
                >
                  <Mail size={15} className="shrink-0" /> {EMAIL_CONTACT}
                </a>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-start gap-2"
                >
                  <MapPin size={15} className="mt-0.5 shrink-0" />
                  <span>Ed. Santa Clara · R. Cel. Francisco Braz, 185 - Sl 205, Itajubá - MG</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/15 pt-6 text-[10px] text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Dra. Izabella Rennó Del-Ducca de Souza (OAB/MG 201.285). Todos os direitos reservados.
            </p>
            <p>
              Conteúdo meramente informativo, em estrita conformidade com o Código de Ética e Disciplina da OAB.
            </p>
          </div>
        </footer>

        {/* Modal de Detalhes da Área de Atuação */}
        <AnimatePresence>
          {activeArea && (
            <motion.div
              className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArea(null)}
            >
              <motion.section
                role="dialog"
                aria-modal="true"
                aria-labelledby="area-dialog-title"
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.99 }}
                transition={{ duration: 0.24 }}
                onClick={(event) => event.stopPropagation()}
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-2xl border border-ink/10 bg-ivory p-7 shadow-2xl sm:max-w-xl sm:rounded-sm sm:p-10"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da área"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-full border border-ink/15 text-ink transition-colors hover:border-brand-700 hover:text-brand-700"
                >
                  <X size={18} />
                </button>

                <p className="eyebrow">ÁREA DE ATUAÇÃO ESTRATÉGICA</p>

                <h2
                  id="area-dialog-title"
                  className="mt-4 max-w-sm pr-10 font-serif text-3xl leading-tight text-ink sm:text-4xl"
                >
                  {activeArea.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-ink-soft">
                  {activeArea.details}
                </p>

                <div className="mt-6 border-t border-ink/10 pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-800">
                    Principais temas e demandas atendidas:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-sm text-ink"
                      >
                        <span className="size-2 rounded-full bg-brand-700 shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3">
                  <GlowingButton
                    href={getWhatsAppUrl(activeArea.whatsAppText)}
                    target="_blank"
                    size="md"
                    className="rounded-full shadow-md"
                  >
                    <WhatsAppIcon size={16} /> Consultar sobre esta área
                  </GlowingButton>
                  <button
                    type="button"
                    onClick={() => setActiveArea(null)}
                    className="px-5 py-3 text-xs font-semibold text-ink-soft hover:text-ink transition-colors"
                  >
                    Fechar
                  </button>
                </div>
              </motion.section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </MotionConfig>
  );
}
