"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ShoppingCart, MessageCircle, Star, ChevronRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const products: Record<string, { name: string; price: number; originalPrice: number | null; category: string; img: string; imgs: string[]; desc: string }> = {
  "1":  { name: "Classic Custom T-Shirt",   price: 70,  originalPrice: 90,  category: "T-Shirts",   img: "/tshirt-man.png",             imgs: ["/tshirt-man.png", "/tshirt-woman-outdoor.png", "/tshirt-green.png"], desc: "Our best-selling custom t-shirt. 100% combed cotton, pre-shrunk fabric that holds prints beautifully. Available in a wide range of colors and sizes." },
  "2":  { name: "Women's Sport Tee",         price: 75,  originalPrice: 95,  category: "T-Shirts",   img: "/tshirt-woman-outdoor.png",   imgs: ["/tshirt-woman-outdoor.png", "/tshirt-woman-headphones.png"], desc: "Lightweight performance fabric ideal for sports and everyday wear. Moisture-wicking and extremely comfortable." },
  "3":  { name: "NYSA Green Tee",            price: 80,  originalPrice: null, category: "T-Shirts",  img: "/tshirt-green.png",           imgs: ["/tshirt-green.png"], desc: "Vibrant green premium tee with crisp print quality. Perfect for events, schools, and team uniforms." },
  "4":  { name: "Long Sleeve Sport Shirt",   price: 95,  originalPrice: 120, category: "T-Shirts",   img: "/longsleeve.png",             imgs: ["/longsleeve.png"], desc: "Full-length sleeves for extra coverage. Great for sports events, corporate uniforms, and branded merch." },
  "5":  { name: "Corporate Business Tee",    price: 85,  originalPrice: null, category: "T-Shirts",  img: "/tshirt-businesswoman.png",   imgs: ["/tshirt-businesswoman.png"], desc: "Smart-casual custom tee perfect for corporate events, conferences, and business gifting." },
  "6":  { name: "Graphic Tee – Floral",      price: 90,  originalPrice: 110, category: "T-Shirts",   img: "/tshirt-woman-headphones.png",imgs: ["/tshirt-woman-headphones.png"], desc: "Bold full-color graphic print t-shirt. Excellent for creative designs, artistic prints, and vibrant artwork." },
  "7":  { name: "Premium Green Hoodie",      price: 150, originalPrice: 185, category: "Hoodies",    img: "/hoodie-green.png",           imgs: ["/hoodie-green.png"], desc: "Thick, premium fleece hoodie with a bold chest print area. Warm, stylish, and perfect for branded corporate or event merchandise." },
  "8":  { name: "Love Always Custom Mug",    price: 45,  originalPrice: 60,  category: "Mugs",       img: "/mug-love-always.jpg",        imgs: ["/mug-love-always.jpg", "/mug-love-life.jpg"], desc: "11oz ceramic mug with full-wrap sublimation printing. Dishwasher-safe and microwave-safe. Perfect personalized gift." },
  "9":  { name: "All My Love Mug",           price: 45,  originalPrice: 60,  category: "Mugs",       img: "/mug-love-life.jpg",          imgs: ["/mug-love-life.jpg", "/mug.png"], desc: "Beautiful floral design mug with full-color sublimation. A wonderful gift for Valentine's Day, birthdays, and anniversaries." },
  "10": { name: "Classic White Mug",         price: 40,  originalPrice: null, category: "Mugs",      img: "/mug.png",                    imgs: ["/mug.png"], desc: "Clean, classic white 11oz ceramic mug. Your design, perfectly printed. The ideal blank canvas for any artwork or photo." },
  "11": { name: "Green Trucker Hat",         price: 55,  originalPrice: 70,  category: "Hats",       img: "/trucker-hat.png",            imgs: ["/trucker-hat.png", "/cap-green.png"], desc: "Mesh-back trucker cap with solid front panel for embroidery or print. Adjustable snapback closure." },
  "12": { name: "Classic Green Cap",         price: 50,  originalPrice: null, category: "Hats",      img: "/cap-green.png",              imgs: ["/cap-green.png", "/trucker-hat.png"], desc: "Classic structured baseball cap. Available in multiple colors with embroidered or printed designs on the front panel." },
  "13": { name: "Canvas Tote Bag",           price: 65,  originalPrice: 80,  category: "Tote Bags",  img: "/tote-bag.png",               imgs: ["/tote-bag.png"], desc: "100% natural cotton canvas tote bag. Sturdy, reusable, and eco-friendly. Perfect for shopping, events, and gifting." },
  "14": { name: "Custom Apron",              price: 90,  originalPrice: null, category: "Accessories",img: "/apron.png",                  imgs: ["/apron.png"], desc: "Professional white apron with large print area. Perfect for restaurants, caterers, chefs, and branded hospitality merchandise." },
  "15": { name: "Custom Pillow",             price: 80,  originalPrice: 100, category: "Accessories", img: "/pillow.png",                imgs: ["/pillow.png"], desc: "Soft square pillow with full-color sublimation print. Makes a wonderful personalized gift for any occasion." },
}

const sizes = ["XS", "S", "M", "L", "XL", "XXL"]
const colors = ["#0A0A0A", "#FFFFFF", "#1A6B3A", "#FF4F4F", "#1e40af", "#9333ea"]

export function ProductDetail({ productId }: { productId: string }) {
  const product = products[productId] || products["1"]
  const [selectedSize, setSelectedSize] = useState("M")
  const [selectedColor, setSelectedColor] = useState(0)
  const [activeImg, setActiveImg] = useState(0)
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  function handleAdd() {
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="bg-cream">
      {/* Breadcrumb */}
      <div className="border-b border-border bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-3 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-cp-green">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href="/shop" className="hover:text-cp-green">Shop</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-foreground font-medium">{product.name}</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-10">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Images */}
          <div>
            <motion.div key={activeImg} initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="relative aspect-square overflow-hidden rounded-3xl border border-cp-green/20 bg-white shadow-lg mb-4"
            >
              <Image src={product.imgs[activeImg]} alt={product.name} fill className="object-cover object-top" />
              <Link href="/studio">
                <div className="absolute bottom-4 right-4 rounded-xl bg-cp-green/90 backdrop-blur-sm px-4 py-2 text-sm font-bold text-cream hover:bg-cp-green transition-colors">
                  Customise This
                </div>
              </Link>
            </motion.div>
            {/* Thumbnails */}
            {product.imgs.length > 1 && (
              <div className="flex gap-3">
                {product.imgs.map((img, i) => (
                  <button key={i} onClick={() => setActiveImg(i)}
                    className={`relative h-18 w-18 overflow-hidden rounded-xl border-2 transition-all ${activeImg === i ? "border-cp-green" : "border-border"}`}
                    style={{ width: 72, height: 72 }}
                  >
                    <Image src={img} alt="" fill className="object-cover object-top" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            <Link href="/shop" className="inline-flex items-center gap-1.5 text-sm text-cp-green hover:text-cp-green-dark mb-4 font-medium">
              <ArrowLeft className="h-4 w-4" /> Back to shop
            </Link>

            <span className="inline-block rounded-full bg-cp-green/10 border border-cp-green/20 px-3 py-1 text-xs font-medium text-cp-green mb-3">{product.category}</span>
            <h1 className="text-3xl font-black text-foreground">{product.name}</h1>

            <div className="mt-2 flex items-center gap-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-cp-green text-cp-green" />)}
              </div>
              <span className="text-sm text-muted-foreground">(24 reviews)</span>
            </div>

            <div className="mt-4 flex items-baseline gap-3">
              <p className="text-3xl font-black text-coral-red">GH₵ {product.price}.00</p>
              {product.originalPrice && (
                <>
                  <p className="text-lg text-muted-foreground line-through">GH₵ {product.originalPrice}.00</p>
                  <span className="rounded-full bg-coral-red/10 px-2.5 py-0.5 text-xs font-bold text-coral-red">
                    Save GH₵ {product.originalPrice - product.price}
                  </span>
                </>
              )}
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{product.desc}</p>

            {/* Size selector (only for apparel) */}
            {["T-Shirts", "Hoodies"].includes(product.category) && (
              <div className="mt-6">
                <p className="text-sm font-bold text-foreground mb-3">Size: <span className="text-cp-green">{selectedSize}</span></p>
                <div className="flex gap-2 flex-wrap">
                  {sizes.map((s) => (
                    <button key={s} onClick={() => setSelectedSize(s)}
                      className={`h-9 w-12 rounded-lg border-2 text-sm font-bold transition-all ${selectedSize === s ? "border-cp-green bg-cp-green text-cream" : "border-border text-muted-foreground hover:border-cp-green hover:text-cp-green"}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color selector */}
            <div className="mt-5">
              <p className="text-sm font-bold text-foreground mb-3">Color</p>
              <div className="flex gap-2">
                {colors.map((c, i) => (
                  <button key={i} onClick={() => setSelectedColor(i)}
                    className={`h-8 w-8 rounded-full transition-all border-2 ${selectedColor === i ? "border-cp-green scale-110" : "border-transparent hover:scale-105"}`}
                    style={{ background: c }}
                  />
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-5 flex items-center gap-4">
              <p className="text-sm font-bold text-foreground">Quantity</p>
              <div className="flex items-center rounded-xl border border-border overflow-hidden">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-4 py-2 text-muted-foreground hover:bg-muted text-lg font-bold">−</button>
                <span className="px-5 py-2 font-bold text-foreground border-x border-border">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="px-4 py-2 text-muted-foreground hover:bg-muted text-lg font-bold">+</button>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" onClick={handleAdd}
                className={`flex-1 font-bold transition-all ${added ? "bg-cp-green-dark" : "bg-cp-green hover:bg-cp-green-dark"} text-cream`}
              >
                {added ? <><Check className="mr-2 h-4 w-4" /> Added!</> : <><ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart</>}
              </Button>
              <a href={`https://wa.me/233546528518?text=I'd like to order: ${product.name} (GH₵ ${product.price})`}
                target="_blank" rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-whatsapp-green px-6 py-3 font-bold text-white hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="h-5 w-5" /> Order via WhatsApp
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[["✓", "Free Delivery", "In Accra"], ["✓", "3–5 Days", "Turnaround"], ["✓", "Premium", "Quality"]].map(([icon, title, sub]) => (
                <div key={title} className="rounded-xl border border-cp-green/20 bg-cp-green/5 p-3 text-center">
                  <span className="text-cp-green font-black text-lg">{icon}</span>
                  <p className="text-xs font-bold text-foreground">{title}</p>
                  <p className="text-xs text-muted-foreground">{sub}</p>
                </div>
              ))}
            </div>

            {/* Studio CTA */}
            <div className="mt-6 rounded-2xl border border-cp-green/30 bg-cp-green/5 p-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-black text-foreground">Want a custom design?</p>
                <p className="text-xs text-muted-foreground">Use our free Design Studio to add your artwork</p>
              </div>
              <Link href="/studio">
                <Button size="sm" className="bg-cp-green text-cream hover:bg-cp-green-dark whitespace-nowrap">Open Studio</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
