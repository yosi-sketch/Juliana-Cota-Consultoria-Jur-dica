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
  Building2,
  CheckCircle2,
  Clock,
  FileCheck,
  FileText,
  HeartHandshake,
  Mail,
  MapPin,
  Menu,
  Phone,
  Scale,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  X,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

// Informações Oficiais de Contato & Redes Sociais
const WHATSAPP_NUMBER = "5531999405869";
const PHONE_DISPLAY = "(31) 99940-5869";
const EMAIL_CONTACT = "contato@julianacota.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/julianacota.adv/";
const GOOGLE_MAPS_URL =
  "https://maps.google.com/?q=Av.+Get%C3%BAlio+Vargas,+5368+-+Sl+02/03+-+Carneirinhos,+Jo%C3%A3o+Monlevade+-+MG,+35930-003";

function getWhatsAppUrl(message?: string) {
  const defaultText =
    "Olá, Dra. Juliana Cota. Gostaria de solicitar uma consulta jurídica e avaliação do meu caso no escritório Juliana Cota Consultoria Jurídica & Advocacia.";
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
    id: "direito-do-trabalho",
    title: "Direito do Trabalho & Defesa do Trabalhador",
    icon: Briefcase,
    tag: "CLT · Rescisão Indireta · Verbas",
    summary:
      "Defesa incisiva dos direitos dos trabalhadores: rescisão indireta, reversão de justa causa abusiva, horas extras, adicionais e acidentes de trabalho.",
    details:
      "O trabalhador não deve suportar ilegalidades, atrasos reiterados ou condições degradantes. A legislação trabalhista brasileira (CLT) garante instrumentos protetivos fundamentais. Quando a empresa descumpre o contrato, atuamos com rigor técnico para buscar a rescisão indireta (a 'demissão da empresa pelo empregado') com recebimento de todas as verbas rescisórias, FGTS com 40%, liberação de guias do seguro-desemprego e indenizações cabíveis.",
    topics: [
      "Rescisão Indireta: quando a empresa atrasa salários, recolhimento de FGTS ou comete falta grave",
      "Reversão de Demissão por Justa Causa indevida ou desproporcional com liberação total de benefícios",
      "Cobrança de horas extras, intervalos de almoço suprimidos e adicional noturno",
      "Adicionais de Insalubridade e Periculosidade para ambientes nocivos ou perigosos",
      "Indenizações por Acidente de Trabalho e Doenças Ocupacionais (LER/DORT, burnout, sequelas)",
      "Reconhecimento de vínculo empregatício de trabalhadores sem carteira assinada",
    ],
    whatsAppText:
      "Olá, Dra. Juliana Cota. Gostaria de solicitar uma análise trabalhista do meu caso (rescisão, direitos ou demissão).",
  },
  {
    id: "consultoria-empresarial",
    title: "Consultoria Trabalhista & Compliance Empresarial",
    icon: Building2,
    tag: "Prevenção · Contratos · Blindagem",
    summary:
      "Assessoria jurídica preventiva e estratégica para empresas, gestores e departamentos de RH: redução drástica de passivos e defesa sólida na Justiça do Trabalho.",
    details:
      "Passivos trabalhistas ocultos podem comprometer a rentabilidade e o patrimônio de um negócio. Nossa consultoria empresarial atua lado a lado com a diretoria para auditar rotinas de contratação, jornada, cargos e salários, adequando a operação às normas da CLT e da jurisprudência consolidada, além de apresentar defesas de alto nível técnico em reclamações trabalhistas.",
    topics: [
      "Auditoria jurídica preventiva de rotinas de departamento pessoal e RH",
      "Elaboração e revisão de contratos de trabalho, termos de sigilo (NDA) e acordos de compensação",
      "Assessoria em contratação e gestão de prestadores de serviços autônomos e pessoas jurídicas (PJ)",
      "Defesa estratégica em Reclamatórias Trabalhistas e procedimentos do Ministério Público do Trabalho",
      "Orientação em demissões complexas e aplicação fundamentada de penalidades disciplinares",
      "Negociações coletivas sindicais e mediação de acordos extrajudiciais seguros",
    ],
    whatsAppText:
      "Olá, Dra. Juliana Cota. Gostaria de conhecer os serviços de consultoria jurídica trabalhista preventiva para minha empresa.",
  },
  {
    id: "direito-civil-contratos",
    title: "Direito Civil & Contratos Estratégicos",
    icon: FileCheck,
    tag: "Contratos · Indenizações · Cobranças",
    summary:
      "Elaboração e revisão minuciosa de contratos, reparação de danos materiais e morais, cobranças judiciais e extrajudiciais e resolução segura de disputas civis.",
    details:
      "A segurança patrimonial e a tranquilidade nas relações cotidianas dependem de instrumentos contratuais claros e juridicamente blindados. Conduzimos ações indenizatórias por descumprimento de deveres, cobranças eficazes de créditos vencidos e negociações extrajudiciais com foco na máxima proteção dos interesses de nossos clientes.",
    topics: [
      "Elaboração, análise e revisão de instrumentos contratuais civis e comerciais sob medida",
      "Ações de Indenização por Danos Morais, Danos Materiais e Lucros Cessantes",
      "Cobrança judicial e extrajudicial de títulos de crédito, duplicatas, notas promissórias e contratos",
      "Rescisão contratual motivada e aplicação judicial de multas e cláusulas penais",
      "Notificações extrajudiciais estruturadas para resolução célere sem necessidade de litígio",
      "Defesa e propositura de ações possessórias, despejos e litígios imobiliários",
    ],
    whatsAppText:
      "Olá, Dra. Juliana Cota. Preciso de auxílio jurídico em Direito Civil (contratos, cobrança ou indenização).",
  },
  {
    id: "direito-familia-sucessoes",
    title: "Direito de Família & Sucessões",
    icon: Users,
    tag: "Divórcio · Pensão · Inventários",
    summary:
      "Atendimento sensível, acolhedor e estratégico em divórcios judiciais e extrajudiciais, pensão alimentícia, guarda de filhos, partilha de bens e inventários.",
    details:
      "Questões familiares demandam respeito, escuta qualificada e postura firme para preservar os direitos e a dignidade das pessoas envolvidas. Buscamos sempre que possível a via do consenso inteligente e ágil (inclusive em cartório), atuando com vigor técnico nos casos contenciosos para garantir a justa partilha e o bem-estar dos filhos.",
    topics: [
      "Divórcio consensual e litigioso com partilha estratégica de patrimônio do casal",
      "Divórcio extrajudicial rápido em cartório de notas sem burocracia desnecessária",
      "Ações de Pensão Alimentícia: fixação inicial, pedido de revisão (redução ou aumento) e execução",
      "Regulamentação de guarda (compartilhada ou unilateral) e convivência paterno/materno-filial",
      "Inventário judicial e extrajudicial em cartório, arrolamento de bens e planejamento sucessório",
      "Reconhecimento e dissolução de união estável com proteção dos direitos patrimoniais",
    ],
    whatsAppText:
      "Olá, Dra. Juliana Cota. Gostaria de orientações jurídicas sobre Direito de Família (divórcio, pensão ou inventário).",
  },
  {
    id: "direito-previdenciario",
    title: "Direito Previdenciário & Benefícios do INSS",
    icon: Award,
    tag: "Aposentadorias · BPC/LOAS · Auxílios",
    summary:
      "Concessão ágil de aposentadorias urbanas e rurais, BPC/LOAS para idosos e PCD, auxílio-doença, pensão por morte e reversão de indeferimentos do INSS.",
    details:
      "Anos de trabalho e contribuição merecem ser respeitados. Diante das frequentes negativas infundadas e da complexidade das regras de transição do INSS, realizamos o diagnóstico detalhado do seu histórico contributivo (CNIS) e ingressamos com medidas administrativas e ações perante a Justiça Federal para assegurar o melhor benefício possível.",
    topics: [
      "Concessão de Aposentadoria por Idade Urbana e Rural, Tempo de Contribuição e Especial",
      "Benefício de Prestação Continuada (BPC/LOAS) para idosos com 65+ anos e pessoas com deficiência",
      "Auxílio por Incapacidade Temporária (auxílio-doença) e Aposentadoria por Incapacidade Permanente",
      "Auxílio-Acidente mensal indenizatório cumulativo com o salário",
      "Pensão por morte para dependentes com comprovação segura de união estável",
      "Planejamento Previdenciário e cálculo da regra mais vantajosa para maximizar o valor mensal",
    ],
    whatsAppText:
      "Olá, Dra. Juliana Cota. Gostaria de consultar minha situação perante o INSS (aposentadoria ou benefício).",
  },
  {
    id: "consultoria-estrategica",
    title: "Consultoria Jurídica & Resolução de Conflitos",
    icon: Scale,
    tag: "Pareceres · Conciliação · Tribunais",
    summary:
      "Assessoria consultiva sob medida para tomadas de decisão importantes, pareceres técnicos fundamentados e representação combativa perante tribunais.",
    details:
      "Cada cliente é único e merece um plano de ação personalizado. Unimos profundo conhecimento técnico, análise detalhada de documentos e facilidade de comunicação para apresentar respostas claras sobre a viabilidade jurídica de cada decisão, mitigando riscos antes que se transformem em litígios.",
    topics: [
      "Emissão de pareceres e opiniões legais para respaldar decisões pessoais e corporativas",
      "Negociação estratégica e condução de mediações pré-processuais com foco em acordos justos",
      "Acompanhamento processual constante com relatórios periódicos em linguagem simples",
      "Atuação combativa perante órgãos administrativos, Procon e instâncias judiciais",
      "Defesa dos direitos do consumidor em contratos abusivos, falhas de serviços e cobranças indevidas",
      "Atendimento prioritário e contato direto com a titular em todos os estágios da causa",
    ],
    whatsAppText:
      "Olá, Dra. Juliana Cota. Gostaria de agendar uma consultoria jurídica estratégica para analisar minha demanda.",
  },
];

// Avaliações Reais de Clientes no Google Meu Negócio (Nota 5,0 estrelas · 97 avaliações)
const clientReviews = [
  {
    name: "Flaviano Rafael",
    reviewsCount: "Local Guide · 12 avaliações · 10 fotos",
    date: "Há 7 meses",
    highlight: "Exatamente profissional! Me tratou com profissionalismo e confiança.",
    content:
      "Exatamente profissional! Me tratou com profissionalismo e confiança. Estou muito satisfeito com o trabalho dela e recomendo com toda certeza.",
  },
  {
    name: "nalva oliveira",
    reviewsCount: "8 avaliações",
    date: "Há 1 ano",
    highlight: "Conhecimento profundo e clareza em cada etapa, super segura!",
    content:
      "A Juliana foi extremamente atenciosa e dedicada ao longo de todo o processo. Demonstrou conhecimento profundo e clareza em cada etapa, o que me deixou super segura.",
  },
  {
    name: "Francislaine Cristina",
    reviewsCount: "4 avaliações",
    date: "Há 7 meses",
    highlight: "Competência extraordinária, pontualidade e presteza fora do comum.",
    content:
      "Excelente profissional, uma competência extraordinária, pontualidade e presteza fora do comum. Super indico!",
  },
  {
    name: "Larissa Magalhães",
    reviewsCount: "2 avaliações",
    date: "Há 2 anos",
    highlight: "Excelente escritório! Qualificada e com atendimento personalizado.",
    content:
      "Excelente escritório de advocacia! A equipe de advogados é extremamente qualificada e especializada em diversas áreas do Direito. Recomendo fortemente para quem busca um serviço jurídico de alta qualidade e com atendimento personalizado.",
  },
  {
    name: "Brener Barony",
    reviewsCount: "2 avaliações",
    date: "Há 2 anos",
    highlight: "Educação, carinho e competência excepcional com seus clientes.",
    content:
      "Uma profissional muito comprometida e competente na sua área de trabalho, não tenho palavras pra descrever sua educação e carinho com seus clientes, por isso super indico a Dra. Juliana como advogada, vocês não têm noção da grande profissional!",
  },
  {
    name: "Cidinha Xavier",
    reviewsCount: "2 avaliações",
    date: "Há 2 meses",
    highlight: "Mulher de pulso firme, zelo, ética e decidida no que faz!",
    content:
      "Excelente profissional, exerce seu trabalho com zelo, ética. Mulher de pulso firme, decidida no que faz! Parabéns pelo seu profissionalismo 👏👏👏",
  },
  {
    name: "Sara Cunha",
    reviewsCount: "1 avaliação",
    date: "Há 1 ano",
    highlight: "Bem explicativa sobre o que pode ser feito e com retorno rápido.",
    content:
      "Ótima profissional, responsável bem explicativa nos casos do que pode ser feito e o que pode ocorrer, retorno rápido.",
  },
  {
    name: "Allex Souza",
    reviewsCount: "2 avaliações",
    date: "Há 1 ano",
    highlight: "Excelência em ganhos, responsabilidade e parceria que gera credibilidade.",
    content:
      "Sem dúvidas uma grande profissional, excelência em ganhos. Responsabilidade grande aos clientes. Tendo total parceria e criando credibilidade e confiança a quem procura. Super recomendo trabalho excepcional tá de Parabéns!",
  },
  {
    name: "antonio fraga",
    reviewsCount: "1 avaliação",
    date: "Há 1 ano",
    highlight: "Comunica-se bem e resolve os problemas com máxima eficiência.",
    content:
      "Juliana é eficiente, comunica-se bem e resolve os problemas com eficiência. Recomendo fortemente seu trabalho.",
  },
  {
    name: "Wallisson Magalhães Martins",
    reviewsCount: "3 avaliações",
    date: "Há 1 ano",
    highlight: "Excelente atendimento, a Dra. Juliana foi muito cuidadosa com meu caso.",
    content:
      "Excelente atendimento. A Dra. Juliana foi muito cuidadosa com meu caso. Recomendo muito.",
  },
  {
    name: "Graciele Cristina",
    reviewsCount: "3 avaliações · 1 foto",
    date: "Há 2 anos",
    highlight: "Muito simpática, prestativa, auxilia muito bem e atende com agilidade!",
    content:
      "Gostaria de parabenizar a advogada Juliana pelo atendimento, muito simpática e prestativa, auxilia muito bem, e atende com agilidade sempre!",
  },
  {
    name: "Jaqueline Cristina",
    reviewsCount: "1 avaliação",
    date: "Há 7 meses",
    highlight: "Superou as expectativas, super indico excelente profissional!",
    content:
      "Superou as expectativas, super indico excelente profissional gratidão por tudo.",
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
      <div className={light ? "eyebrow-light mb-4" : "eyebrow mb-4"}>{eyebrow}</div>
      <h2
        className={
          light
            ? "font-display text-3xl sm:text-5xl lg:text-[3.25rem] font-bold leading-[1.12] tracking-[-0.015em] text-white"
            : "font-display text-3xl sm:text-5xl lg:text-[3.25rem] font-bold leading-[1.12] tracking-[-0.015em] text-[#0a130c]"
        }
      >
        {children}
      </h2>
      {description && (
        <p
          className={
            light
              ? "mt-5 max-w-xl text-[15px] leading-relaxed text-slate-300 font-normal"
              : "mt-5 max-w-xl text-[15px] leading-relaxed text-[#4b5a4d] font-normal"
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
      <main className="overflow-hidden bg-[#fcfbf8] text-[#0a130c]">
        {/* Navigation Bar */}
        <header className="sticky top-0 z-40 border-b border-[#cda34f]/25 bg-[#0a110b]/95 backdrop-blur-xl">
          <div className="mx-auto flex h-[95px] max-w-7xl items-center justify-between gap-5 px-5 sm:h-[110px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label="Juliana Cota Consultoria Jurídica & Advocacia"
              onClick={closeMenu}
              className="flex items-center gap-3 transition-opacity hover:opacity-95 py-2"
            >
              {/* Official 3D Gold Logo with transparent alpha */}
              <Image
                src="/logo.png"
                width={1774}
                height={887}
                alt="Juliana Cota Consultoria Jurídica & Advocacia"
                priority
                className="h-11 w-auto object-contain sm:h-14 lg:h-[60px]"
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
                Áreas de Atuação
              </a>
              <a className="nav-link" href="#manifesto">
                Defesa dos Direitos
              </a>
              <a className="nav-link" href="#orientacoes">
                Orientações
              </a>
              <a className="nav-link" href="#avaliacoes">
                Avaliações (97)
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
                aria-label="Instagram da Dra. Juliana Cota"
                className="grid size-10 place-items-center rounded-full border border-[#cda34f]/30 text-slate-300 transition-all hover:border-[#cda34f] hover:bg-[#cda34f]/10 hover:text-white"
              >
                <InstagramIcon size={17} />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp da Dra. Juliana Cota"
                className="grid size-10 place-items-center rounded-full border border-[#cda34f]/30 text-slate-300 transition-all hover:border-[#cda34f] hover:bg-[#cda34f]/10 hover:text-white"
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
              className="grid size-11 place-items-center rounded-full border border-[#cda34f]/30 text-white lg:hidden"
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
                className="overflow-hidden border-t border-[#cda34f]/20 bg-[#0a110b] px-6 lg:hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1 py-4">
                  {[
                    ["Início", "#inicio"],
                    ["Sobre Nós & Dra. Juliana", "#sobre"],
                    ["Áreas de Atuação", "#atuacao"],
                    ["Defesa de Direitos & CLT", "#manifesto"],
                    ["Orientações & Dicas Jurídicas", "#orientacoes"],
                    ["Avaliações no Google (97)", "#avaliacoes"],
                    ["Contato & Sede", "#contato"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={closeMenu}
                      className="py-3 text-sm font-semibold text-slate-200 hover:text-[#eed083]"
                    >
                      {label}
                    </a>
                  ))}
                  <div className="mt-3 flex flex-col gap-2">
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#977128] via-[#cda34f] to-[#eed083] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-[#0a130c] shadow-md transition-all hover:brightness-110"
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <WhatsAppIcon size={16} /> Falar no WhatsApp
                    </a>
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-[#cda34f]/30 bg-white/5 px-5 py-3 text-xs font-semibold text-white/90 hover:bg-white/10"
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <InstagramIcon size={15} /> Siga @julianacota.adv
                    </a>
                  </div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        {/* Hero Section — Nobre Fundo Escuro Esmeralda & Dourado Imperial */}
        <section
          id="inicio"
          className="relative isolate scroll-mt-24 border-b border-[#cda34f]/25 bg-[#0a110b] text-white"
        >
          {/* Luz ambiente de destaque dourada e esmeralda */}
          <div className="pointer-events-none absolute -right-32 top-8 -z-10 size-[38rem] rounded-full bg-gradient-to-bl from-[#cda34f]/15 via-[#152217]/50 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-10 -z-10 size-[32rem] rounded-full bg-[#111a13]/90 blur-3xl" />

          <div className="mx-auto grid min-h-[660px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[720px] lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:px-12 lg:py-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:py-6"
            >
              <motion.div variants={reveal} className="mb-6 flex flex-col items-start gap-3">
                <span className="eyebrow-light">Juliana Cota Consultoria Jurídica & Advocacia</span>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#cda34f]/35 bg-[#152217]/85 px-4 py-1.5 text-[11px] font-semibold text-[#fae4a8] shadow-xs backdrop-blur-md">
                  <span className="size-2 rounded-full bg-[#cda34f] animate-pulse" />
                  Em frente ao Supermercado BH · Av. Getúlio Vargas, 5368 · Carneirinhos · João Monlevade - MG
                </span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="max-w-[760px] font-display text-[2.85rem] font-bold leading-[1.06] tracking-[-0.02em] text-white sm:text-6xl lg:text-[4.65rem]"
              >
                Defesa incisiva dos seus direitos e assessoria com{" "}
                <span className="block mt-2 font-display italic text-gold-gradient font-normal">
                  excelência, ética e segurança.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-7 max-w-xl text-[15px] leading-relaxed text-slate-300 sm:text-base sm:leading-8 font-normal"
              >
                Com sólida atuação em <strong className="text-white font-semibold">Direito do Trabalho</strong>,
                defesa de trabalhadores, consultoria empresarial e causas estratégicas, a{" "}
                <strong className="text-[#fae4a8] font-semibold">Dra. Juliana Cota</strong> oferece uma advocacia
                combativa, ética e acolhedora. Atendimento presencial de excelência em Carneirinhos, João Monlevade/MG,
                e consultoria digital ágil para clientes em todo o país.
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
                  <WhatsAppIcon size={16} /> Falar com a Dra. Juliana Cota
                </GlowingButton>
                <a
                  href="#atuacao"
                  className="group inline-flex items-center gap-2 px-3 py-3 text-sm font-bold text-slate-200 transition-colors hover:text-[#eed083]"
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
                className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-white/10 pt-6 text-xs text-slate-300"
              >
                <span className="inline-flex items-center gap-2 font-medium">
                  <Star size={16} className="fill-[#cda34f] text-[#cda34f]" />{" "}
                  <strong className="text-white font-bold">5,0 estrelas</strong> no Google (97 avaliações)
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <ShieldCheck size={16} className="text-[#cda34f]" /> Especialista
                  em Direito do Trabalho & Consultoria
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <MapPin size={16} className="text-[#cda34f]" /> Sede em
                  João Monlevade e atendimento on-line
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
              {/* Luxury ambient aura */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#cda34f]/30 via-[#152217]/30 to-transparent blur-2xl -z-10" />

              {/* Architectural outer hairline gold frame */}
              <div className="absolute -inset-2.5 rounded-2xl border border-[#cda34f]/35 pointer-events-none" />

              {/* Main portrait executive card */}
              <div className="relative aspect-[0.76] overflow-hidden rounded-2xl bg-[#0a110b] shadow-2xl ring-1 ring-[#cda34f]/35">
                <Image
                  src="/juliana-cota-hero.jpg"
                  alt="Dra. Juliana Cota — Consultoria Jurídica & Advocacia"
                  fill
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 42vw"
                  className="object-cover object-[50%_25%]"
                />

                {/* Gradient vignette on bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0a110b] via-[#0a110b]/60 to-transparent" />

                {/* Executive name overlay */}
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3 text-white sm:bottom-7 sm:left-7 sm:right-7">
                  <div>
                    <p className="font-display text-2xl font-bold tracking-tight text-white">
                      Dra. Juliana Cota
                    </p>
                    <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#fae4a8]">
                      Consultoria Jurídica & Advocacia
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-[#cda34f]/40 bg-[#0a110b]/80 text-[#fae4a8] backdrop-blur-md shadow-lg">
                    <Scale size={18} />
                  </span>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -left-3 top-[10%] rounded-full border border-[#cda34f]/40 bg-[#111a13]/95 px-4 py-2.5 text-[10px] font-bold tracking-[0.16em] text-[#fae4a8] shadow-xl backdrop-blur-md sm:-left-6 sm:px-5">
                CONSULTORIA JURÍDICA & ADVOCACIA
              </div>

              <div className="absolute -right-3 bottom-[18%] rounded-2xl border border-[#cda34f]/40 bg-[#111a13]/95 p-4 shadow-2xl backdrop-blur-md sm:-right-6">
                <div className="flex items-center gap-2 text-[#cda34f]">
                  <Star size={16} className="fill-[#cda34f]" />
                  <span className="font-display text-lg font-bold text-white">
                    5,0 / 5,0
                  </span>
                </div>
                <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-300">
                  97 Avaliações no Google
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Highlights Banner — Nobre Fundo Corporativo */}
        <section
          aria-label="Credenciais e Destaques"
          className="border-b border-[#cda34f]/20 bg-[#111a13] text-white"
        >
          <div className="mx-auto grid max-w-7xl gap-7 px-5 py-8 sm:grid-cols-4 sm:gap-4 sm:px-8 lg:px-12">
            {[
              ["5,0 ★", "nota máxima com 97 avaliações autênticas no Google"],
              ["Defesa Firme", "pulso firme e ética na garantia dos seus direitos"],
              ["João Monlevade", "Av. Getúlio Vargas, 5368 (em frente Supermercado BH)"],
              ["Brasil Inteiro", "atendimento presencial acolhedor e digital ágil"],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={
                  index > 0
                    ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-white/10"
                    : "flex items-center gap-4 sm:justify-center"
                }
              >
                <span className="font-display text-3xl sm:text-4xl font-bold text-gold-gradient">
                  {value}
                </span>
                <span className="max-w-[155px] text-[11px] font-medium leading-5 text-slate-300">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Sobre Nós / Dra. Juliana Cota — Warm Alabaster Stone */}
        <section
          id="sobre"
          className="scroll-mt-24 bg-[#faf9f5] py-20 sm:py-28 lg:py-32"
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
              <div className="relative aspect-[1.08] overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 border border-[#cda34f]/25">
                <Image
                  src="/juliana-cota-sobre.jpg"
                  alt="Dra. Juliana Cota em atendimento e consultoria jurídica especializada"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover object-[50%_25%]"
                />
              </div>

              {/* Authority card */}
              <div className="absolute -bottom-6 right-3 max-w-[320px] rounded-xl border border-[#cda34f]/35 bg-white p-5 shadow-2xl sm:-right-6 sm:p-6">
                <div className="flex items-center gap-2 text-[#977128]">
                  <ShieldCheck size={18} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em]">
                    Atendimento de Pulso Firme
                  </p>
                </div>
                <p className="mt-1.5 font-display text-lg font-bold leading-snug text-[#0a130c]">
                  Dra. Juliana Cota
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[#4b5a4d]">
                  Atendimento acolhedor, transparente e combativo na defesa incansável
                  dos direitos legítimos de cada trabalhador e cliente.
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 rounded-tl-2xl border-l-2 border-t-2 border-[#cda34f]/50 sm:-left-6 sm:-top-6 sm:size-32" />
            </motion.div>

            {/* Text description */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              <motion.div variants={reveal}>
                <span className="eyebrow mb-4">sobre nós · juliana cota advocacia</span>
              </motion.div>

              <motion.h2
                variants={reveal}
                className="font-display text-3xl sm:text-5xl lg:text-[3.35rem] font-bold leading-[1.08] tracking-[-0.015em] text-[#0a130c]"
              >
                Defesa incansável dos seus direitos com{" "}
                <span className="font-display italic text-[#977128]">
                  competência, acolhimento e agilidade.
                </span>
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-relaxed text-[#4b5a4d] font-normal"
              >
                A <strong className="text-[#0a130c] font-semibold">Juliana Cota Consultoria Jurídica & Advocacia</strong>,
                conduzida com determinação e rigor técnico pela{" "}
                <strong className="text-[#0a130c] font-semibold">Dra. Juliana Cota</strong>, é reconhecida em João Monlevade
                e Minas Gerais pelo alto padrão ético, trato humanizado e defesa resolutiva de causas trabalhistas,
                empresariais e civis.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#4b5a4d] font-normal"
              >
                Classificado com a nota máxima de <strong className="text-[#0a130c] font-semibold">5,0 estrelas no Google (97 avaliações autênticas)</strong>,
                nosso escritório se destaca pelo carinho no acolhimento de cada cliente, clareza didática na explicação
                de cada etapa do processo e postura de pulso firme perante tribunais e mesas de negociação.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2"
              >
                <div className="flex items-center gap-2.5 text-xs text-[#0a130c] font-semibold">
                  <CheckCircle2 size={16} className="text-[#977128] shrink-0" />
                  <span>Auditoria minuciosa de direitos e rescisões contratuais</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#0a130c] font-semibold">
                  <CheckCircle2 size={16} className="text-[#977128] shrink-0" />
                  <span>Acompanhamento direto e transparente no WhatsApp</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#0a130c] font-semibold">
                  <CheckCircle2 size={16} className="text-[#977128] shrink-0" />
                  <span>Sede privilegiada em frente ao Supermercado BH em Carneirinhos</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#0a130c] font-semibold">
                  <CheckCircle2 size={16} className="text-[#977128] shrink-0" />
                  <span>Consultoria presencial acolhedora e suporte digital seguro</span>
                </div>
              </motion.div>

              <motion.div variants={reveal} className="mt-9">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Juliana Cota. Gostaria de entender como o escritório pode me auxiliar com a minha causa jurídica."
                  )}
                  target="_blank"
                  size="md"
                  className="rounded-full shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar com a Dra. Juliana Cota
                </GlowingButton>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Manifesto / Foco Trabalhista & Direitos — Deep Dark Section */}
        <section
          id="manifesto"
          className="relative isolate overflow-hidden bg-[#0a110b] py-20 text-white sm:py-28 lg:py-32"
        >
          <div className="pointer-events-none absolute -left-28 top-1/4 size-96 rounded-full bg-[#cda34f]/15 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-1/4 size-96 rounded-full bg-[#cda34f]/10 blur-3xl" />

          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-3xl text-center">
              <span className="eyebrow-light mb-4">posicionamento estratégico</span>
              <h2 className="mt-4 font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-[-0.015em] text-white">
                Você não precisa aceitar abusos no trabalho{" "}
                <span className="font-display italic text-gold-gradient font-normal">
                  nem abrir mão do que a lei garante a você.
                </span>
              </h2>
            </div>

            <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#cda34f]/30 bg-[#152217]/85 p-8 backdrop-blur-md hover:border-[#cda34f]/60 transition-colors shadow-xl">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#cda34f]/20 text-[#fae4a8]">
                  <Briefcase size={24} />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold text-white">
                  Para o Trabalhador que Teve Direitos Violados
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  Atraso recorrente de salários, falta de depósito do FGTS, assédio moral,
                  ambientes insalubres sem EPI ou demissões injustas não devem ser tolerados.
                  Atuamos para requerer a Rescisão Indireta, reverter demissões abusivas e
                  cobrar judicialmente todas as verbas, horas extras e indenizações devidas.
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs font-bold text-[#fae4a8]">
                  <CheckCircle2 size={16} /> Rescisão Indireta & Proteção Integral ao Trabalhador
                </div>
              </div>

              <div className="rounded-2xl border border-[#cda34f]/30 bg-[#152217]/85 p-8 backdrop-blur-md hover:border-[#cda34f]/60 transition-colors shadow-xl">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#cda34f]/20 text-[#fae4a8]">
                  <Building2 size={24} />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold text-white">
                  Para Empresas que Buscam Segurança e Conformidade
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  Gerir colaboradores sem assessoria jurídica preventiva expõe a organização
                  a passivos milionários e processos desgastantes. Nossa consultoria audita rotinas,
                  elabora contratos robustos e atua na defesa combativa de reclamatórias para
                  proteger o patrimônio da sua empresa.
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs font-bold text-[#fae4a8]">
                  <CheckCircle2 size={16} /> Auditoria Trabalhista Preventiva & Redução de Riscos
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Juliana Cota. Gostaria de enviar os dados da minha situação para uma avaliação inicial do meu caso."
                )}
                target="_blank"
                size="lg"
                className="rounded-full shadow-lg"
              >
                <WhatsAppIcon size={17} /> Enviar meu caso para avaliação no WhatsApp
              </GlowingButton>
              <p className="mt-3 text-xs text-slate-400">
                Atendimento sigiloso, transparente e com retorno prioritário pela Dra. Juliana Cota.
              </p>
            </div>
          </div>
        </section>

        {/* Áreas de Atuação — Alabaster Background */}
        <section
          id="atuacao"
          className="scroll-mt-24 bg-[#faf9f5] py-20 sm:py-28 lg:py-32"
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
                eyebrow="áreas de atuação especializada"
                description="Assessoria jurídica dedicada e personalizada com alto rigor técnico para defender o seu patrimônio, sua dignidade e os seus direitos."
              >
                Soluções estratégicas em{" "}
                <span className="font-display italic text-[#977128]">
                  Consultoria Jurídica & Advocacia.
                </span>
              </Heading>
              <p className="max-w-[260px] pb-1 text-xs leading-relaxed text-[#4b5a4d] font-medium">
                Selecione uma área para visualizar o detalhamento completo dos serviços
                e conversar diretamente com a Dra. Juliana Cota.
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
                    className="group flex min-h-[350px] flex-col rounded-2xl border border-[#cda34f]/25 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#cda34f]/60 hover:shadow-xl"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-xl bg-[#fbf3e2] text-[#977128] transition-colors group-hover:bg-[#cda34f] group-hover:text-white">
                        <Icon size={22} strokeWidth={1.8} />
                      </span>
                      <span className="font-display font-bold text-2xl text-slate-300 group-hover:text-[#cda34f] transition-colors">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-6">
                      <span className="inline-block rounded-md bg-[#fbf3e2] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#977128]">
                        {area.tag}
                      </span>
                      <h3 className="mt-3 font-display font-bold text-xl leading-snug text-[#0a130c]">
                        {area.title}
                      </h3>
                      <p className="mt-3 text-[13px] leading-relaxed text-[#4b5a4d]">
                        {area.summary}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveArea(area)}
                      className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[11px] font-bold uppercase tracking-[0.16em] text-[#977128] hover:text-[#cda34f] cursor-pointer"
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

        {/* Informação e Análise Jurídica (Artigos Editoriais Práticos da Dra. Juliana) */}
        <section id="orientacoes" className="bg-[#111a13] py-20 sm:py-28 text-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid items-end gap-7 md:grid-cols-[1fr_auto]">
              <Heading
                eyebrow="análise & orientações trabalhistas"
                light
                description="Esclarecimentos práticos da Dra. Juliana Cota sobre direitos dos trabalhadores, rescisão indireta e aplicação segura da CLT."
              >
                Esclarecimentos práticos para{" "}
                <span className="font-display italic text-gold-gradient font-normal">proteger os seus direitos.</span>
              </Heading>
              <a
                href={getWhatsAppUrl(
                  "Olá, Dra. Juliana Cota. Acompanho seus conteúdos sobre Direito do Trabalho e gostaria de tirar uma dúvida jurídica."
                )}
                target="_blank"
                rel="noreferrer"
                className="group mb-1 inline-flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#fae4a8] hover:text-white"
              >
                Fazer uma pergunta jurídica <ArrowUpRight size={15} />
              </a>
            </div>

            <div className="mt-11 grid gap-8 md:grid-cols-2">
              {/* Card 1: Rescisão Indireta */}
              <motion.article
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#cda34f]/30 bg-[#0a110b] text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#cda34f]/60"
              >
                <div className="relative aspect-[1080/700] w-full overflow-hidden bg-slate-900">
                  <Image
                    src="/artigo-rescisao-indireta.jpg"
                    alt="Rescisão Indireta do Contrato de Trabalho — Juliana Cota Advocacia"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-[50%_25%] transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-7 sm:p-8">
                  <div>
                    <span className="inline-block rounded-md bg-[#cda34f]/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#fae4a8]">
                      Direito do Trabalhador & CLT
                    </span>
                    <h3 className="mt-4 font-display font-bold text-2xl leading-snug sm:text-3xl text-white">
                      Rescisão Indireta: Quando o empregado pode &ldquo;demitir&rdquo; a empresa com todos os direitos?
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-slate-300">
                      Quando o empregador atrasa salários reiteradamente, não deposita o FGTS,
                      pratica assédio moral ou impõe riscos desnecessários, o trabalhador não
                      precisa pedir demissão e perder benefícios. Na rescisão indireta, você
                      recebe aviso prévio, saque do FGTS com multa de 40% e seguro-desemprego.
                    </p>
                  </div>
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Juliana Cota. Gostaria de saber se a minha situação na empresa se enquadra em Rescisão Indireta."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#fae4a8] transition-colors hover:text-white"
                  >
                    Analisar meu caso de rescisão <ArrowUpRight size={14} />
                  </a>
                </div>
              </motion.article>

              {/* Card 2: Direitos Trabalhistas e Justa Causa */}
              <motion.article
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#cda34f]/30 bg-[#0a110b] text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#cda34f]/60"
              >
                <div className="relative aspect-[1080/700] w-full overflow-hidden bg-slate-900">
                  <Image
                    src="/artigo-direitos-trabalhistas.jpg"
                    alt="CLT na Prática e Direitos Trabalhistas — Juliana Cota Advocacia"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-[50%_25%] transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-7 sm:p-8">
                  <div>
                    <span className="inline-block rounded-md bg-[#cda34f]/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#fae4a8]">
                      CLT na Prática & Consultoria
                    </span>
                    <h3 className="mt-4 font-display font-bold text-2xl leading-snug sm:text-3xl text-white">
                      Demissão por Justa Causa: Quando ela pode ser aplicada ou revertida na Justiça?
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-slate-300">
                      A justa causa é a penalidade máxima do contrato de trabalho e exige prova
                      robusta, proporcionalidade e imediatidade. Muitas demissões por justa causa
                      são infundadas ou abusivas e podem ser totalmente revertidas judicialmente,
                      restituindo as verbas rescisórias e a honra do trabalhador.
                    </p>
                  </div>
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Juliana Cota. Fui demitido(a) por justa causa ou tenho dúvidas sobre meus direitos rescisórios."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#fae4a8] transition-colors hover:text-white"
                  >
                    Consultar direitos de demissão <ArrowUpRight size={14} />
                  </a>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* Compromisso Profissional e Diferenciais — Deep Dark Velvet */}
        <section className="relative overflow-hidden bg-[#0a110b] py-20 text-white sm:py-28 lg:py-32 border-b border-[#cda34f]/20">
          <div className="pointer-events-none absolute -left-28 top-1/4 size-96 rounded-full bg-[#cda34f]/15 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-1/4 size-96 rounded-full bg-slate-900/40 blur-3xl" />

          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-12">
            <Heading
              eyebrow="nosso compromisso profissional"
              light
              description="A condução de cada demanda com absoluto rigor técnico, escuta acolhedora e postura resolutiva de quem defende seus interesses com firmeza e ética."
            >
              A precisão técnica aliada ao{" "}
              <span className="font-display italic text-gold-gradient font-normal">
                cuidado humano que sua causa exige.
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
                  "Análise minuciosa de documentos e atendimento sob medida",
                  "Examinamos cada folha de ponto, extrato de FGTS, recibo e documento contratual. Elaboramos teses sólidas e personalizadas, sem soluções genéricas ou modelos pré-fabricados.",
                ],
                [
                  "02",
                  "Comunicação direta, ágil e acolhedora no WhatsApp",
                  "Você é mantido informado sobre todos os andamentos da causa com clareza e transparência. Acesso facilitado à Dra. Juliana Cota para esclarecer dúvidas com rapidez e atenção.",
                ],
                [
                  "03",
                  "Postura de pulso firme e busca incansável por resultados",
                  "Atuamos com coragem e firmeza perante tribunais e empresas para que você receba integralmente os direitos que a lei e a justiça asseguram à sua trajetória.",
                ],
              ].map(([number, title, description]) => (
                <motion.div
                  key={number}
                  variants={reveal}
                  className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-6 sm:py-7"
                >
                  <span className="font-display text-2xl font-bold text-gold-gradient">
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

        {/* Avaliações no Google (Depoimentos Autênticos da Dra. Juliana Cota) */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 bg-[#faf9f5] py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:items-center">
              <div>
                <Heading
                  eyebrow="prova social & avaliações reais"
                  description="A reputação da Dra. Juliana Cota é forjada com ética, empatia e vitórias jurídicas. Confira os depoimentos de clientes que confiaram suas causas ao nosso escritório no Google Meu Negócio."
                >
                  Confiança atestada com{" "}
                  <span className="font-display italic text-[#977128]">
                    nota máxima 5,0 por 97 clientes.
                  </span>
                </Heading>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 border-b-2 border-[#977128] pb-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#0a130c] hover:text-[#cda34f]"
                  >
                    Ver todas as avaliações no Google Maps <ArrowUpRight size={15} />
                  </a>
                </div>

                {/* Rating highlights pills */}
                <div className="mt-9 flex flex-wrap gap-2">
                  {[
                    "Nota 5,0 Máxima no Google",
                    "Extremamente profissional",
                    "Competência extraordinária",
                    "Mulher de pulso firme e ética",
                    "Atendimento acolhedor e ágil",
                    "Retorno rápido e explicativo",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 rounded-full border border-[#cda34f]/30 bg-white px-3.5 py-1.5 text-[11px] font-semibold text-[#0a130c] shadow-xs"
                    >
                      <CheckCircle2 size={14} className="text-[#977128]" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Public score box */}
              <div className="relative flex min-h-[260px] flex-col justify-between overflow-hidden rounded-2xl border border-[#cda34f]/35 bg-white p-8 shadow-xl sm:p-10">
                <div className="relative flex items-center justify-between gap-4">
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#4b5a4d]">
                    Avaliações Verificadas · Google Meu Negócio
                  </span>
                  <div className="flex gap-1 text-[#cda34f]" aria-label="5 de 5 estrelas">
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
                    <span className="font-display text-7xl sm:text-8xl font-bold leading-none text-[#0a130c]">
                      5,0
                    </span>
                    <p className="mt-2 text-xs font-bold text-[#977128]">
                      Classificação Máxima de Excelência
                    </p>
                  </div>
                  <div className="pb-1 text-right">
                    <p className="font-display text-3xl font-bold text-gold-gradient">
                      97 avaliações
                    </p>
                    <p className="mt-1 text-xs text-[#4b5a4d] font-medium">
                      Reconhecimento comprovado em João Monlevade - MG
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
                  className="flex flex-col justify-between rounded-2xl border border-[#cda34f]/20 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#cda34f]/50 hover:shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-0.5 text-[#cda34f]">
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

                    <p className="mt-4 text-xs font-bold text-[#0a130c]">
                      &ldquo;{review.highlight}&rdquo;
                    </p>

                    <p className="mt-2.5 text-[13px] leading-relaxed text-[#4b5a4d]">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 border-t border-slate-100 pt-4">
                    <p className="font-display text-sm font-bold text-[#0a130c]">
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
                  className="flex flex-col justify-between rounded-2xl border border-[#cda34f]/20 bg-[#fdfaf3] p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#cda34f]/50 hover:shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-0.5 text-[#cda34f]">
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

                    <p className="mt-4 text-xs font-bold text-[#0a130c]">
                      &ldquo;{review.highlight}&rdquo;
                    </p>

                    <p className="mt-2.5 text-[13px] leading-relaxed text-[#4b5a4d]">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 border-t border-slate-200 pt-4">
                    <p className="font-display text-sm font-bold text-[#0a130c]">
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
                  className="flex flex-col justify-between rounded-2xl border border-[#cda34f]/20 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#cda34f]/50 hover:shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-0.5 text-[#cda34f]">
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

                    <p className="mt-4 text-xs font-bold text-[#0a130c]">
                      &ldquo;{review.highlight}&rdquo;
                    </p>

                    <p className="mt-2.5 text-[13px] leading-relaxed text-[#4b5a4d]">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 border-t border-slate-100 pt-4">
                    <p className="font-display text-sm font-bold text-[#0a130c]">
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

        {/* Conecte-se com a Dra. Juliana Cota no Instagram (@julianacota.adv) */}
        <section className="border-t border-[#cda34f]/20 bg-[#0a110b] py-16 sm:py-20 text-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col items-center justify-between gap-8 rounded-3xl border border-[#cda34f]/30 bg-[#152217]/90 p-8 sm:p-12 lg:flex-row lg:gap-14 shadow-2xl backdrop-blur-md">
              <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center">
                <div className="relative size-28 shrink-0 overflow-hidden rounded-full border-2 border-[#cda34f] shadow-lg sm:size-32">
                  <Image
                    src="/juliana-cota-social.jpg"
                    alt="Dra. Juliana Cota no Instagram @julianacota.adv"
                    fill
                    className="object-cover object-[50%_15%]"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#fae4a8]">
                    <InstagramIcon size={16} /> @julianacota.adv
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
                    Acompanhe a Dra. Juliana Cota no Instagram
                  </h3>
                  <p className="mt-2 max-w-md text-xs leading-relaxed text-slate-300 sm:text-sm">
                    Orientações práticas sobre rescisão indireta, direitos dos trabalhadores,
                    CLT na prática, demissões e dicas jurídicas essenciais no dia a dia.
                  </p>
                </div>
              </div>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex shrink-0 items-center gap-2.5 rounded-full bg-gradient-to-r from-[#977128] via-[#cda34f] to-[#eed083] px-7 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-[#0a130c] shadow-md transition-all hover:brightness-110"
              >
                <InstagramIcon size={16} /> Seguir @julianacota.adv <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </section>

        {/* Contato & Localização — João Monlevade - MG */}
        <section
          id="contato"
          className="scroll-mt-24 bg-[#faf9f5] py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                eyebrow="contato & localização"
                description="Agende seu atendimento presencial em nossa sede em frente ao Supermercado BH no bairro Carneirinhos, ou solicite uma consultoria digital com total comodidade e segurança."
              >
                Estamos prontos para{" "}
                <span className="font-display italic text-[#977128]">defender sua causa.</span>
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
                <p className="text-xs text-[#4b5a4d] font-medium">
                  Atendimento direto e retorno com agilidade:{" "}
                  <strong className="text-[#0a130c]">{PHONE_DISPLAY}</strong>.
                </p>
              </div>

              <div className="mt-10 space-y-4 text-xs text-[#4b5a4d] font-medium">
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-[#977128]" />
                  <span>Segunda a Sexta: 08h30 às 18h00</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-[#977128]" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="hover:text-[#977128] transition-colors text-[#0a130c] font-semibold"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-[#977128]" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="hover:text-[#977128] transition-colors text-[#0a130c] font-semibold"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <InstagramIcon size={16} className="text-[#977128]" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#977128] transition-colors text-[#0a130c] font-semibold"
                  >
                    @julianacota.adv
                  </a>
                </div>
              </div>
            </div>

            {/* Address & Office Card */}
            <div className="relative overflow-hidden rounded-2xl border border-[#cda34f]/35 bg-[#0a110b] text-white p-7 sm:p-10 shadow-2xl">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-gradient-to-r from-[#cda34f] to-[#eed083]" />

              <div className="flex items-center gap-4">
                <span className="grid size-12 place-items-center rounded-xl bg-[#cda34f]/20 text-[#fae4a8]">
                  <MapPin size={22} strokeWidth={1.8} />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#fae4a8]">
                    Sede do Escritório
                  </p>
                  <p className="mt-1 font-display text-2xl font-bold text-white">
                    João Monlevade · MG
                  </p>
                </div>
              </div>

              <address className="mt-7 max-w-md not-italic text-[14px] leading-relaxed text-slate-300">
                <strong className="text-white font-bold">
                  Juliana Cota Consultoria Jurídica & Advocacia
                </strong>
                <br />
                <span className="text-[#fae4a8] font-semibold">Dra. Juliana Cota</span>
                <br />
                Em frente ao Supermercado BH
                <br />
                Av. Getúlio Vargas, 5368 - Sl 02/03 - Carneirinhos
                <br />
                João Monlevade - MG, CEP 35930-003, Brasil
              </address>

              <div className="my-7 h-px bg-white/10" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-slate-400">
                  Atendimento presencial em Carneirinhos e consultoria jurídica especializada para todo o Brasil
                </p>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#cda34f]/40 bg-[#152217] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#fae4a8] transition-colors hover:border-[#cda34f] hover:text-white shadow-xs"
                >
                  Abrir no Google Maps <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Footer CTA Strip — Rich Metallic Gold Gradient */}
        <section className="bg-gradient-to-r from-[#977128] via-[#cda34f] to-[#b5832e] px-5 py-14 text-[#0a130c] sm:px-8 sm:py-16 lg:px-12 shadow-inner">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0a130c]/80">
                JULIANA COTA CONSULTORIA JURÍDICA & ADVOCACIA · JOÃO MONLEVADE - MG
              </p>
              <h2 className="mt-3 max-w-2xl font-display text-3xl sm:text-4xl font-bold leading-tight text-[#0a130c]">
                Pronto para proteger seus direitos e resolver sua situação jurídica com segurança e excelência?
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá, Dra. Juliana Cota. Gostaria de agendar um atendimento inicial para avaliar minha situação jurídica."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-[#0a110b] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-2xl transition-all hover:-translate-y-0.5 hover:bg-black"
            >
              <WhatsAppIcon size={17} /> Falar no WhatsApp <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        {/* Footer — Deep Dark Section */}
        <footer className="bg-[#070d08] px-5 py-14 text-white sm:px-8 lg:px-12 border-t border-[#cda34f]/20">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <div className="inline-flex">
                <Image
                  src="/logo.png"
                  width={1774}
                  height={887}
                  alt="Juliana Cota Consultoria Jurídica & Advocacia"
                  className="h-11 w-auto object-contain sm:h-14"
                />
              </div>
              <p className="mt-5 max-w-xs text-xs leading-relaxed text-slate-400">
                Advocacia combativa e consultoria jurídica de alto padrão com excelência em
                Direito do Trabalho, Rescisão Indireta, Consultoria Empresarial, Cível e Família.
                Sede em frente ao Supermercado BH na Av. Getúlio Vargas, 5368, Carneirinhos, João Monlevade/MG
                e consultoria digital para clientes em todo o Brasil.
              </p>
              <p className="mt-3 text-xs font-bold text-[#fae4a8]">
                Avaliação 5,0 ★ no Google (97 avaliações reais)
              </p>
            </div>

            <div>
              <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#fae4a8]">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-slate-300 font-medium">
                <a className="footer-link" href="#inicio">
                  Início
                </a>
                <a className="footer-link" href="#sobre">
                  Sobre Nós & Dra. Juliana
                </a>
                <a className="footer-link" href="#atuacao">
                  Áreas de Atuação
                </a>
                <a className="footer-link" href="#manifesto">
                  Defesa de Direitos & CLT
                </a>
                <a className="footer-link" href="#orientacoes">
                  Orientações Jurídicas
                </a>
                <a className="footer-link" href="#avaliacoes">
                  Avaliações no Google (97)
                </a>
                <a className="footer-link" href="#contato">
                  Contato & Sede
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#fae4a8]">
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
                  <InstagramIcon size={15} className="shrink-0" /> @julianacota.adv
                </a>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-start gap-2"
                >
                  <MapPin size={15} className="mt-0.5 shrink-0" />
                  <span>Av. Getúlio Vargas, 5368 - Sl 02/03, Carneirinhos, João Monlevade - MG</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-[10px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Juliana Cota Consultoria Jurídica & Advocacia · Dra. Juliana Cota. Todos os direitos reservados.
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
              className="fixed inset-0 z-50 flex items-end justify-center bg-black/65 p-0 backdrop-blur-sm sm:items-center sm:p-6"
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
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-2xl border border-[#cda34f]/35 bg-white p-7 shadow-2xl sm:max-w-xl sm:rounded-2xl sm:p-10"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da área"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-full border border-slate-200 text-slate-700 transition-colors hover:border-[#cda34f] hover:text-[#977128] cursor-pointer"
                >
                  <X size={18} />
                </button>

                <div className="eyebrow mb-2">Área de Atuação Especializada</div>

                <h2
                  id="area-dialog-title"
                  className="mt-4 max-w-sm pr-10 font-display text-2xl sm:text-3xl font-bold leading-snug text-[#0a130c]"
                >
                  {activeArea.title}
                </h2>

                <p className="mt-5 text-sm leading-relaxed text-[#4b5a4d]">
                  {activeArea.details}
                </p>

                <div className="mt-6 border-t border-slate-200 pt-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#0a130c]">
                    Principais demandas e causas atendidas:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-sm text-[#0a130c]"
                      >
                        <span className="size-2 rounded-full bg-[#cda34f] shrink-0" />
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
                    className="px-5 py-3 text-xs font-bold text-[#4b5a4d] hover:text-[#0a130c] transition-colors cursor-pointer"
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
