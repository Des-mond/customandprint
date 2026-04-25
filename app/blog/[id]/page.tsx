import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar, Tag, ArrowRight } from "lucide-react"

const posts: Record<string, {
  category: string
  categoryColor: string
  accent: string
  title: string
  author: string
  date: string
  readTime: string
  tags: string[]
  intro: string
  sections: { heading: string; body: string }[]
  cta: { text: string; link: string; label: string }
}> = {
  "screen-printing-vs-sublimation": {
    category: "Printing Guide",
    categoryColor: "bg-cp-green text-cream",
    accent: "#1A6B3A",
    title: "Screen Printing vs Sublimation: Which Is Right for Your Project?",
    author: "Custom & Print Team",
    date: "January 15, 2025",
    readTime: "5 min read",
    tags: ["Screen Printing", "Sublimation", "Printing Guide", "Ghana"],
    intro: "Choosing the right printing method is one of the most important decisions you'll make for your custom project. Both screen printing and sublimation produce great results — but they excel in very different situations. Here's everything you need to know.",
    sections: [
      { heading: "What Is Screen Printing?", body: "Screen printing (also called silk screening) involves pushing ink through a stencilled mesh screen directly onto the fabric. Each colour in your design requires a separate screen. It's the oldest and most trusted method for printing on garments — and for good reason. The plastisol inks used in screen printing are thick, opaque, and cure to a durable finish that lasts the life of the garment." },
      { heading: "What Is Sublimation?", body: "Sublimation printing uses heat to transfer dye directly into the fabric fibres — the ink actually becomes part of the material. This allows for full-colour, photo-quality, edge-to-edge prints. It's perfect for all-over prints, performance wear, and items like mugs, phone cases, and cushions." },
      { heading: "Which Should You Choose?", body: "Choose screen printing if: you're printing on cotton or cotton-blend fabrics, your design uses 1–6 solid colours, you want a bold and durable result, or you're printing in bulk (10+ pieces). Choose sublimation if: your design is photographic or full-colour, you want all-over printing with no white borders, you're printing on 100% polyester or light-coloured fabric, or you're customising mugs, phone cases, or hard items." },
      { heading: "Cost Comparison", body: "Screen printing has a higher setup cost (screen creation per colour) but becomes very cost-effective for bulk orders. A bulk run of 50+ shirts is nearly always cheaper per-piece with screen printing. Sublimation has no setup cost and is great for one-off or small-batch full-colour items, but may cost more per piece in large quantities." },
      { heading: "Our Recommendation", body: "For most branded t-shirts, uniforms, and event merchandise in Ghana — screen printing is the right choice. For photo mugs, all-over printed jerseys, or one-of-a-kind gifts — sublimation is the winner. Still unsure? Send us a message on WhatsApp and we'll advise you personally based on your specific project." },
    ],
    cta: { text: "Ready to start your project?", link: "https://wa.me/233546528518?text=Hi, I need help choosing a printing method", label: "Ask Us on WhatsApp" },
  },
  "how-to-prepare-your-design-for-print": {
    category: "Design Tips",
    categoryColor: "bg-blue-600 text-white",
    accent: "#2563EB",
    title: "How to Prepare Your Artwork for Screen Printing (A Complete Guide)",
    author: "Custom & Print Team",
    date: "January 8, 2025",
    readTime: "7 min read",
    tags: ["Design", "File Formats", "DPI", "Tips"],
    intro: "The quality of your final print is directly tied to the quality of your artwork file. Whether you're designing yourself or working with a designer, follow these guidelines to ensure your print comes out exactly as you envision.",
    sections: [
      { heading: "Use Vector Files When Possible", body: "Vector files (SVG, AI, EPS, PDF) use mathematical paths instead of pixels, which means they scale to any size without losing quality. If you have a logo or simple graphic design, always request a vector version from your designer. These are ideal for screen printing." },
      { heading: "Raster Files: Get the DPI Right", body: "If you're using raster images (PNG, JPEG, PSD), your file must be at least 300 DPI (dots per inch) at the actual print size. A 300 DPI file that is 10×10 cm at screen size may only be 72 DPI when you zoom to the actual print area — always check your DPI at 100% of the intended print size." },
      { heading: "Use the Right Colour Mode", body: "Screen printing uses spot colours — each colour is a separate ink. Use Pantone (PMS) colours or clearly defined CMYK values in your file. Avoid RGB colour mode, as it produces colours that cannot be accurately replicated in physical inks. If you want a specific brand colour, give us the Pantone code." },
      { heading: "Separate Your Colours", body: "Each colour in your design requires a separate screen and separate ink pass. The more colours, the higher the cost. Simplify your design to 1–4 colours where possible without losing impact. Gradients and shadows require halftone printing (a special technique) — discuss this with us before finalising your design." },
      { heading: "Set Up a Safe Zone", body: "Keep your important design elements at least 5mm from the edge of your print area. This accounts for slight positional variation during printing. Backgrounds that extend to the edge of the print boundary are fine, but text or logos should have this margin." },
      { heading: "Check Your Fonts", body: "If your design includes text, either convert your fonts to outlines (Outline Text in Illustrator) or ensure you've shared the font files along with your artwork. Missing fonts cause text to reflow or display incorrectly." },
    ],
    cta: { text: "Have a design ready?", link: "/studio", label: "Upload in Our Design Studio" },
  },
  "bulk-order-tips-for-businesses": {
    category: "Business",
    categoryColor: "bg-amber-500 text-white",
    accent: "#D97706",
    title: "5 Things to Know Before Placing a Bulk T-Shirt Order in Ghana",
    author: "Custom & Print Team",
    date: "December 28, 2024",
    readTime: "4 min read",
    tags: ["Bulk Orders", "Business", "Corporate", "Ghana"],
    intro: "Ordering branded merchandise for your team, school, or business? Bulk custom printing can be incredibly cost-effective — but only if you plan it correctly. Here are the five most important things to know before you place that order.",
    sections: [
      { heading: "1. Lock in Your Design Before Ordering", body: "Changes to your design after production has started are costly or impossible. Make sure your logo is in a high-quality format (preferably vector), all spelling has been proofread by at least two people, and you've approved a physical or digital sample first. We always send a proof before printing." },
      { heading: "2. Collect Size Breakdowns Early", body: "Getting size information from 50 people is harder than it sounds. Start collecting sizes at least 2 weeks before your deadline. Most groups follow a rough bell curve: XS–S (15%), M (25%), L (30%), XL (20%), XXL (10%) — but this varies. We recommend ordering a couple of extras in the most common sizes." },
      { heading: "3. Factor in Lead Time", body: "Bulk orders take longer than single orders. Our standard bulk turnaround is 5–10 business days from design approval and payment. Add extra time for delivery if you're outside Accra. Never leave a bulk order to the week before your event — aim for at least 3 weeks' lead time." },
      { heading: "4. Understand the Pricing Structure", body: "Bulk printing isn't just a straight quantity discount. Pricing depends on: number of print colours (each colour is a separate screen), print locations (chest only vs chest + back), garment quality, and whether you supply garments or we source them. Get a detailed quote upfront and confirm exactly what's included." },
      { heading: "5. Request a Sample Before Full Production", body: "For orders of 20+ pieces, always request a sample print first. This lets you check colour accuracy, print placement, and garment quality before we commit to the full run. The sample cost is usually credited towards your final order. This single step prevents the most expensive mistakes in bulk printing." },
    ],
    cta: { text: "Ready to get a bulk quote?", link: "https://wa.me/233546528518?text=Hi, I need a bulk order quote", label: "Get a Quote on WhatsApp" },
  },
  "plastisol-ink-guide": {
    category: "Printing Guide",
    categoryColor: "bg-cp-green text-cream",
    accent: "#059669",
    title: "What Is Plastisol Ink? Everything You Need to Know",
    author: "Custom & Print Team",
    date: "December 20, 2024",
    readTime: "6 min read",
    tags: ["Plastisol Ink", "Screen Printing", "Quality", "Antex"],
    intro: "If you've ever worn a custom-printed t-shirt that still looked great after 100 washes, chances are it was printed with plastisol ink. Here's everything you need to know about this remarkable material — and why we use it exclusively for all our garment printing.",
    sections: [
      { heading: "What Is Plastisol Ink?", body: "Plastisol is a PVC-based ink that remains liquid at room temperature and only solidifies when exposed to high heat (typically 160–165°C). It sits on top of the fabric rather than soaking in, creating a thick, opaque, and highly durable layer of colour. Unlike water-based inks that can fade with washing, properly cured plastisol prints remain vivid for the life of the garment." },
      { heading: "Why Is It the Industry Standard?", body: "Plastisol dominates the screen printing industry for several reasons: it doesn't dry in the screen (making it ideal for production runs), it's highly opaque (great for printing on dark fabrics), it's extremely durable when cured correctly, and it's available in a huge range of colours and effects — including metallic, shimmer, high-density, and puff finishes." },
      { heading: "The Curing Process", body: "After printing, each garment must pass through a belt dryer or be flash-cured with a heat source. The ink must reach a consistent temperature of around 160°C throughout to properly cure. Under-cured prints will crack and wash out. Over-cured prints can scorch the fabric. Our team uses calibrated equipment and checks cure temperature on every run." },
      { heading: "The Antex Range We Use", body: "We exclusively use Antex Premium Plastisol Inks, which are distributed in Ghana by Custom & Print Ghana. The Antex range includes standard colours (Black, White, Red, Blue, Green, Yellow, and more), specialty effects (Shimmer Gold, Shimmer Silver, Metallic Effect), and texture inks (High Density for a 3D raised effect, Puff ink for a soft raised texture). These inks are formulated for our climate and produce consistent, vibrant results on both light and dark fabrics." },
      { heading: "Is It Safe?", body: "Modern plastisol inks like those in the Antex range are PVC-based but are formulated to be phthalate-free and compliant with international safety standards. They are safe for all regular clothing items. If you have specific compliance requirements (e.g. for children's clothing exports), please discuss this with us at the time of ordering." },
    ],
    cta: { text: "Want to see Antex inks in action?", link: "/business", label: "Browse Our Ink Range" },
  },
  "custom-merch-for-events-ghana": {
    category: "Inspiration",
    categoryColor: "bg-purple-600 text-white",
    accent: "#7C3AED",
    title: "Custom Merch for Events in Ghana: Your Complete Checklist",
    author: "Custom & Print Team",
    date: "December 10, 2024",
    readTime: "5 min read",
    tags: ["Events", "Merchandise", "Ghana", "Planning"],
    intro: "A well-executed merchandise strategy can make your event in Ghana unforgettable. Whether you're organising a corporate conference, a university graduation, a music concert, or a brand activation — here's your complete custom merch checklist.",
    sections: [
      { heading: "Start Planning 4–6 Weeks Out", body: "Great merch takes time. Design approval, sample review, production, and delivery all need buffer time. The worst mistakes happen when orders are rushed. Start your merch planning at least a month before your event and give yourself room to catch errors." },
      { heading: "Define Your Merch Goals", body: "Ask yourself: Is this merch for guests (gifting) or for sale (revenue)? Should it feel premium or casual? Will it be used at the event and kept forever, or is it purely promotional? Your answers drive every other decision — from garment quality to design complexity." },
      { heading: "Choose the Right Products", body: "For corporate conferences: branded polo shirts, notebooks, and tote bags. For music events: t-shirts (especially black) and caps. For university graduations: hoodies and mugs. For brand activations: t-shirts, face caps, and phone cases. We can advise on the best products for your specific event type — just ask." },
      { heading: "Get Your Sizing Right", body: "Order a realistic size distribution based on your audience. For a mixed corporate crowd: more M, L, and XL. For a university event: more S and M. Always order 10–15% extra units as a buffer for last-minute additions, damaged items, or staff. You'd rather have extras than run short." },
      { heading: "Brief Your Designer Well", body: "Your merch design should include your event name and date, a strong central graphic or logo, and ideally a tagline or theme. Keep it timeless enough that people wear it again after the event. Designs that feel like they could be sold in a store get worn long after the event is over." },
      { heading: "Plan Your Distribution", body: "For gifting: pre-pack by size in labelled bags before the event. For sale: set up a dedicated merch table with clear pricing and multiple payment options (MoMo is essential in Ghana). Have enough change and spare packaging. Assign at least one dedicated merch staff member." },
    ],
    cta: { text: "Planning an event?", link: "https://wa.me/233546528518?text=Hi, I'm planning an event and need custom merch", label: "Talk to Us on WhatsApp" },
  },
  "care-for-your-printed-garment": {
    category: "Tips & Tricks",
    categoryColor: "bg-rose-500 text-white",
    accent: "#E11D48",
    title: "How to Wash Your Custom Printed T-Shirt So It Lasts for Years",
    author: "Custom & Print Team",
    date: "November 28, 2024",
    readTime: "3 min read",
    tags: ["Care", "Washing", "Tips", "Durability"],
    intro: "A screen-printed t-shirt, when properly cured and properly washed, can look great for years. But improper washing is the number one cause of premature print fading and cracking. Follow these simple guidelines to get the most out of your custom garments.",
    sections: [
      { heading: "Always Wash Inside Out", body: "Turning your garment inside out before washing protects the print from direct friction with other clothes and the drum of the washing machine. This single habit alone can significantly extend the life of your print. Make it automatic — inside out, every time." },
      { heading: "Use Cold Water", body: "Hot water weakens the bond between the plastisol ink and the fabric over time. Always wash your printed garments on a cold or warm cycle (max 30°C). Cold water washing also saves energy and is gentler on the fabric itself." },
      { heading: "Gentle Cycle, Mild Detergent", body: "Use a mild, non-bleach detergent and select the gentle or delicate cycle. Avoid fabric softeners on printed areas — they can break down the ink over time. Never use bleach on printed garments, as it will destroy the print and damage the fabric." },
      { heading: "Don't Tumble Dry", body: "The high heat of a tumble dryer can cause plastisol prints to crack and peel. Air dry your printed garments flat or on a hanger in the shade. If you must use a dryer, use the lowest possible heat setting for the shortest time needed." },
      { heading: "Iron Carefully", body: "If ironing is necessary, always iron the garment inside out with a cloth between the iron and the fabric. Never iron directly on top of the print — the heat will melt or scorch the ink. For stubborn wrinkles, use a steamer held a few centimetres away from the fabric." },
      { heading: "Storage Tips", body: "Store printed garments folded (not hung) to avoid stress on the print over time. Hanging garments by the shoulders for extended periods can stretch the fabric and crack the ink around shoulder seams. Store in a cool, dry place away from prolonged direct sunlight." },
    ],
    cta: { text: "Want a print that stands the test of time?", link: "/shop", label: "Shop Our Custom Products" },
  },
}

const relatedPosts = [
  { slug: "screen-printing-vs-sublimation", title: "Screen Printing vs Sublimation", category: "Printing Guide", categoryColor: "bg-cp-green text-cream" },
  { slug: "how-to-prepare-your-design-for-print", title: "How to Prepare Your Artwork for Print", category: "Design Tips", categoryColor: "bg-blue-600 text-white" },
  { slug: "bulk-order-tips-for-businesses", title: "5 Tips for Bulk Orders in Ghana", category: "Business", categoryColor: "bg-amber-500 text-white" },
]

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const post = posts[id]

  if (!post) {
    return (
      <main className="min-h-screen bg-cream">
        <Navigation />
        <div className="flex flex-col items-center justify-center py-40 text-center px-4">
          <span className="font-tag text-3xl text-cp-green mb-2">oops!</span>
          <h1 className="font-heading text-4xl text-foreground mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">This article doesn't exist or may have moved.</p>
          <Link href="/blog" className="inline-flex items-center gap-2 rounded-xl bg-cp-green px-6 py-3 text-sm font-bold text-cream hover:opacity-90">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
        </div>
        <Footer />
        <WhatsAppButton />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-cream">
      <Navigation />

      {/* ── Hero banner ── */}
      <section className="relative bg-ink-black overflow-hidden">
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at 30% 60%, ${post.accent}33 0%, transparent 60%)` }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
        {/* Huge decorative initial letter */}
        <svg className="absolute right-0 top-0 h-full w-96 opacity-[0.04]" viewBox="0 0 400 300" preserveAspectRatio="xMaxYMid slice">
          <text x="100%" y="60%" dominantBaseline="middle" textAnchor="end" fontSize="280" fontFamily="serif" fill={post.accent}>{post.title[0]}</text>
        </svg>

        <div className="relative mx-auto max-w-3xl px-4 py-16 lg:px-8 lg:py-24">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-cp-green-light hover:text-cream transition-colors mb-8 group">
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-5">
            <span className={`font-tag text-lg px-3 py-0.5 rounded-full ${post.categoryColor}`}>{post.category}</span>
          </div>
          <h1 className="font-heading text-3xl leading-tight text-cream md:text-4xl lg:text-5xl">{post.title}</h1>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />{post.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />{post.readTime}</span>
            <span className="text-cp-green-light font-medium">By {post.author}</span>
          </div>
        </div>
      </section>

      {/* ── Article body ── */}
      <section className="relative py-12 lg:py-20 overflow-hidden">
        {/* Side deco */}
        <svg className="pointer-events-none absolute right-0 top-20 opacity-[0.04] w-64 h-64" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="90" fill="none" stroke="#1A6B3A" strokeWidth="2"/>
          <circle cx="100" cy="100" r="55" fill="none" stroke="#22C55E" strokeWidth="1"/>
        </svg>
        <svg className="pointer-events-none absolute left-0 bottom-20 opacity-[0.04] w-48 h-48" viewBox="0 0 200 200">
          <polygon points="100,10 190,60 190,140 100,190 10,140 10,60" fill="none" stroke="#22C55E" strokeWidth="1.5"/>
        </svg>

        <div className="relative mx-auto max-w-3xl px-4 lg:px-8">
          {/* Intro */}
          <p className="text-lg leading-relaxed text-muted-foreground border-l-4 border-cp-green pl-5 mb-12 italic font-tag text-xl">
            {post.intro}
          </p>

          {/* Sections */}
          <div className="space-y-10">
            {post.sections.map((section, i) => (
              <div key={i} className="group">
                <div className="flex items-start gap-4 mb-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cp-green text-cream text-xs font-black mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-heading text-xl text-foreground leading-tight">{section.heading}</h2>
                </div>
                <p className="ml-12 text-muted-foreground leading-relaxed">{section.body}</p>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-12 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="font-tag text-base flex items-center gap-1.5 rounded-full border border-cp-green/30 bg-cp-green/5 px-3 py-0.5 text-cp-green">
                <Tag className="h-3 w-3" />{tag}
              </span>
            ))}
          </div>

          {/* CTA card */}
          <div className="mt-12 rounded-3xl bg-ink-black p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at 50% 100%, ${post.accent}22, transparent 70%)` }} />
            <div className="relative">
              <span className="font-tag text-2xl text-cp-green-light">{post.cta.text}</span>
              <div className="mt-4">
                {post.cta.link.startsWith("http") ? (
                  <a href={post.cta.link} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-cp-green px-7 py-3.5 text-sm font-bold text-cream hover:opacity-90 transition-opacity"
                  >
                    {post.cta.label} <ArrowRight className="h-4 w-4" />
                  </a>
                ) : (
                  <Link href={post.cta.link}
                    className="inline-flex items-center gap-2 rounded-xl bg-cp-green px-7 py-3.5 text-sm font-bold text-cream hover:opacity-90 transition-opacity"
                  >
                    {post.cta.label} <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related posts ── */}
      <section className="border-t border-border bg-white py-14">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="mb-8">
            <span className="font-tag text-xl text-cp-green">keep reading</span>
            <h3 className="font-heading text-2xl text-foreground">More Articles</h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {relatedPosts.filter(r => r.slug !== id).slice(0, 3).map((r) => (
              <Link key={r.slug} href={`/blog/${r.slug}`}
                className="group rounded-2xl border border-border bg-cream p-5 hover:border-cp-green hover:shadow-md transition-all"
              >
                <span className={`font-tag text-sm px-2.5 py-0.5 rounded-full ${r.categoryColor}`}>{r.category}</span>
                <p className="mt-3 font-heading text-sm text-foreground group-hover:text-cp-green transition-colors leading-snug">{r.title}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs text-cp-green font-medium group-hover:gap-2 transition-all">
                  Read <ArrowRight className="h-3 w-3" />
                </span>
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
