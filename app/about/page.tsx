import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Award, Truck, Zap } from "lucide-react"

const stats = [
  { label: "Happy Customers", value: "500+", icon: Users },
  { label: "Products Delivered", value: "5,000+", icon: Truck },
  { label: "Design Templates", value: "100+", icon: Award },
  { label: "Days Turnaround", value: "3–5", icon: Zap },
]

const team = [
  { name: "Kofi Mensah", role: "Founder & CEO", img: "/tshirt-man.png" },
  { name: "Abena Osei", role: "Head of Design", img: "/tshirt-businesswoman.png" },
  { name: "Kwabena Adu", role: "Print Manager", img: "/tshirt-woman-headphones.png" },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative bg-ink-black py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(26,107,58,0.2)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.04)_1px,transparent_1px)] bg-[size:50px_50px]" />
        {/* Decorative SVG */}
        <svg className="absolute right-0 top-0 opacity-10 w-96 h-96" viewBox="0 0 300 300">
          <circle cx="150" cy="150" r="120" fill="none" stroke="#22C55E" strokeWidth="1"/>
          <circle cx="150" cy="150" r="80" fill="none" stroke="#1A6B3A" strokeWidth="0.5"/>
          <path d="M30,150 Q150,30 270,150 Q150,270 30,150 Z" fill="none" stroke="#22C55E" strokeWidth="0.5"/>
        </svg>

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <span className="font-tag text-base inline-block rounded-full border border-cp-green/40 bg-cp-green/10 px-4 py-1.5 font-medium text-cp-green-light mb-6">Our Story</span>
          <h1 className="font-heading text-4xl text-cream md:text-6xl">
            Printing Ghana&apos;s <span className="text-cp-green-light">Best Stories</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
            Born in Accra, built for Ghana. We&apos;re a passionate team of designers and print specialists helping individuals, brands, and businesses tell their story through custom merchandise.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-cp-green py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <s.icon className="h-7 w-7 text-cp-green-light mx-auto mb-2" />
                <p className="font-heading text-3xl text-cream">{s.value}</p>
                <p className="text-sm text-cp-green-light">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="font-tag text-base inline-block rounded-full bg-cp-green/10 border border-cp-green/20 px-4 py-1.5 font-medium text-cp-green mb-4">Our Mission</span>
              <h2 className="font-heading text-3xl text-foreground md:text-4xl">Making Custom Printing <span className="text-cp-green">Accessible to All</span></h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We believe every Ghanaian — from the market trader to the corporate executive — deserves access to high-quality custom merchandise. Our mission is to make professional printing fast, affordable, and easy.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Using the latest screen printing and sublimation technologies, we ensure every order meets international quality standards while celebrating Ghanaian creativity and culture.
              </p>
              <Link href="/contact">
                <Button className="mt-6 bg-cp-green text-cream hover:bg-cp-green-dark">
                  Work With Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-square overflow-hidden rounded-2xl border border-cp-green/20 shadow-lg">
                  <Image src="/tshirt-green.png" alt="Custom tee" fill className="object-cover" />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-cp-green/20 shadow-lg">
                  <Image src="/mug-love-always.jpg" alt="Custom mug" fill className="object-cover" />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-cp-green/20 shadow-lg">
                  <Image src="/screenprint-machine.png" alt="Printing" fill className="object-cover" />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-2xl border border-cp-green/20 shadow-lg">
                  <Image src="/hoodie-green.png" alt="Hoodie" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Printing Methods */}
      <section className="bg-white py-20 relative overflow-hidden">
        <svg className="absolute left-0 bottom-0 opacity-5 w-72 h-72" viewBox="0 0 200 200">
          <path d="M 100 20 L 180 80 L 160 160 L 60 170 L 20 90 Z" fill="#1A6B3A"/>
        </svg>
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-tag text-base inline-block rounded-full bg-cp-green/10 border border-cp-green/20 px-4 py-1.5 font-medium text-cp-green mb-4">Technology</span>
            <h2 className="font-heading text-3xl text-foreground md:text-4xl">How We Print</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              { name: "Screen Printing", img: "/screen-printing.png", desc: "Best for bulk orders. Vibrant, durable inks that last wash after wash. Perfect for t-shirts, hoodies, and bags." },
              { name: "Sublimation Printing", img: "/sublimation.png", desc: "Full-color, photo-quality printing. Ideal for mugs, pillows, sports apparel, and all-over print designs." },
            ].map((m) => (
              <div key={m.name} className="group overflow-hidden rounded-3xl border border-border bg-cream card-3d">
                <div className="relative h-48 bg-ink-black overflow-hidden">
                  <Image src={m.img} alt={m.name} fill className="object-contain p-6 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black text-foreground mb-2">{m.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Video Section */}
      <section className="bg-ink-black py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <svg className="absolute right-0 bottom-0 opacity-10 w-72 h-72" viewBox="0 0 300 300">
          <circle cx="150" cy="150" r="120" fill="none" stroke="#22C55E" strokeWidth="0.8"/>
          <circle cx="150" cy="150" r="80" fill="none" stroke="#1A6B3A" strokeWidth="0.4"/>
        </svg>
        <div className="relative mx-auto max-w-5xl px-4 lg:px-8">
          <div className="text-center mb-10">
            {/* Brand logo top corner */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Image src="/cp-logo.png" alt="Custom & Print" width={64} height={64} className="rounded-full border-2 border-cp-green/40 shadow-xl shadow-cp-green/20" />
                <div className="absolute inset-0 rounded-full animate-ping bg-cp-green/20" style={{ animationDuration: '3s' }} />
              </div>
            </div>
            <span className="font-tag text-base inline-block rounded-full bg-cp-green/10 border border-cp-green/20 px-4 py-1.5 font-medium text-cp-green-light mb-4">See Us In Action</span>
            <h2 className="font-heading text-3xl text-cream md:text-4xl">Watch How We Work</h2>
            <p className="mt-3 text-muted-foreground">Get a behind-the-scenes look at our printing process</p>
          </div>
          <div className="relative rounded-3xl overflow-hidden border border-cp-green/30 shadow-2xl shadow-cp-green/20 aspect-video">
            <iframe
              src="https://www.youtube.com/embed/BOLg7d8LFno?autoplay=1&mute=1&rel=0&modestbranding=1"
              title="Custom and Print Ghana - Behind the Scenes"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cp-green py-16 relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 800 200" preserveAspectRatio="none">
          <path d="M0,100 Q200,20 400,100 Q600,180 800,100 L800,200 L0,200 Z" fill="#0F4024"/>
        </svg>
        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-heading text-3xl text-cream md:text-4xl">Ready to Create Something Amazing?</h2>
          <p className="mt-4 text-cp-green-light">Start designing your custom products today — free delivery in Accra.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop">
              <Button size="lg" className="bg-cream text-cp-green hover:bg-white font-black">Browse Products</Button>
            </Link>
            <Link href="/studio">
              <Button size="lg" variant="outline" className="border-cp-green-light text-cp-green-light hover:bg-cp-green-dark">Open Design Studio</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
