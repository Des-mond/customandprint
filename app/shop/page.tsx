import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { ShopContent } from "@/components/shop/shop-content"
import { Suspense } from "react"

export default function ShopPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      {/* Shop hero bar */}
      <div className="bg-ink-black border-b border-cp-green/20 py-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(26,107,58,0.15)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <span className="font-tag text-base inline-block rounded-full border border-cp-green/40 bg-cp-green/10 px-4 py-1.5 font-medium text-cp-green-light mb-3">Our Catalogue</span>
          <h1 className="font-heading text-3xl text-cream md:text-4xl">Shop Custom Products</h1>
          <p className="mt-2 text-muted-foreground">Browse and customise any product for yourself or your brand</p>
        </div>
      </div>
      <Suspense fallback={<div className="bg-cream py-20 text-center text-muted-foreground">Loading products...</div>}>
        <ShopContent />
      </Suspense>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
