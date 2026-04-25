"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Search, SlidersHorizontal, ShoppingCart, X } from "lucide-react"

const allProducts = [
  { id: 1,  name: "Classic Custom T-Shirt",      price: 70,  originalPrice: 90,  category: "t-shirts",   img: "/tshirt-man.png",             badge: "Bestseller" },
  { id: 2,  name: "Women's Sport Tee",           price: 75,  originalPrice: 95,  category: "t-shirts",   img: "/tshirt-woman-outdoor.png",   badge: "" },
  { id: 3,  name: "NYSA Green Tee",              price: 80,  originalPrice: null, category: "t-shirts",  img: "/tshirt-green.png",           badge: "New" },
  { id: 4,  name: "Long Sleeve Sport Shirt",     price: 95,  originalPrice: 120, category: "t-shirts",   img: "/longsleeve.png",             badge: "" },
  { id: 5,  name: "Corporate Business Tee",      price: 85,  originalPrice: null, category: "t-shirts",  img: "/tshirt-businesswoman.png",   badge: "" },
  { id: 6,  name: "Graphic Tee – Floral",        price: 90,  originalPrice: 110, category: "t-shirts",   img: "/tshirt-woman-headphones.png",badge: "" },
  { id: 7,  name: "Premium Green Hoodie",        price: 150, originalPrice: 185, category: "hoodies",    img: "/hoodie-green.png",           badge: "Popular" },
  { id: 8,  name: "Love Always Custom Mug",      price: 45,  originalPrice: 60,  category: "mugs",       img: "/mug-love-always.jpg",        badge: "Gift" },
  { id: 9,  name: "All My Love Mug",             price: 45,  originalPrice: 60,  category: "mugs",       img: "/mug-love-life.jpg",          badge: "Gift" },
  { id: 10, name: "Classic White Mug",           price: 40,  originalPrice: null, category: "mugs",      img: "/mug.png",                    badge: "" },
  { id: 11, name: "Green Trucker Hat",           price: 55,  originalPrice: 70,  category: "hats",       img: "/trucker-hat.png",            badge: "" },
  { id: 12, name: "Classic Green Cap",           price: 50,  originalPrice: null, category: "hats",      img: "/cap-green.png",              badge: "" },
  { id: 13, name: "Canvas Tote Bag",             price: 65,  originalPrice: 80,  category: "tote-bags",  img: "/tote-bag.png",               badge: "Eco" },
  { id: 14, name: "Custom Apron",                price: 90,  originalPrice: null, category: "accessories",img: "/apron.png",                  badge: "" },
  { id: 15, name: "Custom Pillow",               price: 80,  originalPrice: 100, category: "accessories", img: "/pillow.png",                badge: "" },
]

const categories = [
  { id: "all", label: "All Products" },
  { id: "t-shirts", label: "T-Shirts" },
  { id: "hoodies", label: "Hoodies" },
  { id: "mugs", label: "Mugs" },
  { id: "hats", label: "Hats & Caps" },
  { id: "tote-bags", label: "Tote Bags" },
  { id: "accessories", label: "Accessories" },
]

export function ShopContent() {
  const searchParams = useSearchParams()
  const [activeCategory, setActiveCategory] = useState("all")
  const [search, setSearch] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    const cat = searchParams.get("category")
    if (cat) setActiveCategory(cat)
  }, [searchParams])

  const filtered = allProducts.filter((p) => {
    const matchCat = activeCategory === "all" || p.category === activeCategory
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <div className="bg-cream relative overflow-hidden">
      {/* Decorative SVGs */}
      <svg className="pointer-events-none absolute right-0 top-32 opacity-5 w-64 h-64" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="90" fill="none" stroke="#1A6B3A" strokeWidth="1.5"/>
        <circle cx="100" cy="100" r="60" fill="none" stroke="#22C55E" strokeWidth="0.8"/>
        <circle cx="100" cy="100" r="30" fill="none" stroke="#1A6B3A" strokeWidth="0.4"/>
      </svg>
      <svg className="pointer-events-none absolute left-0 bottom-32 opacity-5 w-48 h-48" viewBox="0 0 200 200">
        <polygon points="100,10 190,60 190,140 100,190 10,140 10,60" fill="none" stroke="#22C55E" strokeWidth="1.5"/>
      </svg>
      {/* Sticky filter bar */}
      <div className="sticky top-16 z-30 bg-white border-b border-border shadow-sm">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-3">
          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="relative flex-1 max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input value={search} onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="w-full rounded-xl border border-border bg-cream pl-9 pr-4 py-2.5 text-sm focus:border-cp-green focus:outline-none focus:ring-1 focus:ring-cp-green"
              />
              {search && (
                <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2">
                  <X className="h-3.5 w-3.5 text-muted-foreground" />
                </button>
              )}
            </div>

            {/* Category pills */}
            <div className="hidden md:flex items-center gap-2 overflow-x-auto">
              {categories.map((c) => (
                <button key={c.id} onClick={() => setActiveCategory(c.id)}
                  className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${activeCategory === c.id ? "bg-cp-green text-cream" : "border border-border text-muted-foreground hover:border-cp-green hover:text-cp-green"}`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            {/* Mobile filter toggle */}
            <button onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center gap-2 rounded-xl border border-border px-3 py-2.5 text-sm text-muted-foreground hover:border-cp-green hover:text-cp-green"
            >
              <SlidersHorizontal className="h-4 w-4" /> Filters
            </button>

            <div className="ml-auto text-sm text-muted-foreground whitespace-nowrap">
              {filtered.length} product{filtered.length !== 1 ? "s" : ""}
            </div>
          </div>

          {/* Mobile category pills */}
          {showFilters && (
            <div className="md:hidden flex gap-2 overflow-x-auto mt-3 pb-1">
              {categories.map((c) => (
                <button key={c.id} onClick={() => { setActiveCategory(c.id); setShowFilters(false) }}
                  className={`whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${activeCategory === c.id ? "bg-cp-green text-cream" : "border border-border text-muted-foreground"}`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-10">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <Search className="h-12 w-12 text-muted-foreground mb-4 opacity-40" />
            <p className="text-lg font-bold text-foreground">No products found</p>
            <p className="text-muted-foreground text-sm">Try a different search or category</p>
          </div>
        ) : (
          <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {filtered.map((product, index) => (
              <motion.div key={product.id} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.04 }}>
                <Link href={`/shop/${product.id}`}>
                  <div className="card-3d group overflow-hidden rounded-2xl border border-border bg-white hover:border-cp-green transition-all">
                    <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-cp-green/5 to-transparent">
                      <Image src={product.img} alt={product.name} fill
                        className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                      />
                      {product.badge && (
                        <span className={`absolute top-2 left-2 rounded-full px-2.5 py-0.5 text-xs font-bold text-cream ${product.badge === "Bestseller" ? "bg-cp-green" : product.badge === "New" ? "bg-coral-red" : "bg-cp-green-dark"}`}>
                          {product.badge}
                        </span>
                      )}
                      <div className="absolute inset-0 bg-ink-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="rounded-xl bg-cp-green px-4 py-2 text-sm font-bold text-cream">Customise</span>
                      </div>
                    </div>
                    <div className="p-3">
                      <p className="text-xs font-medium uppercase tracking-wider text-cp-green mb-0.5">{product.category.replace("-", " ")}</p>
                      <h3 className="text-sm font-bold text-foreground group-hover:text-cp-green transition-colors leading-tight line-clamp-2">{product.name}</h3>
                      <div className="mt-2 flex items-center justify-between">
                        <div className="flex items-baseline gap-2">
                          <p className="text-sm font-black text-coral-red">GH₵ {product.price}</p>
                          {product.originalPrice && (
                            <p className="text-xs text-muted-foreground line-through">GH₵ {product.originalPrice}</p>
                          )}
                        </div>
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-cp-green/10 group-hover:bg-cp-green transition-colors">
                          <ShoppingCart className="h-3.5 w-3.5 text-cp-green group-hover:text-cream transition-colors" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
