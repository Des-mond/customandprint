"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const steps = [
  {
    number: "01",
    title: "Pick a Product",
    description: "Browse our catalogue and choose from t-shirts, mugs, hoodies, hats, and more.",
    img: "/tshirt-green.png",
    color: "from-cp-green/20 to-cp-green/5",
    border: "border-cp-green/30",
  },
  {
    number: "02",
    title: "Add Your Design",
    description: "Upload your artwork or create a fresh design using our easy online studio.",
    img: "/sublimation.png",
    color: "from-coral-red/20 to-coral-red/5",
    border: "border-coral-red/30",
  },
  {
    number: "03",
    title: "We Print & Deliver",
    description: "We print your order with premium care and deliver it right to your door in Accra.",
    img: "/tshirt-businesswoman.png",
    color: "from-cp-green/20 to-cp-green/5",
    border: "border-cp-green/30",
  },
]

export function HowItWorks() {
  return (
    <section className="bg-ink-black py-16 lg:py-24 relative overflow-hidden">
      {/* SVG wave */}
      <svg className="absolute top-0 left-0 w-full opacity-30" viewBox="0 0 1440 60" preserveAspectRatio="none">
        <path d="M0,0 C240,60 480,0 720,40 C960,80 1200,20 1440,50 L1440,0 Z" fill="#1A6B3A" opacity="0.2"/>
      </svg>
      {/* Hex grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
          <span className="inline-block rounded-full bg-cp-green/20 border border-cp-green/30 px-4 py-1.5 text-sm font-medium text-cp-green-light mb-4">
            Simple Process
          </span>
          <h2 className="font-heading text-3xl text-cream md:text-4xl">How It Works</h2>
          <p className="mt-3 text-muted-foreground">Three simple steps to get your custom products</p>
        </motion.div>

        {/* Connecting line */}
        <div className="relative">
          <div className="absolute top-1/3 left-0 right-0 h-px hidden lg:block">
            <svg className="w-full" viewBox="0 0 800 2" preserveAspectRatio="none">
              <line x1="0" y1="1" x2="800" y2="1" stroke="#1A6B3A" strokeWidth="1" strokeDasharray="8 4"/>
            </svg>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div key={step.number} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className={`card-3d flex flex-col items-center rounded-3xl border ${step.border} bg-secondary p-6 text-center`}>
                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-cp-green text-xs font-black text-cream shadow-lg">
                    {step.number}
                  </div>

                  <div className={`relative mt-6 h-36 w-full overflow-hidden rounded-2xl bg-gradient-to-br ${step.color}`}>
                    <Image src={step.img} alt={step.title} fill className="object-contain hover:scale-110 transition-transform duration-500" />
                  </div>

                  <h3 className="mt-5 text-xl font-black text-cream">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className="flex justify-center py-4 md:hidden">
                    <svg className="h-6 w-6 text-cp-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
