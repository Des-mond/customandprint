import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { StudioContent } from "@/components/studio/studio-content"

export default function StudioPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <StudioContent />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
