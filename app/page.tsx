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
  Mail,
  MapPin,
  Menu,
  Phone,
  Scale,
  ShieldCheck,
  Star,
  X,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5535998609735";
const PHONE_DISPLAY = "(35) 99860-9735";
const EMAIL_CONTACT = "contato@giovanafranklin.adv.br";
const OAB_NUMBER = "OAB/MG 208.554";
const INSTAGRAM_URL = "https://www.instagram.com/advocacia.giovanafranklin/";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Advocacia+Giovana+Franklin+Av.+Arlindo+Figueiredo+756+B+Passos+MG";

function getWhatsAppUrl(message?: string) {
  const defaultText =
    "Olá, Dra. Giovana Franklin. Gostaria de solicitar uma consulta jurídica especializada.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message || defaultText
  )}`;
}

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

function InstagramIcon({
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
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
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
    id: "previdenciario-inss",
    title: "Direito Previdenciário",
    icon: Award,
    tag: "Benefícios & INSS",
    summary:
      "Concessão célere e revisão de aposentadorias, benefícios por incapacidade, BPC/LOAS, pensão por morte e recuperação de descontos indevidos.",
    details:
      "A conquista e a manutenção do seu benefício previdenciário exigem rigor analítico e combatividade perante as exigências do INSS. Atuamos administrativamente e judicialmente na concessão de aposentadorias (idade, tempo de contribuição, especial e rural), benefícios por incapacidade, pensão por morte, reversão de indeferimentos e no cancelamento e restituição em dobro de descontos indevidos e empréstimos fraudulentos que oneram sua renda.",
    topics: [
      "Concessão de aposentadorias (Idade, Tempo de Contribuição, Especial e Rural)",
      "Cancelamento e restituição de descontos indevidos na aposentadoria (RMC e consignados)",
      "Benefícios por incapacidade temporária e permanente (Auxílio-doença e Aposentadoria por Invalidez)",
      "BPC/LOAS para idosos em vulnerabilidade e pessoas com deficiência",
      "Pensão por morte, auxílio-reclusão e recursos contra negativas do INSS",
      "Revisões de benefícios concedidos para aumento da renda mensal",
    ],
    whatsAppText:
      "Olá, Dra. Giovana Franklin. Gostaria de uma consulta especializada em Direito Previdenciário e Benefícios do INSS.",
  },
  {
    id: "planejamento-previdenciario",
    title: "Planejamento Previdenciário",
    icon: ShieldCheck,
    tag: "Estratégia & Futuro",
    summary:
      "Estudo aprofundado do histórico contributivo para garantir a aposentadoria no momento exato e com o maior valor financeiro possível.",
    details:
      "Após as profundas mudanças trazidas pela Reforma da Previdência, dar entrada na aposentadoria sem um planejamento prévio pode custar dezenas de milhares de reais ao longo da vida. Analisamos detalhadamente todo o seu extrato CNIS, corrigimos pendências cadastrais, simulamos as regras de transição mais vantajosas e orientamos o recolhimento futuro ideal para maximizar sua Renda Mensal Inicial.",
    topics: [
      "Auditoria minuciosa do CNIS e retificação de vínculos e remunerações pendentes",
      "Simulação e cálculo comparativo de todas as regras de transição da Reforma",
      "Projeção precisa da Renda Mensal Inicial (RMI) em múltiplos cenários",
      "Cálculo de custo-benefício de contribuições para evitar pagamentos desnecessários",
      "Planejamento sob medida para autônomos, empresários, profissionais liberais e celetistas",
      "Definição da melhor data para solicitar o benefício no teto ideal",
    ],
    whatsAppText:
      "Olá, Dra. Giovana Franklin. Gostaria de agendar um Planejamento Previdenciário completo para o meu caso.",
  },
  {
    id: "direito-trabalho",
    title: "Direito do Trabalho",
    icon: Briefcase,
    tag: "Combatividade & Direitos",
    summary:
      "Defesa firme dos direitos do trabalhador em rescisões indiretas, reversão de justas causas, horas extras e reparação por assédio.",
    details:
      "Reconhecida por clientes pela bravura e dedicação em causas trabalhistas, a atuação da Dra. Giovana Franklin assegura que nenhuma violação cometida pelo empregador passe despercebida. Protegemos trabalhadores em pedidos de rescisão indireta (Art. 483 da CLT), cobrança de horas extraordinárias, adicionais de insalubridade e periculosidade, verbas rescisórias retidas e indenizações por assédio moral e doenças ocupacionais.",
    topics: [
      "Rescisão indireta por falta grave do empregador (Art. 483 da CLT) com saque integral do FGTS + 40%",
      "Reversão de demissão por justa causa indevida para dispensa sem justa causa",
      "Cobrança de horas extras, intervalos interjornada/intrajornada e adicional noturno",
      "Adicionais legais de insalubridade, periculosidade e equiparação salarial",
      "Indenizações por assédio moral, perseguição e ambiente de trabalho degradante",
      "Assessoria preventiva e compliance trabalhista para empresas e empregadores",
    ],
    whatsAppText:
      "Olá, Dra. Giovana Franklin. Gostaria de uma consulta jurídica especializada em Direito do Trabalho.",
  },
  {
    id: "civel-contratos",
    title: "Direito Cível & Contratos",
    icon: Scale,
    tag: "Rigor & Proteção Patrimonial",
    summary:
      "Estruturação e auditoria de contratos, cobrança e execução de créditos, responsabilidade civil e soluções patrimoniais seguras.",
    details:
      "Atuação profunda na prevenção de riscos e na solução assertiva de litígios civis e contratuais. Da elaboração técnica e revisão de contratos civis e comerciais à cobrança judicial de títulos, ações indenizatórias por danos materiais e morais, resolução contratual com perdas e danos e defesa em disputas possessórias e imobiliárias, assegurando a solidez do seu patrimônio.",
    topics: [
      "Elaboração, auditoria de riscos e blindagem técnica de instrumentos contratuais",
      "Ações de cobrança, execução de títulos judiciais e extrajudiciais e recuperação de crédito",
      "Responsabilidade civil e ações indenizatórias por danos morais e materiais",
      "Resolução e rescisão contratual com apuração de perdas e danos e cláusulas penais",
      "Direito imobiliário, contratos de locação, reintegração de posse e usucapião",
      "Defesa do consumidor contra abusos bancários e cobranças irregulares",
    ],
    whatsAppText:
      "Olá, Dra. Giovana Franklin. Gostaria de uma consulta jurídica em Direito Cível e Contratos.",
  },
  {
    id: "familia-sucessoes",
    title: "Cível, Família & Sucessões",
    icon: HeartHandshake,
    tag: "Acolhimento & Celeridade",
    summary:
      "Condução sensível, rápida e resolutiva em inventários extrajudiciais em cartório, divórcios, partilhas e planejamento sucessório.",
    details:
      "Questões familiares e sucessórias exigem delicadeza no trato humano combinada com absoluto domínio técnico. Atuamos com extrema celeridade na realização de inventários em cartório de notas ou judiciais, partilha de patrimônio, divórcios consensuais e litigiosos, guarda de menores, fixação e revisão de alimentos e planejamento sucessório para preservação e perpetuação de bens da família.",
    topics: [
      "Inventários extrajudiciais ágeis em cartório de notas e inventários judiciais",
      "Divórcio consensual e litigioso com partilha estratégica de bens",
      "Fixação, revisão, exoneração e execução de pensão alimentícia em atraso",
      "Regulamentação e modificação de guarda e regime de convivência familiar",
      "Planejamento sucessório, testamentos e doações com cláusulas protetivas",
      "Reconhecimento e dissolução de união estável com divisão de bens",
    ],
    whatsAppText:
      "Olá, Dra. Giovana Franklin. Gostaria de uma consulta especializada em Direito de Família e Sucessões.",
  },
];

const clientReviews = [
  {
    name: "Sabrina Faria",
    reviewsCount: "3 avaliações",
    date: "Há 1 ano",
    highlight: "Trabalha com bravura e maestria, ótima defensora dos direitos",
    content:
      "Tenho uma admiração muito grande pelo trabalho da Dra Giovana e indico ela sempre! Pois sempre obtive sucesso nas causas das quais ela sempre esteve à frente! Trabalha com bravura e maestria, uma ótima defensora dos direitos humanos!!",
  },
  {
    name: "Cesar Piantino",
    reviewsCount: "3 avaliações",
    date: "Há 3 anos",
    highlight: "Solucionou meus problemas com rapidez e comprometimento",
    content:
      "Ótimo atendimento. Fui muito bem recebido pela Dra. Giovana, que solucionou meus problemas com rapidez e comprometimento! Indico para todos.",
  },
  {
    name: "Ana Rodrigues",
    reviewsCount: "1 avaliação",
    date: "Há 2 anos",
    highlight: "Resolveu o desconto indevido na minha aposentadoria de forma rápida",
    content:
      "Fui muito bem atendida. Dra Giovana resolveu a questão do desconto indevido na minha aposentadoria. De forma rápida e muito comprometida.",
  },
  {
    name: "Gabriela Bárbara",
    reviewsCount: "1 avaliação",
    date: "Há 1 ano",
    highlight: "Super atenciosa, realmente vai atrás dos nossos direitos",
    content:
      "Advogada Giovana excelente! Super atenciosa, realmente vai atrás dos nossos direitos. Atendimento ótimo!",
  },
  {
    name: "Maria Luiza Machado Fernandes",
    reviewsCount: "3 avaliações",
    date: "Há 2 anos",
    highlight: "Atendimento impecável da Dra. Giovana. Recomendo de olhos fechados",
    content:
      "Excelente profissional! Atendimento impecável da Dra. Giovana. Recomendo de olhos fechados.",
  },
  {
    name: "Projeta Imóveis",
    reviewsCount: "6 avaliações",
    date: "Há 3 anos",
    highlight: "Profissional exemplar, dedicação em todos os momentos",
    content:
      "Profissional exemplar. Dedicação em todos os momentos que precisei, êxito em alguns e outros ainda em andamento que com certeza teremos vitória!",
  },
  {
    name: "Lígia Ulhôa",
    reviewsCount: "12 avaliações",
    date: "Há 3 anos",
    highlight: "Atenciosa, pontual, muito inteligente, indico demais",
    content:
      "Profissional excelente, atenciosa, pontual, muito inteligente, indico demais.",
  },
  {
    name: "Dinamar Oliveira",
    reviewsCount: "1 avaliação",
    date: "Há 2 anos",
    highlight: "Muito honesta, trabalha com dedicação e amor",
    content:
      "Excelente advogada, muito honesta, trabalha com dedicação e amor. Fui muito bem atendida, excelente advogada.",
  },
  {
    name: "Ana Carolina Ribeiro",
    reviewsCount: "3 avaliações",
    date: "Há 3 anos",
    highlight: "Advogada extremamente atenciosa e competente",
    content:
      "Excelente escritório, advogada extremamente atenciosa e competente. Indico de olhos fechados!",
  },
  {
    name: "Idelma Costa",
    reviewsCount: "2 avaliações",
    date: "Há 1 ano",
    highlight: "Profissional educada, competente, super indico",
    content:
      "Profissional educada, competente, sem muita formalidade, super indico.",
  },
  {
    name: "Douvane Oliveira",
    reviewsCount: "1 avaliação",
    date: "Há 3 anos",
    highlight: "Excelente profissional e muito honesta",
    content:
      "Excelente profissional super indico, muito honesta, super indico.",
  },
  {
    name: "Elaine Ribeiro De Melo",
    reviewsCount: "3 avaliações",
    date: "Há 9 meses",
    highlight: "Maravilhosa, Giovana é muito competente no que faz",
    content:
      "Maravilhosa, Giovana é muito competente no que faz.",
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
        <header className="sticky top-0 z-40 border-b border-white/10 bg-black/95 backdrop-blur-xl">
          <div className="mx-auto flex h-[95px] max-w-7xl items-center justify-between gap-5 px-5 sm:h-[110px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label="Advocacia Giovana Franklin — Início"
              onClick={closeMenu}
              className="flex items-center gap-3 transition-opacity hover:opacity-90"
            >
              <Image
                src="/logo-light.png"
                width={500}
                height={165}
                alt="Advocacia Giovana Franklin — OAB/MG 208.554"
                priority
                className="h-14 w-auto object-contain sm:h-[72px]"
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
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram da Advocacia Giovana Franklin"
                className="grid size-10 place-items-center rounded-full border border-white/20 text-brand-300 transition-all hover:border-brand-400 hover:bg-white/10 hover:text-white"
              >
                <InstagramIcon size={17} />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp da Dra. Giovana Franklin"
                className="grid size-10 place-items-center rounded-full border border-white/20 text-brand-300 transition-all hover:border-brand-400 hover:bg-white/10 hover:text-white"
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
              className="grid size-11 place-items-center rounded-full border border-white/20 text-white lg:hidden"
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
                className="overflow-hidden border-t border-white/10 bg-black px-6 lg:hidden"
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
                      className="py-3 text-sm font-medium text-white/80 hover:text-brand-300"
                    >
                      {label}
                    </a>
                  ))}
                  <div className="mt-3 flex flex-col gap-2">
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-700 px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.13em] text-white shadow-md transition-all hover:bg-brand-800"
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <WhatsAppIcon size={16} /> Falar no WhatsApp
                    </a>
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-xs font-semibold text-white/90 hover:bg-white/10"
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <InstagramIcon size={15} /> Siga no Instagram
                    </a>
                  </div>
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
                OAB/MG 208.554 · Av. Arlindo Figueiredo · Passos - MG
              </motion.p>

              <motion.h1
                variants={reveal}
                className="max-w-[760px] font-serif text-[3.1rem] leading-[0.98] tracking-[-0.045em] text-ink sm:text-6xl lg:text-[4.75rem]"
              >
                Excelência jurídica e atuação combativa com{" "}
                <span className="italic text-brand-700 font-serif">
                  dedicação artesanal
                </span>{" "}
                a cada causa.
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-7 max-w-xl text-[15px] leading-7 text-ink-soft sm:text-base sm:leading-8"
              >
                Atendimento acolhedor, ético e resolutivo conduzido pela Dra.
                Giovana Franklin. Soluções jurídicas estratégicas em Direito
                Previdenciário, Planejamento Previdenciário, Direito do Trabalho,
                Cível e Família — sede estruturada em Passos/MG e atendimento
                digital seguro em todo o Brasil.
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
                  <WhatsAppIcon size={16} /> Falar com a Dra. Giovana
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
                  <Star size={15} className="fill-brand-700 text-brand-700" />{" "}
                  4,9 estrelas no Google (43 avaliações)
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <ShieldCheck size={16} className="text-brand-700" /> Inscrição
                  OAB/MG 208.554
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <MapPin size={15} className="text-brand-700" /> Presencial em
                  Passos - MG e on-line
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
              className="relative mx-auto w-full max-w-[480px] lg:ml-auto lg:mr-3"
            >
              {/* Luxury ambient backlight aura */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-brand-700/20 via-brand-400/10 to-transparent blur-2xl -z-10" />

              {/* Architectural gold outer hairline frame */}
              <div className="absolute -inset-2.5 rounded-2xl border border-brand-700/30 pointer-events-none" />

              {/* Main portrait executive card */}
              <div className="relative aspect-[0.76] overflow-hidden rounded-2xl bg-[#14110e] shadow-2xl ring-1 ring-black/10">
                <Image
                  src="/giovana-franklin-hero.jpg"
                  alt="Dra. Giovana Franklin — Advogada OAB/MG 208.554"
                  fill
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 42vw"
                  className="object-cover object-[50%_15%]"
                />

                {/* Gradient vignette on bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* Executive name overlay */}
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3 text-white sm:bottom-7 sm:left-7 sm:right-7">
                  <div>
                    <p className="font-serif text-2xl font-normal tracking-wide text-white">
                      Dra. Giovana Franklin
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-brand-300">
                      OAB/MG 208.554 · Advocacia
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-brand-300/40 bg-black/60 text-brand-300 backdrop-blur-md">
                    <Scale size={18} />
                  </span>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -left-3 top-[10%] rounded-full border border-brand-700/30 bg-ivory/95 px-4 py-2.5 text-[10px] font-bold tracking-[0.14em] text-brand-800 shadow-xl backdrop-blur-md sm:-left-6 sm:px-5">
                ATENDIMENTO ARTESANAL
              </div>

              <div className="absolute -right-3 bottom-[18%] rounded-2xl border border-brand-700/30 bg-white/95 p-4 shadow-2xl backdrop-blur-md sm:-right-6">
                <div className="flex items-center gap-2 text-brand-700">
                  <Star size={15} className="fill-brand-700" />
                  <span className="font-serif text-lg font-bold text-ink">
                    4,9 / 5,0
                  </span>
                </div>
                <p className="mt-0.5 text-[10px] uppercase tracking-wider text-ink-soft">
                  43 Avaliações Google
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
              ["4,9 ★", "nota de excelência com 43 avaliações no Google"],
              ["OAB/MG", "nº 208.554 com atuação combativa"],
              ["Passos - MG", "Av. Arlindo Figueiredo, 756 - B"],
              ["Brasil Inteiro", "atendimento presencial e 100% on-line"],
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

        {/* Sobre a Dra. Giovana Franklin */}
        <section
          id="sobre"
          className="scroll-mt-24 bg-white py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.94fr_1.06fr] lg:gap-20 lg:px-12">
            {/* OAB Institutional Photo Presentation */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[540px]"
            >
              <div className="relative aspect-[0.93] overflow-hidden rounded-[2px] bg-[#d9d3cb] shadow-card">
                <Image
                  src="/giovana-franklin-oab.jpg"
                  alt="Dra. Giovana Franklin — OAB Minas Gerais Subseção Passos"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover object-[50%_15%]"
                />
              </div>

              {/* Authority card */}
              <div className="absolute -bottom-6 right-3 max-w-[290px] border-l-2 border-brand-700 bg-ivory px-5 py-4 shadow-card sm:-right-6 sm:px-6">
                <div className="flex items-center gap-2 text-brand-700">
                  <ShieldCheck size={16} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em]">
                    OAB Minas Gerais
                  </p>
                </div>
                <p className="mt-1 font-serif text-lg leading-snug text-ink">
                  51ª Subseção Passos
                </p>
                <p className="mt-1 text-[11px] leading-4 text-ink-soft">
                  Presença institucional ativa, compromisso ético e atuação
                  firme na defesa intransigente dos direitos de cada cliente.
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
                TRAJETÓRIA & COMPROMISSO COM A DEFESA
              </motion.p>
              <motion.h2
                variants={reveal}
                className="mt-4 max-w-2xl font-serif text-4xl leading-[1.09] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[3.45rem]"
              >
                Uma advocacia que une{" "}
                <span className="italic text-brand-700">
                  bravura técnica
                </span>{" "}
                e acolhimento humano.
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-ink-soft"
              >
                A <strong className="text-ink">Dra. Giovana Franklin (OAB/MG 208.554)</strong>{" "}
                consolida sua trajetória na advocacia alicerçada em valores
                inegociáveis: estudo minucioso de cada detalhe do processo, combate
                leal e firme pelos direitos do constituinte e atendimento empático
                sem formalismos desnecessários.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-ink-soft"
              >
                Elogiada por seus clientes pela clareza, honestidade e rapidez
                na solução de conflitos — desde complexas concessões de
                aposentadoria e cessação de descontos indevidos até disputas
                trabalhistas, contratos civis e inventários —, a Dra. Giovana
                trata cada demanda com dedicação artesanal, sem petições
                massificadas ou respostas genéricas.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2"
              >
                <div className="flex items-center gap-2.5 text-xs text-ink font-medium">
                  <CheckCircle2 size={16} className="text-brand-700 shrink-0" />
                  <span>Análise detalhada de cada linha dos autos processuais</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-ink font-medium">
                  <CheckCircle2 size={16} className="text-brand-700 shrink-0" />
                  <span>Transparência total e comunicação direta pelo WhatsApp</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-ink font-medium">
                  <CheckCircle2 size={16} className="text-brand-700 shrink-0" />
                  <span>Escritório estruturado na Av. Arlindo Figueiredo em Passos</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-ink font-medium">
                  <CheckCircle2 size={16} className="text-brand-700 shrink-0" />
                  <span>Atendimento on-line rápido e seguro em todo o Brasil</span>
                </div>
              </motion.div>

              <motion.div variants={reveal} className="mt-9">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Giovana Franklin. Gostaria de entender como o escritório pode atuar no meu caso."
                  )}
                  target="_blank"
                  size="md"
                  className="rounded-full shadow-md"
                >
                  <WhatsAppIcon size={16} /> Agendar consulta com a Dra. Giovana
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
                description="Atuação técnica aprofundada para proteger seus benefícios, seu trabalho, seu patrimônio e sua família."
              >
                Segurança jurídica e combatividade nos{" "}
                <span className="italic text-brand-700">
                  momentos mais decisivos.
                </span>
              </Heading>
              <p className="max-w-[260px] pb-1 text-xs leading-6 text-ink-soft">
                Toque em uma área para visualizar os temas atendidos e consultar
                diretamente a Dra. Giovana.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={stagger}
              className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
            >
              {practiceAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <motion.article
                    key={area.id}
                    variants={reveal}
                    className="group flex min-h-[350px] flex-col border border-ink/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-700/40 hover:shadow-card sm:p-7"
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
                      <h3 className="mt-3 font-serif text-[1.55rem] leading-tight text-ink">
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

        {/* Informação e Análise Jurídica */}
        <section id="artigos" className="bg-[#eee8e0] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid items-end gap-7 md:grid-cols-[1fr_auto]">
              <Heading
                eyebrow="ANÁLISE & CONTEÚDO JURÍDICO"
                description="Orientações e esclarecimentos práticos da Dra. Giovana Franklin sobre direitos previdenciários, civis e trabalhistas."
              >
                Esclarecimento de direitos sobre{" "}
                <span className="italic text-brand-700">situações reais.</span>
              </Heading>
              <a
                href={getWhatsAppUrl(
                  "Olá, Dra. Giovana. Vi seus conteúdos informativos e gostaria de tirar uma dúvida jurídica sobre meu caso."
                )}
                target="_blank"
                rel="noreferrer"
                className="group mb-1 inline-flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-brand-800 hover:text-brand-700"
              >
                Fazer uma pergunta <ArrowUpRight size={15} />
              </a>
            </div>

            <div className="mt-11 grid gap-8 md:grid-cols-2">
              {/* Card 1: Direito Previdenciário / Descontos Indevidos */}
              <motion.article
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65 }}
                className="group relative flex flex-col overflow-hidden rounded-[2px] border border-brand-700/20 bg-brand-950 text-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-700/40"
              >
                <div className="relative aspect-[1080/700] w-full overflow-hidden bg-[#18120d]">
                  <Image
                    src="/artigo-previdenciario.webp"
                    alt="Direito Previdenciário e INSS — Dra. Giovana Franklin"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-7 sm:p-8">
                  <div>
                    <span className="inline-block rounded-full bg-brand-700/35 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-brand-200">
                      Direito Previdenciário & INSS
                    </span>
                    <h3 className="mt-4 font-serif text-2xl leading-snug sm:text-3xl text-white">
                      Desconto Indevido na Aposentadoria: Como cessar cobranças ilegais e recuperar valores no INSS
                    </h3>
                    <p className="mt-3 text-xs leading-6 text-white/70">
                      Mensalidades de associações não autorizadas, reservas de margem (RMC) e empréstimos consignados fraudulentos têm comprometido o benefício de inúmeros aposentados. É possível requerer a cessação imediata dos descontos, restituição dos valores cobrados em dobro e indenização por danos morais.
                    </p>
                  </div>
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Giovana. Notei um desconto estranho na minha aposentadoria/benefício do INSS e gostaria de ajuda para verificar."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-200 transition-colors hover:text-white"
                  >
                    Analisar meu extrato de benefício <ArrowUpRight size={14} />
                  </a>
                </div>
              </motion.article>

              {/* Card 2: Direito Civil / Inventário em Cartório */}
              <motion.article
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="group relative flex flex-col overflow-hidden rounded-[2px] border border-brand-700/20 bg-[#1b1511] text-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-700/40"
              >
                <div className="relative aspect-[1080/700] w-full overflow-hidden bg-[#16100c]">
                  <Image
                    src="/artigo-civil-contratos.webp"
                    alt="Direito Civil, Contratos e Família — Dra. Giovana Franklin"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-7 sm:p-8">
                  <div>
                    <span className="inline-block rounded-full bg-brand-700/35 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-brand-200">
                      Direito Civil & Família
                    </span>
                    <h3 className="mt-4 font-serif text-2xl leading-snug sm:text-3xl text-white">
                      Inventário em Cartório: Como realizar a partilha de bens com agilidade e economia tributária
                    </h3>
                    <p className="mt-3 text-xs leading-6 text-white/70">
                      Havendo acordo entre herdeiros capazes, o inventário extrajudicial em cartório de notas soluciona a transferência do patrimônio em semanas, evitando litígios judiciais prolongados e possibilitando a adequada apuração tributária do ITCMD com segurança documental.
                    </p>
                  </div>
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Giovana. Gostaria de orientações sobre inventário em cartório ou partilha de bens da família."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-200 transition-colors hover:text-white"
                  >
                    Analisar situação sucessória <ArrowUpRight size={14} />
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
              description="A condução de cada demanda com a máxima técnica, transparência irrestrita e respeito absoluto ao tempo e aos direitos de quem nos procura."
            >
              A precisão jurídica aliada à{" "}
              <span className="italic text-brand-200">
                bravura que sua causa merece.
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
                  "Estudo aprofundado e artesanal de cada caso",
                  "Como enfatizam nossos clientes em avaliações públicas, analisamos os autos minuciosamente e redigimos peças sob medida para a sua realidade, sem modelos genéricos ou automáticos.",
                ],
                [
                  "02",
                  "Comunicação direta, transparente e acessível",
                  "Você é informado sobre cada andamento em linguagem clara e objetiva, compreendendo com exatidão as probabilidades, os prazos e a estratégia jurídica adotada.",
                ],
                [
                  "03",
                  "Combatividade e maestria perante a Justiça",
                  "Aliamos atualização jurídica constante aos precedentes mais recentes dos tribunais para resguardar seus direitos com firmeza, ética e determinação inabalável.",
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
                  description="A reputação consolidada da Dra. Giovana Franklin é construída na dedicação minuciosa a cada cliente. Veja o que dizem aqueles que confiaram suas causas ao escritório no Google."
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
                    "Bravura e maestria",
                    "Extremamente atenciosa",
                    "Rapidez e comprometimento",
                    "Honestidade inegociável",
                    "Competência e dedicação",
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
                      43 avaliações
                    </p>
                    <p className="mt-1 text-xs text-ink-soft">
                      Perfil profissional verificado no Google
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials Grid - Row 1 */}
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

            {/* Testimonials Grid - Row 2 */}
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

            {/* Testimonials Grid - Row 3 */}
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {clientReviews.slice(8, 12).map((review) => (
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
                description="Agende sua consulta presencial em nosso escritório na Av. Arlindo Figueiredo em Passos ou realize seu atendimento de forma 100% on-line com total sigilo e comodidade."
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
                  <span>Segunda a Sexta: 08h30 às 18h (sob agendamento prévio)</span>
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
                <div className="flex items-center gap-3">
                  <InstagramIcon size={16} className="text-brand-700" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-brand-700 transition-colors"
                  >
                    @advocacia.giovanafranklin
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
                    Passos · Minas Gerais
                  </p>
                </div>
              </div>

              <address className="mt-7 max-w-md not-italic text-[14px] leading-7 text-ink-soft">
                <strong className="text-ink font-semibold">
                  Advocacia Giovana Franklin
                </strong>
                <br />
                Av. Arlindo Figueiredo, 756 - B
                <br />
                Bairro São Francisco, Passos - MG, CEP 37903-662, Brasil
              </address>

              <div className="my-7 h-px bg-ink/10" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-ink-soft">
                  Atendimento presencial com fácil estacionamento e assessoria digital para todo o país
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
                ADVOCACIA GIOVANA FRANKLIN · {OAB_NUMBER}
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight sm:text-4xl text-white">
                Pronto para defender seus direitos com quem atua com bravura e dedicação à sua causa?
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá, Dra. Giovana. Gostaria de agendar uma consulta inicial para avaliar meu caso."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-white px-7 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-brand-950 shadow-md transition-all hover:-translate-y-0.5 hover:bg-brand-50 hover:shadow-lg"
            >
              <WhatsAppIcon size={17} /> Falar no WhatsApp <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-brand-950 px-5 py-14 text-white sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <div className="inline-flex">
                <Image
                  src="/logo-light.png"
                  width={480}
                  height={160}
                  alt="Advocacia Giovana Franklin"
                  className="h-14 w-auto object-contain sm:h-[70px]"
                />
              </div>
              <p className="mt-5 max-w-xs text-xs leading-6 text-white/65">
                Advocacia estratégica, rigor técnico e dedicação artesanal. Sede
                na Av. Arlindo Figueiredo em Passos - MG e atendimento digital em todo o Brasil.
              </p>
              <p className="mt-3 text-[11px] font-semibold text-brand-300">
                Inscrição {OAB_NUMBER}
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
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2"
                >
                  <InstagramIcon size={15} className="shrink-0" /> @advocacia.giovanafranklin
                </a>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-start gap-2"
                >
                  <MapPin size={15} className="mt-0.5 shrink-0" />
                  <span>Av. Arlindo Figueiredo, 756 - B, Passos - MG</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/15 pt-6 text-[10px] text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Advocacia Giovana Franklin ({OAB_NUMBER}). Todos os direitos reservados.
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
                    Principais demandas e serviços atendidos:
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
