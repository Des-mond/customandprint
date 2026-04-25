import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { Hero } from "@/components/home/hero"
import { Categories } from "@/components/home/categories"
import { HowItWorks } from "@/components/home/how-it-works"
import { FeaturedProducts } from "@/components/home/featured-products"
import { PrintingMethods } from "@/components/home/printing-methods"
import { BusinessSection } from "@/components/home/business-section"
import { Testimonials } from "@/components/home/testimonials"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Categories />
      <HowItWorks />
      <FeaturedProducts />
      <PrintingMethods />
      <BusinessSection />
      <Testimonials />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
