import { motion } from "framer-motion"

const securitySteps = [
  {
    number: "1",
    title: "Least Privilege by Default",
    description: "We request only the minimum scopes required for your agent to function. No broad permissions. No unnecessary access. Every integration is intentionally scoped."
  },
  {
    number: "2",
    title: "Encrypted Token Storage",
    description: "OAuth tokens are encrypted at rest and never exposed to logs or client-side environments. Refresh tokens are handled as sensitive credentials."
  },
  {
    number: "3",
    title: "Strict User Isolation",
    description: "Each user's credentials and data are fully isolated. No cross-tenant access. No shared credential layers."
  },
  {
    number: "4",
    title: "Guardrails & Boundaries",
    description: "Agents operate within defined permission boundaries. No unrestricted actions. Clear constraints on what can be accessed or modified."
  }
]

export function SecuritySection() {
  return (
    <section className="py-32 bg-slate-950 border-y border-slate-800/50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-20 text-center md:text-left"
        >
          <h2 className="text-3xl text-center font-bold tracking-tight text-white mb-6">
            How we safeguard your data
          </h2>
          <p className="mt-4 text-lg text-center  text-slate-400 max-w-2xl mx-auto">
            We take security seriously. Here's how we protect your data:
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto md:mx-0">
          {securitySteps.map((step, i) => (
            <motion.div 
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
              className="flex flex-col md:flex-row gap-6 md:gap-16 mb-16 last:mb-0 group items-start"
            >
              {/* Left Column: Number */}
              <div className="md:w-1/4 shrink-0 font-mono text-6xl md:text-8xl font-bold text-slate-800 transition-colors duration-500 group-hover:text-slate-700 md:text-right">
                0{step.number}
              </div>
              
              {/* Right Column: Content */}
              <div className="md:w-3/4 flex flex-col justify-center pt-2 md:pt-4">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
