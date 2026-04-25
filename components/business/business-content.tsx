"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { MessageCircle, ShoppingCart, ChevronRight, Layers, Zap, Award, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"

const tabs = [
  { id: "inks", label: "Plastisol Inks" },
  { id: "equipment", label: "Equipment & Tools" },
  { id: "specialty", label: "Specialty Inks" },
]

const inks = [
  { id: 1, name: "Black Plastisol Ink", img: "/Black-Plastisol-Ink.jpg", color: "#1a1a1a", tag: "Most Popular" },
  { id: 2, name: "Snow White Plastisol Ink", img: "/Snow-White-Plastisol-Ink.jpg", color: "#f5f5f5", tag: "Essential" },
  { id: 3, name: "Red Plastisol Ink", img: "/Red-Plastisol-Ink.jpg", color: "#e83232", tag: "" },
  { id: 4, name: "Blue Plastisol Ink", img: "/Blue-Plastisol-Ink.jpg", color: "#1a4fd4", tag: "" },
  { id: 5, name: "Green Plastisol Ink", img: "/Green-Plastisol-Ink.jpg", color: "#1a6b3a", tag: "" },
  { id: 6, name: "Lemon Yellow Plastisol Ink", img: "/Lemon-Yellow-Plastisol-Ink.jpg", color: "#f5f01e", tag: "" },
  { id: 7, name: "Golden Yellow Plastisol Ink", img: "/Golden-Yellow-Plastisol-Ink.jpg", color: "#d4a017", tag: "" },
  { id: 8, name: "Fushia Plastisol Ink", img: "/Fushia-Plastisol-Ink.jpg", color: "#d41672", tag: "" },
  { id: 9, name: "Violet Plastisol Ink", img: "/Violet-Plastisol-Ink.jpg", color: "#6b21a8", tag: "" },
  { id: 10, name: "Florescent Orange Plastisol Ink", img: "/Fluorsent-Orange-Plastisol-Ink.jpg", color: "#ff6b1a", tag: "Vibrant" },
]

const specialtyInks = [
  { id: 11, name: "Shimmering Gold Ink", img: "/Shimmering-Gold-Plastisol-Ink.jpg", tag: "Premium", desc: "Rich metallic gold shimmer effect for luxury prints" },
  { id: 12, name: "Shimmering Silver Ink", img: "/Shimmering-Silver-Plastisol-Ink.jpg", tag: "Premium", desc: "Brilliant silver shimmer for eye-catching designs" },
  { id: 13, name: "Metalic Effect Ink", img: "/Metalic-effect-Plastisol-Ink.jpg", tag: "Special", desc: "Chrome-like metallic effect that catches light" },
  { id: 14, name: "High Density Ink", img: "/High-Density.jpg", tag: "3D Effect", desc: "Creates a raised, embossed 3D effect on fabric" },
  { id: 15, name: "Puff Ink", img: "/puff-basr.jpg", tag: "Textured", desc: "Expands when cured to create a raised puffy texture" },
]

const equipment = [
  { id: 16, name: "Screen Printing Frame", img: "/screenprinting-frame.png", tag: "Essential", desc: "Wooden frames with fine mesh for precise ink transfer" },
  { id: 17, name: "Squeegees (Set of 4)", img: "/squeeges.jpg", tag: "Tool", desc: "Professional wooden handle squeegees in multiple sizes" },
  { id: 18, name: "Antex XP20 Table Adhesive", img: "/table-adhersive.jpg", tag: "Adhesive", desc: "High performance creamy adhesive for garment printing tables" },
]

const benefits = [
  { icon: Award, title: "Premium Quality", desc: "All Antex inks meet international quality standards" },
  { icon: Zap, title: "Fast Curing", desc: "Optimized for belt dryers and flash cure units" },
  { icon: Layers, title: "Great Coverage", desc: "High opacity for excellent coverage on dark fabrics" },
  { icon: Truck, title: "Local Stock", desc: "Available in Accra — no import wait times" },
]

function InkCard({ product, index }: { product: typeof inks[0], index: number }) {
  return (
    <motion.div key={product.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ delay: index * 0.06 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-white hover:border-cp-green hover:shadow-lg hover:shadow-cp-green/10 transition-all duration-300"
    >
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        <Image src={product.img} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
        {product.tag && (
          <div className="absolute top-3 left-3 rounded-full bg-cp-green text-cream text-xs font-bold px-2.5 py-1">
            {product.tag}
          </div>
        )}
        {/* Color dot */}
        <div className="absolute bottom-3 right-3 h-6 w-6 rounded-full border-2 border-white shadow-md" style={{ backgroundColor: product.color }} />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-foreground text-sm group-hover:text-cp-green transition-colors leading-tight">{product.name}</h3>
        <p className="text-xs text-muted-foreground mt-1">Antex Premium</p>
        <button
          onClick={() => window.open(`https://wa.me/233546528518?text=Hi, I'm interested in ${encodeURIComponent(product.name)}`, "_blank")}
          className="mt-3 w-full flex items-center justify-center gap-2 rounded-xl bg-cp-green/10 hover:bg-cp-green text-cp-green hover:text-cream text-xs font-bold py-2 transition-all duration-200"
        >
          <MessageCircle className="h-3.5 w-3.5" /> Enquire
        </button>
      </div>
    </motion.div>
  )
}

function EquipmentCard({ product, index }: { product: typeof equipment[0], index: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ delay: index * 0.1 }}
      className="group overflow-hidden rounded-2xl border border-border bg-white hover:border-cp-green hover:shadow-lg transition-all"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
        <Image src={product.img} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute top-3 left-3 rounded-full bg-ink-black text-cream text-xs font-bold px-2.5 py-1">
          {product.tag}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-black text-foreground group-hover:text-cp-green transition-colors">{product.name}</h3>
        <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{product.desc}</p>
        <button
          onClick={() => window.open(`https://wa.me/233546528518?text=Hi, I'm interested in ${encodeURIComponent(product.name)}`, "_blank")}
          className="mt-4 flex items-center gap-2 text-sm font-bold text-cp-green hover:underline"
        >
          <MessageCircle className="h-4 w-4" /> Get a Quote
        </button>
      </div>
    </motion.div>
  )
}

export function BusinessContent() {
  const [activeTab, setActiveTab] = useState("inks")

  return (
    <div className="bg-cream">
      {/* Hero */}
      <section className="relative bg-ink-black py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(26,107,58,0.25)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.04)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Decorative SVGs */}
        <svg className="absolute right-0 top-0 opacity-10 w-80 h-80" viewBox="0 0 300 300">
          <circle cx="150" cy="150" r="120" fill="none" stroke="#22C55E" strokeWidth="1"/>
          <circle cx="150" cy="150" r="80" fill="none" stroke="#1A6B3A" strokeWidth="0.5"/>
          <circle cx="150" cy="150" r="40" fill="none" stroke="#22C55E" strokeWidth="0.5"/>
          <line x1="30" y1="150" x2="270" y2="150" stroke="#22C55E" strokeWidth="0.3"/>
          <line x1="150" y1="30" x2="150" y2="270" stroke="#22C55E" strokeWidth="0.3"/>
        </svg>
        <svg className="absolute left-0 bottom-0 opacity-5 w-64 h-64" viewBox="0 0 200 200">
          <polygon points="100,10 190,60 190,140 100,190 10,140 10,60" fill="none" stroke="#22C55E" strokeWidth="1"/>
          <polygon points="100,40 165,75 165,125 100,160 35,125 35,75" fill="none" stroke="#1A6B3A" strokeWidth="0.5"/>
        </svg>

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-cp-green/40 bg-cp-green/10 px-4 py-1.5 text-sm font-medium text-cp-green-light mb-6">
                <Layers className="h-4 w-4" /> For Screen Printers
              </span>
              <h1 className="font-heading text-4xl text-cream md:text-5xl lg:text-6xl">
                Screen Printing <br /><span className="text-cp-green-light">Supplies in Accra</span>
              </h1>
              <p className="mt-6 max-w-lg text-lg text-muted-foreground leading-relaxed">
                Professional-grade Antex Premium Plastisol Inks, frames, squeegees, and accessories — all available locally in Ghana.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="https://wa.me/233546528518?text=Hi, I want to order screen printing supplies" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-whatsapp-green hover:opacity-90 text-white font-black gap-2">
                    <MessageCircle className="h-5 w-5" /> Order on WhatsApp
                  </Button>
                </a>
                <Button size="lg" variant="outline" className="border-cp-green-light/50 text-cp-green-light hover:bg-cp-green/20"
                  onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Browse Products <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Ink color swatches preview */}
            <div className="flex-1 flex flex-wrap gap-3 justify-center max-w-sm">
              {inks.slice(0, 8).map((ink) => (
                <div key={ink.id} title={ink.name}
                  className="h-12 w-12 rounded-full border-2 border-white/20 shadow-lg hover:scale-110 transition-transform cursor-pointer"
                  style={{ backgroundColor: ink.color }}
                />
              ))}
              <div className="h-12 w-12 rounded-full border-2 border-white/20 shadow-lg bg-gradient-to-br from-yellow-400 to-amber-600 hover:scale-110 transition-transform cursor-pointer" title="More colors" />
              <div className="h-12 w-12 rounded-full border-2 border-white/20 shadow-lg bg-gradient-to-br from-gray-300 to-gray-500 hover:scale-110 transition-transform cursor-pointer" title="Silver" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-cp-green py-10">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {benefits.map((b) => (
              <div key={b.title} className="flex items-center gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/20">
                  <b.icon className="h-5 w-5 text-cream" />
                </div>
                <div>
                  <p className="font-black text-cream text-sm">{b.title}</p>
                  <p className="text-xs text-cp-green-light hidden md:block">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-10">
            <span className="font-tag text-base inline-block rounded-full bg-cp-green/10 border border-cp-green/20 px-4 py-1.5 font-medium text-cp-green mb-3">Products</span>
            <h2 className="font-heading text-3xl text-foreground md:text-4xl">Screen Printing Supplies</h2>
            <p className="mt-3 text-muted-foreground">Everything you need to run a professional screen printing operation</p>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 justify-center mb-10 flex-wrap">
            {tabs.map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-5 py-2 text-sm font-bold transition-all ${activeTab === tab.id ? "bg-cp-green text-cream shadow-md" : "border border-border text-muted-foreground hover:border-cp-green hover:text-cp-green bg-white"}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === "inks" && (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {inks.map((ink, i) => <InkCard key={ink.id} product={ink} index={i} />)}
            </div>
          )}

          {activeTab === "specialty" && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {specialtyInks.map((ink, i) => (
                <motion.div key={ink.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="group overflow-hidden rounded-2xl border border-border bg-white hover:border-cp-green hover:shadow-lg transition-all"
                >
                  <div className="relative aspect-square overflow-hidden bg-gray-50">
                    <Image src={ink.img} alt={ink.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-3 left-3 rounded-full bg-ink-black text-cream text-xs font-bold px-2.5 py-1">{ink.tag}</div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-black text-foreground group-hover:text-cp-green transition-colors">{ink.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{ink.desc}</p>
                    <button
                      onClick={() => window.open(`https://wa.me/233546528518?text=Hi, I'm interested in ${encodeURIComponent(ink.name)}`, "_blank")}
                      className="mt-4 flex items-center gap-2 text-sm font-bold text-cp-green hover:underline"
                    >
                      <MessageCircle className="h-4 w-4" /> Get a Quote
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === "equipment" && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {equipment.map((item, i) => <EquipmentCard key={item.id} product={item} index={i} />)}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink-black py-16 relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 800 200" preserveAspectRatio="none">
          <path d="M0,100 Q200,20 400,100 Q600,180 800,100 L800,200 L0,200 Z" fill="#1A6B3A"/>
        </svg>
        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-heading text-3xl text-cream md:text-4xl">Ready to Stock Up?</h2>
          <p className="mt-4 text-muted-foreground">Contact us on WhatsApp for pricing, bulk orders, and availability.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/233546528518?text=Hi, I want to order screen printing supplies in bulk" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-whatsapp-green hover:opacity-90 text-white font-black gap-2">
                <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
              </Button>
            </a>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-cp-green-light/50 text-cp-green-light hover:bg-cp-green/20">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
