"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Minus, Plus, ShoppingBag, Trash2, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"

// Sample cart data
const initialCartItems = [
  {
    id: 1,
    name: "Accra Ghana Tee",
    price: 70,
    quantity: 2,
    color: "Black",
    size: "L",
    image: "👕",
  },
  {
    id: 2,
    name: "Crypto Holder Mug",
    price: 45,
    quantity: 1,
    color: "White",
    size: "Standard",
    image: "☕",
  },
]

export function CartContent() {
  const [cartItems, setCartItems] = useState(initialCartItems)

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    )
  }

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const deliveryFee = subtotal > 200 ? 0 : 20
  const total = subtotal + deliveryFee

  if (cartItems.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-muted">
            <ShoppingBag className="h-12 w-12 text-muted-foreground" />
          </div>
          <h2 className="mt-6 text-2xl font-bold text-foreground">Your cart is empty</h2>
          <p className="mt-2 text-muted-foreground">
            Looks like you {"haven't"} added anything to your cart yet.
          </p>
          <Link href="/shop">
            <Button className="mt-6 bg-cp-green text-ink-black hover:bg-cp-green/90">
              Start Shopping
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold text-foreground">Shopping Cart</h1>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 rounded-2xl border border-border bg-card p-4"
              >
                {/* Product Image */}
                <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-xl bg-cream text-4xl">
                  {item.image}
                </div>

                {/* Product Info */}
                <div className="flex flex-1 flex-col">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-foreground">{item.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.color} / {item.size}
                      </p>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-coral-red/10 hover:text-coral-red"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="mt-auto flex items-center justify-between">
                    {/* Quantity */}
                    <div className="flex items-center rounded-lg border border-border">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="px-3 py-1 text-foreground transition-colors hover:bg-cream"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-10 text-center font-medium text-foreground">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="px-3 py-1 text-foreground transition-colors hover:bg-cream"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    {/* Price */}
                    <p className="text-lg font-bold text-coral-red">
                      GH₵ {(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Continue Shopping */}
          <Link href="/shop">
            <Button variant="outline" className="mt-6 border-foreground text-foreground">
              Continue Shopping
            </Button>
          </Link>
        </div>

        {/* Order Summary */}
        <div>
          <div className="sticky top-24 rounded-2xl border border-border bg-card p-6">
            <h2 className="text-lg font-bold text-foreground">Order Summary</h2>

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium text-foreground">GH₵ {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Delivery</span>
                <span className="font-medium text-foreground">
                  {deliveryFee === 0 ? "FREE" : `GH₵ ${deliveryFee.toFixed(2)}`}
                </span>
              </div>
              {deliveryFee > 0 && (
                <p className="text-xs text-muted-foreground">
                  Free delivery on orders over GH₵ 200
                </p>
              )}
              <div className="border-t border-border pt-4">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-foreground">Total</span>
                  <span className="text-xl font-bold text-coral-red">
                    GH₵ {total.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <Link href="/checkout">
              <Button className="mt-6 w-full bg-cp-green text-ink-black hover:bg-cp-green/90">
                Proceed to Checkout
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

            {/* Delivery Info */}
            <div className="mt-6 flex items-start gap-3 rounded-xl bg-cream p-3">
              <Truck className="mt-0.5 h-5 w-5 text-forest-green" />
              <div>
                <p className="text-sm font-medium text-foreground">Free Accra Delivery</p>
                <p className="text-xs text-muted-foreground">
                  On orders over GH₵ 200
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
