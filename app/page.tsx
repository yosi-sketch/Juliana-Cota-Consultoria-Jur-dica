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
  HeartHandshake,
  MapPin,
  Menu,
  Scale,
  ShieldCheck,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const instagram = "https://www.instagram.com/sgadvs/";
const maps =
  "https://www.google.com/maps/search/?api=1&query=SG+Advocacia%2C+R.+das+Perp%C3%A9tuas%2C+475+-+E%2C+Lind%C3%A9ia%2C+Belo+Horizonte+-+MG%2C+30690-270";

function InstagramMark({
  size = 16,
  strokeWidth = 1.8,
}: {
  size?: number;
  strokeWidth?: number;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.8" cy="6.4" r="0.75" fill="currentColor" stroke="none" />
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

const areas = [
  {
    title: "Direito de família",
    icon: HeartHandshake,
    summary: "Orientação em questões familiares, com escuta e atenção às decisões de cada etapa.",
    details:
      "Questões de família pedem clareza e respeito às particularidades de cada história. A atuação envolve temas como divórcio, guarda, convivência e pensão alimentícia.",
    topics: ["Divórcio", "Guarda e convivência", "Pensão alimentícia"],
  },
  {
    title: "Direito previdenciário",
    icon: ShieldCheck,
    summary: "Informação jurídica sobre benefícios e questões relacionadas à pensão por morte.",
    details:
      "Em momentos de perda, entender as regras e os documentos necessários pode ser difícil. O atendimento começa pela análise da situação e pela explicação dos próximos passos possíveis.",
    topics: ["Pensão por morte", "Análise de documentos", "Orientação previdenciária"],
  },
  {
    title: "Proteção e orientação",
    icon: Scale,
    summary: "Acolhimento e orientação jurídica em situações de violência doméstica e familiar.",
    details:
      "Cada caso merece ser ouvido com seriedade e discrição. A orientação jurídica ajuda a compreender direitos e caminhos legais de proteção, respeitando a segurança e as escolhas de cada pessoa.",
    topics: ["Violência doméstica", "Direitos e medidas de proteção", "Atendimento respeitoso"],
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
        <p className={light ? "mt-5 max-w-xl text-[15px] leading-7 text-white/65" : "mt-5 max-w-xl text-[15px] leading-7 text-ink-soft"}>
          {description}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeArea, setActiveArea] = useState<(typeof areas)[number] | null>(null);

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
        <header className="sticky top-0 z-40 border-b border-ink/10 bg-ivory/95 backdrop-blur-xl">
          <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-5 px-5 sm:h-[88px] sm:px-8 lg:px-12">
            <a href="#inicio" aria-label="SG Advocacia — início" onClick={closeMenu}>
              <Image
                src="/sg-advocacia/logo.webp"
                width={350}
                height={140}
                alt="SG Advocacia — Consultoria e Assessoria"
                priority
                className="h-auto w-[142px] sm:w-[168px]"
                sizes="(max-width: 640px) 142px, 168px"
              />
            </a>
            <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex">
              <a className="nav-link" href="#inicio">Início</a>
              <a className="nav-link" href="#escritorio">Escritório</a>
              <a className="nav-link" href="#atuacao">Atuação</a>
              <a className="nav-link" href="#avaliacoes">Avaliações</a>
              <a className="nav-link" href="#contato">Contato</a>
            </nav>
            <div className="hidden items-center gap-3 lg:flex">
              <a
                href={instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram da SG Advocacia"
                className="grid size-10 place-items-center rounded-full border border-ink/15 text-ink transition-colors hover:border-brand-700 hover:text-brand-700"
              >
                <InstagramMark size={17} strokeWidth={1.7} />
              </a>
              <GlowingButton href={instagram} target="_blank" size="sm" className="rounded-full">
                Entre em contato <ArrowUpRight size={14} />
              </GlowingButton>
            </div>
            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="grid size-11 place-items-center rounded-full border border-ink/15 lg:hidden"
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
                  {[["Início", "#inicio"], ["Escritório", "#escritorio"], ["Atuação", "#atuacao"], ["Avaliações", "#avaliacoes"], ["Contato", "#contato"]].map(([label, href]) => (
                    <a key={label} href={href} onClick={closeMenu} className="py-3 text-sm text-ink-soft hover:text-brand-700">
                      {label}
                    </a>
                  ))}
                  <a className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-brand-700 px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.13em] text-white" href={instagram} target="_blank" rel="noreferrer" onClick={closeMenu}>
                    <InstagramMark size={15} /> Instagram da SG
                  </a>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        <section id="inicio" className="relative isolate scroll-mt-24 border-b border-ink/10">
          <div className="pointer-events-none absolute -right-40 top-10 -z-10 size-[34rem] rounded-full bg-brand-100/55 blur-3xl" />
          <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[710px] lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:px-12 lg:py-20">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="relative z-10 max-w-2xl lg:py-6">
              <motion.p variants={reveal} className="eyebrow mb-7">
                <span className="size-2 rounded-full bg-brand-700" />
                SG Advocacia · Belo Horizonte
              </motion.p>
              <motion.h1 variants={reveal} className="max-w-[760px] font-serif text-[3.35rem] leading-[0.99] tracking-[-0.045em] text-ink sm:text-6xl lg:text-[5.2rem]">
                Direito com escuta, <span className="italic text-brand-700">clareza</span> e presença.
              </motion.h1>
              <motion.p variants={reveal} className="mt-7 max-w-xl text-[15px] leading-7 text-ink-soft sm:text-base sm:leading-8">
                Orientação jurídica próxima e cuidadosa, para que você compreenda seus direitos e saiba quais caminhos pode seguir.
              </motion.p>
              <motion.div variants={reveal} className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <GlowingButton href={instagram} target="_blank" size="lg" className="rounded-full">
                  Fale com a SG <ArrowUpRight size={16} />
                </GlowingButton>
                <a href="#atuacao" className="group inline-flex items-center gap-2 px-1 py-3 text-sm font-medium text-ink hover:text-brand-700">
                  Conheça a atuação <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
              <motion.div variants={reveal} className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-ink/10 pt-6 text-xs text-ink-soft">
                <span className="inline-flex items-center gap-2"><MapPin size={15} className="text-brand-700" /> Lindéia · Belo Horizonte</span>
                <span className="inline-flex items-center gap-2"><Sparkles size={15} className="text-brand-700" /> Presencial e on-line</span>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto w-full max-w-[470px] lg:ml-auto lg:mr-3"
            >
              <div className="absolute -inset-3 -rotate-2 rounded-[46%_46%_5%_5%] border border-brand-700/20 sm:-inset-4" />
              <div className="relative aspect-[0.82] overflow-hidden rounded-[46%_46%_5%_5%] bg-[#e8e2de]">
                <Image
                  src="/sg-advocacia/fernanda-escritorio.webp"
                  alt="Dra. Fernanda em seu escritório, diante da identidade visual da SG Advocacia"
                  fill
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 42vw"
                  className="object-cover object-[50%_8%]"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/65 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3 text-white sm:bottom-8 sm:left-8 sm:right-8">
                  <div><p className="font-serif text-2xl">SG Advocacia</p><p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/75">Consultoria e Assessoria</p></div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-white/50"><ArrowUpRight size={18} /></span>
                </div>
              </div>
              <div className="absolute -left-4 top-[17%] rounded-full border border-ink/10 bg-ivory px-4 py-2.5 text-[10px] font-medium tracking-[0.1em] text-ink shadow-card sm:-left-10 sm:px-5">
                ATENDIMENTO PRÓXIMO
              </div>
            </motion.div>
          </div>
        </section>

        <section aria-label="Destaques da SG Advocacia" className="border-b border-ink/10 bg-white/55">
          <div className="mx-auto grid max-w-7xl gap-7 px-5 py-7 sm:grid-cols-3 sm:gap-4 sm:px-8 lg:px-12">
            {[["5,0", "em 24 avaliações no Google"], ["Belo Horizonte", "escritório na região do Lindéia"], ["On-line", "atendimento também à distância"]].map(([value, label], index) => (
              <div key={label} className={index > 0 ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-ink/10" : "flex items-center gap-4 sm:justify-center"}>
                <span className="font-serif text-3xl text-brand-700">{value}</span>
                <span className="max-w-[145px] text-[11px] leading-5 text-ink-soft">{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="escritorio" className="scroll-mt-24 bg-white py-20 sm:py-28 lg:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-24 lg:px-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal} className="relative mx-auto w-full max-w-[560px]">
              <div className="relative aspect-[0.91] overflow-hidden rounded-[2px] bg-[#ded7d0]">
                <Image src="/sg-advocacia/equipe.webp" alt="Equipe da SG Advocacia reunida no escritório em Belo Horizonte" fill sizes="(max-width: 1024px) 90vw, 45vw" className="object-cover object-center" />
              </div>
              <div className="absolute -bottom-6 right-4 max-w-[230px] border-l-2 border-brand-700 bg-ivory px-5 py-4 shadow-card sm:-right-7 sm:px-6">
                <p className="font-serif text-xl text-ink">Uma equipe presente</p>
                <p className="mt-1 text-[11px] leading-5 text-ink-soft">Atendimento humano, com atenção ao que cada situação pede.</p>
              </div>
              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l border-t border-brand-700/40 sm:-left-7 sm:-top-7 sm:size-32" />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
              <motion.p variants={reveal} className="eyebrow">SOBRE A SG ADVOCACIA</motion.p>
              <motion.h2 variants={reveal} className="mt-4 max-w-2xl font-serif text-4xl leading-[1.09] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[3.55rem]">
                Um atendimento que começa por <span className="italic text-brand-700">ouvir você.</span>
              </motion.h2>
              <motion.p variants={reveal} className="mt-6 max-w-xl text-[15px] leading-7 text-ink-soft">
                A SG Advocacia atua em Belo Horizonte com uma abordagem próxima e responsável. A equipe busca compreender cada situação, explicar as possibilidades com clareza e manter o cliente informado durante o atendimento.
              </motion.p>
              <motion.p variants={reveal} className="mt-4 max-w-xl text-[15px] leading-7 text-ink-soft">
                O contato pode ser presencial, no bairro Lindéia, ou on-line, com a mesma atenção e cuidado em cada conversa.
              </motion.p>
              <motion.a variants={reveal} href={instagram} target="_blank" rel="noreferrer" className="group mt-8 inline-flex items-center gap-2 border-b border-brand-700/40 pb-2 text-xs font-semibold uppercase tracking-[0.13em] text-brand-800 hover:border-brand-700 hover:text-brand-700">
                Conheça a equipe no Instagram <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
            </motion.div>
          </div>
        </section>

        <section id="atuacao" className="scroll-mt-24 bg-ivory py-20 sm:py-28 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal} className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading eyebrow="ÁREAS DE ATUAÇÃO" description="Informação clara e acompanhamento cuidadoso, considerando as particularidades de cada caso.">
                Orientação jurídica em momentos que <span className="italic text-brand-700">importam.</span>
              </Heading>
              <p className="max-w-[250px] pb-1 text-xs leading-6 text-ink-soft">Toque em uma área para conhecer os temas atendidos.</p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} variants={stagger} className="mt-12 grid gap-4 md:grid-cols-3">
              {areas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <motion.article key={area.title} variants={reveal} className="group flex min-h-[310px] flex-col border border-ink/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-700/35 hover:shadow-card sm:p-8">
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-full bg-brand-50 text-brand-700"><Icon size={22} strokeWidth={1.5} /></span>
                      <span className="font-serif text-2xl text-brand-700/55">0{index + 1}</span>
                    </div>
                    <h3 className="mt-8 font-serif text-[1.75rem] leading-tight text-ink">{area.title}</h3>
                    <p className="mt-3 text-[13px] leading-6 text-ink-soft">{area.summary}</p>
                    <button type="button" onClick={() => setActiveArea(area)} className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-7 text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-800 hover:text-brand-700">
                      Saiba mais <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
                    </button>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section className="bg-[#eee9e4] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid items-end gap-7 md:grid-cols-[1fr_auto]">
              <Heading eyebrow="INFORMAÇÃO JURÍDICA" description="Materiais informativos da SG Advocacia sobre direitos e orientação jurídica.">
                Conteúdos sobre temas <span className="italic text-brand-700">do cotidiano.</span>
              </Heading>
              <a href={instagram} target="_blank" rel="noreferrer" className="group mb-1 inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.13em] text-brand-800">
                Ver no Instagram <ArrowUpRight size={15} />
              </a>
            </div>
            <div className="mt-11 grid gap-6 md:grid-cols-2">
              <motion.a href={instagram} target="_blank" rel="noreferrer" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.65 }} className="group relative grid min-h-[330px] overflow-hidden bg-ink sm:min-h-[420px] sm:grid-cols-[0.76fr_1fr]">
                <div className="relative mx-auto aspect-[0.8] h-full max-h-[520px] overflow-hidden sm:mx-0 sm:w-full">
                  <Image src="/sg-advocacia/pensao-por-morte.webp" alt="Conteúdo informativo da SG Advocacia sobre pensão por morte" fill sizes="(max-width: 768px) 80vw, 36vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.035]" />
                </div>
                <div className="flex flex-col justify-end p-7 text-white sm:p-9">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-rose-200">Previdenciário</span>
                  <h3 className="mt-3 font-serif text-3xl leading-tight">Pensão por morte: informação para entender seus direitos.</h3>
                  <span className="mt-5 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/80">Acompanhe os conteúdos <ArrowUpRight size={14} /></span>
                </div>
              </motion.a>
              <motion.a href={instagram} target="_blank" rel="noreferrer" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.65, delay: 0.1 }} className="group relative grid min-h-[330px] overflow-hidden bg-[#292526] sm:min-h-[420px] sm:grid-cols-[0.76fr_1fr]">
                <div className="relative mx-auto aspect-[0.8] h-full max-h-[520px] overflow-hidden sm:mx-0 sm:aspect-auto sm:w-full">
                  <Image src="/sg-advocacia/violencia-domestica.webp" alt="Conteúdo informativo da SG Advocacia sobre violência doméstica" fill sizes="(max-width: 768px) 80vw, 36vw" className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.035]" />
                </div>
                <div className="flex flex-col justify-end p-7 text-white sm:p-9">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-rose-200">Direitos e proteção</span>
                  <h3 className="mt-3 font-serif text-3xl leading-tight">Orientação cuidadosa em situações de violência doméstica.</h3>
                  <span className="mt-5 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/80">Acompanhe os conteúdos <ArrowUpRight size={14} /></span>
                </div>
              </motion.a>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-brand-950 py-20 text-white sm:py-28 lg:py-32">
          <div className="pointer-events-none absolute -left-24 top-1/4 size-80 rounded-full bg-brand-800/45 blur-3xl" />
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.86fr_1.14fr] lg:gap-20 lg:px-12">
            <Heading eyebrow="NOSSO COMPROMISSO" light description="Cada conversa é conduzida com respeito, responsabilidade e atenção às dúvidas de quem nos procura.">
              A forma de cuidar também faz <span className="italic text-rose-200">diferença.</span>
            </Heading>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="divide-y divide-white/15">
              {[["01", "Escuta com atenção", "Cada atendimento começa por compreender a situação e o que é importante para você."], ["02", "Clareza em cada etapa", "Orientações diretas e acessíveis para você entender as possibilidades do seu caso."], ["03", "Acompanhamento próximo", "Informação e presença ao longo do atendimento, presencialmente ou de forma on-line."]].map(([number, title, description]) => (
                <motion.div key={number} variants={reveal} className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-5 sm:py-7">
                  <span className="font-serif text-2xl text-rose-200/80">{number}</span>
                  <div><h3 className="font-serif text-2xl">{title}</h3><p className="mt-2 max-w-lg text-[13px] leading-6 text-white/65">{description}</p></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="avaliacoes" className="scroll-mt-24 bg-white py-20 sm:py-28 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20 lg:px-12">
            <div>
              <Heading eyebrow="AVALIAÇÕES NO GOOGLE" description="Consulte a nota, a quantidade de avaliações e as informações atuais diretamente no perfil público da SG Advocacia.">
                A confiança se constrói em cada <span className="italic text-brand-700">atendimento.</span>
              </Heading>
              <a href={maps} target="_blank" rel="noreferrer" className="group mt-8 inline-flex items-center gap-2 border-b border-brand-700/40 pb-2 text-xs font-semibold uppercase tracking-[0.13em] text-brand-800 hover:border-brand-700 hover:text-brand-700">
                Ver perfil no Google <ArrowUpRight size={15} />
              </a>
            </div>
            <div className="relative flex min-h-[260px] flex-col justify-between overflow-hidden border border-ink/10 bg-ivory p-7 sm:p-9">
              <div className="absolute -right-10 -top-16 size-56 rounded-full border border-brand-700/10" />
              <div className="absolute -right-2 -top-8 size-40 rounded-full border border-brand-700/10" />
              <div className="relative flex items-center justify-between gap-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-ink-soft">Perfil público da SG Advocacia</span>
                <span className="flex gap-0.5 text-brand-700" aria-label="5 estrelas">
                  {Array.from({ length: 5 }, (_, index) => <Star key={index} size={15} fill="currentColor" strokeWidth={1} />)}
                </span>
              </div>
              <div className="relative mt-8 flex flex-wrap items-end justify-between gap-6">
                <span className="font-serif text-7xl leading-none text-ink sm:text-8xl">5,0</span>
                <div className="pb-1 text-right">
                  <p className="font-serif text-2xl text-brand-800">24 avaliações</p>
                  <p className="mt-1 text-xs text-ink-soft">Nota e quantidade informadas no Google</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="scroll-mt-24 bg-ivory py-20 sm:py-28 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12">
            <div>
              <Heading eyebrow="CONTATO E LOCALIZAÇÃO" description="Conheça a SG Advocacia na região do Lindéia, em Belo Horizonte, ou fale com a equipe pelo Instagram.">
                Estamos por perto para <span className="italic text-brand-700">conversar.</span>
              </Heading>
              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton href={instagram} target="_blank" size="lg" className="rounded-full">
                  <InstagramMark size={16} /> Falar pelo Instagram
                </GlowingButton>
                <p className="text-[11px] leading-5 text-ink-soft">O perfil informado nos materiais da SG é @sgadvs.</p>
              </div>
            </div>
            <div className="relative overflow-hidden border border-ink/10 bg-white p-7 sm:p-10">
              <div className="absolute right-0 top-0 h-1 w-28 bg-brand-700" />
              <div className="flex items-center gap-4">
                <span className="grid size-12 place-items-center rounded-full bg-brand-50 text-brand-700"><MapPin size={21} strokeWidth={1.6} /></span>
                <div><p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-700">Endereço</p><p className="mt-1 font-serif text-2xl text-ink">Belo Horizonte · MG</p></div>
              </div>
              <address className="mt-7 max-w-md not-italic text-[14px] leading-7 text-ink-soft">
                R. das Perpétuas, 475 - E<br />Lindéia, Belo Horizonte - MG<br />30690-270, Brasil
              </address>
              <div className="my-7 h-px bg-ink/10" />
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-ink-soft">Atendimento presencial e on-line</p>
                <a href={maps} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.13em] text-ink hover:border-brand-700 hover:text-brand-700">
                  Abrir no mapa <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-brand-700 px-5 py-14 text-white sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div><p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">SG ADVOCACIA · CONSULTORIA E ASSESSORIA</p><h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight sm:text-4xl">Informação clara é um bom começo.</h2></div>
            <a href={instagram} target="_blank" rel="noreferrer" className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-white px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-800 transition-transform hover:-translate-y-0.5">
              Instagram da SG <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        <footer className="bg-ink px-5 py-12 text-white sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr_1fr]">
            <div>
              <div className="inline-flex bg-ivory px-3 py-2">
                <Image src="/sg-advocacia/logo.webp" width={310} height={125} alt="SG Advocacia — Consultoria e Assessoria" className="h-auto w-[160px]" sizes="160px" />
              </div>
              <p className="mt-4 max-w-xs text-xs leading-6 text-white/60">Atendimento jurídico próximo e responsável em Belo Horizonte e on-line.</p>
            </div>
            <div><h2 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-rose-200">Navegação</h2><div className="mt-4 flex flex-col items-start gap-3 text-xs text-white/70"><a className="footer-link" href="#escritorio">Escritório</a><a className="footer-link" href="#atuacao">Áreas de atuação</a><a className="footer-link" href="#avaliacoes">Avaliações</a></div></div>
            <div><h2 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-rose-200">Fale com a equipe</h2><div className="mt-4 flex flex-col items-start gap-3 text-xs text-white/70">
              <a href={instagram} target="_blank" rel="noreferrer" className="footer-link inline-flex items-center gap-2"><InstagramMark size={14} /> @sgadvs</a>
              <a href={maps} target="_blank" rel="noreferrer" className="footer-link inline-flex items-start gap-2"><MapPin size={14} className="mt-0.5 shrink-0" /> R. das Perpétuas, 475 - E, Lindéia</a>
            </div></div>
          </div>
          <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/15 pt-5 text-[10px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} SG Advocacia. Todos os direitos reservados.</p>
            <p>Conteúdo informativo. Cada situação deve ser analisada individualmente.</p>
          </div>
        </footer>

        <AnimatePresence>
          {activeArea && (
            <motion.div className="fixed inset-0 z-50 flex items-end justify-center bg-ink/55 p-0 backdrop-blur-sm sm:items-center sm:p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveArea(null)}>
              <motion.section role="dialog" aria-modal="true" aria-labelledby="area-dialog-title" initial={{ opacity: 0, y: 24, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.99 }} transition={{ duration: 0.24 }} onClick={(event) => event.stopPropagation()} className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-2xl bg-ivory p-7 shadow-card sm:max-w-xl sm:rounded-sm sm:p-10">
                <button type="button" aria-label="Fechar detalhes da área" onClick={() => setActiveArea(null)} className="absolute right-5 top-5 grid size-10 place-items-center rounded-full border border-ink/15 text-ink hover:text-brand-700"><X size={18} /></button>
                <p className="eyebrow">ÁREA DE ATUAÇÃO</p>
                <h2 id="area-dialog-title" className="mt-4 max-w-sm pr-10 font-serif text-4xl leading-tight text-ink">{activeArea.title}</h2>
                <p className="mt-5 text-sm leading-7 text-ink-soft">{activeArea.details}</p>
                <ul className="mt-6 space-y-3">{activeArea.topics.map((topic) => <li key={topic} className="flex items-center gap-3 text-sm text-ink"><span className="size-1.5 rounded-full bg-brand-700" />{topic}</li>)}</ul>
                <GlowingButton href={instagram} target="_blank" size="md" className="mt-8 rounded-full">Instagram da SG <ArrowUpRight size={15} /></GlowingButton>
              </motion.section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </MotionConfig>
  );
}
