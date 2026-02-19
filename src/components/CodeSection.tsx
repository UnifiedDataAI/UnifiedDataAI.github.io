export function CodeSection() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-12 text-center">
            Zero boilerplate
        </h2>
        <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl bg-[#0d1117] shadow-2xl border border-slate-800">
          <div className="flex items-center gap-2 border-b border-slate-800 bg-[#0d1117] px-4 py-3">
            <div className="h-3 w-3 rounded-full bg-red-500/20 md:bg-[#ff5f56]" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/20 md:bg-[#ffbd2e]" />
            <div className="h-3 w-3 rounded-full bg-green-500/20 md:bg-[#27c93f]" />
            <span className="ml-4 text-xs text-slate-500 font-mono">agent.ts</span>
          </div>
          <div className="p-6 overflow-x-auto">
            <pre className="text-sm font-mono leading-relaxed text-slate-50">
              <code>
                <span className="text-violet-400">import</span> <span className="text-yellow-200">{`{ UnifiedDataAI }`}</span> <span className="text-violet-400">from</span> <span className="text-green-300">"unified-data-ai"</span>;{'\n\n'}
                <span className="text-slate-400">// Initialize with your API key</span>{'\n'}
                <span className="text-violet-400">const</span> <span className="text-blue-300">bridge</span> = <span className="text-violet-400">new</span> <span className="text-yellow-200">UnifiedDataAI</span>({`{ apiKey: `}<span className="text-green-300">"YOUR_KEY"</span>{` }`});{'\n\n'}
                <span className="text-slate-400">// Access data across tools uniformly</span>{'\n'}
                <span className="text-violet-400">const</span> <span className="text-blue-300">emails</span> = <span className="text-violet-400">await</span> <span className="text-blue-300">bridge</span>.<span className="text-blue-300">emails</span>.<span className="text-yellow-200">list</span>();{'\n'}
                <span className="text-violet-400">const</span> <span className="text-blue-300">rows</span> = <span className="text-violet-400">await</span> <span className="text-blue-300">bridge</span>.<span className="text-blue-300">sheets</span>.<span className="text-yellow-200">getRows</span>(<span className="text-green-300">"sheet_id"</span>);
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}