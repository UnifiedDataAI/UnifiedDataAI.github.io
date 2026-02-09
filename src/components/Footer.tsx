export function Footer() {
  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-brand-500 to-violet-600"></div>
            <span className="text-lg font-bold text-slate-200">UnifiedDataAI</span>
        </div>
        
        <p className="text-slate-500 text-sm">
            The data layer for AI agents
        </p>

        <div className="flex gap-6">
            <a href="#" className="text-sm text-slate-500 hover:text-white transition-colors cursor-not-allowed">Docs</a>
            <a href="#" className="text-sm text-slate-500 hover:text-white transition-colors cursor-not-allowed">GitHub</a>
            <a href="#" className="text-sm text-slate-500 hover:text-white transition-colors cursor-not-allowed">Twitter</a>
            <a href="#" className="text-sm text-slate-500 hover:text-white transition-colors cursor-not-allowed">Contact</a>
        </div>
      </div>
    </footer>
  )
}
