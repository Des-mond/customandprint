"use client"

import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { useState } from "react"
import Link from "next/link"
import { CheckCircle, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

const paymentMethods = [
  { id: "momo", label: "Mobile Money (MTN / Vodafone / AirtelTigo)", icon: "📱" },
  { id: "bank", label: "Bank Transfer", icon: "🏦" },
  { id: "cod", label: "Cash on Delivery (Accra only)", icon: "💵" },
]

export default function CheckoutPage() {
  const [step, setStep] = useState(1)
  const [payment, setPayment] = useState("momo")
  const [form, setForm] = useState({ name: "", phone: "", address: "", notes: "" })

  const subtotal = 115
  const delivery = 20
  const total = subtotal + delivery

  if (step === 3) {
    return (
      <main className="min-h-screen">
        <Navigation />
        <section className="bg-cream flex items-center justify-center min-h-[70vh] py-16">
          <div className="mx-auto max-w-md px-4 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-cp-green/10 mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-cp-green" />
            </div>
            <h1 className="text-3xl font-black text-foreground">Order Confirmed!</h1>
            <p className="mt-3 text-muted-foreground">Thanks for your order. You&apos;ll receive a WhatsApp confirmation shortly.</p>
            <div className="mt-6 rounded-2xl border border-cp-green/20 bg-white p-5 text-left">
              <p className="text-sm text-muted-foreground">Order ID</p>
              <p className="font-black text-foreground text-lg">CP-2025-{Math.floor(Math.random() * 900 + 100)}</p>
              <div className="mt-3 border-t border-border pt-3 text-sm">
                <div className="flex justify-between text-muted-foreground"><span>Items</span><span>GH₵ {subtotal}</span></div>
                <div className="flex justify-between text-muted-foreground"><span>Delivery</span><span>GH₵ {delivery}</span></div>
                <div className="flex justify-between font-black text-foreground mt-2"><span>Total</span><span className="text-coral-red">GH₵ {total}</span></div>
              </div>
            </div>
            <a href="https://wa.me/233546528518" target="_blank" rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 w-full rounded-xl bg-whatsapp-green px-4 py-3 text-sm font-bold text-white"
            >
              Track via WhatsApp
            </a>
            <Link href="/shop">
              <Button variant="outline" className="mt-3 w-full border-cp-green text-cp-green hover:bg-cp-green hover:text-cream">Continue Shopping</Button>
            </Link>
          </div>
        </section>
        <Footer />
        <WhatsAppButton />
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="bg-ink-black py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(26,107,58,0.15)_0%,transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <Link href="/cart" className="inline-flex items-center gap-1.5 text-sm text-cp-green-light hover:text-cp-green mb-3 font-medium">
            <ArrowLeft className="h-4 w-4" /> Back to cart
          </Link>
          <h1 className="text-3xl font-black text-cream">Checkout</h1>
          {/* Steps */}
          <div className="mt-4 flex items-center gap-3">
            {["Delivery", "Payment", "Confirm"].map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <div className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-black ${i + 1 <= step ? "bg-cp-green text-cream" : "bg-secondary text-muted-foreground"}`}>
                  {i + 1}
                </div>
                <span className={`text-sm ${i + 1 === step ? "text-cream font-medium" : "text-muted-foreground"}`}>{s}</span>
                {i < 2 && <span className="text-muted-foreground/40 mx-1">›</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              {step === 1 && (
                <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                  <h2 className="text-lg font-black text-foreground mb-5">Delivery Information</h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[["Full Name *", "name", "Kwame Mensah", "text"], ["Phone / WhatsApp *", "phone", "+233 XX XXX XXXX", "tel"]].map(([label, key, ph, type]) => (
                      <div key={key}>
                        <label className="block text-sm font-medium text-foreground mb-1.5">{label}</label>
                        <input type={type} placeholder={ph} value={(form as any)[key]} onChange={(e) => setForm({...form, [key]: e.target.value})}
                          className="w-full rounded-xl border border-border bg-cream px-4 py-3 text-sm focus:border-cp-green focus:outline-none focus:ring-1 focus:ring-cp-green"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-foreground mb-1.5">Delivery Address *</label>
                    <textarea rows={2} placeholder="Street, Area, Accra" value={form.address} onChange={(e) => setForm({...form, address: e.target.value})}
                      className="w-full rounded-xl border border-border bg-cream px-4 py-3 text-sm focus:border-cp-green focus:outline-none resize-none"
                    />
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-foreground mb-1.5">Order Notes (optional)</label>
                    <textarea rows={2} placeholder="Any special instructions..." value={form.notes} onChange={(e) => setForm({...form, notes: e.target.value})}
                      className="w-full rounded-xl border border-border bg-cream px-4 py-3 text-sm focus:border-cp-green focus:outline-none resize-none"
                    />
                  </div>
                  <Button onClick={() => setStep(2)} className="mt-5 w-full bg-cp-green text-cream hover:bg-cp-green-dark font-bold">
                    Continue to Payment
                  </Button>
                </div>
              )}

              {step === 2 && (
                <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                  <h2 className="text-lg font-black text-foreground mb-5">Payment Method</h2>
                  <div className="space-y-3">
                    {paymentMethods.map((m) => (
                      <label key={m.id} className={`flex items-center gap-4 cursor-pointer rounded-xl border-2 p-4 transition-all ${payment === m.id ? "border-cp-green bg-cp-green/5" : "border-border hover:border-cp-green/40"}`}>
                        <input type="radio" name="payment" value={m.id} checked={payment === m.id} onChange={() => setPayment(m.id)} className="hidden" />
                        <div className={`h-5 w-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${payment === m.id ? "border-cp-green" : "border-border"}`}>
                          {payment === m.id && <div className="h-2.5 w-2.5 rounded-full bg-cp-green" />}
                        </div>
                        <span className="text-xl">{m.icon}</span>
                        <span className="text-sm font-medium text-foreground">{m.label}</span>
                      </label>
                    ))}
                  </div>
                  <div className="mt-5 flex gap-3">
                    <Button variant="outline" onClick={() => setStep(1)} className="flex-1 border-cp-green text-cp-green hover:bg-cp-green hover:text-cream">Back</Button>
                    <Button onClick={() => setStep(3)} className="flex-1 bg-cp-green text-cream hover:bg-cp-green-dark font-bold">Place Order</Button>
                  </div>
                </div>
              )}
            </div>

            {/* Summary */}
            <div>
              <div className="rounded-2xl border border-border bg-white p-6 shadow-sm sticky top-24">
                <h2 className="text-lg font-black text-foreground mb-4">Order Summary</h2>
                <div className="space-y-3 text-sm">
                  {[["Custom T-Shirt ×2", 140], ["Love Mug ×1", 45]].map(([name, price]) => (
                    <div key={name as string} className="flex justify-between text-muted-foreground">
                      <span>{name as string}</span><span>GH₵ {price}</span>
                    </div>
                  ))}
                  <div className="flex justify-between text-muted-foreground"><span>Delivery</span><span>GH₵ {delivery}</span></div>
                  <div className="border-t border-border pt-3 flex justify-between font-black text-foreground">
                    <span>Total</span><span className="text-coral-red">GH₵ {total}</span>
                  </div>
                </div>
                <div className="mt-4 rounded-xl bg-cp-green/5 border border-cp-green/20 p-3 text-xs text-muted-foreground">
                  ✓ Estimated delivery: 3–5 business days in Accra
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
