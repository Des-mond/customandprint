"use client"

import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { useState } from "react"
import { Search, Package, CheckCircle, Clock, Truck, MessageCircle, ArrowRight } from "lucide-react"

const steps = [
  { icon: CheckCircle, label: "Order Confirmed", desc: "Payment received & design approved" },
  { icon: Package, label: "In Production", desc: "Your items are being printed & cured" },
  { icon: CheckCircle, label: "Quality Check", desc: "Print quality inspected & approved" },
  { icon: Truck, label: "Out for Delivery", desc: "With our courier en route to you" },
  { icon: CheckCircle, label: "Delivered", desc: "Order received — enjoy your prints!" },
]

export default function TrackPage() {
  const [orderRef, setOrderRef] = useState("")
  const [searched, setSearched] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setSearched(true)
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative bg-ink-black py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,rgba(26,107,58,0.2)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.04)_1px,transparent_1px)] bg-[size:50px_50px]" />
        {/* Delivery SVG decoration */}
        <svg className="absolute right-0 top-0 opacity-10 w-80 h-72" viewBox="0 0 320 280">
          <path d="M20,200 L20,120 L120,80 L220,80 L280,120 L280,200 Z" fill="none" stroke="#22C55E" strokeWidth="1.5"/>
          <circle cx="80" cy="215" r="22" fill="none" stroke="#22C55E" strokeWidth="1.5"/>
          <circle cx="240" cy="215" r="22" fill="none" stroke="#22C55E" strokeWidth="1.5"/>
          <line x1="0" y1="240" x2="320" y2="240" stroke="#1A6B3A" strokeWidth="0.5" strokeDasharray="10 5"/>
          <path d="M40,120 L40,180" stroke="#1A6B3A" strokeWidth="0.5"/>
          <path d="M40,120 L120,120 L120,80" stroke="#1A6B3A" strokeWidth="0.5"/>
        </svg>
        <svg className="absolute left-10 bottom-5 opacity-10 w-56 h-24" viewBox="0 0 240 100">
          <circle cx="20" cy="50" r="10" fill="#22C55E"/>
          <circle cx="80" cy="50" r="10" fill="none" stroke="#22C55E" strokeWidth="1.5"/>
          <circle cx="140" cy="50" r="10" fill="none" stroke="#22C55E" strokeWidth="1.5"/>
          <circle cx="200" cy="50" r="10" fill="none" stroke="#22C55E" strokeWidth="1.5"/>
          <line x1="30" y1="50" x2="70" y2="50" stroke="#1A6B3A" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="90" y1="50" x2="130" y2="50" stroke="#1A6B3A" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="150" y1="50" x2="190" y2="50" stroke="#1A6B3A" strokeWidth="1" strokeDasharray="5 3"/>
        </svg>

        <div className="relative mx-auto max-w-2xl px-4 lg:px-8 text-center">
          <span className="font-tag text-base inline-block rounded-full border border-cp-green/40 bg-cp-green/10 px-4 py-1.5 font-medium text-cp-green-light mb-6">Order Tracking</span>
          <h1 className="font-heading text-4xl text-cream md:text-5xl">Track Your <span className="text-cp-green-light">Order</span></h1>
          <p className="mt-4 text-muted-foreground">Enter your order reference number below to check your current order status.</p>

          <form onSubmit={handleSearch} className="mt-8 flex gap-2 max-w-md mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                value={orderRef}
                onChange={e => setOrderRef(e.target.value)}
                placeholder="Order ref e.g. CP-2025-1234"
                className="w-full rounded-xl border border-cp-green/30 bg-ink-black/80 pl-10 pr-4 py-3.5 text-cream placeholder:text-muted-foreground focus:border-cp-green-light focus:outline-none text-sm"
              />
            </div>
            <button type="submit"
              className="rounded-xl bg-cp-green px-5 py-3.5 text-sm font-bold text-cream hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              Track <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>

      {/* Result / Info */}
      <section className="bg-cream py-16 lg:py-20 relative overflow-hidden">
        <svg className="absolute left-0 bottom-0 opacity-5 w-64 h-64" viewBox="0 0 200 200">
          <path d="M10,100 Q50,10 100,50 Q150,90 190,40 Q200,100 150,140 Q100,180 50,150 Q10,120 10,100 Z" fill="#1A6B3A"/>
        </svg>
        <div className="relative mx-auto max-w-3xl px-4 lg:px-8">

          {searched && orderRef ? (
            <div className="rounded-2xl border border-cp-green/30 bg-white p-8 text-center shadow-sm mb-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-50 border border-amber-200 mx-auto mb-4">
                <Clock className="h-8 w-8 text-amber-500" />
              </div>
              <h2 className="font-black text-foreground text-xl">Order Not Found</h2>
              <p className="text-muted-foreground text-sm mt-2 max-w-sm mx-auto">
                We couldn&apos;t find an order matching <strong className="text-foreground">{orderRef}</strong>. 
                Please check your reference number or contact us directly on WhatsApp for real-time updates.
              </p>
              <a href={`https://wa.me/233546528518?text=Hi, I want to track my order: ${encodeURIComponent(orderRef)}`}
                target="_blank" rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-whatsapp-green px-6 py-3 text-sm font-bold text-white hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4" /> Ask on WhatsApp
              </a>
            </div>
          ) : null}

          {/* How Tracking Works */}
          <div className="mb-10">
            <div className="text-center mb-8">
              <h2 className="font-heading text-2xl text-foreground">Your Order Journey</h2>
              <p className="text-sm text-muted-foreground mt-1">Here&apos;s how your order moves from placement to delivery.</p>
            </div>
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-cp-green/20 hidden sm:block" />
              <div className="space-y-4">
                {steps.map((step, i) => (
                  <div key={step.label} className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5 relative">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-cp-green/10 border border-cp-green/20 z-10">
                      <step.icon className="h-5 w-5 text-cp-green" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-cp-green">Step {i + 1}</span>
                      </div>
                      <p className="font-black text-foreground">{step.label}</p>
                      <p className="text-sm text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* WhatsApp tracking CTA */}
          <div className="rounded-3xl bg-ink-black p-8 relative overflow-hidden">
            <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 400 200" preserveAspectRatio="none">
              <path d="M0,100 Q100,20 200,100 Q300,180 400,100 L400,200 L0,200 Z" fill="#1A6B3A"/>
            </svg>
            <div className="relative flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h3 className="font-heading text-xl text-cream">Get Real-Time Updates on WhatsApp</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  The fastest way to track your order is directly on WhatsApp. Send us your order reference and we&apos;ll update you instantly on your order status, estimated delivery time, and tracking link from our courier.
                </p>
                <div className="mt-3 text-sm text-cp-green-light">
                  📞 +233 54 652 8518 · +233 53 815 6769
                </div>
              </div>
              <a href="https://wa.me/233546528518?text=Hi, I want to track my order" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-whatsapp-green px-6 py-3.5 text-sm font-bold text-white hover:opacity-90 whitespace-nowrap"
              >
                <MessageCircle className="h-5 w-5" /> Track on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
