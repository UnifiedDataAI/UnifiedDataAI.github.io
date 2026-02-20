import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

// simple email regex (good enough for frontend)
function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function EarlyAccess() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function submitEarlyAccess(email: string) {
    setLoading(true)
    setError(null)

    try {
      const body = new URLSearchParams({
        email,
        source: "unifieddataai-landing"
      })

      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbwDpEZKnVlFTZAo3Nk-si6HpamLjmnOB12PjeCjwKrO48rGvu0S-UApEBuV1XEbOxZq3g/exec",
        {
          method: "POST",
          body
        }
      )

      if (!res.ok) throw new Error("Request failed")

      setSuccess(true)
      setEmail("")
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="early-access"
      className="py-24 bg-slate-950 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-900/20 via-slate-950 to-slate-950"></div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-6">
          Get Early Access
        </h2>

        <p className="text-lg text-slate-400 mb-10">
          We're onboarding early users and agent builders. Join the waitlist to get your API keys.
        </p>

        {success ? (
          <p className="text-green-400 text-lg font-medium">
             You're on the list! We'll be in touch soon.
          </p>
        ) : (
          <form
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            onSubmit={(e) => {
              e.preventDefault()

              if (!email) {
                setError("Email is required.")
                return
              }

              if (!isValidEmail(email)) {
                setError("Please enter a valid email address.")
                return
              }

              submitEarlyAccess(email)
            }}
          >
            <Input
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setError(null)
              }}
              className="h-12 bg-slate-900/80 border-slate-700 focus:ring-brand-500"
            />

            <Button
              size="lg"
              className="h-12 whitespace-nowrap px-8"
              disabled={loading}
            >
              {loading ? "Requesting..." : "Request Access"}
            </Button>
          </form>
        )}

        {error && (
          <p className="mt-4 text-sm text-red-400">
            {error}
          </p>
        )}

        {!success && !error && (
          <p className="mt-4 text-sm text-slate-500">
            Limited spots available for the beta.
          </p>
        )}
      </div>
    </section>
  )
}
