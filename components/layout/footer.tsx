import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"

const footerLinks = {
  shop: [
    { label: "T-Shirts", href: "/shop?category=t-shirts" },
    { label: "Hoodies", href: "/shop?category=hoodies" },
    { label: "Mugs", href: "/shop?category=mugs" },
    { label: "Hats", href: "/shop?category=hats" },
    { label: "Tote Bags", href: "/shop?category=tote-bags" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "Track Order", href: "/track" },
  ],
  support: [
    { label: "FAQs", href: "/faqs" },
    { label: "Shipping Info", href: "/shipping" },
    { label: "Design Studio", href: "/studio" },
    { label: "For Business", href: "/business" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-ink-black text-cream relative overflow-hidden">
      {/* SVG wave top */}
      <svg className="w-full" viewBox="0 0 1440 40" preserveAspectRatio="none">
        <path d="M0,0 C360,40 1080,0 1440,30 L1440,0 L0,0 Z" fill="#F8F5EF"/>
      </svg>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-4">
              <Image src="/cp-logo.png" alt="Custom & Print" width={52} height={52} className="rounded-full" />
              <div>
                <p className="text-cream font-black text-lg leading-none">Custom &amp; Print</p>
                <p className="text-cp-green-light text-xs font-medium tracking-wider">YOU CREATE · WE DELIVER</p>
              </div>
            </Link>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Ghana&apos;s #1 online design studio. Custom t-shirts, mugs, hoodies, and more. You create, we print and deliver in Accra.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-cp-green-light flex-shrink-0" />
                <span>7th Road, Okomfo Yartey, Accra — GPS: GA-506-6161</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-cp-green-light flex-shrink-0" />
                <span>+233 53 815 6769 / +233 54 652 8518</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-cp-green-light flex-shrink-0" />
                <span>hello@customandprint.com</span>
              </div>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-cp-green-light">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-cp-green-light">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-cp-green-light">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-cp-green-light">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-cp-green-light">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-cp-green-light">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 rounded-2xl border border-cp-green/30 bg-cp-green/10 p-6 lg:p-8">
          <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
            <div>
              <h4 className="text-lg font-black text-cream">Get 10% off your first order</h4>
              <p className="mt-1 text-sm text-muted-foreground">Subscribe for exclusive deals and new designs.</p>
            </div>
            <form className="flex w-full gap-2 lg:w-auto">
              <input type="email" placeholder="Enter your email"
                className="flex-1 rounded-lg border border-cp-green/30 bg-ink-black px-4 py-2.5 text-sm text-cream placeholder:text-muted-foreground focus:border-cp-green-light focus:outline-none lg:w-64"
              />
              <button type="submit" className="rounded-lg bg-cp-green px-6 py-2.5 text-sm font-bold text-cream transition-colors hover:bg-cp-green-dark">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-cp-green/20 pt-8 lg:flex-row">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Custom &amp; Print Ghana. All rights reserved.</p>

          {/* ZET credit */}
          <a href="https://zet.design" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 group"
            aria-label="Designed by ZET"
          >
            <span className="text-xs text-muted-foreground group-hover:text-cp-green-light transition-colors">Designed by</span>
            <Image src="/zet-logo.png" alt="ZET" width={28} height={28} className="rounded opacity-70 group-hover:opacity-100 transition-opacity" />
            <span className="text-xs font-black text-muted-foreground group-hover:text-cp-green-light transition-colors tracking-widest uppercase">ZET</span>
          </a>

          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-cp-green-light">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-cp-green-light">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
