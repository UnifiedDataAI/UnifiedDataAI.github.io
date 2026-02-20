import { ArrowRight, Database, Bot, Users } from "lucide-react"

export function Explanation() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white ">
            What is UnifiedDataAI?
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            UnifiedDataAI lets you connect your apps once and exposes clean, normalized APIs for AI agents.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            {/* User Apps */}
            <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-lg">
                    <Users className="w-10 h-10 text-brand-400" />
                </div>
                <p className="mt-4 font-medium text-slate-300">User Apps</p>
                <p className="text-sm text-slate-500">Gmail, Slack, etc.</p>
            </div>

            {/* Arrow */}
            <ArrowRight className="w-8 h-8 text-slate-600 rotate-90 md:rotate-0" />

            {/* AgentBridge */}
            <div className="flex flex-col items-center">
                <div className="relative w-32 h-32 rounded-2xl bg-gradient-to-br from-brand-600 to-violet-700 flex items-center justify-center shadow-xl shadow-brand-500/20">
                    <div className="absolute inset-0 bg-white/10 rounded-2xl"></div>
                    <Database className="w-12 h-12 text-white" />
                </div>
                <p className="mt-4 font-bold text-white text-lg">UnifiedDataAI</p>
                <p className="text-sm text-slate-500">Unified API</p>
            </div>

            {/* Arrow */}
            <ArrowRight className="w-8 h-8 text-slate-600 rotate-90 md:rotate-0" />

            {/* AI Agents */}
            <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-lg">
                    <Bot className="w-10 h-10 text-violet-400" />
                </div>
                <p className="mt-4 font-medium text-slate-300">AI Agents</p>
                <p className="text-sm text-slate-500">LLMs & Bots</p>
            </div>
        </div>
      </div>
    </section>
  )
}
