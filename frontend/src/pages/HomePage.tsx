import { motion } from 'framer-motion'
import { Bot, BriefcaseBusiness, FileText, Layers3, Mail, MessageSquareQuote, ShieldCheck, Sparkles, Wand2 } from 'lucide-react'
import { Footer } from '../components/Footer'
import { FadeIn } from '../components/motion/FadeIn'
import { TextReveal } from '../components/motion/TextReveal'
import { Navbar } from '../components/Navbar'
import { Button } from '../components/ui/Button'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'

const TRUSTED_BY = ['ByteForge', 'ClarityPay', 'Northwind', 'HelioCRM', 'OpsGrid']

const SERVICES = [
  {
    icon: Wand2,
    title: 'AI Process Automation',
    desc: 'Automate repetitive workflows across tools (CRM, email, finance) with guardrails and human-in-the-loop review.',
  },
  {
    icon: Bot,
    title: 'Internal AI Copilots',
    desc: 'Role-based copilots for sales, support, and ops—grounded in your docs and data, with auditability.',
  },
  {
    icon: Layers3,
    title: 'Data + Integrations',
    desc: 'Reliable pipelines + API integrations so your automation runs on clean, governed data.',
  },
]

const FEATURES = [
  { icon: ShieldCheck, title: 'Trust by design', desc: 'RBAC, PII redaction, audit logs, and clear model boundaries.' },
  { icon: Sparkles, title: 'Fast time-to-value', desc: 'Pilot in 10 days, then expand with reusable automation blocks.' },
  { icon: Layers3, title: 'Measurable ROI', desc: 'Dashboards that tie automation to time saved and conversion lift.' },
  { icon: Wand2, title: 'Modern UX', desc: 'Clean UI, clear microcopy, and frictionless conversion paths.' },
]

const CASES = [
  { company: 'ClarityPay', result: '38% faster onboarding', summary: 'Automated KYC review + ticket routing with approvals.' },
  { company: 'HelioCRM', result: '22% higher win-rate', summary: 'Sales copilot that drafts outreach and surfaces objections.' },
  { company: 'OpsGrid', result: '120 hrs/month saved', summary: 'Back-office reconciliation + anomaly detection for finance.' },
]

const TESTIMONIALS = [
  {
    name: 'Ayesha K.',
    role: 'COO, Northwind',
    quote:
      'NovaOps shipped automation that our team trusted from day one—clear approvals, audit logs, and real metrics.',
  },
  {
    name: 'Hassan R.',
    role: 'Founder, ByteForge',
    quote: 'The copilot feels like a senior operator. It answers fast, cites sources, and never goes off-rails.',
  },
]

export default function HomePage() {
  return (
    <div id="top" className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <Container className="pt-16 pb-14 sm:pt-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-3 py-1 text-xs font-semibold text-muted">
                <span className="grid h-5 w-5 place-items-center rounded-md bg-white/5 ring-1 ring-border">
                  <Sparkles size={14} className="text-accent" />
                </span>
                AI & Automation for modern teams
              </div>

              <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
                <TextReveal text="Build smarter operations with AI you can trust." />
              </h1>
              <p className="mt-5 max-w-xl text-base text-muted sm:text-lg">
                NovaOps helps startups and SMEs automate workflows, launch internal copilots, and turn messy ops into
                measurable systems—without sacrificing security or reliability.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href="#contact">
                  <Button size="lg">Request a demo</Button>
                </a>
                <a href="#case-studies">
                  <Button variant="secondary" size="lg">
                    View case studies
                  </Button>
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-6 text-sm text-muted">
                <div>
                  <div className="text-fg font-bold">10 days</div>
                  <div>Pilot launch</div>
                </div>
                <div>
                  <div className="text-fg font-bold">SOC2-ready</div>
                  <div>Security posture</div>
                </div>
                <div>
                  <div className="text-fg font-bold">Human-in-loop</div>
                  <div>Approval flows</div>
                </div>
              </div>
            </div>

            <FadeIn className="relative" delay={0.1}>
              <div className="rounded-3xl border border-border bg-card/60 p-6 shadow-glow backdrop-blur">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold">Live Ops Dashboard</div>
                  <div className="text-xs text-muted">Last 24 hours</div>
                </div>
                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {[
                    { k: 'Automations', v: '142' },
                    { k: 'Time saved', v: '18.4h' },
                    { k: 'Escalations', v: '3' },
                  ].map((m) => (
                    <div key={m.k} className="rounded-2xl border border-border bg-bg/40 p-4">
                      <div className="text-xl font-extrabold">{m.v}</div>
                      <div className="mt-1 text-xs text-muted">{m.k}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-2xl border border-border bg-bg/40 p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold">Queue health</div>
                    <div className="text-xs text-muted">Stable</div>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-accent to-primary"
                      initial={{ width: '0%' }}
                      animate={{ width: '78%' }}
                      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-between text-xs text-muted">
                    <span>Handled automatically</span>
                    <span>78%</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Trusted by */}
      <section className="border-y border-border/60 bg-bg/30">
        <Container className="py-10">
          <FadeIn className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm font-semibold text-muted">Trusted by teams shipping fast</div>
            <div className="flex flex-wrap gap-3">
              {TRUSTED_BY.map((b) => (
                <div
                  key={b}
                  className="rounded-full border border-border bg-white/5 px-4 py-2 text-xs font-semibold text-muted"
                >
                  {b}
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Services */}
      <section id="services" className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Services"
            icon={BriefcaseBusiness}
            title="AI solutions built for real operations"
            subtitle="Practical automation that respects constraints: security, approvals, and measurable outcomes."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, idx) => (
              <FadeIn key={s.title} delay={idx * 0.05}>
                <div className="group h-full rounded-3xl border border-border bg-card/60 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-primary/50">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-border">
                    <s.icon className="text-accent" size={20} />
                  </div>
                  <div className="mt-5 text-lg font-bold">{s.title}</div>
                  <p className="mt-2 text-sm text-muted">{s.desc}</p>
                  <div className="mt-6 text-sm font-semibold text-accent">Learn more →</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Why NovaOps"
            icon={Sparkles}
            title="Innovation with trust and clarity"
            subtitle="Modern design trends + strong UX structure, with guardrails that keep your team confident."
            align="center"
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {FEATURES.map((f, idx) => (
              <FadeIn key={f.title} delay={idx * 0.05}>
                <div className="rounded-3xl border border-border bg-card/60 p-6 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/5 ring-1 ring-border">
                      <f.icon className="text-primary" size={20} />
                    </div>
                    <div className="text-lg font-bold">{f.title}</div>
                  </div>
                  <p className="mt-2 text-sm text-muted">{f.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="How it works"
            icon={Wand2}
            title="From discovery to measurable automation"
            subtitle="A simple, user-centered flow—so stakeholders see progress daily."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { step: '01', title: 'Discover', desc: 'We map goals, pain points, and the “must-not-break” constraints.' },
              { step: '02', title: 'Pilot', desc: 'We ship a working flow with approvals + dashboards in 10 days.' },
              { step: '03', title: 'Scale', desc: 'We expand modules, standardize components, and optimize outcomes.' },
            ].map((p, idx) => (
              <FadeIn key={p.step} delay={idx * 0.05}>
                <div className="rounded-3xl border border-border bg-card/60 p-6 backdrop-blur">
                  <div className="text-xs font-bold text-muted">{p.step}</div>
                  <div className="mt-2 text-lg font-bold">{p.title}</div>
                  <p className="mt-2 text-sm text-muted">{p.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Case Studies"
            icon={Layers3}
            title="Outcomes you can screenshot"
            subtitle="Short, scannable stories that highlight the result first—then the implementation."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CASES.map((c, idx) => (
              <FadeIn key={c.company} delay={idx * 0.06}>
                <a
                  href="#contact"
                  className="block h-full rounded-3xl border border-border bg-card/60 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-accent/50 focus-ring"
                >
                  <div className="text-sm font-semibold text-muted">{c.company}</div>
                  <div className="mt-3 text-2xl font-extrabold">{c.result}</div>
                  <p className="mt-2 text-sm text-muted">{c.summary}</p>
                  <div className="mt-6 text-sm font-semibold text-accent">Read the story →</div>
                </a>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Testimonials"
            icon={MessageSquareQuote}
            title="Teams trust NovaOps in production"
            subtitle="Smooth experiences + clear approvals make AI adoption feel safe."
            align="center"
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {TESTIMONIALS.map((t, idx) => (
              <FadeIn key={t.name} delay={idx * 0.05}>
                <div className="rounded-3xl border border-border bg-card/60 p-7 backdrop-blur">
                  <p className="text-base text-fg/90">“{t.quote}”</p>
                  <div className="mt-5 text-sm font-bold">{t.name}</div>
                  <div className="text-sm text-muted">{t.role}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Blog */}
      <section id="blog" className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Blog"
            icon={FileText}
            title="Insights on AI, automation, and UX"
            subtitle="Short reads that show expertise and build credibility."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Designing approval flows users actually trust', tag: 'UX', date: 'Feb 2026' },
              { title: 'Measuring ROI of automation in SMEs', tag: 'Ops', date: 'Feb 2026' },
              { title: 'From chatbot to copilot: what changes', tag: 'AI', date: 'Feb 2026' },
            ].map((p, idx) => (
              <FadeIn key={p.title} delay={idx * 0.05}>
                <a
                  href="#contact"
                  className="block rounded-3xl border border-border bg-card/60 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-primary/50 focus-ring"
                >
                  <div className="flex items-center justify-between text-xs text-muted">
                    <span className="rounded-full border border-border bg-white/5 px-2 py-1 font-semibold">{p.tag}</span>
                    <span>{p.date}</span>
                  </div>
                  <div className="mt-4 text-lg font-bold">{p.title}</div>
                  <p className="mt-2 text-sm text-muted">
                    Practical patterns and examples—written for founders and ops leaders.
                  </p>
                  <div className="mt-6 text-sm font-semibold text-accent">Read →</div>
                </a>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-16 sm:py-20">
        <Container>
          <FadeIn>
            <div className="rounded-3xl border border-border bg-gradient-to-br from-white/5 to-white/0 p-8 shadow-glow backdrop-blur sm:p-10">
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <div className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                    Ready to automate with confidence?
                  </div>
                  <p className="mt-3 text-sm text-muted sm:text-base">
                    Get a quick, clickable demo flow for your use case—service inquiry, approvals, and outcomes included.
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-card/60 p-4">
                  <form className="flex flex-col gap-3 sm:flex-row">
                    <input
                      className="w-full rounded-xl border border-border bg-bg/40 px-4 py-3 text-sm text-fg placeholder:text-muted focus-ring"
                      placeholder="Work email"
                      type="email"
                      required
                    />
                    <Button className="shrink-0" size="lg" type="submit" onClick={(e) => e.preventDefault()}>
                      Subscribe
                    </Button>
                  </form>
                  <p className="mt-3 text-xs text-muted">No spam. 1–2 emails/month. Unsubscribe anytime.</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Contact"
            icon={Mail}
            title="Tell us what you want to automate"
            subtitle="This is the core conversion flow for the homepage prototype."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <FadeIn>
              <div className="rounded-3xl border border-border bg-card/60 p-7 backdrop-blur">
                <div className="text-lg font-bold">Service inquiry</div>
                <p className="mt-2 text-sm text-muted">
                  Share your workflow and we’ll reply with a clear plan: pilot scope, timeline, and measurable outcomes.
                </p>

                <form className="mt-6 space-y-3">
                  <input
                    className="w-full rounded-xl border border-border bg-bg/40 px-4 py-3 text-sm text-fg placeholder:text-muted focus-ring"
                    placeholder="Full name"
                    required
                  />
                  <input
                    className="w-full rounded-xl border border-border bg-bg/40 px-4 py-3 text-sm text-fg placeholder:text-muted focus-ring"
                    placeholder="Work email"
                    type="email"
                    required
                  />
                  <select className="w-full rounded-xl border border-border bg-bg/40 px-4 py-3 text-sm text-fg focus-ring">
                    <option>AI Process Automation</option>
                    <option>Internal AI Copilot</option>
                    <option>Data + Integrations</option>
                  </select>
                  <textarea
                    className="min-h-28 w-full rounded-xl border border-border bg-bg/40 px-4 py-3 text-sm text-fg placeholder:text-muted focus-ring"
                    placeholder="What’s the workflow? Tools involved? Any approvals needed?"
                    required
                  />
                  <Button type="submit" size="lg" onClick={(e) => e.preventDefault()}>
                    Submit inquiry
                  </Button>
                  <p className="text-xs text-muted">
                    Demo-only form: in a MERN build, this would POST to your backend.
                  </p>
                </form>
              </div>
            </FadeIn>

            <FadeIn delay={0.05}>
              <div className="rounded-3xl border border-border bg-card/60 p-7 backdrop-blur">
                <div className="text-lg font-bold">What happens next</div>
                <ul className="mt-4 space-y-3 text-sm text-muted">
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                    We review your workflow and identify quick wins + constraints.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                    You get a short prototype flow (desktop + mobile) for stakeholder buy-in.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                    We launch a pilot with approvals, metrics, and a rollout plan.
                  </li>
                </ul>

                <div className="mt-8 rounded-2xl border border-border bg-bg/40 p-5">
                  <div className="text-sm font-semibold">Prefer email?</div>
                  <div className="mt-2 text-sm text-muted">hello@novaops.ai</div>
                  <div className="mt-4 flex gap-2">
                    <a href="#services">
                      <Button variant="secondary" size="sm">
                        Explore services
                      </Button>
                    </a>
                    <a href="#top">
                      <Button variant="ghost" size="sm">
                        Back to top
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  )
}


