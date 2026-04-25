"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Check, Heart, MessageCircle, Minus, Paintbrush, Plus, Share2, ShoppingCart, Star, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProductColor {
  name: string
  hex: string
}

interface Product {
  id: number
  name: string
  price: number
  category: string
  image: string
  description: string
  colors: ProductColor[]
  sizes: string[]
}

const WHATSAPP_NUMBER = "233546528518"

export function ProductDetail({ product }: { product: Product }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[Math.floor(product.sizes.length / 2)])
  const [quantity, setQuantity] = useState(1)
  const [activeView, setActiveView] = useState("Front")
  const [isWishlisted, setIsWishlisted] = useState(false)

  const views = ["Front", "Back", "Left", "Right"]
  const totalPrice = product.price * quantity

  const handleWhatsAppOrder = () => {
    const message = `Hi! I'd like to order:
    
Product: ${product.name}
Color: ${selectedColor.name}
Size: ${selectedSize}
Quantity: ${quantity}
Total: GH₵ ${totalPrice.toFixed(2)}

Please confirm availability.`
    
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
      {/* Breadcrumb */}
      <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/shop" className="flex items-center gap-1 hover:text-cp-green">
          <ArrowLeft className="h-4 w-4" />
          Back to Shop
        </Link>
        <span>/</span>
        <span className="capitalize">{product.category.replace("-", " ")}</span>
        <span>/</span>
        <span className="text-foreground">{product.name}</span>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Product Viewer */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          {/* Main Image */}
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-ink-black to-secondary">
            <div className="flex aspect-square items-center justify-center p-12">
              <motion.div
                key={activeView}
                initial={{ opacity: 0, rotateY: -90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                <div 
                  className="text-[150px] drop-shadow-2xl"
                  style={{ filter: `drop-shadow(0 0 60px ${selectedColor.hex}30)` }}
                >
                  {product.image}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div 
                    className="h-16 w-16 rounded-full opacity-30 blur-xl"
                    style={{ backgroundColor: selectedColor.hex }}
                  />
                </div>
              </motion.div>
            </div>

            {/* View label */}
            <div className="absolute bottom-4 left-4 rounded-lg bg-ink-black/80 px-3 py-1 text-sm text-cream">
              {activeView} View
            </div>

            {/* Controls hint */}
            <div className="absolute bottom-4 right-4 rounded-lg bg-ink-black/80 px-3 py-1 text-xs text-muted-foreground">
              Drag to rotate • Scroll to zoom
            </div>
          </div>

          {/* View Toggles */}
          <div className="mt-4 flex gap-2">
            {views.map((view) => (
              <button
                key={view}
                onClick={() => setActiveView(view)}
                className={`flex-1 rounded-xl border py-3 text-center text-sm font-medium transition-all ${
                  activeView === view
                    ? "border-cp-green bg-cp-green text-ink-black"
                    : "border-border bg-card text-foreground hover:border-cp-green"
                }`}
              >
                {view}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Product Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          {/* Category & Rating */}
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              {product.category.replace("-", " ")}
            </span>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-cp-green text-cp-green" />
              ))}
              <span className="ml-1 text-sm text-muted-foreground">(24 reviews)</span>
            </div>
          </div>

          {/* Name & Price */}
          <h1 className="text-3xl font-bold text-foreground md:text-4xl">
            {product.name}
          </h1>
          <p className="mt-2 text-2xl font-bold text-coral-red">
            GH₵ {product.price.toFixed(2)}
          </p>

          {/* Description */}
          <p className="mt-4 leading-relaxed text-muted-foreground">
            {product.description}
          </p>

          {/* Color Selection */}
          <div className="mt-8">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm font-semibold text-foreground">Color</span>
              <span className="text-sm text-muted-foreground">{selectedColor.name}</span>
            </div>
            <div className="flex gap-3">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color)}
                  className={`relative h-10 w-10 rounded-full border-2 transition-transform hover:scale-110 ${
                    selectedColor.name === color.name
                      ? "border-cp-green"
                      : "border-transparent"
                  }`}
                  style={{ backgroundColor: color.hex }}
                >
                  {selectedColor.name === color.name && (
                    <Check className={`absolute inset-0 m-auto h-5 w-5 ${
                      color.hex === "#FFFFFF" || color.hex === "#F8F5EF" || color.hex === "#f5f0e1"
                        ? "text-ink-black"
                        : "text-cream"
                    }`} />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mt-8">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm font-semibold text-foreground">Size</span>
              <button className="text-sm text-cp-green hover:underline">Size Guide</button>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`rounded-xl border px-4 py-2 text-sm font-medium transition-all ${
                    selectedSize === size
                      ? "border-cp-green bg-cp-green text-ink-black"
                      : "border-border bg-card text-foreground hover:border-cp-green"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-8">
            <span className="mb-3 block text-sm font-semibold text-foreground">Quantity</span>
            <div className="flex items-center gap-4">
              <div className="flex items-center rounded-xl border border-border bg-card">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-foreground transition-colors hover:text-cp-green"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-12 text-center font-semibold text-foreground">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-foreground transition-colors hover:text-cp-green"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <span className="text-lg font-bold text-foreground">
                Total: <span className="text-coral-red">GH₵ {totalPrice.toFixed(2)}</span>
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 space-y-3">
            <div className="flex gap-3">
              <Button
                size="lg"
                className="flex-1 bg-cp-green text-ink-black hover:bg-cp-green/90"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`border-foreground ${isWishlisted ? "bg-coral-red text-cream border-coral-red" : "text-foreground hover:bg-foreground hover:text-card"}`}
              >
                <Heart className={`h-5 w-5 ${isWishlisted ? "fill-current" : ""}`} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-foreground text-foreground hover:bg-foreground hover:text-card"
              >
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            <Button
              size="lg"
              onClick={handleWhatsAppOrder}
              className="w-full bg-whatsapp-green text-cream hover:bg-whatsapp-green/90"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Order via WhatsApp
            </Button>

            <Link href={`/studio?product=${product.id}`}>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-forest-green text-forest-green hover:bg-forest-green hover:text-cream"
              >
                <Paintbrush className="mr-2 h-5 w-5" />
                Customize This Design
              </Button>
            </Link>
          </div>

          {/* Delivery Info */}
          <div className="mt-8 rounded-2xl border border-border bg-card p-4">
            <div className="flex items-start gap-3">
              <Truck className="mt-0.5 h-5 w-5 text-forest-green" />
              <div>
                <p className="font-semibold text-foreground">Free Delivery in Accra</p>
                <p className="text-sm text-muted-foreground">
                  Order now and receive within 3-5 business days. Express delivery available.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Related Products Section could go here */}
    </div>
  )
}
