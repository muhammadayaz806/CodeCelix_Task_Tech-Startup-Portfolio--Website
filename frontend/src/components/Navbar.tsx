import { motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Hexagon, Menu, X } from 'lucide-react'
import { Button } from './ui/Button'
import { Container } from './ui/Container'

const NAV_ITEMS = [
  { label: 'Home', href: '#top' },
  { label: 'Services', href: '#services' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const barCls = useMemo(() => {
    if (!scrolled) return 'bg-transparent'
    return 'bg-bg/55 backdrop-blur-xl border-b border-border shadow-[0_10px_30px_-25px_rgb(0_0_0/0.6)]'
  }, [scrolled])

  return (
    <motion.header
      className={['sticky top-0 z-50 transition-colors', barCls].join(' ')}
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Container className="py-3">
        <div className="flex items-center justify-between gap-3">
          <Link to="/" className="group inline-flex items-center gap-2 focus-ring rounded-lg px-2 py-1">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-white/5 ring-1 ring-border">
              <Hexagon size={18} className="text-accent" />
            </span>
            <span className="text-sm font-bold tracking-tight">
              Nova<span className="text-accent">Ops</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted hover:text-fg hover:bg-white/5 focus-ring"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a href="#contact">
              <Button variant="secondary" size="sm">
                Talk to an expert
              </Button>
            </a>
            <a href="#services">
              <Button size="sm">See solutions</Button>
            </a>
          </div>

          <button
            className="md:hidden rounded-xl border border-border bg-white/5 px-3 py-2 text-sm font-semibold text-fg hover:bg-white/10 focus-ring"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label="Open menu"
          >
            <span className="inline-flex items-center gap-2">
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
              <span>Menu</span>
            </span>
          </button>
        </div>

        <motion.div
          className="md:hidden overflow-hidden"
          initial={false}
          animate={menuOpen ? 'open' : 'closed'}
          variants={{
            open: { height: 'auto', opacity: 1, marginTop: 10 },
            closed: { height: 0, opacity: 0, marginTop: 0 },
          }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          <div className="rounded-2xl border border-border bg-card/80 p-2 backdrop-blur">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-3 py-3 text-sm font-semibold text-fg hover:bg-white/5 focus-ring"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <a href="#contact">
                <Button className="w-full" variant="secondary" size="sm">
                  Talk
                </Button>
              </a>
              <a href="#services">
                <Button className="w-full" size="sm">
                  Solutions
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </motion.header>
  )
}


