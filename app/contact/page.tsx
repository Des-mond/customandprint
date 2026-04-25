"use client"

import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { useState } from "react"
import { MapPin, Phone, Mail, MessageCircle, Clock, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative bg-ink-black py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(26,107,58,0.2)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.04)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <svg className="absolute right-10 top-10 opacity-10 w-60 h-60" viewBox="0 0 200 200">
          <path d="M100,10 L190,55 L190,145 L100,190 L10,145 L10,55 Z" fill="none" stroke="#22C55E" strokeWidth="1"/>
          <path d="M100,35 L165,65 L165,135 L100,165 L35,135 L35,65 Z" fill="none" stroke="#1A6B3A" strokeWidth="0.5"/>
        </svg>
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <span className="font-tag text-base inline-block rounded-full border border-cp-green/40 bg-cp-green/10 px-4 py-1.5 font-medium text-cp-green-light mb-6">Get In Touch</span>
          <h1 className="font-heading text-4xl text-cream md:text-5xl">
            Let&apos;s Create <span className="text-cp-green-light">Something Together</span>
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
            Have a question, bulk order inquiry, or custom project? Our team in Accra is ready to help.
            <br /><span className="text-cp-green-light text-sm font-medium">📍 7th Road, Okomfo Yartey, Accra | GPS: GA-506-6161</span>
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">

            {/* Contact info sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-black text-foreground mb-6">Contact Information</h2>
                {[
                  { icon: MapPin, label: "Our Location", value: "7th Road, Okomfo Yartey, Accra", sub: "GPS: GA-506-6161 | HP4Q+64 Accra" },
                  { icon: Phone, label: "Phone / WhatsApp", value: "+233 53 815 6769", sub: "Mon–Sat, 8am–6pm" },
                  { icon: Mail, label: "Email", value: "hello@customandprint.com", sub: "We reply within 24 hours" },
                  { icon: Clock, label: "Working Hours", value: "Monday – Saturday", sub: "8:00 AM – 6:00 PM" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 rounded-2xl border border-border bg-white p-4 mb-4 hover:border-cp-green transition-colors">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cp-green/10 flex-shrink-0">
                      <item.icon className="h-5 w-5 text-cp-green" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium">{item.label}</p>
                      <p className="text-sm font-bold text-foreground">{item.value}</p>
                      <p className="text-xs text-muted-foreground">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a href="https://wa.me/233546528518?text=Hello%20Custom%20%26%20Print%2C%20I%20would%20like%20to%20enquire%20about%20your%20services" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl bg-whatsapp-green p-5 text-white hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="h-7 w-7 flex-shrink-0" />
                <div>
                  <p className="font-black">Chat on WhatsApp</p>
                  <p className="text-sm opacity-90">Get instant replies from our team</p>
                </div>
              </a>

              {/* Map */}
              <div className="relative overflow-hidden rounded-2xl border border-cp-green/20 h-52 shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.968!2d-0.2621255907909272!3d5.555560643635287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzMnMjAuMCJOIDDCsDE1JzQzLjciVw!5e0!3m2!1sen!2sgh!4v1700000000000!5m2!1sen!2sgh"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Custom and Print Ghana Location"
                  className="absolute inset-0"
                />
                <a href="https://maps.google.com/?q=5.555560643635287,-0.2621255907909272" target="_blank" rel="noopener noreferrer"
                  className="absolute bottom-2 right-2 rounded-lg bg-white px-3 py-1.5 text-xs font-bold text-cp-green shadow-md hover:bg-cp-green hover:text-cream transition-colors"
                >
                  Open in Maps ↗
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="rounded-3xl border border-border bg-white p-8 shadow-sm">
                {sent ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cp-green/10 mb-4">
                      <CheckCircle className="h-8 w-8 text-cp-green" />
                    </div>
                    <h3 className="text-2xl font-black text-foreground mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground max-w-sm">Thanks for reaching out. Our team will get back to you within 24 hours.</p>
                    <button onClick={() => setSent(false)} className="mt-6 text-sm text-cp-green hover:underline font-medium">Send another message</button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-black text-foreground mb-6">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                          <input type="text" required value={form.name} onChange={(e) => setForm({...form, name: e.target.value})}
                            placeholder="Kwame Mensah"
                            className="w-full rounded-xl border border-border bg-cream px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-cp-green focus:outline-none focus:ring-1 focus:ring-cp-green"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-1.5">Email Address *</label>
                          <input type="email" required value={form.email} onChange={(e) => setForm({...form, email: e.target.value})}
                            placeholder="kwame@example.com"
                            className="w-full rounded-xl border border-border bg-cream px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-cp-green focus:outline-none focus:ring-1 focus:ring-cp-green"
                          />
                        </div>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-1.5">Phone / WhatsApp</label>
                          <input type="tel" value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})}
                            placeholder="+233 XX XXX XXXX"
                            className="w-full rounded-xl border border-border bg-cream px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-cp-green focus:outline-none focus:ring-1 focus:ring-cp-green"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-1.5">Subject *</label>
                          <select required value={form.subject} onChange={(e) => setForm({...form, subject: e.target.value})}
                            className="w-full rounded-xl border border-border bg-cream px-4 py-3 text-sm text-foreground focus:border-cp-green focus:outline-none focus:ring-1 focus:ring-cp-green"
                          >
                            <option value="">Select a subject</option>
                            <option>General Inquiry</option>
                            <option>Bulk / Corporate Order</option>
                            <option>Design Help</option>
                            <option>Order Tracking</option>
                            <option>Other</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Message *</label>
                        <textarea required value={form.message} onChange={(e) => setForm({...form, message: e.target.value})}
                          rows={5} placeholder="Tell us about your project, order details, or question..."
                          className="w-full rounded-xl border border-border bg-cream px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-cp-green focus:outline-none focus:ring-1 focus:ring-cp-green resize-none"
                        />
                      </div>
                      <Button type="submit" size="lg" className="w-full bg-cp-green text-cream hover:bg-cp-green-dark font-bold">
                        Send Message
                      </Button>
                    </form>
                  </>
                )}
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
