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
  CheckCircle2,
  Clock,
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

const WHATSAPP_NUMBER = "553137214798";
const PHONE_DISPLAY = "(31) 3721-4798";
const EMAIL_CONTACT = "contato@silvacabral.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/biancasantos.advogada/";
const GOOGLE_MAPS_URL =
  "https://maps.google.com/?q=Rua+Jos%C3%A9+Nicolau+de+Queir%C3%B3s,+256+-+Centro,+Conselheiro+Lafaiete+-+MG,+36400-000";

function getWhatsAppUrl(message?: string) {
  const defaultText =
    "Olá, Dra. Bianca Santos. Gostaria de solicitar uma avaliação previdenciária do meu caso no escritório Silva Cabral Advocacia.";
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
    id: "aposentadorias-inss",
    title: "Aposentadorias do INSS & Concessões Rápidas",
    icon: Award,
    tag: "Idade · Tempo · Especial · Rural",
    summary:
      "Concessão célere e estratégica de aposentadorias por idade urbana e rural, tempo de contribuição, aposentadoria especial e da pessoa com deficiência.",
    details:
      "Aposentar-se é o coroamento de uma vida inteira de trabalho e dedicação. Após as recentes reformas da previdência, existem múltiplas regras de transição e cálculos distintos que podem alterar radicalmente o valor da sua renda mensal. Realizamos uma análise minuciosa de todo o seu histórico contributivo perante o INSS para escolher a regra mais favorável, averbar períodos rurais, insalubres e garantir a aprovação sem atrasos.",
    topics: [
      "Aposentadoria por Idade Urbana e Rural com cômputo de períodos em regime de economia familiar",
      "Aposentadoria Especial para profissionais expostos a agentes nocivos, químicos e insalubridade",
      "Enquadramento seguro nas 5 Regras de Transição mais vantajosas da Reforma da Previdência",
      "Aposentadoria da Pessoa com Deficiência (PCD) com requisitos de idade e tempo reduzidos",
      "Reconhecimento de vínculos de trabalho sem carteira assinada e regularização de autônomos",
      "Conversão de tempo especial em comum para antecipar a concessão e elevar o benefício",
    ],
    whatsAppText:
      "Olá, Dra. Bianca Santos. Gostaria de solicitar uma análise para dar entrada na minha aposentadoria pelo INSS.",
  },
  {
    id: "bpc-loas",
    title: "BPC / LOAS (Benefício de Prestação Continuada)",
    icon: HeartHandshake,
    tag: "Idosos 65+ & Doenças / PCD",
    summary:
      "Garantia de 1 salário mínimo mensal para idosos acima de 65 anos e pessoas com deficiência ou enfermidades graves de baixa renda, sem necessidade de contribuição prévia.",
    details:
      "O BPC/LOAS é um direito fundamental assegurado pela Lei Orgânica da Assistência Social. Milhares de pedidos são injustamente indeferidos pelo INSS devido a interpretações restritivas de renda familiar ou perícias sociais equivocadas. Atuamos com firmeza para comprovar a real vulnerabilidade socioeconômica, deduzir gastos essenciais com saúde e medicamentos, e garantir a rápida implantação do benefício com pagamento de todos os retroativos.",
    topics: [
      "Concessão do BPC para idosos com 65 anos ou mais sem renda ou previdência própria",
      "BPC para pessoas com deficiência física, intelectual, mental ou sensorial de qualquer idade",
      "BPC para pessoas com doenças graves ou incapacitantes (câncer, autismo, sequelas neurológicas)",
      "Superação jurídica do limite de 1/4 do salário mínimo mediante dedução de gastos médicos",
      "Reversão de cancelamentos ou suspensões indevidas no CadÚnico e INSS",
      "Cobrança integral de todas as parcelas retroativas desde a data do primeiro requerimento",
    ],
    whatsAppText:
      "Olá, Dra. Bianca Santos. Gostaria de orientações sobre o BPC/LOAS (idoso ou pessoa com deficiência/doença).",
  },
  {
    id: "beneficios-incapacidade",
    title: "Benefícios por Incapacidade & Auxílio-Doença",
    icon: ShieldCheck,
    tag: "Auxílio-Doença · Invalidez · Acidente",
    summary:
      "Atuação ágil para restabelecimento de auxílio-doença cortado pelo INSS, concessão de aposentadoria por invalidez e auxílio-acidente indenizatório.",
    details:
      "Trabalhadores acometidos por doenças graves, problemas ortopédicos, transtornos psicológicos ou acidentes frequentemente enfrentam perícias médicas do INSS desumanas e apressadas, resultando em altas indevidas. Estruturamos todo o dossiê médico com laudos, exames e relatórios detalhados, ingressando imediatamente com recursos e ações na Justiça Federal para reverter a negativa.",
    topics: [
      "Auxílio por Incapacidade Temporária (antigo Auxílio-Doença) indeferido ou cessado no 'pente-fino'",
      "Aposentadoria por Incapacidade Permanente (antiga Aposentadoria por Invalidez)",
      "Adicional de 25% para aposentados por invalidez que necessitam de auxílio permanente de terceiros",
      "Auxílio-Acidente mensal indenizatório (pago cumulativamente com o salário até a aposentadoria)",
      "Reconhecimento de nexo causal para doenças ocupacionais e acidentes típicos de trabalho",
      "Manutenção da qualidade de segurado e cômputo correto do 'período de graça'",
    ],
    whatsAppText:
      "Olá, Dra. Bianca Santos. Tive meu auxílio-doença negado ou cortado pelo INSS e preciso de ajuda profissional.",
  },
  {
    id: "pensao-morte-dependentes",
    title: "Pensão por Morte & Amparo aos Dependentes",
    icon: Users,
    tag: "Cônjuge · Filhos · Família",
    summary:
      "Concessão rápida de pensão por morte para cônjuges, companheiros em união estável, filhos e dependentes econômicos com cálculo do valor justo.",
    details:
      "Em momentos de luto e dor familiar, a demora e a burocracia do INSS em conceder a pensão por morte geram profunda insegurança financeira. Atuamos com extrema sensibilidade e agilidade para reunir as comprovações cabíveis, provar união estável sem necessidade de certidão de casamento e garantir o sustento digno da família sem exigências abusivas.",
    topics: [
      "Concessão célere de Pensão por Morte para segurados urbanos, rurais e servidores",
      "Comprovação documental e testemunhal consistente de união estável homoafetiva ou heteroafetiva",
      "Pensão por morte para filhos menores de 21 anos, equiparados e dependentes com deficiência",
      "Pensão por morte para pais idosos mediante comprovação de dependência econômica",
      "Reconhecimento da qualidade de segurado do falecido mesmo quando desempregado no óbito",
      "Revisão e recálculo da cota-parte e do valor mensal da pensão previdenciária",
    ],
    whatsAppText:
      "Olá, Dra. Bianca Santos. Preciso de auxílio jurídico para dar entrada na pensão por morte perante o INSS.",
  },
  {
    id: "planejamento-previdenciario",
    title: "Planejamento Previdenciário Estratégico",
    icon: Scale,
    tag: "Auditoria de CNIS · Maior Benefício",
    summary:
      "Estudo matemático e jurídico detalhado para descobrir o melhor momento de se aposentar, corrigir pendências no CNIS e alcançar o valor máximo.",
    details:
      "Contribuir para o INSS sem estratégia pode significar jogar dinheiro fora ou perder até 40% da renda mensal da aposentadoria para o resto da vida. Com o Planejamento Previdenciário, realizamos um diagnóstico completo da sua vida contributiva, identificamos lacunas, descartamos recolhimentos desvantajosos e calculamos o retorno exato de cada real investido na previdência.",
    topics: [
      "Auditoria minuciosa de todo o extrato CNIS com saneamento de indicadores de pendência (PEXT, PREV)",
      "Simulação matemática comparativa de todas as regras de transição trazidas pela Reforma",
      "Estratégia avançada de descarte de contribuições menores para alavancar a média salarial",
      "Planejamento sob medida para empresários (pró-labore), autônomos, médicos e profissionais liberais",
      "Cálculo de custo-benefício de recolhimento de contribuições em atraso (indenização previdenciária)",
      "Relatório executivo completo com cronograma de datas e projeções reais de valor de benefício",
    ],
    whatsAppText:
      "Olá, Dra. Bianca Santos. Gostaria de solicitar um Planejamento Previdenciário para calcular minha melhor aposentadoria.",
  },
  {
    id: "revisao-beneficios-atrasados",
    title: "Revisão de Benefícios & Atrasados na Justiça",
    icon: FileText,
    tag: "Correção de Valor · Retroativos",
    summary:
      "Revisão minuciosa de benefícios concedidos com erro de cálculo pelo INSS, inclusão de períodos omitidos e recebimento de valores atrasados dos últimos 5 anos.",
    details:
      "O sistema do INSS comete erros frequentes no cálculo da Renda Mensal Inicial (RMI), desconsiderando períodos insalubres, vínculos em carteiras de trabalho antigas ou salários de contribuição maiores. Se você já recebe aposentadoria ou pensão concedida há menos de 10 anos, analisamos seu processo para verificar se o valor pode ser aumentado e cobrar todos os retroativos na Justiça Federal.",
    topics: [
      "Revisão da Renda Mensal Inicial (RMI) por cálculo incorreto da média aritmética do INSS",
      "Inclusão de períodos de atividade especial (insalubridade e periculosidade) não computados",
      "Inclusão de vínculos empregatícios e diferenças salariais reconhecidas na Justiça do Trabalho",
      "Averbação de tempo de serviço rural ou militar para acréscimo no coeficiente do benefício",
      "Cobrança judicial de parcelas retroativas e atrasados corrigidos monetariamente (RPV e Precatórios)",
      "Revisão para recebimento de benefício mais vantajoso que o segurado já tinha direito adquirido",
    ],
    whatsAppText:
      "Olá, Dra. Bianca Santos. Já sou aposentado(a) e gostaria de revisar o cálculo do meu benefício do INSS.",
  },
];

const clientReviews = [
  {
    name: "Alessandra Melo",
    reviewsCount: "1 avaliação",
    date: "Há 2 meses",
    highlight: "Equipe super atenciosa, só elogios pelo atendimento e apoio!",
    content:
      "Excelente profissional, com uma equipe super atenciosa, me ajudou no que foi necessário. Só tenho elogios pelo atendimento e apoio!",
  },
  {
    name: "Marcia Valeria",
    reviewsCount: "1 avaliação",
    date: "Há 1 mês",
    highlight: "Meu atendimento foi excelente, fui muito bem recebida e acolhida",
    content:
      "Meu atendimento foi excelente, fui muito bem recebida, muito bem tratada, atendimento maravilhoso, só tenho a agradecer pelo belíssimo trabalho. Que Jesus abençoe o trabalho de vocês, iremos sermos mais do que vencedoras.",
  },
  {
    name: "Carla Costa",
    reviewsCount: "2 avaliações",
    date: "Há 2 meses",
    highlight: "Tive um excelente resultado, estou muito feliz e grata!",
    content:
      "É com muita satisfação que eu compartilho minha experiência com Dra. Bianca Santos (Silva Cabral Advogados). Fui muito bem assistida e representada graças a Deus e Dra. Bianca tive um excelente resultado estou muito feliz e grata também.",
  },
  {
    name: "Manuela",
    reviewsCount: "1 avaliação",
    date: "Há 2 meses",
    highlight: "A melhor de toda Lafaiete. Minha mãezinha está aposentada hoje!",
    content:
      "A melhor profissional nessa área q já vi em toda Lafaiete. Atenciosa, carinhosa, se preocupa em resolver o problema do próximo, seus funcionários tbm tão atenciosos... se minha mãezinha está aposentada hj agradeço a Dra. Bianca e toda equipe. Deus abençoe todos vcs.",
  },
  {
    name: "Robson Vitor Castro",
    reviewsCount: "Local Guide · 8 avaliações · 14 fotos",
    date: "Há 1 mês",
    highlight: "Paciência, profissionalismo e domínio do assunto. Parabéns!",
    content:
      "Excelente atendimento, pontualidade, elucidações de todas dúvidas, paciência, profissionalismo, domínio do assunto. Silva Cabral Advocacia Previdenciária está de parabéns. Um ambiente acolhedor desde a chegada para atendimento até a saída.",
  },
  {
    name: "Gracy Kelly Campos",
    reviewsCount: "3 avaliações",
    date: "Há 5 meses",
    highlight: "Sempre tirou minhas dúvidas e passa orientações importantes",
    content:
      "Dra. Bianca é uma excelente profissional, muito prestativa, atenciosa, educada e sempre tirou minhas dúvidas quando precisei. Ela sempre passa dicas e orientações importantes pelo Instagram, WhatsApp e pelo atendimento.",
  },
  {
    name: "Debora Feitoza",
    reviewsCount: "4 avaliações",
    date: "Há 2 anos",
    highlight: "Conseguiu o benefício em menos de 2 meses, sou eternamente grata",
    content:
      "Dra. Bianca, uma ótima profissional, dedicada e atenciosa. Conseguiu o benefício em menos de 2 meses, sou eternamente grata a ela, super indico.",
  },
  {
    name: "Sabrina Magalhães Vieira",
    reviewsCount: "3 avaliações",
    date: "Há 3 anos",
    highlight: "Aposentou meu pai em pouco tempo. Super recomendo!",
    content:
      "Super recomendo! Excelente advogada. Parabéns pela competência e profissionalismo. Aposentou meu pai em pouco tempo. 👏🏻",
  },
  {
    name: "Eni Tiquinha",
    reviewsCount: "2 avaliações",
    date: "Há 2 meses",
    highlight: "Trabalha com seriedade. Agradeço por aposentar meu marido!",
    content:
      "Dra. Bianca é maravilhosa e muito profissional, trabalha com seriedade e profissionalismo. Agradeço a ela por tudo que fez para meu marido se aposentar. 🙏🏻😘",
  },
  {
    name: "Bianca Demetrio",
    reviewsCount: "3 avaliações",
    date: "Há 3 anos",
    highlight: "Trouxe pra mim e pros meus filhos a dignidade que merecemos",
    content:
      "Doutora Bianca, foi leal ao que se propôs, com todo o carinho e cuidado trouxe pra mim e para os meu filhos a dignidade que só uma profissional de responsabilidade e competência como ela tem. Gratidão por tanto!",
  },
  {
    name: "fredy verona",
    reviewsCount: "1 avaliação",
    date: "Há 5 meses",
    highlight: "Conhecimento técnico aprofundado no direito previdenciário",
    content:
      "Excelente profissional. Muito competente e receptiva no atendimento. Demonstra conhecimento técnico aprofundado na área do direito previdenciário, expressando com clareza sobre o assunto.",
  },
  {
    name: "Anderson Francisco",
    reviewsCount: "Local Guide · 76 avaliações · 5 fotos",
    date: "Há 5 meses",
    highlight: "Simplesmente maravilhoso o atendimento da Silva Cabral",
    content:
      "Simplesmente maravilhoso o atendimento da Advocacia Silva Cabral em especial minha amiga Dra. Bianca Santos. Todas muito simpáticas e atenciosas. Prontas para tirar nossas dúvidas. Parabéns a todos funcionários eficientes e proativos.",
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
            : "font-display text-3xl sm:text-5xl lg:text-[3.25rem] font-bold leading-[1.12] tracking-[-0.015em] text-[#08131a]"
        }
      >
        {children}
      </h2>
      {description && (
        <p
          className={
            light
              ? "mt-5 max-w-xl text-[15px] leading-relaxed text-slate-300 font-normal"
              : "mt-5 max-w-xl text-[15px] leading-relaxed text-[#4a5c68] font-normal"
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
      <main className="overflow-hidden bg-[#fcfbf9] text-[#08131a]">
        {/* Navigation Bar */}
        <header className="sticky top-0 z-40 border-b border-[#cfa043]/20 bg-[#08131a]/95 backdrop-blur-xl">
          <div className="mx-auto flex h-[95px] max-w-7xl items-center justify-between gap-5 px-5 sm:h-[110px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label="Dra. Bianca Santos — Silva Cabral Advocacia Previdenciária"
              onClick={closeMenu}
              className="flex items-center gap-3 transition-opacity hover:opacity-95 py-2"
            >
              {/* Official 3D Gold Logo on Deep Petrol Header with True Alpha Transparency */}
              <Image
                src="/logo.png"
                width={2020}
                height={427}
                alt="Dra. Bianca Santos - Advocacia Previdenciária"
                priority
                className="h-10 w-auto object-contain sm:h-12 lg:h-[52px]"
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
                Soluções INSS
              </a>
              <a className="nav-link" href="#artigos">
                Orientações
              </a>
              <a className="nav-link" href="#avaliacoes">
                Avaliações (133)
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
                aria-label="Instagram da Dra. Bianca Santos"
                className="grid size-10 place-items-center rounded-full border border-[#cfa043]/30 text-slate-300 transition-all hover:border-[#cfa043] hover:bg-[#cfa043]/10 hover:text-white"
              >
                <InstagramIcon size={17} />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp da Dra. Bianca Santos"
                className="grid size-10 place-items-center rounded-full border border-[#cfa043]/30 text-slate-300 transition-all hover:border-[#cfa043] hover:bg-[#cfa043]/10 hover:text-white"
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
              className="grid size-11 place-items-center rounded-full border border-[#cfa043]/30 text-white lg:hidden"
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
                className="overflow-hidden border-t border-[#cfa043]/20 bg-[#08131a] px-6 lg:hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1 py-4">
                  {[
                    ["Início", "#inicio"],
                    ["Sobre Nós & Dra. Bianca", "#sobre"],
                    ["Áreas de Atuação Previdenciária", "#atuacao"],
                    ["Soluções Contra Negativas do INSS", "#manifesto"],
                    ["Orientações & Dicas", "#artigos"],
                    ["Avaliações no Google (133)", "#avaliacoes"],
                    ["Contato & Sede", "#contato"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={closeMenu}
                      className="py-3 text-sm font-semibold text-slate-200 hover:text-[#f3d88b]"
                    >
                      {label}
                    </a>
                  ))}
                  <div className="mt-3 flex flex-col gap-2">
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#916315] via-[#cfa043] to-[#e3b865] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-[#08131a] shadow-md transition-all hover:brightness-110"
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <WhatsAppIcon size={16} /> Falar no WhatsApp
                    </a>
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-[#cfa043]/30 bg-white/5 px-5 py-3 text-xs font-semibold text-white/90 hover:bg-white/10"
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <InstagramIcon size={15} /> Siga @biancasantos.advogada
                    </a>
                  </div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        {/* Hero Section — Immersive Deep Velvet Petrol Blue replicating the office accent wall */}
        <section
          id="inicio"
          className="relative isolate scroll-mt-24 border-b border-[#cfa043]/20 bg-[#08131a] text-white"
        >
          {/* Ambient Petrol & Gold halo matching the office wall and golden signage */}
          <div className="pointer-events-none absolute -right-32 top-8 -z-10 size-[38rem] rounded-full bg-gradient-to-bl from-[#cfa043]/15 via-[#0f2432]/40 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-10 -z-10 size-[32rem] rounded-full bg-[#0b1a24]/80 blur-3xl" />

          <div className="mx-auto grid min-h-[660px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[720px] lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:px-12 lg:py-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:py-6"
            >
              <motion.div variants={reveal} className="mb-6 flex flex-col items-start gap-3">
                <span className="eyebrow-light">Silva Cabral Advocacia Previdenciária</span>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#cfa043]/30 bg-[#0f2432]/80 px-4 py-1.5 text-[11px] font-semibold text-[#fbe5a2] shadow-xs backdrop-blur-md">
                  <span className="size-2 rounded-full bg-[#cfa043] animate-pulse" />
                  R. José Nicolau de Queirós, 256 · Centro · Conselheiro Lafaiete - MG
                </span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="max-w-[760px] font-display text-[2.85rem] font-bold leading-[1.06] tracking-[-0.02em] text-white sm:text-6xl lg:text-[4.65rem]"
              >
                Aposentadoria e benefícios do INSS com{" "}
                <span className="block mt-2 font-display italic text-gold-gradient font-normal">
                  agilidade, respeito e segurança.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-7 max-w-xl text-[15px] leading-relaxed text-slate-300 sm:text-base sm:leading-8 font-normal"
              >
                Atuação especializada e humanizada em{" "}
                <strong className="text-white font-semibold">Direito Previdenciário</strong> liderada
                pela <strong className="text-[#fbe5a2] font-semibold">Dra. Bianca Santos</strong>.
                Conquistamos aposentadorias rápidas, BPC/LOAS, benefícios por incapacidade e pensões por morte
                com rigor técnico perante o INSS e a Justiça Federal. Atendimento acolhedor no Centro de
                Conselheiro Lafaiete/MG e consultoria digital estruturada em todo o Brasil.
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
                  <WhatsAppIcon size={16} /> Falar com a Dra. Bianca Santos
                </GlowingButton>
                <a
                  href="#atuacao"
                  className="group inline-flex items-center gap-2 px-3 py-3 text-sm font-bold text-slate-200 transition-colors hover:text-[#f3d88b]"
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
                  <Star size={16} className="fill-[#cfa043] text-[#cfa043]" />{" "}
                  <strong className="text-white font-bold">4,9 estrelas</strong> no Google (133+ avaliações)
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <ShieldCheck size={16} className="text-[#cfa043]" /> Especialista
                  em Direito Previdenciário & INSS
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <MapPin size={16} className="text-[#cfa043]" /> Presencial em
                  Conselheiro Lafaiete e on-line
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
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#cfa043]/30 via-[#0f2432]/20 to-transparent blur-2xl -z-10" />

              {/* Architectural outer hairline gold frame */}
              <div className="absolute -inset-2.5 rounded-2xl border border-[#cfa043]/30 pointer-events-none" />

              {/* Main portrait executive card */}
              <div className="relative aspect-[0.76] overflow-hidden rounded-2xl bg-[#08131a] shadow-2xl ring-1 ring-[#cfa043]/30">
                <Image
                  src="/dra-bianca-hero.jpg"
                  alt="Dra. Bianca Santos — Silva Cabral Advocacia Previdenciária"
                  fill
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 42vw"
                  className="object-cover object-[50%_18%]"
                />

                {/* Gradient vignette on bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#08131a] via-[#08131a]/60 to-transparent" />

                {/* Executive name overlay */}
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3 text-white sm:bottom-7 sm:left-7 sm:right-7">
                  <div>
                    <p className="font-display text-2xl font-bold tracking-tight text-white">
                      Dra. Bianca Santos
                    </p>
                    <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#fbe5a2]">
                      Silva Cabral Advocacia Previdenciária
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-[#cfa043]/40 bg-[#08131a]/80 text-[#fbe5a2] backdrop-blur-md shadow-lg">
                    <Scale size={18} />
                  </span>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -left-3 top-[10%] rounded-full border border-[#cfa043]/40 bg-[#0b1a24]/95 px-4 py-2.5 text-[10px] font-bold tracking-[0.16em] text-[#fbe5a2] shadow-xl backdrop-blur-md sm:-left-6 sm:px-5">
                ADVOCACIA PREVIDENCIÁRIA & INSS
              </div>

              <div className="absolute -right-3 bottom-[18%] rounded-2xl border border-[#cfa043]/40 bg-[#0b1a24]/95 p-4 shadow-2xl backdrop-blur-md sm:-right-6">
                <div className="flex items-center gap-2 text-[#cfa043]">
                  <Star size={16} className="fill-[#cfa043]" />
                  <span className="font-display text-lg font-bold text-white">
                    4,9 / 5,0
                  </span>
                </div>
                <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-300">
                  133+ Avaliações no Google
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Highlights Banner — Deep Petrol Slate */}
        <section
          aria-label="Credenciais e Destaques"
          className="border-b border-[#cfa043]/20 bg-[#0b1a24] text-white"
        >
          <div className="mx-auto grid max-w-7xl gap-7 px-5 py-8 sm:grid-cols-4 sm:gap-4 sm:px-8 lg:px-12">
            {[
              ["4,9 ★", "classificação com 133+ avaliações reais no Google"],
              ["Concessão Ágil", "histórico de benefícios concedidos com rapidez"],
              ["Conselheiro Lafaiete", "R. José Nicolau de Queirós, 256 - Centro"],
              ["Brasil Inteiro", "atendimento presencial e suporte on-line"],
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

        {/* Sobre a Equipe / Sobre Nós — Warm Alabaster Stone */}
        <section
          id="sobre"
          className="scroll-mt-24 bg-[#faf8f4] py-20 sm:py-28 lg:py-32"
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
              <div className="relative aspect-[1.08] overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-[#cfa043]/20">
                <Image
                  src="/dra-bianca-sobre.jpg"
                  alt="Dra. Bianca Santos e Equipe — Atendimento Acolhedor na Silva Cabral Advocacia"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover object-top"
                />
              </div>

              {/* Authority card */}
              <div className="absolute -bottom-6 right-3 max-w-[310px] rounded-xl border border-[#cfa043]/30 bg-white p-5 shadow-2xl sm:-right-6 sm:p-6">
                <div className="flex items-center gap-2 text-[#916315]">
                  <ShieldCheck size={18} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em]">
                    Atendimento Humanizado
                  </p>
                </div>
                <p className="mt-1.5 font-display text-lg font-bold leading-snug text-[#08131a]">
                  Dra. Bianca Santos & Equipe
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[#4a5c68]">
                  Acolhimento empático, escuta atenta e dedicação incansável
                  para garantir a aposentadoria ou benefício que você merece.
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 rounded-tl-2xl border-l-2 border-t-2 border-[#cfa043]/50 sm:-left-6 sm:-top-6 sm:size-32" />
            </motion.div>

            {/* Text description */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              <motion.div variants={reveal}>
                <span className="eyebrow mb-4">sobre nós · silva cabral advocacia</span>
              </motion.div>

              <motion.h2
                variants={reveal}
                className="font-display text-3xl sm:text-5xl lg:text-[3.35rem] font-bold leading-[1.08] tracking-[-0.015em] text-[#08131a]"
              >
                Defesa incansável dos seus direitos com{" "}
                <span className="font-display italic text-[#916315]">
                  acolhimento, agilidade e respeito.
                </span>
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-relaxed text-[#4a5c68] font-normal"
              >
                A <strong className="text-[#08131a] font-semibold">Silva Cabral Advocacia Previdenciária</strong>,
                liderada com paixão e precisão técnica pela{" "}
                <strong className="text-[#08131a] font-semibold">Dra. Bianca Santos</strong>, nasceu com uma missão clara:
                fazer com que os anos de esforço, suor e dedicação de cada trabalhador sejam honrados perante o INSS.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#4a5c68] font-normal"
              >
                Reconhecida com nota <strong className="text-[#08131a] font-semibold">4,9 estrelas no Google (133+ avaliações)</strong> por
                famílias de Conselheiro Lafaiete e toda a região, nossa equipe não trata causas como papéis burocráticos.
                Analisamos cada laudo, cada mês de contribuição e cada detalhe documental com o carinho e o rigor necessários
                para conquistar sua concessão no menor tempo possível.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2"
              >
                <div className="flex items-center gap-2.5 text-xs text-[#08131a] font-semibold">
                  <CheckCircle2 size={16} className="text-[#916315] shrink-0" />
                  <span>Auditoria minuciosa do CNIS e cálculo do maior valor</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#08131a] font-semibold">
                  <CheckCircle2 size={16} className="text-[#916315] shrink-0" />
                  <span>Acompanhamento direto e transparente via WhatsApp</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#08131a] font-semibold">
                  <CheckCircle2 size={16} className="text-[#916315] shrink-0" />
                  <span>Sede na R. José Nicolau de Queirós, 256 no Centro de Lafaiete</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#08131a] font-semibold">
                  <CheckCircle2 size={16} className="text-[#916315] shrink-0" />
                  <span>Atendimento presencial e consultoria on-line estruturada</span>
                </div>
              </motion.div>

              <motion.div variants={reveal} className="mt-9">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Bianca Santos. Gostaria de entender como o escritório Silva Cabral pode me auxiliar com meu benefício do INSS."
                  )}
                  target="_blank"
                  size="md"
                  className="rounded-full shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar com a Dra. Bianca Santos
                </GlowingButton>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Manifesto / Foco Previdenciário — Deep Velvet Petrol Blue */}
        <section
          id="manifesto"
          className="relative isolate overflow-hidden bg-[#08131a] py-20 text-white sm:py-28 lg:py-32"
        >
          <div className="pointer-events-none absolute -left-28 top-1/4 size-96 rounded-full bg-[#cfa043]/15 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-1/4 size-96 rounded-full bg-[#cfa043]/10 blur-3xl" />

          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-3xl text-center">
              <span className="eyebrow-light mb-4">posicionamento estratégico</span>
              <h2 className="mt-4 font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-[-0.015em] text-white">
                Você não precisa aceitar uma resposta negativa do INSS{" "}
                <span className="font-display italic text-gold-gradient font-normal">
                  nem esperar anos pelo que é seu por direito.
                </span>
              </h2>
            </div>

            <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#cfa043]/30 bg-[#0f2432]/80 p-8 backdrop-blur-md hover:border-[#cfa043]/60 transition-colors shadow-xl">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#cfa043]/20 text-[#fbe5a2]">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold text-white">
                  Para Quem Teve Benefício Negado ou Cortado
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  Perícias médicas apressadas e exigências descabidas do INSS deixam
                  trabalhadores doentes, idosos e famílias sem seu sustento legítimo.
                  Nós ingressamos com recursos administrativos e ações judiciais
                  perante a Justiça Federal, revertendo o indeferimento e garantindo
                  o pagamento de todos os valores atrasados desde o primeiro pedido.
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs font-bold text-[#fbe5a2]">
                  <CheckCircle2 size={16} /> Reversão de negativas & Recebimento de atrasados
                </div>
              </div>

              <div className="rounded-2xl border border-[#cfa043]/30 bg-[#0f2432]/80 p-8 backdrop-blur-md hover:border-[#cfa043]/60 transition-colors shadow-xl">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#cfa043]/20 text-[#fbe5a2]">
                  <Award size={24} />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold text-white">
                  Para Quem Deseja Aposentar com o Maior Valor
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  Pedir a aposentadoria no momento errado ou sem auditar o extrato
                  CNIS pode custar milhares de reais todos os meses pelo resto da vida.
                  Atuamos no planejamento previdenciário minucioso, descartando
                  recolhimentos desfavoráveis e aplicando a regra de transição mais
                  vantajosa para maximizar seu benefício.
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs font-bold text-[#fbe5a2]">
                  <CheckCircle2 size={16} /> Planejamento matemático & Maior teto possível
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Bianca Santos. Gostaria de enviar os dados do meu caso para uma avaliação inicial do meu benefício previdenciário."
                )}
                target="_blank"
                size="lg"
                className="rounded-full shadow-lg"
              >
                <WhatsAppIcon size={17} /> Enviar meu caso para avaliação no WhatsApp
              </GlowingButton>
              <p className="mt-3 text-xs text-slate-400">
                Atendimento sigiloso, transparente e com retorno prioritário pela equipe.
              </p>
            </div>
          </div>
        </section>

        {/* Áreas de Atuação — Alabaster Background */}
        <section
          id="atuacao"
          className="scroll-mt-24 bg-[#faf8f4] py-20 sm:py-28 lg:py-32"
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
                eyebrow="áreas de atuação previdenciária"
                description="Assessoria jurídica especializada com alto rigor analítico para defender sua aposentadoria, sua saúde e o futuro da sua família."
              >
                Soluções técnicas e humanizadas em{" "}
                <span className="font-display italic text-[#916315]">
                  Direito Previdenciário.
                </span>
              </Heading>
              <p className="max-w-[260px] pb-1 text-xs leading-relaxed text-[#4a5c68] font-medium">
                Selecione uma área para visualizar o detalhamento das causas
                atendidas e conversar com a Dra. Bianca Santos.
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
                    className="group flex min-h-[350px] flex-col rounded-2xl border border-[#cfa043]/20 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#cfa043]/60 hover:shadow-xl"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-xl bg-[#fbf3e2] text-[#916315] transition-colors group-hover:bg-[#cfa043] group-hover:text-white">
                        <Icon size={22} strokeWidth={1.8} />
                      </span>
                      <span className="font-display font-bold text-2xl text-slate-300 group-hover:text-[#cfa043] transition-colors">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-6">
                      <span className="inline-block rounded-md bg-[#fbf3e2] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#916315]">
                        {area.tag}
                      </span>
                      <h3 className="mt-3 font-display font-bold text-xl leading-snug text-[#08131a]">
                        {area.title}
                      </h3>
                      <p className="mt-3 text-[13px] leading-relaxed text-[#4a5c68]">
                        {area.summary}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveArea(area)}
                      className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[11px] font-bold uppercase tracking-[0.16em] text-[#916315] hover:text-[#cfa043] cursor-pointer"
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
        <section id="artigos" className="bg-[#0b1a24] py-20 sm:py-28 text-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid items-end gap-7 md:grid-cols-[1fr_auto]">
              <Heading
                eyebrow="análise & conteúdo previdenciário"
                light
                description="Artigos e orientações práticas da Silva Cabral Advocacia sobre negativas do INSS, planejamento de aposentadorias e direitos dos segurados."
              >
                Esclarecimentos práticos para{" "}
                <span className="font-display italic text-gold-gradient font-normal">proteger o seu benefício.</span>
              </Heading>
              <a
                href={getWhatsAppUrl(
                  "Olá, Dra. Bianca Santos. Vi seus artigos sobre Direito Previdenciário e gostaria de tirar uma dúvida sobre a minha situação."
                )}
                target="_blank"
                rel="noreferrer"
                className="group mb-1 inline-flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#fbe5a2] hover:text-white"
              >
                Fazer uma pergunta jurídica <ArrowUpRight size={15} />
              </a>
            </div>

            <div className="mt-11 grid gap-8 md:grid-cols-2">
              {/* Card 1: Negativa do INSS */}
              <motion.article
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#cfa043]/30 bg-[#08131a] text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#cfa043]/60"
              >
                <div className="relative aspect-[1080/700] w-full overflow-hidden bg-slate-900">
                  <Image
                    src="/artigo-previdenciario-negado.jpg"
                    alt="Benefício Negado no INSS — Silva Cabral Advocacia Previdenciária"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-7 sm:p-8">
                  <div>
                    <span className="inline-block rounded-md bg-[#cfa043]/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#fbe5a2]">
                      Direito Previdenciário & Recursos
                    </span>
                    <h3 className="mt-4 font-display font-bold text-2xl leading-snug sm:text-3xl text-white">
                      Benefício Negado no INSS: Como reverter a decisão e receber todos os atrasados
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-slate-300">
                      O indeferimento pelo INSS não é a palavra final. Através da ação judicial
                      com perícia médica e social independente na Justiça Federal, é possível
                      reverter o indeferimento e receber todas as parcelas retroativas desde a
                      data em que você fez o primeiro pedido no INSS.
                    </p>
                  </div>
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Bianca Santos. Tive meu benefício negado no INSS e gostaria de entender como reverter judicialmente."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#fbe5a2] transition-colors hover:text-white"
                  >
                    Analisar minha negativa do INSS <ArrowUpRight size={14} />
                  </a>
                </div>
              </motion.article>

              {/* Card 2: Planejamento Previdenciário */}
              <motion.article
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#cfa043]/30 bg-[#08131a] text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#cfa043]/60"
              >
                <div className="relative aspect-[1080/700] w-full overflow-hidden bg-slate-900">
                  <Image
                    src="/artigo-planejamento-previdenciario.jpg"
                    alt="Planejamento Previdenciário — Silva Cabral Advocacia Previdenciária"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-7 sm:p-8">
                  <div>
                    <span className="inline-block rounded-md bg-[#cfa043]/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#fbe5a2]">
                      Planejamento & Cálculos
                    </span>
                    <h3 className="mt-4 font-display font-bold text-2xl leading-snug sm:text-3xl text-white">
                      Planejamento Previdenciário: Como se aposentar na hora certa com o maior valor
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-slate-300">
                      Após as regras de transição da Reforma, pequenos ajustes no extrato CNIS
                      e o descarte inteligente de contribuições desfavoráveis podem fazer a sua
                      renda mensal saltar expressivamente. Conheça a estratégia para planejar
                      a aposentadoria ideal.
                    </p>
                  </div>
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Bianca Santos. Gostaria de entender mais sobre o Planejamento Previdenciário e agendar um cálculo do meu benefício."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#fbe5a2] transition-colors hover:text-white"
                  >
                    Agendar planejamento previdenciário <ArrowUpRight size={14} />
                  </a>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* Nosso Compromisso Profissional — Deep Petrol Velvet */}
        <section className="relative overflow-hidden bg-[#08131a] py-20 text-white sm:py-28 lg:py-32 border-b border-[#cfa043]/20">
          <div className="pointer-events-none absolute -left-28 top-1/4 size-96 rounded-full bg-[#cfa043]/15 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-1/4 size-96 rounded-full bg-slate-800/40 blur-3xl" />

          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-12">
            <Heading
              eyebrow="nosso compromisso profissional"
              light
              description="A condução de cada demanda previdenciária com absoluto rigor técnico, acolhimento humano e respeito irrestrito aos direitos de quem trabalhou a vida toda."
            >
              A precisão técnica aliada ao{" "}
              <span className="font-display italic text-gold-gradient font-normal">
                cuidado humano que sua história merece.
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
                  "Auditoria profunda e cálculo individualizado",
                  "Analisamos cada vínculo da sua carteira, carnê e laudo médico. Realizamos cálculos matemáticos detalhados para embasar pedidos sólidos, sem modelos genéricos ou soluções automáticas.",
                ],
                [
                  "02",
                  "Atendimento acolhedor e comunicação direta no WhatsApp",
                  "Você é mantido informado sobre cada andamento processual em linguagem clara e acessível, com acesso direto à equipe da Dra. Bianca Santos para esclarecer qualquer dúvida com carinho e agilidade.",
                ],
                [
                  "03",
                  "Combatividade e foco em resultados comprovados",
                  "Atuamos com determinação perante o INSS e a Justiça Federal para destravar benefícios, cessar indeferimentos abusivos e entregar a tranquilidade financeira que você e seus dependentes merecem.",
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

        {/* Avaliações no Google (Depoimentos Reais da Dra. Bianca Santos) */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 bg-[#faf8f4] py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:items-center">
              <div>
                <Heading
                  eyebrow="prova social & avaliações reais"
                  description="A reputação da Dra. Bianca Santos e da Silva Cabral Advocacia é construída com ética, afeto e resultados reais. Confira o que dizem os clientes que tiveram suas causas conduzidas pelo escritório no Google."
                >
                  Confiança atestada por{" "}
                  <span className="font-display italic text-[#916315]">
                    mais de 133 clientes satisfeitos.
                  </span>
                </Heading>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 border-b-2 border-[#916315] pb-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#08131a] hover:text-[#cfa043]"
                  >
                    Ver todas as avaliações no Google Maps <ArrowUpRight size={15} />
                  </a>
                </div>

                {/* Rating highlights pills */}
                <div className="mt-9 flex flex-wrap gap-2">
                  {[
                    "Nota 4,9 no Google",
                    "Aposentou em menos de 2 meses",
                    "Aposentou meu pai rápido",
                    "Equipe super atenciosa",
                    "Trouxe dignidade pra família",
                    "Domínio do Direito Previdenciário",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 rounded-full border border-[#cfa043]/30 bg-white px-3.5 py-1.5 text-[11px] font-semibold text-[#08131a] shadow-xs"
                    >
                      <CheckCircle2 size={14} className="text-[#916315]" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Public score box */}
              <div className="relative flex min-h-[260px] flex-col justify-between overflow-hidden rounded-2xl border border-[#cfa043]/30 bg-white p-8 shadow-xl sm:p-10">
                <div className="relative flex items-center justify-between gap-4">
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#4a5c68]">
                    Avaliações Verificadas · Google Maps
                  </span>
                  <div className="flex gap-1 text-[#cfa043]" aria-label="4.9 de 5 estrelas">
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
                    <span className="font-display text-7xl sm:text-8xl font-bold leading-none text-[#08131a]">
                      4,9
                    </span>
                    <p className="mt-2 text-xs font-bold text-[#916315]">
                      Excelente · Quase Máxima
                    </p>
                  </div>
                  <div className="pb-1 text-right">
                    <p className="font-display text-3xl font-bold text-gold-gradient">
                      133 avaliações
                    </p>
                    <p className="mt-1 text-xs text-[#4a5c68] font-medium">
                      Reconhecimento comprovado em Lafaiete
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
                  className="flex flex-col justify-between rounded-2xl border border-[#cfa043]/20 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#cfa043]/50 hover:shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-0.5 text-[#cfa043]">
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

                    <p className="mt-4 text-xs font-bold text-[#08131a]">
                      &ldquo;{review.highlight}&rdquo;
                    </p>

                    <p className="mt-2.5 text-[13px] leading-relaxed text-[#4a5c68]">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 border-t border-slate-100 pt-4">
                    <p className="font-display text-sm font-bold text-[#08131a]">
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
                  className="flex flex-col justify-between rounded-2xl border border-[#cfa043]/20 bg-[#fdfaf3] p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#cfa043]/50 hover:shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-0.5 text-[#cfa043]">
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

                    <p className="mt-4 text-xs font-bold text-[#08131a]">
                      &ldquo;{review.highlight}&rdquo;
                    </p>

                    <p className="mt-2.5 text-[13px] leading-relaxed text-[#4a5c68]">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 border-t border-slate-200 pt-4">
                    <p className="font-display text-sm font-bold text-[#08131a]">
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
                  className="flex flex-col justify-between rounded-2xl border border-[#cfa043]/20 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#cfa043]/50 hover:shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-0.5 text-[#cfa043]">
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

                    <p className="mt-4 text-xs font-bold text-[#08131a]">
                      &ldquo;{review.highlight}&rdquo;
                    </p>

                    <p className="mt-2.5 text-[13px] leading-relaxed text-[#4a5c68]">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 border-t border-slate-100 pt-4">
                    <p className="font-display text-sm font-bold text-[#08131a]">
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

        {/* Conecte-se com a Dra. Bianca Santos no Instagram */}
        <section className="border-t border-[#cfa043]/20 bg-[#08131a] py-16 sm:py-20 text-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col items-center justify-between gap-8 rounded-3xl border border-[#cfa043]/30 bg-[#0f2432]/90 p-8 sm:p-12 lg:flex-row lg:gap-14 shadow-2xl backdrop-blur-md">
              <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center">
                <div className="relative size-28 shrink-0 overflow-hidden rounded-full border-2 border-[#cfa043] shadow-lg sm:size-32">
                  <Image
                    src="/dra-bianca-social.jpg"
                    alt="Dra. Bianca Santos no Instagram @biancasantos.advogada"
                    fill
                    className="object-cover object-[50%_15%]"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#fbe5a2]">
                    <InstagramIcon size={16} /> @biancasantos.advogada
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
                    Acompanhe a Dra. Bianca Santos no Instagram
                  </h3>
                  <p className="mt-2 max-w-md text-xs leading-relaxed text-slate-300 sm:text-sm">
                    Orientações práticas sobre regras do INSS, novidades sobre aposentadorias,
                    BPC/LOAS, direitos dos segurados e dicas diárias sobre previdência.
                  </p>
                </div>
              </div>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex shrink-0 items-center gap-2.5 rounded-full bg-gradient-to-r from-[#916315] via-[#cfa043] to-[#e3b865] px-7 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-[#08131a] shadow-md transition-all hover:brightness-110"
              >
                <InstagramIcon size={16} /> Seguir no Instagram <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </section>

        {/* Contato & Localização */}
        <section
          id="contato"
          className="scroll-mt-24 bg-[#faf8f4] py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                eyebrow="contato & localização"
                description="Agende seu atendimento presencial em nossa sede no Centro de Conselheiro Lafaiete ou solicite uma consulta on-line com total comodidade e atenção."
              >
                Estamos prontos para{" "}
                <span className="font-display italic text-[#916315]">analisar o seu benefício.</span>
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
                <p className="text-xs text-[#4a5c68] font-medium">
                  Atendimento direto e retorno com agilidade:{" "}
                  <strong className="text-[#08131a]">{PHONE_DISPLAY}</strong>.
                </p>
              </div>

              <div className="mt-10 space-y-4 text-xs text-[#4a5c68] font-medium">
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-[#916315]" />
                  <span>Segunda a Sexta: 08h30 às 17h30</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-[#916315]" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="hover:text-[#916315] transition-colors text-[#08131a] font-semibold"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-[#916315]" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="hover:text-[#916315] transition-colors text-[#08131a] font-semibold"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <InstagramIcon size={16} className="text-[#916315]" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#916315] transition-colors text-[#08131a] font-semibold"
                  >
                    @biancasantos.advogada
                  </a>
                </div>
              </div>
            </div>

            {/* Address & Office Card */}
            <div className="relative overflow-hidden rounded-2xl border border-[#cfa043]/30 bg-[#08131a] text-white p-7 sm:p-10 shadow-2xl">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-gradient-to-r from-[#cfa043] to-[#e3b865]" />

              <div className="flex items-center gap-4">
                <span className="grid size-12 place-items-center rounded-xl bg-[#cfa043]/20 text-[#fbe5a2]">
                  <MapPin size={22} strokeWidth={1.8} />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#fbe5a2]">
                    Sede do Escritório
                  </p>
                  <p className="mt-1 font-display text-2xl font-bold text-white">
                    Conselheiro Lafaiete · MG
                  </p>
                </div>
              </div>

              <address className="mt-7 max-w-md not-italic text-[14px] leading-relaxed text-slate-300">
                <strong className="text-white font-bold">
                  Silva Cabral Advocacia Previdenciária
                </strong>
                <br />
                <span className="text-[#fbe5a2] font-semibold">Dra. Bianca Santos</span>
                <br />
                R. José Nicolau de Queirós, 256 - 1º Andar
                <br />
                Centro, Conselheiro Lafaiete - MG, CEP 36400-000, Brasil
              </address>

              <div className="my-7 h-px bg-white/10" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-slate-400">
                  Atendimento presencial no Centro de Conselheiro Lafaiete e consultoria digital segura em todo o Brasil
                </p>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#cfa043]/40 bg-[#0f2432] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#fbe5a2] transition-colors hover:border-[#cfa043] hover:text-white shadow-xs"
                >
                  Abrir no Google Maps <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Footer CTA Strip — Rich Metallic Gold Gradient */}
        <section className="bg-gradient-to-r from-[#916315] via-[#cfa043] to-[#b5832e] px-5 py-14 text-[#08131a] sm:px-8 sm:py-16 lg:px-12 shadow-inner">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#08131a]/80">
                SILVA CABRAL ADVOCACIA PREVIDENCIÁRIA · CONSELHEIRO LAFAIETE - MG
              </p>
              <h2 className="mt-3 max-w-2xl font-display text-3xl sm:text-4xl font-bold leading-tight text-[#08131a]">
                Pronto para conquistar sua aposentadoria ou benefício do INSS com quem realmente entende da lei?
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá, Dra. Bianca Santos. Gostaria de agendar um atendimento inicial para avaliar minha situação no INSS."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-[#08131a] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-2xl transition-all hover:-translate-y-0.5 hover:bg-black"
            >
              <WhatsAppIcon size={17} /> Falar no WhatsApp <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        {/* Footer — Deep Velvet Petrol Blue */}
        <footer className="bg-[#060e14] px-5 py-14 text-white sm:px-8 lg:px-12 border-t border-[#cfa043]/20">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <div className="inline-flex">
                <Image
                  src="/logo.png"
                  width={2020}
                  height={427}
                  alt="Dra. Bianca Santos - Silva Cabral Advocacia Previdenciária"
                  className="h-10 w-auto object-contain sm:h-12"
                />
              </div>
              <p className="mt-5 max-w-xs text-xs leading-relaxed text-slate-400">
                Advocacia previdenciária de alto padrão, rigor técnico e excelência em
                Aposentadorias, BPC/LOAS, Benefícios por Incapacidade e Pensão por Morte.
                Sede na R. José Nicolau de Queirós, 256 no Centro de Conselheiro Lafaiete/MG
                e atendimento digital em todo o Brasil.
              </p>
              <p className="mt-3 text-xs font-bold text-[#fbe5a2]">
                Avaliação 4,9 ★ no Google (133+ avaliações)
              </p>
            </div>

            <div>
              <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#fbe5a2]">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-slate-300 font-medium">
                <a className="footer-link" href="#inicio">
                  Início
                </a>
                <a className="footer-link" href="#sobre">
                  Sobre Nós & Dra. Bianca
                </a>
                <a className="footer-link" href="#atuacao">
                  Áreas de Atuação
                </a>
                <a className="footer-link" href="#manifesto">
                  Soluções Contra Negativas do INSS
                </a>
                <a className="footer-link" href="#artigos">
                  Orientações Previdenciárias
                </a>
                <a className="footer-link" href="#avaliacoes">
                  Avaliações no Google (133)
                </a>
                <a className="footer-link" href="#contato">
                  Contato & Sede
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#fbe5a2]">
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
                  <InstagramIcon size={15} className="shrink-0" /> @biancasantos.advogada
                </a>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-start gap-2"
                >
                  <MapPin size={15} className="mt-0.5 shrink-0" />
                  <span>R. José Nicolau de Queirós, 256, Centro, Conselheiro Lafaiete - MG</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-[10px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Silva Cabral Advocacia Previdenciária · Dra. Bianca Santos. Todos os direitos reservados.
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
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-2xl border border-[#cfa043]/30 bg-white p-7 shadow-2xl sm:max-w-xl sm:rounded-2xl sm:p-10"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da área"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-full border border-slate-200 text-slate-700 transition-colors hover:border-[#cfa043] hover:text-[#916315] cursor-pointer"
                >
                  <X size={18} />
                </button>

                <div className="eyebrow mb-2">Área de Atuação Previdenciária</div>

                <h2
                  id="area-dialog-title"
                  className="mt-4 max-w-sm pr-10 font-display text-2xl sm:text-3xl font-bold leading-snug text-[#08131a]"
                >
                  {activeArea.title}
                </h2>

                <p className="mt-5 text-sm leading-relaxed text-[#4a5c68]">
                  {activeArea.details}
                </p>

                <div className="mt-6 border-t border-slate-200 pt-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#08131a]">
                    Principais demandas e benefícios atendidos:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-sm text-[#08131a]"
                      >
                        <span className="size-2 rounded-full bg-[#cfa043] shrink-0" />
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
                    <WhatsAppIcon size={16} /> Consultar sobre este benefício
                  </GlowingButton>
                  <button
                    type="button"
                    onClick={() => setActiveArea(null)}
                    className="px-5 py-3 text-xs font-bold text-[#4a5c68] hover:text-[#08131a] transition-colors cursor-pointer"
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
