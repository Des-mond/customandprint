"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Check, CreditCard, Phone, ShieldCheck, Truck, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"

// Sample order data
const orderItems = [
  { name: "Accra Ghana Tee × 2", price: 140 },
  { name: "Crypto Holder Mug × 1", price: 45 },
]

const subtotal = 185
const deliveryFee = 0
const total = 185

const paymentMethods = [
  {
    id: "momo",
    name: "Mobile Money",
    description: "MTN, Vodafone Cash, AirtelTigo",
    icon: Phone,
    recommended: true,
  },
  {
    id: "bank",
    name: "Bank Transfer",
    description: "Direct bank transfer",
    icon: CreditCard,
    recommended: false,
  },
  {
    id: "cod",
    name: "Cash on Delivery",
    description: "Pay when you receive",
    icon: Wallet,
    recommended: false,
  },
]

export function CheckoutContent() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    notes: "",
  })
  const [paymentMethod, setPaymentMethod] = useState("momo")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate order processing
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Redirect to confirmation or order tracking
    window.location.href = "/track?order=CP-" + Date.now().toString().slice(-8)
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
      {/* Breadcrumb */}
      <Link href="/cart" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-cp-green">
        <ArrowLeft className="h-4 w-4" />
        Back to Cart
      </Link>

      <h1 className="mb-8 text-3xl font-bold text-foreground">Checkout</h1>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Form Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Delivery Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <h2 className="mb-6 flex items-center gap-2 text-lg font-bold text-foreground">
                <Truck className="h-5 w-5 text-forest-green" />
                Delivery Information
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full rounded-xl border border-border bg-cream px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-cp-green focus:outline-none focus:ring-1 focus:ring-cp-green"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-xl border border-border bg-cream px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-cp-green focus:outline-none focus:ring-1 focus:ring-cp-green"
                    placeholder="e.g., 024 XXX XXXX"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Delivery Address
                  </label>
                  <textarea
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    rows={3}
                    className="w-full rounded-xl border border-border bg-cream px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-cp-green focus:outline-none focus:ring-1 focus:ring-cp-green resize-none"
                    placeholder="Street address, landmark, area"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Order Notes (optional)
                  </label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    rows={2}
                    className="w-full rounded-xl border border-border bg-cream px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-cp-green focus:outline-none focus:ring-1 focus:ring-cp-green resize-none"
                    placeholder="Any special instructions?"
                  />
                </div>
              </div>
            </motion.div>

            {/* Payment Method */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <h2 className="mb-6 flex items-center gap-2 text-lg font-bold text-foreground">
                <CreditCard className="h-5 w-5 text-cp-green" />
                Payment Method
              </h2>

              <div className="space-y-3">
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    type="button"
                    onClick={() => setPaymentMethod(method.id)}
                    className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition-all ${
                      paymentMethod === method.id
                        ? "border-cp-green bg-cp-green/5"
                        : "border-border hover:border-cp-green/50"
                    }`}
                  >
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      paymentMethod === method.id
                        ? "bg-cp-green text-ink-black"
                        : "bg-cream text-foreground"
                    }`}>
                      <method.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-foreground">{method.name}</span>
                        {method.recommended && (
                          <span className="rounded-full bg-forest-green/10 px-2 py-0.5 text-xs font-medium text-forest-green">
                            Recommended
                          </span>
                        )}
                      </div>
                      <span className="text-sm text-muted-foreground">{method.description}</span>
                    </div>
                    <div className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                      paymentMethod === method.id
                        ? "border-cp-green bg-cp-green"
                        : "border-border"
                    }`}>
                      {paymentMethod === method.id && (
                        <Check className="h-3 w-3 text-ink-black" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Order Summary */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="sticky top-24 rounded-2xl border border-border bg-card p-6"
            >
              <h2 className="text-lg font-bold text-foreground">Order Summary</h2>

              <div className="mt-6 space-y-3">
                {orderItems.map((item, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{item.name}</span>
                    <span className="font-medium text-foreground">GH₵ {item.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 border-t border-border pt-4 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium text-foreground">GH₵ {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Delivery</span>
                  <span className="font-medium text-forest-green">FREE</span>
                </div>
              </div>

              <div className="mt-4 border-t border-border pt-4">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-foreground">Total</span>
                  <span className="text-2xl font-bold text-coral-red">
                    GH₵ {total.toFixed(2)}
                  </span>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 w-full bg-cp-green text-ink-black hover:bg-cp-green/90 disabled:opacity-50"
              >
                {isSubmitting ? "Processing..." : "Place Order"}
              </Button>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <ShieldCheck className="h-4 w-4" />
                <span>Secure checkout</span>
              </div>
            </motion.div>
          </div>
        </div>
      </form>
    </div>
  )
}
