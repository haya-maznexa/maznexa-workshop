"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import {
  Database, Timer, Eye, Zap, RefreshCw, Moon, Sun,
  ArrowRight, Target, ListChecks, Compass, TrendingUp,
  Search, Lightbulb, Bell, MessageSquare, Users, Layers,
  CheckCircle2, Sparkles, ArrowUpRight,
} from "lucide-react";
import {
  BENEFITS, KPI_STEPS, INTERPRET_STEPS, REPORTING_PRACTICES,
  TOOLS_TABLE, TOOL_DETAILS, SECTIONS,
  DASHBOARD_EXAMPLES, BUDGET_TOTAL, BUDGET_ONLINE, BUDGET_OFFLINE,
  BUDGET_BY_BRAND, BUDGET_BY_MONTH, BUDGET_BY_PLATFORM, INTEGRATIONS,
} from "./data";
import { ToolLogo } from "./ToolLogo";
import { IntegrationIcon } from "./IntegrationIcon";

function fmtSAR(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K`;
  return `${n}`;
}

// Animated horizontal bar
function BudgetBar({ label, value, max, color = "#5053C8", delay = 0 }: {
  label: string; value: number; max: number; color?: string; delay?: number;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-24 shrink-0 text-xs font-medium text-foreground truncate">{label}</span>
      <div className="flex-1 h-7 rounded-lg bg-muted overflow-hidden">
        <motion.div
          className="h-full rounded-lg flex items-center justify-end px-2"
          style={{ background: color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${Math.max((value / max) * 100, 4)}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay, ease: "easeOut" }}
        >
          <span className="text-[10px] font-semibold text-white whitespace-nowrap">
            {fmtSAR(value)}
          </span>
        </motion.div>
      </div>
    </div>
  );
}

const BENEFIT_ICONS: Record<string, React.ElementType> = {
  database: Database, timer: Timer, eye: Eye, zap: Zap, refresh: RefreshCw,
};
const INTERPRET_ICONS = [TrendingUp, Compass, Search, Lightbulb, ArrowUpRight];
const REPORTING_ICONS = [Timer, Users, MessageSquare, Bell, RefreshCw];

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="max-w-2xl mb-12">
      <Reveal>
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#5053C8] dark:text-[#BE98FF] bg-[#5053C8]/10 dark:bg-[#BE98FF]/10 px-3 py-1 rounded-full">
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-foreground">{title}</h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className="mt-3 text-base text-muted-foreground leading-relaxed">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}

export default function Workshop() {
  const { theme, setTheme } = useTheme();
  const [active, setActive] = useState("why");
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── Nav ── */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-5 h-16">
          <a href="#top" className="flex items-center gap-2">
            <Image src="/logo.png" alt="MazNexa" width={420} height={90} className="h-6 w-auto object-contain" priority />
          </a>
          <nav className="hidden lg:flex items-center gap-1">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  active === s.id ? "text-[#5053C8] dark:text-[#BE98FF] bg-[#5053C8]/10 dark:bg-[#BE98FF]/10" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {s.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            {mounted && (
              <button
                aria-label="Toggle theme"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-9 h-9 rounded-lg border border-input flex items-center justify-center hover:bg-muted transition-colors"
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            )}
            <a
              href="#tools"
              className="hidden sm:inline-flex items-center gap-1.5 h-9 px-4 rounded-lg text-sm font-medium text-white gradient-brand hover:opacity-90 transition-opacity"
            >
              <Layers className="w-4 h-4" /> Our Toolkit
            </a>
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <section id="top" className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(190,152,255,0.35), transparent 70%)" }}
        />
        <div className="relative max-w-6xl mx-auto px-5 pt-20 pb-24 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#5053C8] dark:text-[#BE98FF] bg-white/60 dark:bg-white/5 border border-[#5053C8]/20 px-3 py-1.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5" /> MazNexa Workshop
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Dashboard Monitoring &<br />
              <span className="text-gradient">Performance Reporting</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
              How to build dashboards that people actually use — turning scattered data
              into a single source of truth, clear KPIs, and decisions you can act on.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href="#why" className="inline-flex items-center gap-2 h-11 px-6 rounded-xl text-white gradient-brand font-medium hover:opacity-90 transition-opacity">
                Start the Workshop <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#tools" className="inline-flex items-center gap-2 h-11 px-6 rounded-xl border border-input font-medium hover:bg-muted transition-colors">
                <Layers className="w-4 h-4" /> Tools we use
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { k: "5", v: "Core principles" },
                { k: "10", v: "KPI & insight rules" },
                { k: "4", v: "Reporting tools" },
                { k: "1", v: "Source of truth" },
              ].map((s) => (
                <div key={s.v} className="rounded-2xl border border-border bg-card/60 backdrop-blur px-4 py-5">
                  <p className="text-3xl font-bold text-gradient">{s.k}</p>
                  <p className="text-xs text-muted-foreground mt-1">{s.v}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 1. Why dashboards ── */}
      <section id="why" className="max-w-6xl mx-auto px-5 py-20 scroll-mt-20">
        <SectionHeading
          eyebrow="01 · Foundations"
          title="Why dashboards matter"
          subtitle="Reporting principles and the common pitfalls to avoid. A good dashboard is not about more data — it's about the right data, in the right place, at the right time."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {BENEFITS.map((b, i) => {
            const Icon = BENEFIT_ICONS[b.icon];
            return (
              <Reveal key={b.title} delay={i * 0.06}>
                <div className="group h-full rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 gradient-brand">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">{b.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.body}</p>
                </div>
              </Reveal>
            );
          })}
          <Reveal delay={BENEFITS.length * 0.06}>
            <div className="h-full rounded-2xl border border-dashed border-[#5053C8]/30 bg-[#5053C8]/[0.04] p-6 flex flex-col justify-center">
              <Target className="w-6 h-6 text-[#5053C8] dark:text-[#BE98FF] mb-3" />
              <p className="text-sm font-medium text-foreground">The takeaway</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Consolidate, automate, and simplify — so every stakeholder trusts the numbers and acts on them.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 2. Structure & KPIs ── */}
      <section id="structure" className="scroll-mt-20 border-y border-border bg-muted/30">
        <div className="max-w-6xl mx-auto px-5 py-20">
          <SectionHeading
            eyebrow="02 · Design"
            title="Dashboard structure & KPI selection"
            subtitle="Choosing what to measure is half the battle. Follow these five steps to keep dashboards focused and decision-driven."
          />
          <div className="space-y-4">
            {KPI_STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.05}>
                <div className="group flex items-start gap-5 rounded-2xl border border-border bg-card p-5 md:p-6 hover:shadow-card transition-shadow">
                  <span className="shrink-0 w-14 h-14 rounded-xl gradient-brand flex items-center justify-center text-white text-xl font-bold">
                    {s.n}
                  </span>
                  <div className="pt-1">
                    <h3 className="font-semibold text-lg text-foreground">{s.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                  </div>
                  <ListChecks className="hidden md:block ml-auto w-5 h-5 text-muted-foreground/40 shrink-0" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Interpretation ── */}
      <section id="interpret" className="max-w-6xl mx-auto px-5 py-20 scroll-mt-20">
        <SectionHeading
          eyebrow="03 · Analysis"
          title="Data interpretation"
          subtitle="Turning metrics into decisions. Numbers only matter when you understand what they mean and what to do next."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {INTERPRET_STEPS.map((s, i) => {
            const Icon = INTERPRET_ICONS[i] ?? Compass;
            return (
              <Reveal key={s.n} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#5053C8]/10 dark:bg-[#BE98FF]/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#5053C8] dark:text-[#BE98FF]" />
                    </div>
                    <span className="text-3xl font-bold text-[#5053C8]/15 dark:text-[#BE98FF]/20">{s.n}</span>
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ── 4. Reporting ── */}
      <section id="reporting" className="scroll-mt-20 border-y border-border bg-muted/30">
        <div className="max-w-6xl mx-auto px-5 py-20">
          <SectionHeading
            eyebrow="04 · Communication"
            title="Reporting practices & cadence"
            subtitle="Great reporting is a conversation with stakeholders — timely, tailored, and jargon-free."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {REPORTING_PRACTICES.map((p, i) => {
              const Icon = REPORTING_ICONS[i] ?? MessageSquare;
              return (
                <Reveal key={p.title} delay={i * 0.06}>
                  <div className="h-full flex items-start gap-4 rounded-2xl border border-border bg-card p-6 hover:shadow-card transition-shadow">
                    <div className="shrink-0 w-10 h-10 rounded-xl gradient-brand flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{p.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Dashboard Examples ── */}
      <section id="examples" className="max-w-6xl mx-auto px-5 py-20 scroll-mt-20">
        <SectionHeading
          eyebrow="05 · In practice"
          title="Dashboard examples"
          subtitle="Real dashboards we build and monitor — each one designed around a specific audience and decision, built in the tool that fits it best."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {DASHBOARD_EXAMPLES.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-border bg-card overflow-hidden shadow-card hover:shadow-card-hover transition-all">
                <div className="relative overflow-hidden bg-muted aspect-[16/9]">
                  <Image
                    src={d.img}
                    alt={d.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center h-6 px-2 rounded-md bg-white border border-border">
                      <ToolLogo tool={d.tool} className="h-3" />
                    </span>
                    <h3 className="font-semibold text-foreground">{d.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d.caption}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Budget Distribution 2026 ── */}
      <section id="budget" className="scroll-mt-20 border-y border-border bg-muted/30">
        <div className="max-w-6xl mx-auto px-5 py-20">
          <SectionHeading
            eyebrow="06 · Worked example"
            title="Marketing Budget 2026 — distribution"
            subtitle="A live example of turning a planning spreadsheet into clear, decision-ready views: where the budget goes by brand, by month, and by channel."
          />

          {/* Headline stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { k: `${fmtSAR(BUDGET_TOTAL)}`, v: "Total 2026 budget", sub: "SAR" },
              { k: `${fmtSAR(BUDGET_OFFLINE)}`, v: "Offline budget", sub: `${Math.round((BUDGET_OFFLINE / BUDGET_TOTAL) * 100)}% of total` },
              { k: `${fmtSAR(BUDGET_ONLINE)}`, v: "Online budget", sub: `${Math.round((BUDGET_ONLINE / BUDGET_TOTAL) * 100)}% of total` },
              { k: `${BUDGET_BY_BRAND.length}`, v: "Brands funded", sub: "across the group" },
            ].map((s, i) => (
              <Reveal key={s.v} delay={i * 0.05}>
                <div className="rounded-2xl border border-border bg-card px-5 py-6 h-full">
                  <p className="text-3xl font-bold text-gradient">{s.k}</p>
                  <p className="text-sm font-medium text-foreground mt-1">{s.v}</p>
                  <p className="text-xs text-muted-foreground">{s.sub}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* By brand */}
            <Reveal>
              <div className="rounded-2xl border border-border bg-card p-6 h-full">
                <h3 className="font-semibold text-foreground mb-1">Budget by Brand</h3>
                <p className="text-xs text-muted-foreground mb-5">Plan marketing budget 2026 (SAR)</p>
                <div className="space-y-2.5">
                  {BUDGET_BY_BRAND.map((b, i) => (
                    <BudgetBar
                      key={b.name}
                      label={b.name}
                      value={b.value}
                      max={BUDGET_BY_BRAND[0].value}
                      color={i === 0 ? "#5053C8" : i === 1 ? "#6C6FD6" : "#BE98FF"}
                      delay={i * 0.05}
                    />
                  ))}
                </div>
              </div>
            </Reveal>

            {/* By platform + channel */}
            <div className="space-y-6">
              <Reveal>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-semibold text-foreground mb-1">Online spend by Platform</h3>
                  <p className="text-xs text-muted-foreground mb-5">Actual online ad spend to date (SAR)</p>
                  <div className="space-y-2.5">
                    {BUDGET_BY_PLATFORM.map((p, i) => (
                      <BudgetBar
                        key={p.name}
                        label={p.name}
                        value={p.value}
                        max={BUDGET_BY_PLATFORM[0].value}
                        color={p.color}
                        delay={i * 0.05}
                      />
                    ))}
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-semibold text-foreground mb-4">Online vs Offline</h3>
                  <div className="flex h-8 rounded-lg overflow-hidden">
                    <motion.div
                      className="gradient-brand flex items-center justify-center text-[11px] font-semibold text-white"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(BUDGET_OFFLINE / BUDGET_TOTAL) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                    >
                      Offline {Math.round((BUDGET_OFFLINE / BUDGET_TOTAL) * 100)}%
                    </motion.div>
                    <motion.div
                      className="bg-[#BE98FF] flex items-center justify-center text-[11px] font-semibold text-white"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(BUDGET_ONLINE / BUDGET_TOTAL) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      Online {Math.round((BUDGET_ONLINE / BUDGET_TOTAL) * 100)}%
                    </motion.div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* By month */}
          <Reveal>
            <div className="rounded-2xl border border-border bg-card p-6 mt-6">
              <h3 className="font-semibold text-foreground mb-1">Budget by Month</h3>
              <p className="text-xs text-muted-foreground mb-6">Plan marketing budget across 2026 (SAR) — note the campaign peaks in Mar &amp; Sep</p>
              <div className="flex items-end justify-between gap-1.5 h-48">
                {BUDGET_BY_MONTH.map((m, i) => {
                  const maxM = Math.max(...BUDGET_BY_MONTH.map((x) => x.value));
                  return (
                    <div key={m.name} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                      <span className="text-[9px] text-muted-foreground font-medium">{fmtSAR(m.value)}</span>
                      <motion.div
                        className="w-full rounded-t-md gradient-brand"
                        initial={{ height: 0 }}
                        whileInView={{ height: `${(m.value / maxM) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.04, ease: "easeOut" }}
                      />
                      <span className="text-[10px] text-muted-foreground">{m.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 7. Tools ── */}
      <section id="tools" className="max-w-6xl mx-auto px-5 py-20 scroll-mt-20">
        <SectionHeading
          eyebrow="07 · Toolkit"
          title="Tools we use"
          subtitle="The platforms behind our monitoring and reporting — from full BI suites to AI-assisted interpretation."
        />

        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card mb-10">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="gradient-brand text-white">
                    <th className="text-left font-semibold px-5 py-3.5">Tool</th>
                    <th className="text-left font-semibold px-5 py-3.5">Type</th>
                    <th className="text-left font-semibold px-5 py-3.5">Speed</th>
                    <th className="text-left font-semibold px-5 py-3.5">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {TOOLS_TABLE.map((t) => (
                    <tr key={t.tool} className="hover:bg-muted/50 transition-colors">
                      <td className="px-5 py-3.5 font-semibold text-foreground">
                        <span className="inline-flex items-center gap-2.5">
                          <span className="inline-flex items-center justify-center h-8 w-12 rounded-md bg-white border border-border shrink-0">
                            <ToolLogo tool={t.tool} className="h-4" />
                          </span>
                          {t.tool}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 text-muted-foreground">{t.type}</td>
                      <td className="px-5 py-3.5">
                        <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full bg-[#5053C8]/10 text-[#5053C8] dark:text-[#BE98FF]">
                          {t.speed}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 text-muted-foreground">{t.best}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TOOL_DETAILS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-card-hover transition-all">
                <div className="flex items-center gap-3 mb-5">
                  <span className="h-12 min-w-[64px] px-3 rounded-xl bg-white border border-border flex items-center justify-center shrink-0">
                    <ToolLogo tool={t.name} className="h-6" />
                  </span>
                  <h3 className="text-xl font-bold text-foreground">{t.name}</h3>
                </div>
                {[
                  { label: "What it does", items: t.does, icon: Layers },
                  { label: "Best for", items: t.bestFor, icon: Target },
                  { label: "Key features", items: t.features, icon: Sparkles },
                ].map((group) => (
                  <div key={group.label} className="mb-4 last:mb-0">
                    <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground/70 mb-2">
                      <group.icon className="w-3.5 h-3.5" /> {group.label}
                    </p>
                    <ul className="space-y-1.5">
                      {group.items.map((it) => (
                        <li key={it} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-[#5053C8] dark:text-[#BE98FF]" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Integrations */}
        <div className="mt-16">
          <Reveal>
            <div className="max-w-2xl mb-8">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                Platforms we integrate with
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                These tools pull data automatically from the platforms and sources below — so every
                dashboard stays in sync without manual exports.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INTEGRATIONS.map((cat, ci) => (
              <Reveal key={cat.group} delay={ci * 0.06}>
                <div className="h-full rounded-2xl border border-border bg-card p-5 shadow-card">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#5053C8] dark:text-[#BE98FF] mb-4">
                    {cat.group}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((it) => (
                      <span
                        key={it.name}
                        className="inline-flex items-center gap-1.5 h-8 pl-1.5 pr-3 rounded-lg border border-border bg-muted/40 text-xs font-medium text-foreground"
                      >
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-white border border-border shrink-0">
                          <IntegrationIcon icon={it.icon} className="w-3.5 h-3.5" />
                        </span>
                        {it.name}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing ── */}
      <section className="max-w-6xl mx-auto px-5 pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl gradient-brand px-8 py-14 text-center text-white">
            <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(circle at 20% 20%, white, transparent 40%)" }} />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold">Measure what matters. Report with clarity.</h2>
              <p className="mt-3 max-w-xl mx-auto text-white/80">
                Consolidate your data, choose the right KPIs, interpret the trends,
                and communicate them clearly — that's how dashboards drive decisions.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-border">
        <div className="max-w-6xl mx-auto px-5 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Image src="/logo.png" alt="MazNexa" width={360} height={80} className="h-5 w-auto object-contain opacity-80" />
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} MazNexa · Dashboard Monitoring & Performance Reporting Workshop
          </p>
        </div>
      </footer>
    </div>
  );
}
