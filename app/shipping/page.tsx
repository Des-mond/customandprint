import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { Truck, Clock, MapPin, Package, CheckCircle, AlertCircle, MessageCircle } from "lucide-react"
import Link from "next/link"

const zones = [
  { zone: "Accra Central & Surrounding Areas", time: "Same day – Next day", fee: "GH₵ 15 – 25", examples: "Osu, Labone, East Legon, Tema, Spintex, Achimota, Madina" },
  { zone: "Greater Accra (Outer)", time: "1 – 2 business days", fee: "GH₵ 25 – 40", examples: "Kasoa, Weija, Ashaiman, Adenta, Dodowa" },
  { zone: "Kumasi", time: "2 – 3 business days", fee: "GH₵ 40 – 60", examples: "Kumasi Metropolis and surrounding areas" },
  { zone: "Other Regions (Ghana)", time: "3 – 5 business days", fee: "GH₵ 50 – 80", examples: "Cape Coast, Takoradi, Ho, Koforidua, Sunyani, Tamale, etc." },
]

const turnaround = [
  { type: "Standard Order", time: "3 – 5 business days", desc: "Applies to most single and small-batch orders. Includes design approval, printing, curing and QC.", icon: Clock },
  { type: "Bulk / Corporate Order", time: "5 – 10 business days", desc: "For orders of 20+ pieces. Timeline confirmed at order placement based on complexity and quantity.", icon: Package },
  { type: "Rush Order", time: "1 – 2 business days", desc: "Available subject to our production schedule. Rush fee applies. Contact us first to confirm availability.", icon: AlertCircle },
  { type: "Walk-in / Collection", time: "Same day*", desc: "Walk-in orders with pre-approved designs may be turned around same day. Call ahead to confirm.", icon: CheckCircle },
]

export default function ShippingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative bg-ink-black py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_60%,rgba(26,107,58,0.2)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.04)_1px,transparent_1px)] bg-[size:50px_50px]" />
        {/* Decorative SVG — truck/road motif */}
        <svg className="absolute right-0 top-0 opacity-10 w-80 h-80" viewBox="0 0 320 320">
          <rect x="20" y="140" width="180" height="80" rx="12" fill="none" stroke="#22C55E" strokeWidth="1.5"/>
          <rect x="180" y="160" width="90" height="60" rx="8" fill="none" stroke="#1A6B3A" strokeWidth="1"/>
          <circle cx="60" cy="230" r="22" fill="none" stroke="#22C55E" strokeWidth="1.5"/>
          <circle cx="220" cy="230" r="22" fill="none" stroke="#22C55E" strokeWidth="1.5"/>
          <line x1="0" y1="252" x2="320" y2="252" stroke="#1A6B3A" strokeWidth="0.5" strokeDasharray="10 5"/>
        </svg>
        <svg className="absolute left-10 bottom-0 opacity-10 w-48 h-32" viewBox="0 0 200 100">
          <path d="M0,80 Q50,20 100,50 Q150,80 200,30" fill="none" stroke="#22C55E" strokeWidth="1" strokeDasharray="8 4"/>
          <circle cx="200" cy="30" r="6" fill="#22C55E"/>
        </svg>

        <div className="relative mx-auto max-w-4xl px-4 lg:px-8 text-center">
          <span className="font-tag text-base inline-block rounded-full border border-cp-green/40 bg-cp-green/10 px-4 py-1.5 font-medium text-cp-green-light mb-6">Delivery Information</span>
          <h1 className="font-heading text-4xl text-cream md:text-5xl">Shipping &amp; <span className="text-cp-green-light">Delivery</span></h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">We deliver across Ghana. Below is everything you need to know about our production timelines, delivery zones, and collection options.</p>
        </div>
      </section>

      {/* Production Turnaround */}
      <section className="bg-cream py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="text-center mb-10">
            <span className="font-tag text-base inline-block rounded-full bg-cp-green/10 border border-cp-green/20 px-4 py-1.5 font-medium text-cp-green mb-3">Production Times</span>
            <h2 className="font-heading text-3xl text-foreground">How Long Does It Take?</h2>
            <p className="mt-2 text-muted-foreground text-sm">All timelines start from the moment your design proof is approved.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {turnaround.map((item) => (
              <div key={item.type} className="flex gap-4 rounded-2xl border border-border bg-white p-6 hover:border-cp-green hover:shadow-md transition-all">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-cp-green/10">
                  <item.icon className="h-6 w-6 text-cp-green" />
                </div>
                <div>
                  <p className="font-black text-foreground">{item.type}</p>
                  <p className="text-cp-green font-bold text-sm mt-0.5">{item.time}</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground text-center">* Business days are Monday to Saturday. Public holidays are excluded.</p>
        </div>
      </section>

      {/* Delivery Zones */}
      <section className="bg-white py-16 lg:py-20 relative overflow-hidden">
        <svg className="absolute left-0 bottom-0 opacity-5 w-72 h-72" viewBox="0 0 300 300">
          <circle cx="150" cy="150" r="130" fill="none" stroke="#1A6B3A" strokeWidth="2"/>
          <circle cx="150" cy="150" r="90" fill="none" stroke="#1A6B3A" strokeWidth="1"/>
          <circle cx="150" cy="150" r="50" fill="none" stroke="#22C55E" strokeWidth="0.5"/>
          <circle cx="150" cy="150" r="8" fill="#22C55E"/>
        </svg>
        <div className="relative mx-auto max-w-5xl px-4 lg:px-8">
          <div className="text-center mb-10">
            <span className="font-tag text-base inline-block rounded-full bg-cp-green/10 border border-cp-green/20 px-4 py-1.5 font-medium text-cp-green mb-3">Delivery Zones</span>
            <h2 className="font-heading text-3xl text-foreground">Where We Deliver</h2>
            <p className="mt-2 text-muted-foreground text-sm">We deliver to all 16 regions of Ghana via our courier partners.</p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead className="bg-ink-black text-cream">
                <tr>
                  <th className="px-5 py-4 text-left font-bold">Zone</th>
                  <th className="px-5 py-4 text-left font-bold hidden md:table-cell">Examples</th>
                  <th className="px-5 py-4 text-left font-bold">Est. Time</th>
                  <th className="px-5 py-4 text-left font-bold">Fee</th>
                </tr>
              </thead>
              <tbody>
                {zones.map((z, i) => (
                  <tr key={z.zone} className={i % 2 === 0 ? "bg-white" : "bg-cream/50"}>
                    <td className="px-5 py-4 font-medium text-foreground">{z.zone}</td>
                    <td className="px-5 py-4 text-muted-foreground hidden md:table-cell text-xs">{z.examples}</td>
                    <td className="px-5 py-4 text-cp-green font-bold whitespace-nowrap">{z.time}</td>
                    <td className="px-5 py-4 font-bold text-foreground">{z.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">Delivery fees are estimates. Exact fees are confirmed at checkout. Prices may vary for oversized or heavy orders.</p>
        </div>
      </section>

      {/* Collection */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <span className="font-tag text-base inline-block rounded-full bg-cp-green/10 border border-cp-green/20 px-4 py-1.5 font-medium text-cp-green mb-4">Free Collection</span>
              <h2 className="font-heading text-3xl text-foreground">Pick Up for Free</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">Skip delivery fees entirely by collecting your order from our print shop. We'll send you a WhatsApp notification as soon as your order is ready.</p>
              <div className="mt-6 flex items-start gap-3">
                <MapPin className="h-5 w-5 text-cp-green flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-foreground">7th Road, Okomfo Yartey, Accra</p>
                  <p className="text-sm text-muted-foreground">Ghana Post GPS: GA-506-6161 · HP4Q+64 Accra</p>
                  <a href="https://maps.google.com/?q=5.555560643635287,-0.2621255907909272" target="_blank" rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm text-cp-green font-medium hover:underline"
                  >Open in Google Maps →</a>
                </div>
              </div>
              <div className="mt-4 flex items-start gap-3">
                <Clock className="h-5 w-5 text-cp-green flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-foreground">Collection Hours</p>
                  <p className="text-sm text-muted-foreground">Monday – Saturday, 8:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-cp-green/20 bg-white p-8 relative overflow-hidden">
              <svg className="absolute top-0 right-0 opacity-10 w-32 h-32" viewBox="0 0 100 100">
                <path d="M50,10 L90,30 L90,70 L50,90 L10,70 L10,30 Z" fill="#22C55E"/>
              </svg>
              <h3 className="font-black text-foreground text-lg mb-5">Important Notes</h3>
              <ul className="space-y-4">
                {[
                  "We'll notify you on WhatsApp when your order is ready — please wait for confirmation before coming in.",
                  "Bring your order confirmation (screenshot from WhatsApp or email) when collecting.",
                  "Orders not collected within 14 days of notification may be cancelled and restocked.",
                  "For same-day collection, please call ahead (+233 53 815 6769) to confirm.",
                ].map((note, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                    <CheckCircle className="h-4 w-4 text-cp-green flex-shrink-0 mt-0.5" />
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cp-green py-12">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading text-xl text-cream">Questions about your delivery?</h3>
            <p className="text-cp-green-light text-sm mt-1">Our team responds quickly on WhatsApp, Mon–Sat 8am–6pm.</p>
          </div>
          <a href="https://wa.me/233546528518?text=Hi, I have a question about delivery" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-ink-black px-6 py-3 text-sm font-bold text-cream hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
