import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { ProductDetail } from "@/components/shop/product-detail"

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return (
    <main className="min-h-screen">
      <Navigation />
      <ProductDetail productId={id} />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
