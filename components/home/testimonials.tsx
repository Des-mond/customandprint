"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  { id: 1, name: "Kwame Asante", role: "Event Organizer", content: "Custom & Print delivered 200 t-shirts for our tech conference in just 3 days. The quality was amazing and our attendees loved them!", rating: 5, avatar: "KA" },
  { id: 2, name: "Ama Serwaa", role: "Small Business Owner", content: "I use them for all my boutique merchandise. The design studio is so easy to use, and the prices are very fair for the quality you get.", rating: 5, avatar: "AS" },
  { id: 3, name: "Daniel Mensah", role: "Wedding Planner", content: "Perfect for custom wedding favors and party merchandise. The team even helped with the designs. Highly recommend!", rating: 5, avatar: "DM" },
  { id: 4, name: "Efua Boateng", role: "NGO Director", content: "We ordered branded hoodies for our entire team. The quality exceeded our expectations and delivery was on time. Will order again!", rating: 5, avatar: "EB" },
]

const avatarColors = ["bg-cp-green", "bg-coral-red", "bg-cp-green-dark", "bg-purple-600"]

export function Testimonials() {
  return (
    <section className="bg-cream py-16 lg:py-24 relative overflow-hidden">
      {/* SVG decoration */}
      <svg className="absolute top-10 left-10 opacity-5 w-40 h-40" viewBox="0 0 100 100">
        <text x="0" y="80" fontSize="100" fill="#1A6B3A">&ldquo;</text>
      </svg>

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 text-center">
          <span className="font-tag text-base inline-block rounded-full bg-cp-green/10 border border-cp-green/20 px-4 py-1.5 font-medium text-cp-green mb-4">Testimonials</span>
          <h2 className="font-heading text-3xl text-foreground md:text-4xl">What Our Customers Say</h2>
          <p className="mt-3 text-muted-foreground">Real reviews from real Ghanaian customers</p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, index) => (
            <motion.div key={t.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: index * 0.1 }}
            >
              <div className="card-3d h-full rounded-2xl border border-border bg-white p-6 shadow-sm">
                <Quote className="h-6 w-6 text-cp-green/30 mb-3" />
                <div className="flex gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-cp-green text-cp-green" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground mb-5">&ldquo;{t.content}&rdquo;</p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className={`flex h-9 w-9 items-center justify-center rounded-full ${avatarColors[index]} text-xs font-bold text-cream flex-shrink-0`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
