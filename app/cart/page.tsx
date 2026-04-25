"use client"

import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const initItems = [
  { id: 1, name: "Classic Custom T-Shirt", category: "T-Shirts", img: "/tshirt-man.png", price: 70, qty: 2, size: "L", color: "Black" },
  { id: 2, name: "Love Always Mug", category: "Mugs", img: "/mug-love-always.jpg", price: 45, qty: 1, size: "—", color: "White" },
]

export default function CartPage() {
  const [items, setItems] = useState(initItems)

  function updateQty(id: number, delta: number) {
    setItems(prev => prev.map(it => it.id === id ? { ...it, qty: Math.max(1, it.qty + delta) } : it))
  }
  function remove(id: number) {
    setItems(prev => prev.filter(it => it.id !== id))
  }

  const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0)
  const delivery = 20
  const total = subtotal + delivery

  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="bg-ink-black py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(26,107,58,0.15)_0%,transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <span className="font-tag text-base inline-block rounded-full border border-cp-green/40 bg-cp-green/10 px-4 py-1.5 font-medium text-cp-green-light mb-3">Cart</span>
          <h1 className="text-3xl font-black text-cream">Your Cart</h1>
        </div>
      </section>

      <section className="bg-cream py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4 opacity-30" />
              <p className="font-heading text-xl text-foreground">Your cart is empty</p>
              <p className="text-muted-foreground mt-2">Add some custom products to get started</p>
              <Link href="/shop">
                <Button className="mt-6 bg-cp-green text-cream hover:bg-cp-green-dark">Browse Products</Button>
              </Link>
            </div>
          ) : (
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Items */}
              <div className="lg:col-span-2 space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 rounded-2xl border border-border bg-white p-4 shadow-sm">
                    <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl border border-cp-green/10">
                      <Image src={item.img} alt={item.name} fill className="object-cover object-top" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium uppercase text-cp-green">{item.category}</p>
                      <h3 className="font-black text-foreground">{item.name}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">Size: {item.size} · Color: {item.color}</p>
                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center rounded-xl border border-border overflow-hidden">
                          <button onClick={() => updateQty(item.id, -1)} className="px-3 py-1.5 text-muted-foreground hover:bg-muted">
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="px-4 py-1.5 text-sm font-bold border-x border-border">{item.qty}</span>
                          <button onClick={() => updateQty(item.id, 1)} className="px-3 py-1.5 text-muted-foreground hover:bg-muted">
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <div className="flex items-center gap-3">
                          <p className="font-black text-coral-red">GH₵ {(item.price * item.qty).toFixed(2)}</p>
                          <button onClick={() => remove(item.id)} className="text-muted-foreground hover:text-coral-red transition-colors">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <Link href="/shop">
                  <Button variant="outline" className="w-full border-cp-green text-cp-green hover:bg-cp-green hover:text-cream">
                    Continue Shopping
                  </Button>
                </Link>
              </div>

              {/* Summary */}
              <div>
                <div className="rounded-2xl border border-border bg-white p-6 shadow-sm sticky top-24">
                  <h2 className="text-lg font-black text-foreground mb-5">Order Summary</h2>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Subtotal ({items.reduce((s, it) => s + it.qty, 0)} items)</span>
                      <span>GH₵ {subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Delivery (Accra)</span>
                      <span>GH₵ {delivery}.00</span>
                    </div>
                    <div className="border-t border-border pt-3 flex justify-between font-black text-foreground text-base">
                      <span>Total</span>
                      <span className="text-coral-red">GH₵ {total.toFixed(2)}</span>
                    </div>
                  </div>
                  <Link href="/checkout">
                    <Button className="mt-6 w-full bg-cp-green text-cream hover:bg-cp-green-dark font-bold">
                      Proceed to Checkout <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <a href={`https://wa.me/233546528518?text=I want to order: ${items.map(i => `${i.name} ×${i.qty}`).join(', ')}. Total: GH₵${total}`}
                    target="_blank" rel="noopener noreferrer"
                    className="mt-3 flex items-center justify-center gap-2 w-full rounded-xl bg-whatsapp-green px-4 py-3 text-sm font-bold text-white hover:opacity-90"
                  >
                    Order via WhatsApp
                  </a>
                  <p className="mt-4 text-center text-xs text-muted-foreground">Mobile Money · Bank Transfer · Cash on Delivery</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
