import { ArrowDown } from "lucide-react"

const steps = [
    {
        number: "01",
        title: "Connect your tools",
        description: "Link your Google Workspace, Slack, and other apps in a few clicks via our secure dashboard."
    },
    {
        number: "02",
        title: "Install the package",
        description: "Add our lightweight npm package to your agent's codebase."
    },
    {
        number: "03",
        title: "Start building",
        description: "Your agents can now access emails, documents, and messages through a unified API."
    }
]

export function Steps() {
  return (
    <section id="how-it-works" className="py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-16 text-center">
            How it works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>

            {steps.map((step, index) => (
                <div key={step.number} className="relative flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-xl font-bold text-white z-10 mb-6 shadow-xl shadow-brand-900/20">
                        {step.number}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-slate-400 max-w-xs">{step.description}</p>
                    
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
