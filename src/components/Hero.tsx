import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-48 md:pb-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-900/20 via-slate-950 to-slate-950"></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 flex justify-center">
            <Badge variant="outline" className="gap-2 py-1.5 px-3 backdrop-blur-sm border-brand-500/20 bg-brand-500/5 text-brand-200">
                <Sparkles className="h-3.5 w-3.5 text-brand-400" />
                <span className="font-medium">Coming Soon</span>
            </Badge>
        </div>

        <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          One API for <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-violet-500">AI Agents</span> to Access Your Data
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400 md:text-xl">
          Connect Gmail, Sheets, Docs, Slack, and more. Let your agents use them through a single unified API and npm package.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button 
            size="lg" 
            className="h-12 px-8 text-base shadow-brand-500/25 shadow-lg"
            onClick={() => document.getElementById("early-access")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get Early Access
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
         <Button 
  variant="outline" 
  size="lg" 
  className="h-12 px-8 text-base border-slate-700 hover:bg-slate-800"
  onClick={() => window.open("https://calendly.com/abhinavsh/30min", "_blank")}
>
  Talk to Founder
</Button>

        </div>
      </div>
    </section>
  )
}
