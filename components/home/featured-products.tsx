"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  { id: 1, name: "Custom Tee – Your Design",  price: 70,  originalPrice: 90,  img: "/tshirt-woman-headphones.png", category: "T-Shirts" },
  { id: 2, name: "Love Mug – Personalized",   price: 45,  originalPrice: 60,  img: "/mug-love-always.jpg",         category: "Mugs" },
  { id: 3, name: "Premium Green Hoodie",       price: 150, originalPrice: 185, img: "/hoodie-green.png",           category: "Hoodies" },
  { id: 4, name: "Corporate T-Shirt",          price: 80,  originalPrice: null, img: "/tshirt-businesswoman.png",  category: "T-Shirts" },
  { id: 5, name: "All My Love Mug",            price: 45,  originalPrice: 60,  img: "/mug-love-life.jpg",          category: "Mugs" },
  { id: 6, name: "Training Sport Tee",         price: 75,  originalPrice: 95,  img: "/tshirt-woman-outdoor.png",   category: "T-Shirts" },
]

export function FeaturedProducts() {
  return (
    <section className="bg-cream py-16 lg:py-24 relative overflow-hidden">
      {/* Decorative SVG */}
      <svg className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 w-72 h-72" viewBox="0 0 200 200">
        <path d="M 10 100 Q 50 10 100 50 Q 150 90 190 40 Q 200 100 150 140 Q 100 180 50 150 Q 10 120 10 100 Z" fill="#1A6B3A"/>
      </svg>

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <span className="font-tag text-base inline-block rounded-full bg-cp-green/10 border border-cp-green/20 px-4 py-1.5 font-medium text-cp-green mb-3">Featured</span>
            <h2 className="font-heading text-3xl text-foreground md:text-4xl">Popular Designs</h2>
            <p className="mt-2 text-muted-foreground">Bestsellers from our community</p>
          </div>
          <Link href="/shop" className="hidden md:block">
            <Button variant="outline" className="border-cp-green text-cp-green hover:bg-cp-green hover:text-cream">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.div key={product.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: index * 0.1 }}
            >
              <Link href={`/shop/${product.id}`}>
                <div className="card-3d group overflow-hidden rounded-2xl border border-border bg-white shadow-sm hover:border-cp-green">
                  <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-cp-green/5 to-transparent">
                    <Image src={product.img} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute right-3 top-3 rounded-full bg-ink-black/70 px-3 py-1 text-xs font-medium text-cream opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                      Customise
                    </div>
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-cp-green">{product.category}</p>
                      <h3 className="mt-1 font-bold text-foreground group-hover:text-cp-green transition-colors">{product.name}</h3>
                      <div className="flex items-baseline gap-2 mt-1">
                        <p className="text-lg font-black text-coral-red">GH₵ {product.price.toFixed(2)}</p>
                        {product.originalPrice && (
                          <p className="text-sm text-muted-foreground line-through">GH₵ {product.originalPrice.toFixed(2)}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cp-green/10 group-hover:bg-cp-green transition-colors">
                      <ShoppingCart className="h-4 w-4 text-cp-green group-hover:text-cream transition-colors" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/shop">
            <Button className="bg-cp-green text-cream hover:bg-cp-green-dark">View All Products <ArrowRight className="ml-2 h-4 w-4" /></Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
