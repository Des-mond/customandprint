"use client"

import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { useState } from "react"
import Link from "next/link"
import { ChevronDown, MessageCircle, Search } from "lucide-react"

const faqs = [
  {
    category: "Ordering",
    items: [
      { q: "How do I place a custom order?", a: "You can order directly through our website by choosing a product, customising it in our Design Studio, and adding it to your cart. For large or complex orders, reach us on WhatsApp (+233 54 652 8518) and we'll guide you through personally." },
      { q: "What is the minimum order quantity?", a: "There is no minimum order for standard products — you can order as little as 1 piece. For bulk or corporate orders (10+ pieces), we offer special pricing. Contact us for a quote." },
      { q: "Can I order samples before a bulk order?", a: "Yes! We highly recommend ordering a sample first for bulk orders. Sample pricing applies and the cost is often credited towards your bulk order. Ask us about this on WhatsApp." },
      { q: "How do I get a quote for a large order?", a: "Send us a message on WhatsApp (+233 54 652 8518) with your product type, quantity, design details, and deadline. We'll respond with a personalised quote within a few hours." },
    ],
  },
  {
    category: "Design & Files",
    items: [
      { q: "What file formats do you accept?", a: "We accept PNG, JPEG, SVG, PDF, and AI (Adobe Illustrator) files. For best print quality, we recommend high-resolution files at 300 DPI or higher. Vector files (SVG, AI, PDF) are ideal for screen printing." },
      { q: "What if I don't have a design?", a: "No problem! Use our free Design Studio on the website to create your design from scratch. We also offer professional design services — send us your idea or brand guidelines on WhatsApp and our design team will create something for you." },
      { q: "Can you match specific brand colours (Pantone)?", a: "Yes, we can match Pantone colours for screen printing. Please provide your Pantone codes when placing your order. We always recommend a sample for exact colour matching." },
      { q: "Will I see a proof before printing?", a: "Yes. For all orders we send a digital proof (mockup) for your approval before we begin printing. Production only starts once you've confirmed the proof." },
    ],
  },
  {
    category: "Printing & Quality",
    items: [
      { q: "What printing methods do you use?", a: "We specialise in screen printing (best for bold, durable prints on fabric — ideal for t-shirts, hoodies, tote bags) and sublimation printing (full-colour photo-quality prints on mugs and all-over apparel). We'll recommend the best method for your project." },
      { q: "How long will my print last after washing?", a: "Our screen prints use premium Antex Plastisol inks cured at high temperatures, making them extremely durable. Wash garments inside-out in cold water and avoid tumble drying. Sublimation prints are permanently bonded to the fabric and do not crack or fade." },
      { q: "Do you print on dark-coloured fabrics?", a: "Yes! We use high-opacity Snow White plastisol ink as a base layer on dark fabrics so colours appear vibrant and true. This is standard for screen printing on black, navy, and other dark garments." },
      { q: "Can I supply my own garments for printing?", a: "Yes, we accept customer-supplied garments (CSG). Please contact us before sending anything so we can advise on fabric suitability and ensure the best print result." },
    ],
  },
  {
    category: "Delivery & Turnaround",
    items: [
      { q: "How long does an order take?", a: "Standard orders take 3–5 business days from design approval to delivery. Rush orders (1–2 days) are available for an additional fee subject to our production schedule. We'll always give you a specific timeline when you order." },
      { q: "Do you deliver outside Accra?", a: "Yes! We deliver nationwide across Ghana using reliable courier partners. Delivery within Accra is available and costs are calculated at checkout based on your location." },
      { q: "Can I pick up my order?", a: "Absolutely. Collect from our location at 7th Road, Okomfo Yartey, Accra (GPS: GA-506-6161). We'll notify you on WhatsApp when your order is ready." },
    ],
  },
  {
    category: "Payments & Returns",
    items: [
      { q: "What payment methods do you accept?", a: "We accept Mobile Money (MTN MoMo, Vodafone Cash, AirtelTigo Money), bank transfers, and cash on collection. Payment confirmation is required before production begins." },
      { q: "What is your returns policy?", a: "All our products are custom-made to your specification. If there is a printing error or quality defect on our part, we will reprint or refund the affected items at no cost. Please inspect your order within 48 hours of delivery and report any issues." },
      { q: "Do you offer discounts for bulk orders?", a: "Yes! Discounts start at 10+ pieces and increase with quantity. Corporate accounts and repeat customers also receive preferential pricing. Contact us for a full bulk pricing sheet." },
    ],
  },
]

export default function FaqsPage() {
  const [openItem, setOpenItem] = useState<string | null>(null)
  const [search, setSearch] = useState("")

  const filtered = faqs.map(cat => ({
    ...cat,
    items: cat.items.filter(item =>
      item.q.toLowerCase().includes(search.toLowerCase()) ||
      item.a.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter(cat => cat.items.length > 0)

  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="relative bg-ink-black py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(26,107,58,0.2)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.04)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <svg className="absolute left-0 top-0 opacity-10 w-72 h-72" viewBox="0 0 300 300">
          <circle cx="150" cy="150" r="120" fill="none" stroke="#22C55E" strokeWidth="1"/>
          <circle cx="150" cy="150" r="80" fill="none" stroke="#1A6B3A" strokeWidth="0.5"/>
          <path d="M30,150 Q150,30 270,150 Q150,270 30,150 Z" fill="none" stroke="#22C55E" strokeWidth="0.5"/>
        </svg>
        <svg className="absolute right-10 bottom-0 opacity-10 w-48 h-48" viewBox="0 0 200 200">
          <polygon points="100,10 190,60 190,140 100,190 10,140 10,60" fill="none" stroke="#22C55E" strokeWidth="1"/>
        </svg>
        <div className="relative mx-auto max-w-3xl px-4 lg:px-8 text-center">
          <span className="font-tag text-base inline-block rounded-full border border-cp-green/40 bg-cp-green/10 px-4 py-1.5 font-medium text-cp-green-light mb-6">Help Centre</span>
          <h1 className="font-heading text-4xl text-cream md:text-5xl">Frequently Asked <span className="text-cp-green-light">Questions</span></h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Everything you need to know about ordering, design, printing, and delivery at Custom &amp; Print Ghana.</p>
          <div className="relative mt-8 max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search questions..."
              className="w-full rounded-xl border border-cp-green/30 bg-ink-black/80 pl-10 pr-4 py-3 text-cream placeholder:text-muted-foreground focus:border-cp-green-light focus:outline-none text-sm"
            />
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 lg:py-24 relative overflow-hidden">
        <svg className="absolute right-0 top-1/3 opacity-5 w-64 h-64" viewBox="0 0 200 200">
          <path d="M10,100 Q50,10 100,50 Q150,90 190,40 Q200,100 150,140 Q100,180 50,150 Q10,120 10,100 Z" fill="#1A6B3A"/>
        </svg>
        <div className="relative mx-auto max-w-3xl px-4 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg font-bold text-foreground">No results found</p>
              <p className="text-sm text-muted-foreground mt-1">Try a different search or <Link href="/contact" className="text-cp-green hover:underline">contact us</Link>.</p>
            </div>
          ) : (
            <div className="space-y-10">
              {filtered.map((cat) => (
                <div key={cat.category}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="h-1 w-6 rounded-full bg-cp-green" />
                    <h2 className="text-lg font-black text-foreground">{cat.category}</h2>
                  </div>
                  <div className="space-y-3">
                    {cat.items.map((item) => {
                      const key = `${cat.category}-${item.q}`
                      const isOpen = openItem === key
                      return (
                        <div key={key} className={`overflow-hidden rounded-2xl border transition-all duration-200 ${isOpen ? "border-cp-green bg-white shadow-md" : "border-border bg-white hover:border-cp-green/50"}`}>
                          <button onClick={() => setOpenItem(isOpen ? null : key)} className="w-full flex items-center justify-between p-5 text-left gap-4">
                            <span className="font-bold text-foreground text-sm leading-relaxed">{item.q}</span>
                            <ChevronDown className={`h-5 w-5 flex-shrink-0 text-cp-green transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                          </button>
                          {isOpen && (
                            <div className="px-5 pb-5">
                              <div className="h-px bg-cp-green/20 mb-4" />
                              <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-16 rounded-3xl bg-ink-black p-8 text-center relative overflow-hidden">
            <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 400 200" preserveAspectRatio="none">
              <path d="M0,100 Q100,20 200,100 Q300,180 400,100 L400,200 L0,200 Z" fill="#1A6B3A"/>
            </svg>
            <div className="relative">
              <h3 className="text-xl font-black text-cream mb-2">Still have a question?</h3>
              <p className="text-sm text-muted-foreground mb-6">Our team is on WhatsApp Mon–Sat, 8am–6pm. We typically reply within minutes.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="https://wa.me/233546528518?text=Hi, I have a question about Custom and Print" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-whatsapp-green px-6 py-3 text-sm font-bold text-white hover:opacity-90"
                >
                  <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                </a>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl border border-cp-green text-cp-green-light px-6 py-3 text-sm font-bold hover:bg-cp-green/10 transition-colors">
                  Send a Message
                </Link>
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
