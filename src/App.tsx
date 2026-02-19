import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { Explanation } from "./components/Explanation"
import { Features } from "./components/Features"
import { CodeSection } from "./components/CodeSection"
import { Steps } from "./components/Steps"
import { EarlyAccess } from "./components/EarlyAccess"
import { Footer } from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-50 selection:bg-brand-500/30 selection:text-brand-200">
      <Navbar />
      <main>
        <Hero />
        <Explanation />
        <Features />
        <CodeSection />
        <Steps />
        <EarlyAccess />
      </main>
      <Footer />
    </div>
  )
}

export default App
