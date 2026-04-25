"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Upload, Type, Layers, Download, ArrowRight, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  { icon: Upload, title: "Upload Your Design", desc: "Drag & drop PNG, SVG, or PDF files. We accept all major formats." },
  { icon: Type, title: "Add Custom Text", desc: "Choose from 50+ fonts. Resize, rotate, and color your text freely." },
  { icon: Palette, title: "Pick Colors", desc: "Full color picker for backgrounds and design elements." },
  { icon: Layers, title: "Multi-Layer Canvas", desc: "Stack multiple design elements and rearrange them freely." },
  { icon: Download, title: "Export & Order", desc: "Preview your design, download a proof, and place your order in one click." },
]

const products = [
  { name: "T-Shirt", img: "/tshirt-green.png" },
  { name: "Hoodie", img: "/hoodie-green.png" },
  { name: "Mug", img: "/mug.png" },
  { name: "Cap", img: "/cap-green.png" },
  { name: "Tote Bag", img: "/tote-bag.png" },
  { name: "Apron", img: "/apron.png" },
]

export function StudioContent() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-ink-black py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_50%,rgba(26,107,58,0.25)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.04)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <svg className="absolute right-0 bottom-0 opacity-10 w-80 h-80" viewBox="0 0 300 300">
          <path d="M 50 150 Q 150 50 250 150 Q 150 250 50 150 Z" fill="none" stroke="#22C55E" strokeWidth="1"/>
          <circle cx="150" cy="150" r="100" fill="none" stroke="#1A6B3A" strokeWidth="0.5"/>
        </svg>
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <span className="font-tag text-base inline-block rounded-full border border-cp-green/40 bg-cp-green/10 px-4 py-1.5 font-medium text-cp-green-light mb-6">Design Studio</span>
          <h1 className="text-4xl font-black text-cream md:text-6xl">Create <span className="text-cp-green-light">Your Design</span></h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Our online design studio makes it easy to customise any product. Upload your artwork, add text, pick colors — then order directly.
          </p>
        </div>
      </section>

      {/* Studio mockup */}
      <section className="bg-secondary py-16 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="rounded-3xl border border-cp-green/30 bg-ink-black overflow-hidden shadow-2xl shadow-cp-green/10">
            {/* Toolbar */}
            <div className="flex items-center gap-3 border-b border-cp-green/20 bg-secondary/80 px-6 py-3">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-coral-red/80" />
                <div className="h-3 w-3 rounded-full bg-cp-green/50" />
                <div className="h-3 w-3 rounded-full bg-cp-green-light/60" />
              </div>
              <span className="text-xs text-muted-foreground font-medium ml-2">Custom & Print — Design Studio</span>
            </div>
            <div className="flex h-80 lg:h-96">
              {/* Left tools */}
              <div className="w-14 border-r border-cp-green/20 bg-secondary flex flex-col items-center gap-4 py-5 px-2">
                {[Upload, Type, Palette, Layers].map((Icon, i) => (
                  <button key={i} className={`flex h-9 w-9 items-center justify-center rounded-xl border transition-colors ${i === 0 ? "border-cp-green bg-cp-green/20 text-cp-green-light" : "border-cp-green/10 text-muted-foreground hover:border-cp-green/40"}`}>
                    <Icon className="h-4 w-4" />
                  </button>
                ))}
              </div>
              {/* Canvas */}
              <div className="flex-1 flex items-center justify-center relative bg-[radial-gradient(ellipse_at_center,rgba(26,107,58,0.1),transparent_70%)]">
                <div className="relative">
                  <div className="relative w-44 h-52 lg:w-56 lg:h-64">
                    <Image src="/tshirt-green.png" alt="T-shirt canvas" fill className="object-contain" />
                  </div>
                  {/* Design overlay */}
                  <motion.div animate={{ y: [-3, 3, -3] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-12 left-1/2 -translate-x-1/2 rounded-lg border-2 border-dashed border-cp-green-light/60 bg-cp-green/20 px-6 py-2 backdrop-blur-sm"
                  >
                    <span className="text-cp-green-light text-xs font-bold whitespace-nowrap">YOUR DESIGN HERE</span>
                  </motion.div>
                </div>
                {/* View toggles */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {["Front", "Back", "Sleeve"].map((v, i) => (
                    <button key={v} className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${i === 0 ? "bg-cp-green text-cream" : "border border-cp-green/30 text-muted-foreground hover:border-cp-green"}`}>{v}</button>
                  ))}
                </div>
              </div>
              {/* Right panel */}
              <div className="w-48 border-l border-cp-green/20 bg-secondary hidden md:flex flex-col p-4 gap-3">
                <p className="text-xs font-bold text-cp-green-light uppercase tracking-wider">Product</p>
                <div className="grid grid-cols-3 gap-1.5">
                  {products.slice(0, 6).map((p) => (
                    <div key={p.name} className="relative aspect-square overflow-hidden rounded-lg border border-cp-green/10 bg-cp-green/5 cursor-pointer hover:border-cp-green/50 transition-colors">
                      <Image src={p.img} alt={p.name} fill className="object-contain p-1" />
                    </div>
                  ))}
                </div>
                <p className="text-xs font-bold text-cp-green-light uppercase tracking-wider mt-2">Templates</p>
                <div className="grid grid-cols-2 gap-1.5">
                  {["Sports", "Business", "Events", "Gifts"].map((t) => (
                    <div key={t} className="rounded-lg border border-cp-green/10 bg-cp-green/5 p-2 text-center text-xs text-muted-foreground cursor-pointer hover:border-cp-green/50 hover:text-cp-green-light transition-all">
                      {t}
                    </div>
                  ))}
                </div>
                <Button className="mt-auto w-full bg-cp-green text-cream hover:bg-cp-green-dark text-xs h-8">
                  Save &amp; Order
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground text-sm mb-4">Full studio coming soon — for now, send us your design via WhatsApp</p>
            <a href="https://wa.me/233546528518?text=Hi! I want to create a custom design." target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-cp-green text-cream hover:bg-cp-green-dark">
                Design via WhatsApp <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-foreground">Studio Features</h2>
            <p className="mt-2 text-muted-foreground">Everything you need to create the perfect custom design</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {features.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <div className="card-3d rounded-2xl border border-border bg-white p-6 text-center h-full">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cp-green/10">
                    <f.icon className="h-6 w-6 text-cp-green" />
                  </div>
                  <h3 className="font-black text-foreground mb-1">{f.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
