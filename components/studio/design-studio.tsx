"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowLeft,
  Download,
  Image as ImageIcon,
  Layers,
  MousePointer2,
  Paintbrush,
  Redo,
  RotateCcw,
  Save,
  ShoppingCart,
  Square,
  Trash2,
  Type,
  Undo,
  Upload,
  ZoomIn,
  ZoomOut,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  { id: "tshirt", name: "T-Shirt", icon: "👕", price: 70 },
  { id: "hoodie", name: "Hoodie", icon: "🧥", price: 150 },
  { id: "mug", name: "Mug", icon: "☕", price: 45 },
  { id: "cap", name: "Cap", icon: "🧢", price: 55 },
  { id: "tote", name: "Tote Bag", icon: "👜", price: 65 },
]

const colors = [
  { name: "Black", hex: "#0A0A0A" },
  { name: "White", hex: "#FFFFFF" },
  { name: "Navy", hex: "#1e3a5f" },
  { name: "Gray", hex: "#6B7280" },
  { name: "Gold", hex: "var(--cp-green)" },
  { name: "Coral", hex: "#FF4F4F" },
  { name: "Forest", hex: "#1A3D2B" },
]

const templates = [
  { id: 1, name: "Minimalist", icon: "✨", category: "Simple" },
  { id: 2, name: "Sports", icon: "🏀", category: "Athletic" },
  { id: 3, name: "Africa", icon: "🌍", category: "Cultural" },
  { id: 4, name: "Artistic", icon: "🎨", category: "Creative" },
  { id: 5, name: "Business", icon: "💼", category: "Corporate" },
  { id: 6, name: "Music", icon: "🎵", category: "Entertainment" },
]

const tools = [
  { id: "select", icon: MousePointer2, label: "Select" },
  { id: "text", icon: Type, label: "Text" },
  { id: "image", icon: ImageIcon, label: "Image" },
  { id: "shape", icon: Square, label: "Shape" },
  { id: "draw", icon: Paintbrush, label: "Draw" },
]

type DesignElement = {
  id: string
  type: "text" | "image" | "shape"
  content: string
  x: number
  y: number
  width: number
  height: number
  rotation: number
  color: string
  fontSize?: number
}

export function DesignStudio() {
  const [selectedProduct, setSelectedProduct] = useState(products[0])
  const [productColor, setProductColor] = useState(colors[0])
  const [activeView, setActiveView] = useState<"Front" | "Back" | "Sleeve">("Front")
  const [activeTool, setActiveTool] = useState("select")
  const [elements, setElements] = useState<DesignElement[]>([])
  const [selectedElement, setSelectedElement] = useState<string | null>(null)
  const [zoom, setZoom] = useState(100)
  const [rightPanel, setRightPanel] = useState<"templates" | "upload" | "text">("templates")
  
  const canvasRef = useRef<HTMLDivElement>(null)

  const handleAddText = () => {
    const newElement: DesignElement = {
      id: `text-${Date.now()}`,
      type: "text",
      content: "Your Text Here",
      x: 50,
      y: 50,
      width: 150,
      height: 40,
      rotation: 0,
      color: "var(--cp-green)",
      fontSize: 24,
    }
    setElements([...elements, newElement])
    setSelectedElement(newElement.id)
    setActiveTool("select")
  }

  const handleDeleteElement = () => {
    if (selectedElement) {
      setElements(elements.filter(el => el.id !== selectedElement))
      setSelectedElement(null)
    }
  }

  const handleClearCanvas = () => {
    setElements([])
    setSelectedElement(null)
  }

  return (
    <div className="flex h-screen flex-col bg-ink-black">
      {/* Top Bar */}
      <header className="flex h-14 items-center justify-between border-b border-border bg-secondary px-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-cream hover:text-cp-green">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Exit Studio</span>
          </Link>
          <div className="h-6 w-px bg-border" />
          <div className="flex h-8 items-center rounded-lg bg-cp-green px-3 text-sm font-black text-ink-black">
            C&P
          </div>
          <span className="text-sm font-semibold text-cream">Design Studio</span>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            <Undo className="mr-1 h-4 w-4" />
            Undo
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            <Redo className="mr-1 h-4 w-4" />
            Redo
          </Button>
          <div className="h-6 w-px bg-border" />
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            <Download className="mr-1 h-4 w-4" />
            Export
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            <Save className="mr-1 h-4 w-4" />
            Save
          </Button>
          <Button size="sm" className="bg-cp-green text-ink-black hover:bg-cp-green/90">
            <ShoppingCart className="mr-1 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Toolbar */}
        <div className="flex w-16 flex-col items-center gap-2 border-r border-border bg-secondary py-4">
          {tools.map((tool) => (
            <button
              key={tool.id}
              onClick={() => {
                setActiveTool(tool.id)
                if (tool.id === "text") handleAddText()
              }}
              className={`flex h-11 w-11 flex-col items-center justify-center rounded-lg transition-colors ${
                activeTool === tool.id
                  ? "bg-cp-green text-ink-black"
                  : "text-muted-foreground hover:bg-ink-black/50 hover:text-cream"
              }`}
              title={tool.label}
            >
              <tool.icon className="h-5 w-5" />
            </button>
          ))}

          <div className="my-2 h-px w-8 bg-border" />

          <button
            onClick={handleDeleteElement}
            disabled={!selectedElement}
            className="flex h-11 w-11 items-center justify-center rounded-lg text-coral-red transition-colors hover:bg-coral-red/10 disabled:opacity-30"
            title="Delete"
          >
            <Trash2 className="h-5 w-5" />
          </button>

          <button
            onClick={handleClearCanvas}
            className="flex h-11 w-11 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-ink-black/50 hover:text-cream"
            title="Clear All"
          >
            <RotateCcw className="h-5 w-5" />
          </button>
        </div>

        {/* Canvas Area */}
        <div className="relative flex-1 overflow-hidden">
          {/* Zoom Controls */}
          <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-lg bg-secondary/90 p-1">
            <button
              onClick={() => setZoom(Math.max(50, zoom - 10))}
              className="rounded p-1 text-muted-foreground hover:text-cream"
            >
              <ZoomOut className="h-4 w-4" />
            </button>
            <span className="min-w-[3rem] text-center text-xs text-cream">{zoom}%</span>
            <button
              onClick={() => setZoom(Math.min(200, zoom + 10))}
              className="rounded p-1 text-muted-foreground hover:text-cream"
            >
              <ZoomIn className="h-4 w-4" />
            </button>
          </div>

          {/* Canvas */}
          <div className="flex h-full items-center justify-center p-8">
            <motion.div
              ref={canvasRef}
              style={{ transform: `scale(${zoom / 100})` }}
              className="relative"
            >
              {/* Product Preview */}
              <div
                className="relative flex h-[400px] w-[320px] items-center justify-center rounded-2xl border border-dashed border-border/50 transition-colors"
                style={{ backgroundColor: productColor.hex === "#FFFFFF" ? "#f5f5f5" : productColor.hex + "15" }}
              >
                <div 
                  className="text-[120px] drop-shadow-xl"
                  style={{ filter: `drop-shadow(0 0 40px ${productColor.hex}20)` }}
                >
                  {selectedProduct.icon}
                </div>

                {/* Design Area */}
                <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-lg border-2 border-dashed border-cp-green/50 bg-cp-green/5">
                  {elements.length === 0 ? (
                    <div className="flex h-full flex-col items-center justify-center text-center">
                      <Layers className="mb-2 h-6 w-6 text-cp-green/50" />
                      <span className="text-xs text-cp-green/70">Design Area</span>
                    </div>
                  ) : (
                    elements.map((el) => (
                      <motion.div
                        key={el.id}
                        drag
                        dragMomentum={false}
                        onClick={() => setSelectedElement(el.id)}
                        className={`absolute cursor-move ${
                          selectedElement === el.id ? "ring-2 ring-cp-green" : ""
                        }`}
                        style={{
                          left: el.x,
                          top: el.y,
                          color: el.color,
                          fontSize: el.fontSize,
                        }}
                      >
                        {el.type === "text" && (
                          <span className="font-bold whitespace-nowrap">{el.content}</span>
                        )}
                      </motion.div>
                    ))
                  )}
                </div>
              </div>

              {/* View Selector */}
              <div className="absolute -bottom-16 left-1/2 flex -translate-x-1/2 gap-2">
                {(["Front", "Back", "Sleeve"] as const).map((view) => (
                  <button
                    key={view}
                    onClick={() => setActiveView(view)}
                    className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                      activeView === view
                        ? "bg-cp-green text-ink-black"
                        : "bg-secondary text-muted-foreground hover:text-cream"
                    }`}
                  >
                    {view}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex w-80 flex-col border-l border-border bg-secondary">
          {/* Panel Tabs */}
          <div className="flex border-b border-border">
            {[
              { id: "templates", label: "Templates", icon: Layers },
              { id: "upload", label: "Upload", icon: Upload },
              { id: "text", label: "Text", icon: Type },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setRightPanel(tab.id as typeof rightPanel)}
                className={`flex flex-1 items-center justify-center gap-2 py-3 text-sm font-medium transition-colors ${
                  rightPanel === tab.id
                    ? "border-b-2 border-cp-green text-cp-green"
                    : "text-muted-foreground hover:text-cream"
                }`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            <AnimatePresence mode="wait">
              {rightPanel === "templates" && (
                <motion.div
                  key="templates"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <p className="mb-4 text-sm text-muted-foreground">
                    Choose a template to get started
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {templates.map((template) => (
                      <button
                        key={template.id}
                        className="flex flex-col items-center rounded-xl border border-border bg-ink-black p-4 transition-colors hover:border-cp-green"
                      >
                        <span className="text-3xl">{template.icon}</span>
                        <span className="mt-2 text-sm font-medium text-cream">{template.name}</span>
                        <span className="text-xs text-muted-foreground">{template.category}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {rightPanel === "upload" && (
                <motion.div
                  key="upload"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="rounded-xl border-2 border-dashed border-border bg-ink-black p-8 text-center">
                    <Upload className="mx-auto h-10 w-10 text-muted-foreground" />
                    <p className="mt-4 text-sm font-medium text-cream">
                      Drag & drop your artwork
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      PNG, SVG, or PDF up to 10MB
                    </p>
                    <Button className="mt-4 bg-cp-green text-ink-black hover:bg-cp-green/90">
                      Browse Files
                    </Button>
                  </div>
                </motion.div>
              )}

              {rightPanel === "text" && (
                <motion.div
                  key="text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  <div>
                    <label className="mb-2 block text-sm font-medium text-cream">Text Content</label>
                    <input
                      type="text"
                      placeholder="Enter your text"
                      className="w-full rounded-lg border border-border bg-ink-black px-3 py-2 text-cream placeholder:text-muted-foreground focus:border-cp-green focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-cream">Font Size</label>
                    <input
                      type="range"
                      min="12"
                      max="72"
                      defaultValue="24"
                      className="w-full accent-cp-green"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-cream">Text Color</label>
                    <div className="flex flex-wrap gap-2">
                      {colors.map((color) => (
                        <button
                          key={color.name}
                          className="h-8 w-8 rounded-full border-2 border-border hover:border-cp-green"
                          style={{ backgroundColor: color.hex }}
                        />
                      ))}
                    </div>
                  </div>
                  <Button
                    onClick={handleAddText}
                    className="w-full bg-cp-green text-ink-black hover:bg-cp-green/90"
                  >
                    Add Text
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Product & Color Selection */}
          <div className="border-t border-border p-4">
            <div className="mb-4">
              <label className="mb-2 block text-sm font-medium text-cream">Product</label>
              <div className="flex gap-2">
                {products.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => setSelectedProduct(product)}
                    className={`flex h-11 w-11 items-center justify-center rounded-lg text-xl transition-colors ${
                      selectedProduct.id === product.id
                        ? "bg-cp-green"
                        : "bg-ink-black hover:bg-ink-black/80"
                    }`}
                    title={product.name}
                  >
                    {product.icon}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <label className="mb-2 block text-sm font-medium text-cream">Color</label>
              <div className="flex gap-2">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setProductColor(color)}
                    className={`h-8 w-8 rounded-full border-2 transition-transform hover:scale-110 ${
                      productColor.name === color.name
                        ? "border-cp-green"
                        : "border-transparent"
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            <div className="rounded-xl bg-ink-black p-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Estimated Price</p>
                  <p className="text-lg font-bold text-cp-green">
                    GH₵ {selectedProduct.price.toFixed(2)}
                  </p>
                </div>
                <Button className="bg-cp-green text-ink-black hover:bg-cp-green/90">
                  Order Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
