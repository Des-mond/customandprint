"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const methods = [
  {
    name: "Screen Printing",
    desc: "Best for bulk orders with vibrant, long-lasting colors on t-shirts, hoodies, Linens, and more.",
    img: "/screen-printing.png",
    badge: "Best for Bulk",
  },
  {
    name: "Sublimation Printing",
    desc: "Photo-quality full-color printing ideal for mugs, pillows, sports gear, and all-over designs.",
    img: "/sublimation.png",
    badge: "Photo Quality",
  },
]

export function PrintingMethods() {
  return (
    <section className="bg-white py-16 lg:py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 text-center">
          <span className="font-tag text-base inline-block rounded-full bg-cp-green/10 border border-cp-green/20 px-4 py-1.5 font-medium text-cp-green mb-4">Our Craft</span>
          <h2 className="font-heading text-3xl text-foreground md:text-4xl">Premium Printing Methods</h2>
          <p className="mt-3 text-muted-foreground">Professional-grade technology for every order</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {methods.map((m, i) => (
            <motion.div key={m.name} initial={{ opacity: 0, x: i === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            >
              <div className="card-3d group overflow-hidden rounded-3xl border border-border bg-cream">
                <div className="relative h-48 overflow-hidden bg-ink-black">
                  <Image src={m.img} alt={m.name} fill className="object-contain p-4 group-hover:scale-110 transition-transform duration-500" />
                  <span className="absolute top-4 right-4 rounded-full bg-cp-green px-3 py-1 text-xs font-bold text-cream">
                    {m.badge}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black text-foreground mb-2">{m.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
