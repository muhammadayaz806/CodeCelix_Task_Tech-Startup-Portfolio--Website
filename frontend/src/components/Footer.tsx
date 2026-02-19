import { Container } from './ui/Container'
import { Hexagon } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-bg/40">
      <Container className="py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="inline-flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-white/5 ring-1 ring-border">
                <Hexagon size={18} className="text-accent" />
              </span>
              <span className="text-sm font-bold tracking-tight">
                Nova<span className="text-accent">Ops</span>
              </span>
            </div>
            <p className="mt-3 text-sm text-muted">
              AI + Automation solutions that help teams ship faster, cut operational costs, and build trust
              with measurable outcomes.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-2 md:grid-cols-3">
            <div>
              <div className="text-sm font-semibold">Company</div>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li>
                  <a className="hover:text-fg" href="#services">
                    Services
                  </a>
                </li>
                <li>
                  <a className="hover:text-fg" href="#case-studies">
                    Case studies
                  </a>
                </li>
                <li>
                  <a className="hover:text-fg" href="#blog">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold">Solutions</div>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li>Workflow automation</li>
                <li>AI copilots</li>
                <li>Data pipelines</li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold">Contact</div>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li>
                  <a className="hover:text-fg" href="mailto:hello@novaops.ai">
                    hello@novaops.ai
                  </a>
                </li>
                <li>Karachi · Remote-first</li>
                <li>
                  <a className="hover:text-fg" href="#contact">
                    Request a demo
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border/70 pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} NovaOps. All rights reserved.</div>
          <div className="flex gap-4">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Status</span>
          </div>
        </div>
      </Container>
    </footer>
  )
}


