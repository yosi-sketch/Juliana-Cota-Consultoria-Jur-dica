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
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingDown,
  X,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5535998413800";
const PHONE_DISPLAY = "(35) 99841-3800";
const EMAIL_CONTACT = "contato@augustolima.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/advaugustolima/";
const GOOGLE_MAPS_URL =
  "https://maps.google.com/maps?vet=10CAAQoqAOahcKEwiomZ7jipyXAxUAAAAAHQAAAAAQDw..i&udm&fvr=1&pvq=Cg0vZy8xMXZqYzhiNzFqIhsKFUF1Z3VzdG8gTGltYSBBZHZvZ2FkbxACGAM&lqi=ChVBdWd1c3RvIExpbWEgQWR2b2dhZG9IsLiUtMG6gIAIWiMQABABEAIYABgBGAIiFWF1Z3VzdG8gbGltYSBhZHZvZ2Fkb5IBDmxlZ2FsX3NlcnZpY2VzmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU16TUMxMmJFNUJFQUX6AQQIABA_&cs=1&um=1&ie=UTF-8&fb=1&gl=br&sa=X&ftid=0x94b6c3915ac9e9ad:0xafbc178e7254d65";

function getWhatsAppUrl(message?: string) {
  const defaultText =
    "Olá, Dr. Augusto Lima. Gostaria de solicitar uma avaliação jurídica do meu caso.";
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
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.04 } },
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
    id: "direito-bancario-juros",
    title: "Direito Bancário & Revisão de Contratos",
    icon: Scale,
    tag: "Juros Abusivos & Financiamentos",
    summary:
      "Revisão técnica de contratos de empréstimo, financiamento veicular e imobiliário para expurgar taxas abusivas e recalcular o saldo devedor.",
    details:
      "Milhares de contratos bancários contêm cobranças ilegais como capitalização indevida de juros, taxas de juros remuneratórios substancialmente superiores à taxa média de mercado divulgada pelo Banco Central, seguros embutidos e venda casada. Atuamos com perícia contábil-jurídica para recalcular seu saldo devedor, estancar abusividades, diminuir o valor das parcelas e buscar a restituição de quantias cobradas em excesso.",
    topics: [
      "Ações revisionais de financiamentos de veículos e imóveis com redução de parcelas",
      "Expurgo de juros abusivos acima da taxa média de mercado do Banco Central",
      "Exclusão de tarifas ilegais embutidas (TAC, TEC, serviços de terceiros e vendas casadas)",
      "Defesa estratégica contra ações de busca e apreensão de veículos",
      "Restituição de valores pagos indevidamente com repetição de indébito",
      "Recálculo pericial contábil de contratos de empréstimo consignado e pessoal",
    ],
    whatsAppText:
      "Olá, Dr. Augusto Lima. Gostaria de solicitar uma análise de contrato bancário para verificar juros e cobranças indevidas.",
  },
  {
    id: "gestao-passivos-empresas",
    title: "Gestão de Passivos Bancários para Empresas",
    icon: Briefcase,
    tag: "Empresas & Fluxo de Caixa",
    summary:
      "Reestruturação e renegociação de dívidas bancárias, liberação de travas de recebíveis e preservação do capital de giro da sua empresa.",
    details:
      "O endividamento bancário pode sufocar empresas saudáveis por meio de juros compostos, renovações compulsórias de limites rotativos e retenções automáticas de faturamento em maquininhas de cartão. Atuamos na interlocução técnica e contenciosa contra instituições financeiras para destravar seus recebíveis, suspender execuções e renegociar o passivo em parcelas compatíveis com a realidade operacional do negócio.",
    topics: [
      "Desbloqueio e revisão jurídica de travas de recebíveis em maquininhas e domicílio bancário",
      "Renegociação global de passivos bancários (Capital de Giro, Conta Garantida e Cheque Especial)",
      "Auditoria e revisão de Cédulas de Crédito Bancário (CCB) e contratos de fomento",
      "Defesa de empresas em execuções de títulos extrajudiciais e bloqueios de contas",
      "Adequação do endividamento financeiro ao fluxo de caixa real da operação",
      "Assessoria jurídica estratégica para blindagem preventiva da atividade empresarial",
    ],
    whatsAppText:
      "Olá, Dr. Augusto Lima. Gostaria de uma consultoria para reestruturação de dívidas bancárias e gestão de passivos da minha empresa.",
  },
  {
    id: "fraudes-descontos-rmc",
    title: "Fraudes Bancárias, RMC/RCC & Descontos Indevidos",
    icon: ShieldCheck,
    tag: "Proteção Contra Fraudes",
    summary:
      "Cancelamento de descontos não autorizados de Reserva de Margem Consignável (RMC e RCC), golpes bancários e negativações indevidas.",
    details:
      "Muitos aposentados, pensionistas e servidores sofrem descontos perpétuos em seus contracheques decorrentes de cartões de crédito consignados que nunca contrataram ou utilizaram, além de serem vítimas de empréstimos fraudulentos ou fraudes eletrônicas. Atuamos rapidamente para cancelar os descontos em folha, obter a devolução em dobro do montante retido e indenização por danos morais.",
    topics: [
      "Cancelamento definitivo de contratos de RMC (Reserva de Margem Consignável) e RCC",
      "Restituição em dobro (Art. 42 do CDC) dos descontos indevidos em aposentadorias e folhas",
      "Ações judiciais por fraudes de falso empréstimo consignado e golpes do PIX",
      "Pedido de liminar urgente para exclusão de negativação indevida no SPC, Serasa e Registrato (SCR)",
      "Indenizações por danos morais decorrentes de fraudes financeiras e violações de segurança bancária",
      "Suspensão de cobranças vexatórias e ligações abusivas de empresas de telecobrança",
    ],
    whatsAppText:
      "Olá, Dr. Augusto Lima. Gostaria de orientações sobre descontos indevidos (RMC/RCC) ou fraudes bancárias no meu benefício.",
  },
  {
    id: "litigio-civil-consumidor",
    title: "Litígio Civil & Defesa do Consumidor",
    icon: Scale,
    tag: "Contratos & Indenizações",
    summary:
      "Ações indenizatórias, cobrança e execução de títulos, descumprimento de contratos, responsabilidade civil e juizados especiais cíveis.",
    details:
      "Atuamos com determinação na defesa de direitos civis, reparação de prejuízos patrimoniais e morais decorrentes de má prestação de serviços, inadimplência contratual e danos ilícitos. Conduzimos ações judiciais contundentes perante a Justiça Comum e Juizados Especiais Cíveis (Pequenas Causas), sempre com transparência e foco no melhor resultado para o cliente.",
    topics: [
      "Ações de indenização por danos materiais, danos morais e lucros cessantes",
      "Cobrança e execução judicial de dívidas, cheques, notas promissórias e contratos",
      "Rescisão de contratos com cobrança de multas rescisórias e reparação de prejuízos",
      "Representação em Juizados Especiais Cíveis (Pequenas Causas)",
      "Defesa do consumidor em litígios contra seguradoras, concessionárias e empresas",
      "Soluções em disputas contratuais, obrigações de fazer e responsabilidade civil",
    ],
    whatsAppText:
      "Olá, Dr. Augusto Lima. Preciso de assessoria jurídica em uma causa cível / direito do consumidor.",
  },
  {
    id: "litigio-trabalhista",
    title: "Litígio Trabalhista",
    icon: Award,
    tag: "Direitos Trabalhistas",
    summary:
      "Defesa combativa dos direitos do trabalhador em rescisões indiretas, horas extras, verbas rescisórias e consultoria preventiva empresarial.",
    details:
      "Atuação intransigente na garantia do cumprimento rigoroso das leis trabalhistas. Auxiliamos empregados na busca de reparação por irregularidades contratuais, bem como prestamos consultoria técnica a pequenas e médias empresas na prevenção e defesa estratégica de litígios perante a Justiça do Trabalho.",
    topics: [
      "Rescisão indireta do contrato de trabalho por descumprimento do empregador (Art. 483 da CLT)",
      "Reversão de demissão por justa causa injustificada com liberação de guias e FGTS + 40%",
      "Cobrança de horas extraordinárias, intervalos não concedidos e trabalho em turnos",
      "Adicionais legais de insalubridade, periculosidade e equiparação salarial",
      "Indenizações por acidentes de trabalho, assédio moral e doenças ocupacionais",
      "Defesa de empresas em reclamações trabalhistas e compliance nas relações laborais",
    ],
    whatsAppText:
      "Olá, Dr. Augusto Lima. Gostaria de conversar com a equipe sobre uma questão de Direito Trabalhista.",
  },
  {
    id: "familia-divorcio-sucessoes",
    title: "Direito de Família, Divórcio & Sucessões",
    icon: HeartHandshake,
    tag: "Família, Divórcio & Herança",
    summary:
      "Condução humanizada, célere e segura em divórcios consensuais e litigiosos, partilha de patrimônio, inventários em cartório e testamentos.",
    details:
      "Conflitos familiares e transmissões patrimoniais requerem discrição, empatia e absoluta precisão técnica. Auxiliamos você e sua família a superar momentos delicados com serenidade, seja na formalização rápida de um divórcio e partilha equilibrada de bens, seja na condução de inventários em cartório de notas e elaboração de testamentos protetivos.",
    topics: [
      "Divórcio consensual ágil em cartório e divórcio contencioso com partilha estratégica de bens",
      "Inventários extrajudiciais rápidos em cartório de notas e inventários judiciais complexos",
      "Fixação, revisão e execução de pensão alimentícia e guarda de menores",
      "Planejamento sucessório patrimonial e redação de testamentos seguros",
      "Reconhecimento e dissolução de união estável com partilha de bens comuns",
      "Doações de bens com cláusula de usufruto, inalienabilidade e impenhorabilidade",
    ],
    whatsAppText:
      "Olá, Dr. Augusto Lima. Gostaria de uma consulta sobre divórcio, partilha de bens ou inventário.",
  },
];

const clientReviews = [
  {
    name: "Kaua Reis",
    reviewsCount: "2 avaliações",
    date: "Há 6 meses",
    highlight: "Excelente profissional, sério e comprometido",
    content:
      "Excelente profissional, muito atencioso e competente. Conduziu meu processo com responsabilidade e sempre me manteve informado sobre cada etapa. Recomendo para quem procura um advogado sério e comprometido.",
  },
  {
    name: "Daniele Oliveira",
    reviewsCount: "4 avaliações",
    date: "Há 6 meses",
    highlight: "Resolveu meu problema muito rápido, atendimento impecável",
    content:
      "Excelente profissional, honesto, atendimento impecável, está de parabéns, resolveu meu problema muito rápido além de deixar a gente muito a vontade,... GRATIDÃO AUGUSTO 🙏🏽🙏🏽🙏🏽",
  },
  {
    name: "Ailton Ribeiro de Araujo",
    reviewsCount: "1 avaliação",
    date: "Há 6 meses",
    highlight: "Acabei de ganhar a causa em relação a pessoas jurídicas",
    content:
      "Pessoal, acabei de ganhar a causa em relação a algumas pessoas jurídicas. Quero deixar aqui meu agradecimento ao Dr. Augusto, um profissional muito atencioso e inteligente. Parabéns, doutor, pelo excelente trabalho!",
  },
  {
    name: "Sidney Verginio",
    reviewsCount: "Local Guide · 86 avaliações",
    date: "Há 1 ano",
    highlight: "Encontrar o Augusto foi um alívio enorme com minhas dívidas",
    content:
      "Eu estava muito angustiado com minhas dívidas e já não sabia o que fazer. Encontrar o Augusto foi um alívio enorme! Fui tratado com respeito, paciência e acolhimento desde o primeiro contato. Ele me passou confiança e cuidou de cada detalhe com total responsabilidade.",
  },
  {
    name: "Rafaela Alves",
    reviewsCount: "7 avaliações",
    date: "Há 9 meses",
    highlight: "Melhor equipe de advocacia da cidade!",
    content:
      "Melhor equipe de advocacia da cidade!!! São muito pacientes e educados, principalmente em relação explicar às possibilidades do processo e também muito honestos e transparentes. Recomendo demais!!!",
  },
  {
    name: "Thales Elias",
    reviewsCount: "1 avaliação",
    date: "Há 7 meses",
    highlight: "Sempre explicou tudo com calma e passou confiança",
    content:
      "Fui muito bem atendido pelo Dr. Augusto. Sempre explicou tudo com calma, me passou confiança e resolveu meu problema com agilidade. Profissional sério e honesto. Super recomendo!",
  },
  {
    name: "Ericä Matos",
    reviewsCount: "10 avaliações",
    date: "Há 1 ano",
    highlight: "Clareza, profissionalismo e dedicação em cada detalhe",
    content:
      "Quero deixar registrado meu agradecimento ao Dr. Augusto. Sempre demonstrou clareza, profissionalismo e dedicação em cada detalhe do processo, e disponível para tirar dúvidas, conduziu tudo com segurança e transparência.",
  },
  {
    name: "Cristiano Araújo da Silva",
    reviewsCount: "8 avaliações",
    date: "Há 2 anos",
    highlight: "Extremamente ético e técnico. Ganhou minha causa!",
    content:
      "Contratei seus serviços como advogado e gostei muito. Extremamente ético, profissional, técnico. Muito claro nas suas explicações sobre o processo. E melhor, ganhou minha causa. Recomendo demais.",
  },
  {
    name: "Wesley de Oliveira",
    reviewsCount: "1 avaliação",
    date: "Há 2 anos",
    highlight: "Habilidade técnica e conhecimento profundo da lei",
    content:
      "Super recomendo por sua habilidade técnica e conhecimento profundo da lei, admiro sua empatia e seu respeito pelos outros. Você não é apenas um advogado excepcional, mas também uma pessoa maravilhosa, que sempre está disposta a ouvir e apoiar quem precisa.",
  },
  {
    name: "Otávio Ferreira",
    reviewsCount: "2 avaliações",
    date: "Há 5 meses",
    highlight: "Resolveu meu caso muito rápido, ágil e competente",
    content:
      "Ótimo advogado, resolveu meu caso muito rápido, ágil e competente. Super indico a todos que precisam de uma solução jurídica de verdade.",
  },
  {
    name: "Marcelo Muzetti Silva",
    reviewsCount: "3 avaliações",
    date: "Há 2 anos",
    highlight: "Um dos melhores advogados de Passos e Região",
    content:
      "Excelente profissional, extremamente competente. Um dos melhores advogados de Passos e Região com toda certeza.",
  },
  {
    name: "Tamires Cunha",
    reviewsCount: "3 avaliações",
    date: "Há 1 ano",
    highlight: "Drª. Junia Maria sempre muito querida e competente",
    content:
      "Drª. Junia Maria sempre muito querida e competente, assim como toda a equipe do Dr. Augusto Lima. Atendimento acolhedor e dedicado a quem precisa.",
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
            ? "font-display text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.08] tracking-[-0.035em] text-white"
            : "font-display text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.08] tracking-[-0.035em] text-slate-950"
        }
      >
        {children}
      </h2>
      {description && (
        <p
          className={
            light
              ? "mt-5 max-w-xl text-[15px] leading-relaxed text-slate-300"
              : "mt-5 max-w-xl text-[15px] leading-relaxed text-slate-600"
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
      <main className="overflow-hidden bg-slate-50 text-slate-900">
        {/* Navigation Bar */}
        <header className="sticky top-0 z-40 border-b border-white/10 bg-[#090a0f]/95 backdrop-blur-xl">
          <div className="mx-auto flex h-[95px] max-w-7xl items-center justify-between gap-5 px-5 sm:h-[110px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label="Augusto Lima Advocacia — Início"
              onClick={closeMenu}
              className="flex items-center gap-3 transition-opacity hover:opacity-90 py-2"
            >
              {/* Official Augusto Lima Logo in metallic white/silver */}
              <Image
                src="/logo-augusto-lima-header.png"
                width={380}
                height={130}
                alt="Augusto Lima Advocacia"
                priority
                className="h-12 w-auto object-contain sm:h-[64px]"
              />
            </a>

            <nav
              aria-label="Navegação principal"
              className="hidden items-center gap-7 lg:flex"
            >
              <a className="nav-link" href="#inicio">
                Início
              </a>
              <a className="nav-link" href="#sobre">
                Sobre Nós
              </a>
              <a className="nav-link" href="#atuacao">
                Atuação
              </a>
              <a className="nav-link" href="#manifesto">
                Direito Bancário
              </a>
              <a className="nav-link" href="#artigos">
                Análises
              </a>
              <a className="nav-link" href="#avaliacoes">
                Avaliações (70)
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
                aria-label="Instagram do Dr. Augusto Lima"
                className="grid size-10 place-items-center rounded-full border border-white/20 text-slate-300 transition-all hover:border-amber-400 hover:bg-white/10 hover:text-white"
              >
                <InstagramIcon size={17} />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp do Dr. Augusto Lima"
                className="grid size-10 place-items-center rounded-full border border-white/20 text-slate-300 transition-all hover:border-amber-400 hover:bg-white/10 hover:text-white"
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
                className="overflow-hidden border-t border-white/10 bg-[#090a0f] px-6 lg:hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1 py-4">
                  {[
                    ["Início", "#inicio"],
                    ["Sobre Nós & Equipe", "#sobre"],
                    ["Áreas de Atuação", "#atuacao"],
                    ["Foco em Direito Bancário", "#manifesto"],
                    ["Análises Jurídicas", "#artigos"],
                    ["Avaliações no Google (70)", "#avaliacoes"],
                    ["Contato & Sede", "#contato"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={closeMenu}
                      className="py-3 text-sm font-semibold text-slate-200 hover:text-amber-400"
                    >
                      {label}
                    </a>
                  ))}
                  <div className="mt-3 flex flex-col gap-2">
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-600 px-5 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-md transition-all hover:bg-amber-500"
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
                      <InstagramIcon size={15} /> Siga @advaugustolima
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
          className="relative isolate scroll-mt-24 border-b border-slate-200/80 bg-white"
        >
          <div className="pointer-events-none absolute -right-32 top-8 -z-10 size-[36rem] rounded-full bg-amber-100/40 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-10 -z-10 size-[28rem] rounded-full bg-slate-200/50 blur-3xl" />

          <div className="mx-auto grid min-h-[660px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[720px] lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:px-12 lg:py-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:py-6"
            >
              <motion.div variants={reveal} className="mb-6">
                <span className="inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-800 shadow-xs">
                  <span className="size-2 rounded-full bg-amber-600 animate-pulse" />
                  Av. Arlindo Figueiredo, 124 · Passos - MG · Atendimento Nacional
                </span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="max-w-[760px] font-display text-[2.85rem] font-extrabold leading-[1.02] tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-[4.65rem]"
              >
                Existe uma diferença entre dever e ser{" "}
                <span className="block mt-1 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 bg-clip-text text-transparent font-extrabold">
                  cobrado indevidamente.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-7 max-w-xl text-[15px] leading-relaxed text-slate-600 sm:text-base sm:leading-8 font-normal"
              >
                Atuação jurídica combativa e estratégica com foco primordial em{" "}
                <strong className="text-slate-900 font-semibold">Direito Bancário</strong>,
                revisão de contratos de empréstimo e financiamento, cancelamento de
                juros abusivos, gestão de passivos para empresas e litígios cíveis.
                Conduzido pelo <strong className="text-slate-900 font-semibold">Dr. Augusto Lima</strong> e
                equipe, com sede em Passos/MG e atendimento on-line seguro em todo o Brasil.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl()}
                  target="_blank"
                  size="lg"
                  className="rounded-full shadow-lg"
                >
                  <WhatsAppIcon size={16} /> Falar com o Dr. Augusto Lima
                </GlowingButton>
                <a
                  href="#atuacao"
                  className="group inline-flex items-center gap-2 px-3 py-3 text-sm font-bold text-slate-900 transition-colors hover:text-amber-600"
                >
                  Conhecer áreas de atuação{" "}
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-slate-200/80 pt-6 text-xs text-slate-600"
              >
                <span className="inline-flex items-center gap-2 font-medium">
                  <Star size={16} className="fill-amber-500 text-amber-500" />{" "}
                  <strong className="text-slate-950 font-bold">5,0 estrelas</strong> no Google (70 avaliações)
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <ShieldCheck size={16} className="text-amber-600" /> Foco em
                  Direito Bancário & Empresarial
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <MapPin size={16} className="text-amber-600" /> Presencial em
                  Passos - MG e on-line
                </span>
              </motion.div>
            </motion.div>

            {/* Hero Image Presentation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.85,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative mx-auto w-full max-w-[480px] lg:ml-auto lg:mr-2"
            >
              {/* Luxury ambient backlight aura */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-amber-500/20 via-slate-500/10 to-transparent blur-2xl -z-10" />

              {/* Architectural outer hairline frame */}
              <div className="absolute -inset-2.5 rounded-2xl border border-slate-900/10 pointer-events-none" />

              {/* Main portrait executive card */}
              <div className="relative aspect-[0.76] overflow-hidden rounded-2xl bg-[#090a0f] shadow-2xl ring-1 ring-slate-900/10">
                <Image
                  src="/augusto-lima-hero.jpg"
                  alt="Dr. Augusto Lima — Advogado Titular"
                  fill
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 42vw"
                  className="object-cover object-[50%_18%]"
                />

                {/* Gradient vignette on bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* Executive name overlay */}
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3 text-white sm:bottom-7 sm:left-7 sm:right-7">
                  <div>
                    <p className="font-display text-2xl font-bold tracking-tight text-white">
                      Dr. Augusto Lima
                    </p>
                    <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.18em] text-amber-400">
                      Augusto Lima Advocacia
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-amber-400/40 bg-black/60 text-amber-400 backdrop-blur-md">
                    <Scale size={18} />
                  </span>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -left-3 top-[10%] rounded-full border border-slate-200 bg-white/95 px-4 py-2.5 text-[10px] font-bold tracking-[0.14em] text-slate-900 shadow-xl backdrop-blur-md sm:-left-6 sm:px-5">
                DIREITO BANCÁRIO & CÍVEL
              </div>

              <div className="absolute -right-3 bottom-[18%] rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-2xl backdrop-blur-md sm:-right-6">
                <div className="flex items-center gap-2 text-amber-500">
                  <Star size={16} className="fill-amber-500" />
                  <span className="font-display text-lg font-extrabold text-slate-950">
                    5,0 / 5,0
                  </span>
                </div>
                <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  70 Avaliações no Google
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Highlights Banner */}
        <section
          aria-label="Credenciais e Destaques"
          className="border-b border-slate-200/80 bg-slate-100/70"
        >
          <div className="mx-auto grid max-w-7xl gap-7 px-5 py-8 sm:grid-cols-4 sm:gap-4 sm:px-8 lg:px-12">
            {[
              ["5,0 ★", "classificação máxima com 70 avaliações no Google"],
              ["Bancário & Empresas", "foco em revisão de juros e proteção de caixa"],
              ["Passos - MG", "Av. Arlindo Figueiredo, 124 - São Francisco"],
              ["Brasil Inteiro", "atendimento presencial e consultoria on-line"],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={
                  index > 0
                    ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-slate-300"
                    : "flex items-center gap-4 sm:justify-center"
                }
              >
                <span className="font-display text-3xl sm:text-4xl font-black text-amber-600">
                  {value}
                </span>
                <span className="max-w-[155px] text-[11px] font-medium leading-5 text-slate-600">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Sobre a Equipe / Sobre Nós (Echoing the flyer design) */}
        <section
          id="sobre"
          className="scroll-mt-24 bg-white py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.96fr_1.04fr] lg:gap-20 lg:px-12">
            {/* Team Institutional Photo Presentation */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[540px]"
            >
              <div className="relative aspect-[1.08] overflow-hidden rounded-2xl bg-slate-100 shadow-2xl ring-1 ring-slate-900/10">
                <Image
                  src="/sobre-nos.jpg"
                  alt="Equipe Augusto Lima Advocacia — Dr. Augusto Lima, Drª. Junia Maria e associadas"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Authority card */}
              <div className="absolute -bottom-6 right-3 max-w-[310px] rounded-xl border border-slate-200/80 bg-white p-5 shadow-2xl sm:-right-6 sm:p-6">
                <div className="flex items-center gap-2 text-amber-600">
                  <ShieldCheck size={18} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em]">
                    Corpo Jurídico Especializado
                  </p>
                </div>
                <p className="mt-1.5 font-display text-lg font-bold leading-snug text-slate-950">
                  Dr. Augusto Lima & Sócias
                </p>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  Atendimento minucioso, transparente e com reconhecida
                  competência na solução ágil de conflitos bancários e cíveis.
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 rounded-tl-2xl border-l-2 border-t-2 border-amber-600/30 sm:-left-6 sm:-top-6 sm:size-32" />
            </motion.div>

            {/* Text description */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              <motion.div variants={reveal}>
                <span className="inline-block rounded-md bg-amber-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-amber-800 mb-4">
                  sobre nós · augusto lima advocacia
                </span>
              </motion.div>

              <motion.h2
                variants={reveal}
                className="font-display text-3xl sm:text-5xl lg:text-[3.35rem] font-extrabold leading-[1.06] tracking-[-0.035em] text-slate-950"
              >
                Defesa implacável de seus direitos com{" "}
                <span className="text-amber-600">
                  seriedade e transparência.
                </span>
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-relaxed text-slate-600 font-normal"
              >
                A <strong className="text-slate-950 font-semibold">Augusto Lima Advocacia</strong> nasceu
                com uma premissa clara: a lei não pode ser utilizada como instrumento
                de opressão financeira contra cidadãos e empresas. Liderado pelo{" "}
                <strong className="text-slate-950 font-semibold">Dr. Augusto Lima</strong> e composto
                por uma equipe qualificada — com destaque para a atuação dedicada da{" "}
                <strong className="text-slate-950 font-semibold">Drª. Junia Maria</strong> e advogadas
                associadas —, nosso escritório une profundo conhecimento técnico a um
                atendimento acolhedor e humanizado.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-relaxed text-slate-600 font-normal"
              >
                Reconhecido pela nota máxima de <strong className="text-slate-950 font-semibold">5,0 estrelas no Google</strong> por
                dezenas de clientes em Passos e região, o escritório não trabalha com
                soluções automáticas: cada contrato bancário, litígio empresarial ou
                processo de família é examinado em seus mínimos detalhes, buscando a
                mais rápida e vantajosa resolução para quem nos confia sua causa.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2"
              >
                <div className="flex items-center gap-2.5 text-xs text-slate-900 font-semibold">
                  <CheckCircle2 size={16} className="text-amber-600 shrink-0" />
                  <span>Auditoria minuciosa de cláusulas e recálculo pericial</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-900 font-semibold">
                  <CheckCircle2 size={16} className="text-amber-600 shrink-0" />
                  <span>Acompanhamento direto e comunicação clara via WhatsApp</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-900 font-semibold">
                  <CheckCircle2 size={16} className="text-amber-600 shrink-0" />
                  <span>Sede estruturada na Av. Arlindo Figueiredo, 124 em Passos</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-900 font-semibold">
                  <CheckCircle2 size={16} className="text-amber-600 shrink-0" />
                  <span>Atendimento digital estruturado para clientes de todo o país</span>
                </div>
              </motion.div>

              <motion.div variants={reveal} className="mt-9">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dr. Augusto Lima. Gostaria de entender como o escritório pode me auxiliar no meu caso."
                  )}
                  target="_blank"
                  size="md"
                  className="rounded-full shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar com o Dr. Augusto Lima
                </GlowingButton>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Manifesto / Foco Bancário (Core Value Proposition) */}
        <section
          id="manifesto"
          className="relative isolate overflow-hidden bg-[#090a0f] py-20 text-white sm:py-28 lg:py-32"
        >
          <div className="pointer-events-none absolute -left-28 top-1/4 size-96 rounded-full bg-amber-600/15 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-1/4 size-96 rounded-full bg-amber-700/10 blur-3xl" />

          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-amber-400 backdrop-blur-md">
                <Sparkles size={14} /> Posicionamento Estratégico
              </span>
              <h2 className="mt-6 font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-[-0.035em] text-white">
                Você não precisa continuar pagando aquilo que a lei{" "}
                <span className="text-amber-400">
                  não autoriza que te cobrem.
                </span>
              </h2>
            </div>

            <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md hover:border-amber-400/40 transition-colors">
                <div className="flex size-12 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400">
                  <ShieldAlert size={24} />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold text-white">
                  Para Pessoas Físicas & Aposentados
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  Muita gente paga por anos uma parcela que nunca conferiu ou
                  assina um contrato que não leu. Juros capitalizados, tarifas
                  embutidas e descontos perpétuos de cartões RMC e RCC drenam sua
                  renda mensal. Nós recalculamos o que é justo e recuperamos o
                  que foi pago a mais.
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs font-bold text-amber-400">
                  <CheckCircle2 size={16} /> Cessação de cobranças abusivas
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md hover:border-amber-400/40 transition-colors">
                <div className="flex size-12 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400">
                  <TrendingDown size={24} />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold text-white">
                  Para Empresas & Produtores
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  Com a empresa acontece o mesmo: o endividamento bancário se
                  acumula em contratos renovados sem revisão e em travas de
                  recebíveis que asfixiam o caixa operacional. Atuamos na
                  gestão de passivos bancários, destravando recebíveis e
                  renegociando dívidas em parcelas que caibam no fluxo de caixa.
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs font-bold text-amber-400">
                  <CheckCircle2 size={16} /> Destrave imediato de recebíveis
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dr. Augusto. Gostaria de enviar meu contrato bancário para uma análise inicial de juros e cobranças indevidas."
                )}
                target="_blank"
                size="lg"
                className="rounded-full shadow-lg"
              >
                <WhatsAppIcon size={17} /> Enviar meu contrato para análise no WhatsApp
              </GlowingButton>
              <p className="mt-3 text-xs text-slate-400">
                Atendimento sigiloso e direto com nossa equipe especializada.
              </p>
            </div>
          </div>
        </section>

        {/* Áreas de Atuação */}
        <section
          id="atuacao"
          className="scroll-mt-24 bg-slate-50 py-20 sm:py-28 lg:py-32"
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
                description="Assessoria jurídica especializada com alto rigor analítico para defender seu patrimônio, sua empresa e sua família."
              >
                Soluções técnicas e combativas nos{" "}
                <span className="text-amber-600">
                  momentos mais decisivos.
                </span>
              </Heading>
              <p className="max-w-[260px] pb-1 text-xs leading-relaxed text-slate-500 font-medium">
                Selecione uma área para visualizar o detalhamento das causas
                atendidas e conversar com o Dr. Augusto Lima.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={stagger}
              className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {practiceAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <motion.article
                    key={area.id}
                    variants={reveal}
                    className="group flex min-h-[350px] flex-col rounded-2xl border border-slate-200/80 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-500/50 hover:shadow-xl"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-xl bg-amber-50 text-amber-600 transition-colors group-hover:bg-amber-600 group-hover:text-white">
                        <Icon size={22} strokeWidth={1.8} />
                      </span>
                      <span className="font-display font-black text-2xl text-slate-300 group-hover:text-amber-600 transition-colors">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-6">
                      <span className="inline-block rounded-md bg-amber-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-800">
                        {area.tag}
                      </span>
                      <h3 className="mt-3 font-display font-bold text-xl leading-snug text-slate-950">
                        {area.title}
                      </h3>
                      <p className="mt-3 text-[13px] leading-relaxed text-slate-600">
                        {area.summary}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveArea(area)}
                      className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[11px] font-bold uppercase tracking-[0.16em] text-amber-700 hover:text-amber-600 cursor-pointer"
                    >
                      Ver detalhes e tópicos{" "}
                      <ArrowRight
                        size={15}
                        className="transition-transform group-hover/link:translate-x-1"
                      />
                    </button>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Informação e Análise Jurídica (Artigos Editoriais) */}
        <section id="artigos" className="bg-slate-100 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid items-end gap-7 md:grid-cols-[1fr_auto]">
              <Heading
                eyebrow="ANÁLISE & CONTEÚDO JURÍDICO"
                description="Artigos e esclarecimentos práticos da Augusto Lima Advocacia sobre abusividades bancárias, direitos de empresas e consumidores."
              >
                Orientação clara sobre{" "}
                <span className="text-amber-600">situações reais.</span>
              </Heading>
              <a
                href={getWhatsAppUrl(
                  "Olá, Dr. Augusto. Vi seus artigos sobre Direito Bancário e gostaria de tirar uma dúvida sobre o meu caso."
                )}
                target="_blank"
                rel="noreferrer"
                className="group mb-1 inline-flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-amber-700 hover:text-amber-600"
              >
                Fazer uma pergunta jurídica <ArrowUpRight size={15} />
              </a>
            </div>

            <div className="mt-11 grid gap-8 md:grid-cols-2">
              {/* Card 1: Juros Abusivos e Contratos Bancários */}
              <motion.article
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-900/10 bg-[#090a0f] text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/40"
              >
                <div className="relative aspect-[1080/700] w-full overflow-hidden bg-slate-900">
                  <Image
                    src="/artigo-direito-bancario.webp"
                    alt="Direito Bancário e Revisão de Contratos — Augusto Lima Advocacia"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-7 sm:p-8">
                  <div>
                    <span className="inline-block rounded-md bg-amber-400/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400">
                      Direito Bancário & Financiamentos
                    </span>
                    <h3 className="mt-4 font-display font-bold text-2xl leading-snug sm:text-3xl text-white">
                      Juros Abusivos e Tarifas Ocultas: Como recalcular empréstimos e estancar cobranças ilegais
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-slate-300">
                      Grande parte dos contratos de empréstimo e financiamento
                      veicular ou habitacional contêm taxas muito acima da média
                      de mercado do Banco Central, além de anatocismo e tarifas
                      embutidas sem autorização. É direito legal do consumidor
                      requerer a revisão judicial para reduzir parcelas e reaver
                      o que pagou indevidamente.
                    </p>
                  </div>
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dr. Augusto. Gostaria de uma análise no meu contrato de financiamento/empréstimo para verificar se há cobrança abusiva."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-amber-400 transition-colors hover:text-white"
                  >
                    Analisar meu contrato bancário <ArrowUpRight size={14} />
                  </a>
                </div>
              </motion.article>

              {/* Card 2: Gestão de Passivos Empresariais */}
              <motion.article
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-900/10 bg-[#090a0f] text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/40"
              >
                <div className="relative aspect-[1080/700] w-full overflow-hidden bg-slate-900">
                  <Image
                    src="/artigo-gestao-passivos.webp"
                    alt="Gestão de Passivos Bancários para Empresas — Augusto Lima Advocacia"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-7 sm:p-8">
                  <div>
                    <span className="inline-block rounded-md bg-amber-400/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400">
                      Gestão Empresarial & Passivos
                    </span>
                    <h3 className="mt-4 font-display font-bold text-2xl leading-snug sm:text-3xl text-white">
                      Travas de Recebíveis e Endividamento Bancário: Estratégias para proteger o fluxo de caixa
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-slate-300">
                      Quando as instituições financeiras retêm automaticamente o
                      faturamento das maquininhas de cartão ou debitam parcelas
                      direto da conta operacional, o negócio perde liquidez e
                      risco de insolvência aumenta. A intervenção jurídica
                      permite liberar travas ilegais e renegociar Cédulas de
                      Crédito Bancário com parcelamentos realistas.
                    </p>
                  </div>
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dr. Augusto. Sou empresário e gostaria de entender como liberar travas de recebíveis e renegociar passivos bancários da minha empresa."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-amber-400 transition-colors hover:text-white"
                  >
                    Consultar situação da empresa <ArrowUpRight size={14} />
                  </a>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* Nosso Compromisso Profissional */}
        <section className="relative overflow-hidden bg-[#090a0f] py-20 text-white sm:py-28 lg:py-32">
          <div className="pointer-events-none absolute -left-28 top-1/4 size-96 rounded-full bg-amber-600/15 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-1/4 size-96 rounded-full bg-slate-800/40 blur-3xl" />

          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-12">
            <Heading
              eyebrow="NOSSO COMPROMISSO PROFISSIONAL"
              light
              description="A condução de cada demanda com a máxima técnica, transparência irrestrita e respeito absoluto ao tempo e aos direitos de quem nos procura."
            >
              A precisão jurídica aliada à{" "}
              <span className="text-amber-400">
                combatividade que sua causa merece.
              </span>
            </Heading>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="divide-y divide-white/10"
            >
              {[
                [
                  "01",
                  "Estudo aprofundado e cálculo pericial de cada caso",
                  "Analisamos cláusula por cláusula dos seus contratos e extratos bancários. Recalculamos cada taxa com precisão contábil para embasar teses jurídicas sólidas, sem modelos prontos ou promessas genéricas.",
                ],
                [
                  "02",
                  "Comunicação direta, transparente e ágil no WhatsApp",
                  "Você é mantido informado sobre cada andamento processual em linguagem clara e acessível, com acesso direto ao Dr. Augusto Lima e equipe para esclarecer qualquer dúvida.",
                ],
                [
                  "03",
                  "Combatividade e foco em resultados concretos",
                  "Atuamos com determinação inegociável perante bancos, cartórios e tribunais para desbloquear contas, estancar cobranças ilegais e alcançar a vitória jurídica que você precisa.",
                ],
              ].map(([number, title, description]) => (
                <motion.div
                  key={number}
                  variants={reveal}
                  className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-6 sm:py-7"
                >
                  <span className="font-display text-2xl font-black text-amber-400">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white">{title}</h3>
                    <p className="mt-2 max-w-lg text-[13px] leading-relaxed text-slate-300">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Avaliações no Google (Depoimentos Reais do Dr. Augusto Lima) */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 bg-white py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:items-center">
              <div>
                <Heading
                  eyebrow="PROVA SOCIAL & AVALIAÇÕES REAIS"
                  description="A reputação do Dr. Augusto Lima e equipe é construída com ética, inteligência e resultados reais. Confira o que dizem os clientes que tiveram suas causas conduzidas pelo escritório no Google."
                >
                  Confiança atestada por{" "}
                  <span className="text-amber-600">
                    quem teve sua causa resolvida.
                  </span>
                </Heading>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 border-b-2 border-amber-600 pb-1.5 text-xs font-bold uppercase tracking-[0.14em] text-slate-900 hover:text-amber-600"
                  >
                    Ver todas as 70 avaliações no Google <ArrowUpRight size={15} />
                  </a>
                </div>

                {/* Rating highlights pills */}
                <div className="mt-9 flex flex-wrap gap-2">
                  {[
                    "Nota 5,0 no Google",
                    "Ganhou minha causa",
                    "Alívio com dívidas",
                    "Atendimento impecável",
                    "Honesto e inteligente",
                    "Melhor equipe da cidade",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-[11px] font-semibold text-slate-700"
                    >
                      <CheckCircle2 size={14} className="text-amber-600" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Public score box */}
              <div className="relative flex min-h-[260px] flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50 p-8 shadow-xl sm:p-10">
                <div className="relative flex items-center justify-between gap-4">
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-700">
                    Avaliações Verificadas · Google Maps
                  </span>
                  <div className="flex gap-1 text-amber-500" aria-label="5 estrelas">
                    {Array.from({ length: 5 }, (_, index) => (
                      <Star
                        key={index}
                        size={18}
                        fill="currentColor"
                        strokeWidth={1}
                      />
                    ))}
                  </div>
                </div>

                <div className="relative mt-8 flex flex-wrap items-end justify-between gap-6">
                  <div>
                    <span className="font-display text-7xl sm:text-8xl font-black leading-none text-slate-950">
                      5,0
                    </span>
                    <p className="mt-2 text-xs font-bold text-amber-700">
                      Excelente · Classificação Máxima
                    </p>
                  </div>
                  <div className="pb-1 text-right">
                    <p className="font-display text-3xl font-extrabold text-amber-600">
                      70 avaliações
                    </p>
                    <p className="mt-1 text-xs text-slate-500 font-medium">
                      100% de satisfação declarada
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
                  className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-0.5 text-amber-500">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            size={14}
                            fill="currentColor"
                            strokeWidth={1}
                          />
                        ))}
                      </div>
                      <span className="text-[11px] text-slate-400 font-medium">
                        {review.date}
                      </span>
                    </div>

                    <p className="mt-4 text-xs font-bold text-slate-900">
                      &ldquo;{review.highlight}&rdquo;
                    </p>

                    <p className="mt-2.5 text-[13px] leading-relaxed text-slate-600">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 border-t border-slate-100 pt-4">
                    <p className="font-display text-sm font-bold text-slate-950">
                      {review.name}
                    </p>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
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
                  className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-slate-50/70 p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-0.5 text-amber-500">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            size={14}
                            fill="currentColor"
                            strokeWidth={1}
                          />
                        ))}
                      </div>
                      <span className="text-[11px] text-slate-400 font-medium">
                        {review.date}
                      </span>
                    </div>

                    <p className="mt-4 text-xs font-bold text-slate-900">
                      &ldquo;{review.highlight}&rdquo;
                    </p>

                    <p className="mt-2.5 text-[13px] leading-relaxed text-slate-600">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 border-t border-slate-200 pt-4">
                    <p className="font-display text-sm font-bold text-slate-950">
                      {review.name}
                    </p>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
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
                  className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-0.5 text-amber-500">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            size={14}
                            fill="currentColor"
                            strokeWidth={1}
                          />
                        ))}
                      </div>
                      <span className="text-[11px] text-slate-400 font-medium">
                        {review.date}
                      </span>
                    </div>

                    <p className="mt-4 text-xs font-bold text-slate-900">
                      &ldquo;{review.highlight}&rdquo;
                    </p>

                    <p className="mt-2.5 text-[13px] leading-relaxed text-slate-600">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 border-t border-slate-100 pt-4">
                    <p className="font-display text-sm font-bold text-slate-950">
                      {review.name}
                    </p>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      {review.reviewsCount} no Google
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Conecte-se com o Dr. Augusto Lima no Instagram */}
        <section className="border-t border-slate-200/80 bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col items-center justify-between gap-8 rounded-3xl border border-slate-200/80 bg-white p-8 sm:p-12 lg:flex-row lg:gap-14 shadow-xl">
              <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center">
                <div className="relative size-28 shrink-0 overflow-hidden rounded-full border-2 border-amber-500/50 shadow-md sm:size-32">
                  <Image
                    src="/augusto-lima-social.jpg"
                    alt="Dr. Augusto Lima no Instagram @advaugustolima"
                    fill
                    className="object-cover object-[50%_15%]"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-amber-600">
                    <InstagramIcon size={16} /> @advaugustolima
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-bold text-slate-950 sm:text-3xl">
                    Acompanhe o Dr. Augusto Lima no Instagram
                  </h3>
                  <p className="mt-2 max-w-md text-xs leading-relaxed text-slate-600 sm:text-sm">
                    Orientações jurídicas práticas, bastidores dos tribunais e
                    dicas fundamentais sobre como evitar abusos bancários e
                    proteger seus direitos.
                  </p>
                </div>
              </div>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex shrink-0 items-center gap-2.5 rounded-full bg-slate-950 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-md transition-all hover:bg-amber-600"
              >
                <InstagramIcon size={16} /> Seguir no Instagram <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </section>

        {/* Contato & Localização */}
        <section
          id="contato"
          className="scroll-mt-24 bg-white py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                eyebrow="CONTATO & LOCALIZAÇÃO"
                description="Agende seu atendimento presencial em nossa sede na Av. Arlindo Figueiredo em Passos ou solicite uma consulta on-line com total sigilo e comodidade."
              >
                Estamos prontos para{" "}
                <span className="text-amber-600">analisar sua demanda.</span>
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
                <p className="text-xs text-slate-500 font-medium">
                  Atendimento direto e retorno com prontidão:{" "}
                  <strong className="text-slate-900">{PHONE_DISPLAY}</strong>.
                </p>
              </div>

              <div className="mt-10 space-y-4 text-xs text-slate-600 font-medium">
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-amber-600" />
                  <span>Segunda a Sexta: 08h30 às 18h00 (Aberto · Fecha 18:00)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-amber-600" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="hover:text-amber-600 transition-colors text-slate-900 font-semibold"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-amber-600" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="hover:text-amber-600 transition-colors text-slate-900 font-semibold"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <InstagramIcon size={16} className="text-amber-600" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-amber-600 transition-colors text-slate-900 font-semibold"
                  >
                    @advaugustolima
                  </a>
                </div>
              </div>
            </div>

            {/* Address & Office Card */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50 p-7 sm:p-10 shadow-xl">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-amber-600" />

              <div className="flex items-center gap-4">
                <span className="grid size-12 place-items-center rounded-xl bg-amber-50 text-amber-600">
                  <MapPin size={22} strokeWidth={1.8} />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-amber-700">
                    Sede do Escritório
                  </p>
                  <p className="mt-1 font-display text-2xl font-bold text-slate-950">
                    Passos · Minas Gerais
                  </p>
                </div>
              </div>

              <address className="mt-7 max-w-md not-italic text-[14px] leading-relaxed text-slate-600">
                <strong className="text-slate-950 font-bold">
                  Augusto Lima Advocacia
                </strong>
                <br />
                Av. Arlindo Figueiredo, 124
                <br />
                Bairro São Francisco, Passos - MG, CEP 37902-026, Brasil
              </address>

              <div className="my-7 h-px bg-slate-200" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-slate-500">
                  Atendimento presencial em Passos/MG e consultoria digital segura em todo o território nacional
                </p>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-900 transition-colors hover:border-amber-600 hover:text-amber-600 shadow-xs"
                >
                  Abrir no Google Maps <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Footer CTA Strip */}
        <section className="bg-amber-600 px-5 py-14 text-white sm:px-8 sm:py-16 lg:px-12 shadow-inner">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-100">
                AUGUSTO LIMA ADVOCACIA · PASSOS - MG
              </p>
              <h2 className="mt-3 max-w-2xl font-display text-3xl sm:text-4xl font-extrabold leading-tight text-white">
                Pronto para defender seus direitos e renegociar suas dívidas com quem entende da lei?
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá, Dr. Augusto. Gostaria de agendar um atendimento inicial para avaliar meu caso."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-slate-950 px-7 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-xl transition-all hover:-translate-y-0.5 hover:bg-black"
            >
              <WhatsAppIcon size={17} /> Falar no WhatsApp <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#090a0f] px-5 py-14 text-white sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <div className="inline-flex">
                <Image
                  src="/logo-augusto-lima-header.png"
                  width={380}
                  height={130}
                  alt="Augusto Lima Advocacia"
                  className="h-12 w-auto object-contain sm:h-[62px]"
                />
              </div>
              <p className="mt-5 max-w-xs text-xs leading-relaxed text-slate-400">
                Advocacia estratégica, rigor técnico e excelência em Direito Bancário,
                Passivos Empresariais, Cível e Trabalhista. Sede na Av. Arlindo
                Figueiredo em Passos - MG e atendimento digital em todo o Brasil.
              </p>
              <p className="mt-3 text-xs font-bold text-amber-400">
                Avaliação 5,0 ★ no Google (70 avaliações)
              </p>
            </div>

            <div>
              <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-400">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-slate-300 font-medium">
                <a className="footer-link" href="#inicio">
                  Início
                </a>
                <a className="footer-link" href="#sobre">
                  Sobre Nós & Equipe
                </a>
                <a className="footer-link" href="#atuacao">
                  Áreas de Atuação
                </a>
                <a className="footer-link" href="#manifesto">
                  Foco em Direito Bancário
                </a>
                <a className="footer-link" href="#artigos">
                  Análises Jurídicas
                </a>
                <a className="footer-link" href="#avaliacoes">
                  Avaliações no Google (70)
                </a>
                <a className="footer-link" href="#contato">
                  Contato & Sede
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-400">
                Contato Direto
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-slate-300 font-medium">
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
                  <InstagramIcon size={15} className="shrink-0" /> @advaugustolima
                </a>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-start gap-2"
                >
                  <MapPin size={15} className="mt-0.5 shrink-0" />
                  <span>Av. Arlindo Figueiredo, 124, Passos - MG</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-[10px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Augusto Lima Advocacia. Todos os direitos reservados.
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
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-2xl border border-slate-200 bg-white p-7 shadow-2xl sm:max-w-xl sm:rounded-2xl sm:p-10"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da área"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-full border border-slate-200 text-slate-700 transition-colors hover:border-amber-600 hover:text-amber-600 cursor-pointer"
                >
                  <X size={18} />
                </button>

                <p className="eyebrow">ÁREA DE ATUAÇÃO ESTRATÉGICA</p>

                <h2
                  id="area-dialog-title"
                  className="mt-4 max-w-sm pr-10 font-display text-2xl sm:text-3xl font-bold leading-snug text-slate-950"
                >
                  {activeArea.title}
                </h2>

                <p className="mt-5 text-sm leading-relaxed text-slate-600">
                  {activeArea.details}
                </p>

                <div className="mt-6 border-t border-slate-200 pt-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-900">
                    Principais demandas e serviços atendidos:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-sm text-slate-800"
                      >
                        <span className="size-2 rounded-full bg-amber-600 shrink-0" />
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
                    className="px-5 py-3 text-xs font-bold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
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
