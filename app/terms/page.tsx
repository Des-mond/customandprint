import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { FileText, AlertTriangle, CheckCircle, MessageCircle, Mail } from "lucide-react"

const sections = [
  {
    title: "Placing Orders",
    items: [
      "By placing an order with Custom & Print Ghana, you confirm that you are at least 18 years old and have the authority to enter into a legally binding agreement.",
      "All orders are confirmed only after design proof approval and receipt of payment (full or agreed deposit).",
      "We reserve the right to refuse any order at our discretion, including orders containing offensive, illegal, or infringing content.",
      "Order details (product, size, quantity, design, colour) cannot be changed after production has started. Please review your proof carefully before approving.",
    ],
  },
  {
    title: "Intellectual Property & Design Rights",
    items: [
      "You are solely responsible for ensuring you own or have the legal right to use any logos, artwork, images, or text included in your design.",
      "By submitting a design, you grant Custom & Print Ghana a limited licence to reproduce the design solely for the purpose of fulfilling your order.",
      "We will not knowingly reproduce copyrighted material, counterfeit brand logos, or hate speech. Orders containing such content will be cancelled without refund.",
      "Designs created by our design team on your behalf remain the intellectual property of Custom & Print Ghana until full payment is received, after which rights transfer to you.",
      "We may display images of completed orders in our portfolio and social media (without disclosing personal client details) unless you request otherwise in writing.",
    ],
  },
  {
    title: "Pricing & Payment",
    items: [
      "All prices displayed are in Ghana Cedis (GH₵) and include VAT where applicable.",
      "Prices are subject to change without notice, but confirmed order quotes are honoured for 7 days.",
      "A deposit of 50% is required to begin production on orders above GH₵ 500. The balance must be paid before delivery or collection.",
      "For standard orders, full payment is required upfront before production begins.",
      "We accept Mobile Money (MTN, Vodafone, AirtelTigo), bank transfer, and cash on collection.",
      "If a cheque or bank transfer is returned, additional bank charges will be passed on to the customer.",
    ],
  },
  {
    title: "Production & Turnaround",
    items: [
      "Production timelines begin only after design proof approval and payment confirmation.",
      "Standard turnaround is 3–5 business days. Rush orders (1–2 days) are subject to production schedule and carry an additional fee.",
      "We are not liable for delays caused by factors outside our control, including courier delays, power outages, or supplier issues.",
      "We will communicate any significant delays to you promptly via WhatsApp.",
    ],
  },
  {
    title: "Quality, Returns & Reprints",
    items: [
      "We take pride in our work and conduct quality checks before every order leaves our shop.",
      "Because all products are custom-made to your specification, we do not accept returns or offer refunds for change of mind.",
      "If there is a printing defect or error caused by us, we will reprint the affected items or issue a refund at no cost to you.",
      "You must inspect your order within 48 hours of delivery/collection and report any defects with photographic evidence.",
      "Defects reported after 48 hours may not be eligible for a reprint or refund.",
      "Colour variation of up to 10% from digital proofs is considered acceptable due to the nature of the screen printing process. This does not constitute a defect.",
    ],
  },
  {
    title: "Limitation of Liability",
    items: [
      "Custom & Print Ghana's total liability for any claim arising from an order shall not exceed the amount paid for that specific order.",
      "We are not liable for indirect, incidental, or consequential damages including lost profits or business opportunities.",
      "We are not responsible for errors in designs approved by the customer, including typos, wrong colour choices, or incorrect sizes.",
    ],
  },
  {
    title: "Governing Law",
    items: [
      "These Terms of Service are governed by the laws of the Republic of Ghana.",
      "Any disputes arising from these terms or our services shall first be attempted to be resolved amicably. If unresolved, disputes shall be subject to the jurisdiction of the courts of Ghana.",
      "These terms were last updated in January 2025 and may be updated periodically. Continued use of our services constitutes acceptance of any updated terms.",
    ],
  },
]

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative bg-ink-black py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_60%,rgba(26,107,58,0.2)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.04)_1px,transparent_1px)] bg-[size:50px_50px]" />
        {/* Decorative SVG — document/scroll */}
        <svg className="absolute right-0 top-0 opacity-10 w-72 h-72" viewBox="0 0 300 300">
          <rect x="60" y="40" width="180" height="220" rx="16" fill="none" stroke="#22C55E" strokeWidth="1.5"/>
          <rect x="75" y="55" width="150" height="190" rx="12" fill="none" stroke="#1A6B3A" strokeWidth="0.5"/>
          <line x1="95" y1="95" x2="205" y2="95" stroke="#22C55E" strokeWidth="1" strokeDasharray="4 3"/>
          <line x1="95" y1="120" x2="205" y2="120" stroke="#22C55E" strokeWidth="1" strokeDasharray="4 3"/>
          <line x1="95" y1="145" x2="180" y2="145" stroke="#22C55E" strokeWidth="1" strokeDasharray="4 3"/>
          <line x1="95" y1="170" x2="205" y2="170" stroke="#22C55E" strokeWidth="1" strokeDasharray="4 3"/>
          <line x1="95" y1="195" x2="160" y2="195" stroke="#22C55E" strokeWidth="1" strokeDasharray="4 3"/>
        </svg>
        <svg className="absolute left-10 bottom-0 opacity-10 w-48 h-48" viewBox="0 0 200 200">
          <polygon points="100,10 190,60 190,140 100,190 10,140 10,60" fill="none" stroke="#22C55E" strokeWidth="1"/>
          <polygon points="100,45 160,78 160,122 100,155 40,122 40,78" fill="none" stroke="#1A6B3A" strokeWidth="0.5"/>
        </svg>

        <div className="relative mx-auto max-w-3xl px-4 lg:px-8 text-center">
          <span className="font-tag text-base inline-block rounded-full border border-cp-green/40 bg-cp-green/10 px-4 py-1.5 font-medium text-cp-green-light mb-6">Legal</span>
          <h1 className="font-heading text-4xl text-cream md:text-5xl">Terms of <span className="text-cp-green-light">Service</span></h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Please read these terms carefully before placing an order with Custom &amp; Print Ghana.</p>
          <p className="mt-3 text-xs text-muted-foreground">Last updated: January 2025 · Custom &amp; Print Ghana</p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-cream py-16 lg:py-24 relative overflow-hidden">
        <svg className="absolute left-0 top-1/2 opacity-5 w-64 h-64 -translate-y-1/2" viewBox="0 0 200 200">
          <path d="M10,100 Q50,10 100,50 Q150,90 190,40 Q200,100 150,140 Q100,180 50,150 Q10,120 10,100 Z" fill="#1A6B3A"/>
        </svg>
        <div className="relative mx-auto max-w-3xl px-4 lg:px-8">
          {/* Intro box */}
          <div className="mb-10 flex gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800 leading-relaxed">
              By using our website or placing an order with Custom &amp; Print Ghana, you agree to be bound by these Terms of Service. 
              If you do not agree, please do not use our services.
            </p>
          </div>

          <div className="space-y-6">
            {sections.map((section, i) => (
              <div key={section.title} className="rounded-2xl border border-border bg-white overflow-hidden">
                <div className="flex items-center gap-4 p-5 border-b border-border bg-cream/30">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cp-green text-cream text-sm font-black flex-shrink-0">{i + 1}</span>
                  <h2 className="font-black text-foreground">{section.title}</h2>
                </div>
                <ul className="p-6 space-y-3">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                      <CheckCircle className="h-4 w-4 text-cp-green/60 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="mt-12 rounded-3xl bg-ink-black p-8 text-center relative overflow-hidden">
            <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 400 200" preserveAspectRatio="none">
              <path d="M0,100 Q100,20 200,100 Q300,180 400,100 L400,200 L0,200 Z" fill="#1A6B3A"/>
            </svg>
            <div className="relative">
              <h3 className="text-xl font-black text-cream mb-2">Questions about these terms?</h3>
              <p className="text-sm text-muted-foreground mb-6">We're happy to clarify anything. Reach us on WhatsApp or email.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="mailto:hello@customandprint.com"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-cp-green text-cp-green-light px-6 py-3 text-sm font-bold hover:bg-cp-green/10 transition-colors"
                >
                  <Mail className="h-4 w-4" /> Email Us
                </a>
                <a href="https://wa.me/233546528518" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-whatsapp-green px-6 py-3 text-sm font-bold text-white hover:opacity-90"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
