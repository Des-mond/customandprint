"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { Check, Clock, MessageCircle, Package, Printer, Search, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_NUMBER = "233546528518"

const trackingSteps = [
  { id: 1, label: "Order Received", icon: Package, time: "Dec 4, 9:00 AM", done: true },
  { id: 2, label: "Printing in Progress", icon: Printer, time: "Dec 4, 11:30 AM", done: true },
  { id: 3, label: "Quality Check", icon: Check, time: "Dec 4, 2:00 PM", done: true },
  { id: 4, label: "Out for Delivery", icon: Truck, time: "Estimated 5:00 PM", done: false, current: true },
  { id: 5, label: "Delivered", icon: Check, time: "Pending", done: false },
]

export function TrackingContent() {
  const searchParams = useSearchParams()
  const initialOrderId = searchParams.get("order") || ""
  
  const [orderId, setOrderId] = useState(initialOrderId)
  const [isTracking, setIsTracking] = useState(!!initialOrderId)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (orderId.trim()) {
      setIsTracking(true)
    }
  }

  const handleWhatsAppUpdates = () => {
    const message = `Hi! I'd like to receive WhatsApp updates for my order ${orderId || "CP-XXXXXXXX"}.`
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-center"
      >
        <h1 className="text-3xl font-bold text-foreground">Track Your Order</h1>
        <p className="mt-2 text-muted-foreground">
          Enter your order ID or phone number to check status
        </p>
      </motion.div>

      {/* Search Form */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        onSubmit={handleSearch}
        className="mb-8 flex gap-3"
      >
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            placeholder="Order ID (e.g., CP-12345678)"
            className="w-full rounded-xl border border-border bg-card py-3 pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:border-cp-green focus:outline-none focus:ring-1 focus:ring-cp-green"
          />
        </div>
        <Button type="submit" className="bg-cp-green text-ink-black hover:bg-cp-green/90">
          Track
        </Button>
      </motion.form>

      {/* Tracking Result */}
      {isTracking && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl border border-border bg-card p-6"
        >
          {/* Order Info */}
          <div className="mb-6 flex items-center justify-between border-b border-border pb-6">
            <div>
              <p className="text-sm text-muted-foreground">Order ID</p>
              <p className="text-lg font-bold text-foreground">
                {orderId || "CP-12345678"}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Estimated Delivery</p>
              <p className="text-lg font-bold text-forest-green">Today, 5:00 PM</p>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {trackingSteps.map((step, index) => (
              <div key={step.id} className="flex gap-4">
                {/* Timeline Line & Icon */}
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      step.done
                        ? "bg-forest-green text-cream"
                        : step.current
                        ? "bg-cp-green text-ink-black"
                        : "bg-cream text-muted-foreground"
                    }`}
                  >
                    {step.done ? (
                      <Check className="h-5 w-5" />
                    ) : step.current ? (
                      <Clock className="h-5 w-5 animate-pulse" />
                    ) : (
                      <step.icon className="h-5 w-5" />
                    )}
                  </div>
                  {index < trackingSteps.length - 1 && (
                    <div
                      className={`h-16 w-0.5 ${
                        step.done ? "bg-forest-green" : "bg-border"
                      }`}
                    />
                  )}
                </div>

                {/* Step Content */}
                <div className="flex-1 pb-8">
                  <p
                    className={`font-semibold ${
                      step.done || step.current
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {step.label}
                  </p>
                  <p className="text-sm text-muted-foreground">{step.time}</p>
                  {step.current && (
                    <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-cp-green/10 px-3 py-1 text-xs font-medium text-cp-green">
                      <Clock className="h-3 w-3" />
                      In Progress
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Order Items Preview */}
          <div className="mt-2 border-t border-border pt-6">
            <h3 className="mb-4 font-semibold text-foreground">Order Items</h3>
            <div className="flex gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-cream text-2xl">
                👕
              </div>
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-cream text-2xl">
                ☕
              </div>
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-cream text-muted-foreground">
                <span className="text-sm">+1</span>
              </div>
            </div>
          </div>

          {/* WhatsApp Updates */}
          <Button
            onClick={handleWhatsAppUpdates}
            className="mt-6 w-full bg-whatsapp-green text-cream hover:bg-whatsapp-green/90"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Get WhatsApp Updates
          </Button>
        </motion.div>
      )}

      {/* Help Section */}
      {!isTracking && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl border border-border bg-card p-6 text-center"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cream">
            <Package className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="mt-4 font-semibold text-foreground">
            {"Can't"} find your order ID?
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Check your WhatsApp or email for the order confirmation message, 
            or contact us directly.
          </p>
          <Button
            onClick={() => {
              const message = "Hi! I need help finding my order."
              window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank")
            }}
            variant="outline"
            className="mt-4 border-whatsapp-green text-whatsapp-green hover:bg-whatsapp-green hover:text-cream"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Contact Support
          </Button>
        </motion.div>
      )}
    </div>
  )
}
