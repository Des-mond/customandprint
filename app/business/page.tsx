import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { BusinessContent } from "@/components/business/business-content"

export const metadata = {
  title: "Screen Printing Supplies | Custom & Print Ghana",
  description: "Professional screen printing inks, frames, squeegees, and accessories. Antex Premium Plastisol Inks available in Ghana.",
}

export default function BusinessPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <BusinessContent />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
