import { useState } from 'react'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { thadmConfig, thadmAnnualFeatures, thadmLifetimeFeatures } from '@/data/thadm'

type Plan = 'annual' | 'lifetime'

export function ThadmPricing() {
  const [selectedPlan, setSelectedPlan] = useState<Plan>('lifetime')

  return (
    <section id="thadm-pricing" className="section-container section-padding text-center">
      <h2 className="mb-3 text-3xl font-bold tracking-tight text-white lg:text-4xl">
        Simple pricing.{' '}
        <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-purple-300 bg-clip-text text-transparent">
          No surprises.
        </span>
      </h2>
      <p className="mb-3 text-gray-400">
        Start with a free {thadmConfig.trialDays}-day trial. Then choose the plan that works for
        you.
      </p>
      <p className="mb-10 text-sm font-medium text-green-400">
        ✓ Free {thadmConfig.trialDays}-day trial · No credit card required
      </p>

      {/* Plan toggle */}
      <div className="mb-10 inline-flex rounded-xl border border-white/10 bg-background-secondary p-1">
        {(['annual', 'lifetime'] as const).map((plan) => (
          <button
            key={plan}
            onClick={() => setSelectedPlan(plan)}
            className={cn(
              'rounded-lg px-7 py-2.5 text-sm font-semibold transition-all',
              selectedPlan === plan
                ? 'bg-indigo-500/15 text-indigo-300'
                : 'text-gray-500 hover:text-gray-300'
            )}
          >
            {plan === 'annual' ? 'Annual' : 'Lifetime ✨'}
          </button>
        ))}
      </div>

      {/* Pricing Cards */}
      <div className="mx-auto grid max-w-[650px] gap-6 md:grid-cols-2">
        {/* Annual Card */}
        <div
          className={cn(
            'rounded-2xl border bg-background-secondary p-8 text-left transition-all duration-300',
            selectedPlan === 'annual' ? 'border-indigo-500/40' : 'border-white/10'
          )}
        >
          <p className="mb-2 text-sm font-medium text-gray-400">Annual</p>
          <div className="mb-1 flex items-baseline gap-1">
            <span className="text-5xl font-bold text-white">
              ${thadmConfig.pricing.annual.price}
            </span>
            <span className="text-gray-400">/year</span>
          </div>
          <p className="mb-6 text-sm text-gray-600">
            ~${thadmConfig.pricing.annual.perMonth}/month
          </p>
          <div className="space-y-3">
            {thadmAnnualFeatures.map((feature) => (
              <div key={feature.id} className="flex items-center gap-3">
                <Check className="h-4 w-4 flex-shrink-0 text-green-400" />
                <span className="text-sm text-gray-400">{feature.text}</span>
              </div>
            ))}
          </div>
          <button
            className="mt-6 w-full rounded-xl border border-indigo-500/30 bg-indigo-500/[0.08] py-3 text-[15px] font-semibold text-indigo-300 transition-all hover:bg-indigo-500/[0.15]"
          >
            Choose Annual
          </button>
        </div>

        {/* Lifetime Card */}
        <div
          className={cn(
            'relative rounded-2xl border bg-background-secondary p-8 text-left transition-all duration-300',
            selectedPlan === 'lifetime'
              ? 'border-indigo-500/50 shadow-[0_0_40px_rgba(99,102,241,0.1)]'
              : 'border-white/10'
          )}
        >
          {/* Top accent bar */}
          <div className="absolute left-0 right-0 top-[-1px] h-[3px] rounded-t-2xl bg-gradient-to-r from-indigo-500 to-purple-500" />

          <div className="mb-2 flex items-center gap-2">
            <p className="text-sm font-medium text-gray-400">Lifetime</p>
            <span className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-2.5 py-0.5 text-[10px] font-semibold text-white">
              BEST VALUE
            </span>
          </div>
          <div className="mb-1 flex items-baseline gap-1">
            <span className="text-5xl font-bold text-white">
              ${thadmConfig.pricing.lifetime.price}
            </span>
            <span className="text-gray-400">once</span>
          </div>
          <p className="mb-6 text-sm text-gray-600">Pay once, own forever</p>
          <div className="space-y-3">
            {thadmLifetimeFeatures.map((feature) => (
              <div key={feature.id} className="flex items-center gap-3">
                <Check className="h-4 w-4 flex-shrink-0 text-green-400" />
                <span className="text-sm text-gray-400">{feature.text}</span>
              </div>
            ))}
          </div>
          <button
            className="mt-6 w-full rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 py-3 text-[15px] font-semibold text-white shadow-[0_4px_20px_rgba(99,102,241,0.3)] transition-all hover:shadow-[0_8px_30px_rgba(99,102,241,0.4)]"
          >
            Buy Lifetime — ${thadmConfig.pricing.lifetime.price}
          </button>
        </div>
      </div>

      {/* Trust badges */}
      <div className="mt-10 flex items-center justify-center gap-8">
        {['🔒 Secure Payment', '💳 Stripe Powered', '↩️ 30-day Refund'].map(
          (badge) => (
            <span key={badge} className="text-sm text-gray-600">
              {badge}
            </span>
          )
        )}
      </div>
    </section>
  )
}
