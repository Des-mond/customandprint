"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ShoppingCart, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/business", label: "For Business" },
  { href: "/studio", label: "Design Studio" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/track", label: "Track Order" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [cartCount] = useState(0)

  return (
    <header className="sticky top-0 z-50 bg-ink-black border-b border-cp-green/20">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/cp-logo.png" alt="Custom & Print" width={44} height={44} className="rounded-full" loading="eager" priority />
          <span className="hidden sm:block text-cream font-black text-sm tracking-wide">Custom<span className="text-cp-green-light">&</span>Print</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-cp-green/20 hover:text-cp-green-light"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden rounded-lg p-2 text-muted-foreground transition-colors hover:bg-cp-green/20 hover:text-cp-green-light lg:flex">
            <Search className="h-5 w-5" />
          </button>
          <Link href="/studio">
            <Button className="hidden bg-cp-green text-cream hover:bg-cp-green-dark lg:inline-flex">
              Start Designing
            </Button>
          </Link>
          <Link href="/cart" className="relative rounded-lg bg-secondary p-2 text-cream transition-colors hover:bg-cp-green/30">
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-coral-red text-xs font-bold text-cream">
                {cartCount}
              </span>
            )}
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="rounded-lg p-2 text-cream lg:hidden">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-cp-green/20 bg-ink-black lg:hidden"
          >
            <div className="flex flex-col gap-2 px-4 py-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-cp-green/20 hover:text-cp-green-light"
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/studio" onClick={() => setIsOpen(false)}>
                <Button className="mt-2 w-full bg-cp-green text-cream hover:bg-cp-green-dark">Start Designing</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
