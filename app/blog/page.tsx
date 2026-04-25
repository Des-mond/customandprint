import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import Link from "next/link"
import { ArrowRight, Calendar, Clock } from "lucide-react"

const posts = [
  {
    slug: "screen-printing-vs-sublimation",
    category: "Printing Guide",
    categoryColor: "bg-cp-green text-cream",
    title: "Screen Printing vs Sublimation: Which Is Right for Your Project?",
    excerpt: "Not sure which printing method to choose? We break down the key differences — cost, quality, fabric compatibility, and the best use case for each.",
    date: "Jan 15, 2025",
    readTime: "5 min",
    color: "bg-cp-green/10 border-cp-green/30",
    accent: "#1A6B3A",
  },
  {
    slug: "how-to-prepare-your-design-for-print",
    category: "Design Tips",
    categoryColor: "bg-blue-600 text-white",
    title: "How to Prepare Your Artwork for Screen Printing",
    excerpt: "Submitting the right file format makes a huge difference. Learn DPI, vector files, colour modes — and how to set up your design for perfect results every time.",
    date: "Jan 8, 2025",
    readTime: "7 min",
    color: "bg-blue-50 border-blue-200",
    accent: "#2563EB",
  },
  {
    slug: "bulk-order-tips-for-businesses",
    category: "Business",
    categoryColor: "bg-amber-500 text-white",
    title: "5 Things to Know Before Placing a Bulk T-Shirt Order in Ghana",
    excerpt: "Ordering branded merch for your team or event? Here are five things every Ghanaian business owner should know before bulk ordering.",
    date: "Dec 28, 2024",
    readTime: "4 min",
    color: "bg-amber-50 border-amber-200",
    accent: "#D97706",
  },
  {
    slug: "plastisol-ink-guide",
    category: "Printing Guide",
    categoryColor: "bg-cp-green text-cream",
    title: "What Is Plastisol Ink? Everything You Need to Know",
    excerpt: "Plastisol ink is the gold standard for screen printing on fabric. We explain what it is, why it's so durable, and why we use premium Antex inks.",
    date: "Dec 20, 2024",
    readTime: "6 min",
    color: "bg-emerald-50 border-emerald-200",
    accent: "#059669",
  },
  {
    slug: "custom-merch-for-events-ghana",
    category: "Inspiration",
    categoryColor: "bg-purple-600 text-white",
    title: "Custom Merch for Events in Ghana: Your Complete Checklist",
    excerpt: "Planning a concert, conference, or product launch in Accra? Custom branded merch is one of the most powerful ways to make your event memorable.",
    date: "Dec 10, 2024",
    readTime: "5 min",
    color: "bg-purple-50 border-purple-200",
    accent: "#7C3AED",
  },
  {
    slug: "care-for-your-printed-garment",
    category: "Tips & Tricks",
    categoryColor: "bg-rose-500 text-white",
    title: "How to Wash Your Custom Printed T-Shirt So It Lasts for Years",
    excerpt: "A great print can last years — if you wash it correctly. Follow these simple care instructions to keep your screen-printed garments vibrant.",
    date: "Nov 28, 2024",
    readTime: "3 min",
    color: "bg-rose-50 border-rose-200",
    accent: "#E11D48",
  },
]

export default function BlogPage() {
  const [hero, ...grid] = posts

  return (
    <main className="min-h-screen bg-cream">
      <Navigation />

      {/* ── Hero ── */}
      <section className="relative bg-ink-black overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_60%,rgba(26,107,58,0.25)_0%,transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
        {/* SVG deco */}
        <svg className="absolute right-0 top-0 h-full w-1/2 opacity-[0.04]" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
          <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="320" fontFamily="serif" fill="#22C55E">B</text>
        </svg>

        <div className="relative mx-auto max-w-6xl px-4 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            {/* Left: title */}
            <div className="lg:w-2/5 shrink-0">
              <span className="font-tag text-2xl text-cp-green-light">our stories</span>
              <h1 className="mt-1 font-heading text-5xl leading-[1.05] text-cream lg:text-6xl">
                The C&amp;P<br />
                <span className="text-cp-green-light">Blog</span>
              </h1>
              <p className="mt-5 text-muted-foreground leading-relaxed max-w-sm">
                Printing guides, design tips, business advice, and inspiration — straight from our print shop in Accra.
              </p>
            </div>

            {/* Right: featured card */}
            <Link href={`/blog/${hero.slug}`} className="group lg:flex-1 w-full">
              <article className={`relative overflow-hidden rounded-3xl border-2 ${hero.color} p-8 lg:p-10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}>
                {/* Big decorative letter */}
                <svg className="absolute -right-4 -bottom-4 h-48 w-48 opacity-10" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="90" fill={hero.accent} />
                </svg>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`font-tag text-lg px-3 py-0.5 rounded-full ${hero.categoryColor}`}>{hero.category}</span>
                    <span className="text-xs text-muted-foreground border border-border rounded-full px-2.5 py-0.5">✦ Featured</span>
                  </div>
                  <h2 className="font-heading text-2xl leading-snug text-foreground group-hover:text-cp-green transition-colors lg:text-3xl">{hero.title}</h2>
                  <p className="mt-3 text-muted-foreground leading-relaxed line-clamp-3">{hero.excerpt}</p>
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{hero.date}</span>
                      <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{hero.readTime}</span>
                    </div>
                    <span className="flex items-center gap-1.5 text-sm font-bold text-cp-green group-hover:gap-2.5 transition-all">
                      Read <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Grid ── */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        {/* Background SVG deco */}
        <svg className="pointer-events-none absolute right-0 top-24 opacity-[0.03] w-80 h-80" viewBox="0 0 300 300">
          <circle cx="150" cy="150" r="140" fill="none" stroke="#1A6B3A" strokeWidth="2"/>
          <circle cx="150" cy="150" r="90" fill="none" stroke="#22C55E" strokeWidth="1"/>
          <circle cx="150" cy="150" r="40" fill="none" stroke="#1A6B3A" strokeWidth="0.5"/>
        </svg>
        <svg className="pointer-events-none absolute left-0 bottom-20 opacity-[0.03] w-64 h-64" viewBox="0 0 200 200">
          <polygon points="100,10 190,60 190,140 100,190 10,140 10,60" fill="none" stroke="#22C55E" strokeWidth="1.5"/>
        </svg>

        <div className="relative mx-auto max-w-6xl px-4 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="font-tag text-xl text-cp-green">more reads</span>
              <h2 className="font-heading text-3xl text-foreground">Latest Articles</h2>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {grid.map((post, i) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <article className={`h-full rounded-2xl border-2 ${post.color} overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col`}>
                  {/* Colour band top */}
                  <div className="relative h-3 w-full" style={{ backgroundColor: post.accent }} />
                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`font-tag text-base px-2.5 py-0.5 rounded-full ${post.categoryColor}`}>{post.category}</span>
                    </div>
                    <h3 className="font-heading text-lg leading-snug text-foreground group-hover:text-cp-green transition-colors flex-1">{post.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">{post.excerpt}</p>
                    <div className="mt-5 flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-cp-green group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
