"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const categories = [
  { id: "t-shirts", name: "T-Shirts", img: "/tshirt-green.png" },
  { id: "hoodies", name: "Hoodies", img: "/hoodie-green.png" },
  { id: "mugs", name: "Mugs", img: "/mug.png" },
  { id: "hats", name: "Hats & Caps", img: "/cap-green.png" },
  { id: "tote-bags", name: "Tote Bags", img: "/tote-bag.png" },
  { id: "accessories", name: "Accessories", img: "/pillow.png" },
]

export function Categories() {
  return (
    <section className="bg-card py-16 lg:py-24 relative overflow-hidden">
      {/* SVG wave top */}
      <svg className="absolute top-0 left-0 w-full" viewBox="0 0 1440 40" preserveAspectRatio="none">
        <path d="M0,40 C360,0 1080,40 1440,10 L1440,0 L0,0 Z" fill="#F8F5EF"/>
      </svg>
      
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 text-center">
          <span className="font-tag text-base inline-block rounded-full bg-cp-green/10 border border-cp-green/20 px-4 py-1.5 font-medium text-cp-green mb-4">
            Our Products
          </span>
          <h2 className="font-heading text-3xl text-foreground md:text-4xl">Shop by Category</h2>
          <p className="mt-3 text-muted-foreground">Choose from our wide range of customizable products</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((cat, index) => (
            <motion.div key={cat.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: index * 0.08 }}
            >
              <Link href={`/shop?category=${cat.id}`}
                className="group card-3d flex flex-col items-center rounded-2xl border border-border bg-cream p-4 transition-all hover:border-cp-green hover:bg-cp-green/5 block"
              >
                <div className="relative h-28 w-full overflow-hidden rounded-xl bg-gradient-to-br from-cp-green/10 to-transparent mb-3">
                  <Image src={cat.img} alt={cat.name} fill className="object-contain group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-sm font-bold text-foreground group-hover:text-cp-green text-center">{cat.name}</h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
