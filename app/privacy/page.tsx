import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { Shield, Lock, Eye, UserCheck, Mail, MessageCircle } from "lucide-react"

const sections = [
  {
    icon: Eye,
    title: "Information We Collect",
    content: [
      "When you place an order or create an account, we collect your name, phone number, email address, and delivery address.",
      "We collect design files, artwork, and customisation preferences you submit to us for printing.",
      "We may collect payment confirmation details (but we do not store full card or mobile money numbers).",
      "When you browse our website, we collect standard analytics data such as pages visited, browser type, and device — this is anonymous and used only to improve the site.",
    ],
  },
  {
    icon: Lock,
    title: "How We Use Your Information",
    content: [
      "To process and fulfil your order, including printing, packaging, and delivery coordination.",
      "To communicate with you about your order status via WhatsApp, SMS, or email.",
      "To send promotional messages, new product announcements, or discount offers — only with your consent, and you can opt out at any time.",
      "To improve our products, services, and website experience.",
      "To resolve disputes, troubleshoot issues, and enforce our terms of service.",
    ],
  },
  {
    icon: UserCheck,
    title: "How We Share Your Information",
    content: [
      "We do not sell or rent your personal information to third parties.",
      "We share your delivery address and name with our courier partners solely for the purpose of delivering your order.",
      "We may use third-party tools (such as Google Analytics) for website analytics — these tools receive anonymised data only.",
      "We may disclose your information if required to do so by law or in response to a valid legal request.",
    ],
  },
  {
    icon: Shield,
    title: "Data Security",
    content: [
      "We take reasonable steps to protect your personal information from unauthorised access, use, or disclosure.",
      "All communications via our website are protected using HTTPS encryption.",
      "Access to customer data is restricted to authorised staff only.",
      "We retain your order data for up to 2 years for warranty and dispute purposes, after which it is securely deleted.",
    ],
  },
  {
    icon: Mail,
    title: "Your Rights",
    content: [
      "You have the right to access the personal information we hold about you at any time — simply contact us.",
      "You can request correction of inaccurate data or deletion of your information (subject to legal retention requirements).",
      "You can opt out of marketing messages at any time by replying STOP to any message or contacting us directly.",
      "If you have a complaint about how we handle your data, please contact us first — we'll work to resolve it promptly.",
    ],
  },
  {
    icon: Lock,
    title: "Cookies",
    content: [
      "Our website uses essential cookies to make the site function correctly (e.g. keeping your cart contents).",
      "We use analytics cookies (Google Analytics) to understand how visitors use our site. These are anonymised and do not identify you personally.",
      "You can disable cookies in your browser settings, though this may affect some features of the website.",
    ],
  },
]

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative bg-ink-black py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(26,107,58,0.2)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.04)_1px,transparent_1px)] bg-[size:50px_50px]" />
        {/* SVG shield decoration */}
        <svg className="absolute right-0 top-0 opacity-10 w-72 h-72" viewBox="0 0 300 300">
          <path d="M150,20 L260,70 L260,160 Q260,240 150,280 Q40,240 40,160 L40,70 Z" fill="none" stroke="#22C55E" strokeWidth="1.5"/>
          <path d="M150,55 L230,90 L230,165 Q230,220 150,250 Q70,220 70,165 L70,90 Z" fill="none" stroke="#1A6B3A" strokeWidth="1"/>
          <path d="M120,145 L140,165 L185,120" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <svg className="absolute left-10 bottom-10 opacity-10 w-40 h-40" viewBox="0 0 160 160">
          <circle cx="80" cy="80" r="70" fill="none" stroke="#22C55E" strokeWidth="1" strokeDasharray="5 5"/>
          <circle cx="80" cy="80" r="45" fill="none" stroke="#1A6B3A" strokeWidth="0.5"/>
          <circle cx="80" cy="80" r="8" fill="#22C55E"/>
        </svg>

        <div className="relative mx-auto max-w-3xl px-4 lg:px-8 text-center">
          <span className="font-tag text-base inline-block rounded-full border border-cp-green/40 bg-cp-green/10 px-4 py-1.5 font-medium text-cp-green-light mb-6">Legal</span>
          <h1 className="font-heading text-4xl text-cream md:text-5xl">Privacy <span className="text-cp-green-light">Policy</span></h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Your privacy matters to us. This policy explains what data we collect, how we use it, and how we protect it.</p>
          <p className="mt-3 text-xs text-muted-foreground">Last updated: January 2025 · Custom &amp; Print Ghana</p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-cream py-16 lg:py-24 relative overflow-hidden">
        <svg className="absolute right-0 bottom-0 opacity-5 w-72 h-72" viewBox="0 0 300 300">
          <path d="M150,20 L260,70 L260,160 Q260,240 150,280 Q40,240 40,160 L40,70 Z" fill="#1A6B3A"/>
        </svg>
        <div className="relative mx-auto max-w-3xl px-4 lg:px-8">
          <div className="rounded-2xl border border-cp-green/20 bg-white p-6 mb-10">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Custom &amp; Print Ghana (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your personal information. 
              This Privacy Policy applies to all information collected through our website, WhatsApp, and in-store interactions. 
              By using our services, you agree to the collection and use of information in accordance with this policy.
            </p>
          </div>

          <div className="space-y-8">
            {sections.map((section, i) => (
              <div key={section.title} className="rounded-2xl border border-border bg-white overflow-hidden">
                <div className="flex items-center gap-4 p-6 border-b border-border bg-cream/30">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cp-green/10 flex-shrink-0">
                    <section.icon className="h-5 w-5 text-cp-green" />
                  </div>
                  <h2 className="font-black text-foreground">{i + 1}. {section.title}</h2>
                </div>
                <ul className="p-6 space-y-3">
                  {section.content.map((item, j) => (
                    <li key={j} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cp-green" />
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
              <h3 className="text-xl font-black text-cream mb-2">Questions about your data?</h3>
              <p className="text-sm text-muted-foreground mb-6">Contact us and we'll respond within 48 hours.</p>
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
