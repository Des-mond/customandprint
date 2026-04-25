"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const benefits = [
  "Bulk order discounts up to 40%",
  "Custom branding & packaging",
  "Dedicated account manager",
  "Priority production queue",
  "Corporate gift solutions",
  "Event merchandise printing",
]

export function BusinessSection() {
  return (
    <section className="bg-card py-16 lg:py-24 relative overflow-hidden">
      {/* SVG blob */}
      <svg className="absolute left-0 top-0 opacity-5 w-96 h-96" viewBox="0 0 400 400">
        <path d="M 200 50 Q 350 100 350 200 Q 350 300 200 350 Q 50 300 50 200 Q 50 100 200 50 Z" fill="#1A6B3A"/>
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="inline-flex items-center gap-2 rounded-full bg-cp-green/10 border border-cp-green/20 px-4 py-2 text-sm font-medium text-cp-green mb-6">
              For Business
            </span>
            <h2 className="text-3xl font-black text-foreground md:text-4xl lg:text-5xl">
              Bulk Orders for <span className="text-cp-green">Your Brand</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We work with businesses, NGOs, schools, and event organizers across Ghana. Get premium custom merchandise at unbeatable bulk prices.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {benefits.map((b) => (
                <div key={b} className="flex items-center gap-3 rounded-xl border border-cp-green/20 bg-cp-green/5 px-4 py-3">
                  <CheckCircle2 className="h-4 w-4 text-cp-green flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{b}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-cp-green text-cream hover:bg-cp-green-dark shadow-lg shadow-cp-green/20">
                  Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="card-3d space-y-4">
                <div className="relative aspect-square overflow-hidden rounded-2xl border border-cp-green/20">
                  <Image src="/screenprint-machine.png" alt="Screen printing" fill className="object-cover" />
                </div>
                <div className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-cp-green/20">
                  <Image src="/tshirt-green.png" alt="Bulk tees" fill className="object-cover" />
                </div>
              </div>
              <div className="card-3d space-y-4 mt-8">
                <div className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-cp-green/20">
                  <Image src="/tshirt-businesswoman.png" alt="Corporate" fill className="object-cover object-top" />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-2xl border border-cp-green/20">
                  <Image src="/tote-bag.png" alt="Tote bags" fill className="object-cover" />
                </div>
              </div>
            </div>

            {/* Floating stat */}
            <motion.div animate={{ y: [-4, 4, -4] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 rounded-2xl bg-cp-green border border-cp-green-dark px-5 py-3 shadow-xl"
            >
              <p className="text-2xl font-black text-cream">500+</p>
              <p className="text-xs text-cp-green-light">Orders Delivered</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
