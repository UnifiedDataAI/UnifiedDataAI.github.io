import { Share2, Package, FileJson, Cpu, ShieldCheck, TrendingUp } from "lucide-react"
import { Card } from "./ui/card"

const features = [
  {
    icon: Share2,
    title: "Universal Data API",
    description: "Access emails, sheets, docs, calendars, and messages through consistent endpoints.",
  },
  {
    icon: Package,
    title: "Plug-and-Play npm Package",
    description: "Install one npm package. No OAuth headaches. No provider-specific SDKs.",
  },
  {
    icon: FileJson,
    title: "Normalized Schemas",
    description: "Same response shape across Gmail, Outlook, Sheets, Docs, and more.",
  },
  {
    icon: Cpu,
    title: "Agent-First Design",
    description: "Built for deterministic, structured, and predictable agent access.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Connections",
    description: "OAuth-based connections with scoped access. Your data stays yours.",
  },
  {
    icon: TrendingUp,
    title: "Scales with You",
    description: "From hobby agents to production systems. Ready for scale.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything your agent needs
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Stop building integrations. Start building intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-slate-900/40 border-slate-800 hover:border-slate-700 transition-colors">
              <div className="h-12 w-12 rounded-lg bg-brand-500/10 flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-brand-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
