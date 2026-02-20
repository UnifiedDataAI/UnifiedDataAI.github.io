import { ArrowDown, CheckCircle2 } from "lucide-react"

const steps = [
    {
        number: "01",
        title: "Connect accounts",
        description: "Integrate once. Users authenticate their Google, Slack, and other apps through our secure OAuth flow."
    },
    {
        number: "02",
        title: "Unified API layer",
        description: "Drop in our npm package. We handle all token management, refreshing, and provider integrations behind the scenes."
    },
    {
        number: "03",
        title: "Scoped & structured access",
        description: "Request specific data from Gmail, Docs, and Sheets. Everything is normalized and strongly typed."
    },
    {
        number: "04",
        title: "Agent executes safely",
        description: "Your AI agent reads context and takes actions securely across platforms with clear permission boundaries."
    }
]

export function Steps() {
  return (
    <section id="how-it-works" className="py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
              How it works
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span className="text-sm">End-to-end encrypted • Audit-friendly architecture</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>

            {steps.map((step, index) => (
                <div key={step.number} className="relative flex flex-col items-center text-center group">
                    <div className="w-16 h-16 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-xl font-bold text-white z-10 mb-6 shadow-xl shadow-brand-900/10 transition-colors group-hover:border-brand-500 group-hover:text-brand-400">
                        {step.number}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-sm text-slate-400 max-w-xs">{step.description}</p>
                    
                    {index < steps.length - 1 && (
                         <ArrowDown className="md:hidden w-6 h-6 text-slate-700 mt-8" />
                    )}
                </div>
            ))}
        </div>
      </div>
    </section>
  )
}
