"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-black min-h-[90vh] flex items-center">
      {/* Mesh background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(26,107,58,0.2)_0%,transparent_60%),radial-gradient(ellipse_at_80%_20%,rgba(34,197,94,0.1)_0%,transparent_50%),radial-gradient(ellipse_at_60%_80%,rgba(15,64,36,0.15)_0%,transparent_50%)]" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Decorative SVG circles */}
      <svg className="absolute top-20 right-10 opacity-10 w-64 h-64" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="80" fill="none" stroke="#22C55E" strokeWidth="1"/>
        <circle cx="100" cy="100" r="60" fill="none" stroke="#22C55E" strokeWidth="0.5"/>
        <circle cx="100" cy="100" r="40" fill="none" stroke="#22C55E" strokeWidth="0.5"/>
        <path d="M 20 100 Q 100 20 180 100 Q 100 180 20 100" fill="none" stroke="#1A6B3A" strokeWidth="0.5"/>
      </svg>
      <svg className="absolute bottom-10 left-5 opacity-5 w-48 h-48" viewBox="0 0 200 200">
        <polygon points="100,10 190,190 10,190" fill="none" stroke="#22C55E" strokeWidth="1"/>
        <polygon points="100,40 170,170 30,170" fill="none" stroke="#22C55E" strokeWidth="0.5"/>
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 py-16 w-full">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Content */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cp-green/40 bg-cp-green/10 px-4 py-2 text-sm font-medium text-cp-green-light">
              <Sparkles className="h-4 w-4" />
              Ghana&apos;s #1 Custom Design Studio
            </div>
            
            <h1 className="text-balance text-5xl font-black leading-tight text-cream md:text-6xl lg:text-7xl">
              You Create,
              <br />
              <span className="relative text-cp-green-light">
                We Deliver.
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" preserveAspectRatio="none">
                  <path d="M 0 8 Q 150 0 300 8" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
            
            <p className="mt-8 max-w-lg text-pretty text-lg text-muted-foreground lg:text-xl">
              Custom t-shirts, mugs, hoodies & more. Design your own products online and get them printed and delivered right here in Accra, Ghana.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link href="/shop">
                <Button size="lg" className="w-full bg-cp-green text-cream hover:bg-cp-green-dark sm:w-auto shadow-lg shadow-cp-green/25">
                  Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/studio">
                <Button size="lg" variant="outline" className="w-full border-cp-green-light/50 text-cp-green-light hover:bg-cp-green/20 sm:w-auto">
                  Design Yours
                </Button>
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground lg:justify-start">
              {["Free Accra Delivery", "3–5 Day Turnaround", "Premium Quality"].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-cp-green/20 border border-cp-green/30">
                    <span className="text-cp-green-light text-xs">✓</span>
                  </div>
                  <span>{t}</span>
                </div>
              ))}
            </div>

            {/* Social proof */}
            <div className="mt-8 flex items-center gap-3 justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {["/tshirt-man.png", "/tshirt-businesswoman.png", "/tshirt-woman-outdoor.png"].map((src, i) => (
                  <div key={i} className="h-9 w-9 rounded-full border-2 border-ink-black overflow-hidden">
                    <Image src={src} alt="customer" width={36} height={36} className="object-cover object-top h-full w-full" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-cp-green-light text-cp-green-light" />)}
                </div>
                <p className="text-xs text-muted-foreground">500+ happy customers</p>
              </div>
            </div>
          </motion.div>

          {/* Hero image grid */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex-1 w-full max-w-lg mx-auto"
          >
            <div className="relative grid grid-cols-2 gap-3">
              {/* Main large image */}
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="col-span-2 relative overflow-hidden rounded-2xl border border-cp-green/30 shadow-2xl shadow-cp-green/20 aspect-[16/9]"
              >
                <Image src="/tshirt-man.png" alt="Custom T-Shirt" fill className="object-cover object-top" loading="eager" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 rounded-xl bg-cp-green/90 px-3 py-1.5 text-sm font-bold text-cream backdrop-blur-sm">
                  From GH₵ 70
                </div>
              </motion.div>

              <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="relative overflow-hidden rounded-2xl border border-cp-green/30 aspect-square shadow-lg"
              >
                <Image src="/hoodie-green.png" alt="Hoodie" fill className="object-cover" loading="eager" />
              </motion.div>

              <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="relative overflow-hidden rounded-2xl border border-cp-green/30 aspect-square shadow-lg"
              >
                <Image src="/mug-love-always.jpg" alt="Custom Mug" fill className="object-cover" />
              </motion.div>
            </div>

            {/* Floating badge */}
            <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 top-1/3 rounded-2xl bg-ink-black border border-cp-green/40 px-4 py-3 shadow-xl shadow-cp-green/20 backdrop-blur-sm"
            >
              <p className="text-xs text-muted-foreground">Made in</p>
              <p className="text-sm font-black text-cp-green-light">🇬🇭 Ghana</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
