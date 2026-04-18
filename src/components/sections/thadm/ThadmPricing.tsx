import { useState } from 'react'
import { Check, Lock, CreditCard, RotateCcw } from 'lucide-react'
import { cn } from '@/lib/utils'
import { thadmConfig, thadmAnnualFeatures, thadmLifetimeFeatures } from '@/data/thadm'
import { ThadmBuyModal, useThadmBuyModal } from './ThadmBuyModal'

type Plan = 'annual' | 'lifetime'

export function ThadmPricing() {
  const [selectedPlan, setSelectedPlan] = useState<Plan>('lifetime')
  const { open, openModal, closeModal } = useThadmBuyModal()

  return (
    <section id="thadm-pricing" className="relative border-t border-white/[0.06] py-24 lg:py-36">
      <div className="section-container text-center">
        <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.24em] text-gray-500">
          Pricing
        </p>
        <h2 className="text-4xl font-semibold tracking-tight text-white lg:text-[56px] lg:leading-[1.05]">
          Simple pricing.
          <br />
          <span className="bg-gradient-to-b from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
            No surprises.
          </span>
        </h2>
        <p className="mt-5 text-lg text-gray-400">
          Start with a free {thadmConfig.trialDays}-day trial. Then choose the plan that works for
          you.
        </p>
        <p className="mt-2 inline-flex items-center gap-2 text-sm text-emerald-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
          Free {thadmConfig.trialDays}-day trial · No credit card required
        </p>

        {/* Plan toggle */}
        <div className="mt-12 inline-flex rounded-full border border-white/10 bg-white/[0.03] p-1 backdrop-blur-sm">
          {(['annual', 'lifetime'] as const).map((plan) => (
            <button
              key={plan}
              onClick={() => setSelectedPlan(plan)}
              className={cn(
                'rounded-full px-6 py-2 text-sm font-medium transition-all duration-200',
                selectedPlan === plan
                  ? 'bg-white text-background-primary'
                  : 'text-gray-400 hover:text-white'
              )}
            >
              {plan === 'annual' ? 'Annual' : 'Lifetime'}
            </button>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto mt-12 grid max-w-3xl gap-5 text-left md:grid-cols-2">
          {/* Annual */}
          <div
            className={cn(
              'relative overflow-hidden rounded-3xl border p-8 transition-all duration-300',
              selectedPlan === 'annual'
                ? 'border-white/20 bg-white/[0.04]'
                : 'border-white/10 bg-white/[0.02]'
            )}
          >
            <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.24em] text-gray-500">
              Annual
            </p>
            <div className="mb-1 flex items-baseline gap-2">
              <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-5xl font-semibold tracking-tight text-transparent">
                ${thadmConfig.pricing.annual.price}
              </span>
              <span className="text-base text-gray-500">/year</span>
            </div>
            <p className="mb-8 text-sm text-gray-600">
              ~${thadmConfig.pricing.annual.perMonth}/month
            </p>
            <ul className="mb-8 space-y-3">
              {thadmAnnualFeatures.map((feature) => (
                <li key={feature.id} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                    <Check className="h-3 w-3 text-gray-300" strokeWidth={2.5} />
                  </div>
                  <span className="text-sm text-gray-300">{feature.text}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={openModal}
              className="block w-full rounded-full border border-white/15 bg-white/[0.04] py-3 text-center text-sm font-medium text-white transition-all duration-200 hover:bg-white/[0.08]"
            >
              Choose Annual
            </button>
          </div>

          {/* Lifetime */}
          <div
            className={cn(
              'relative overflow-hidden rounded-3xl border p-8 transition-all duration-300',
              selectedPlan === 'lifetime'
                ? 'border-indigo-400/40 bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-transparent shadow-[0_40px_100px_-20px_rgba(99,102,241,0.3)]'
                : 'border-white/10 bg-white/[0.02]'
            )}
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent" />
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-indigo-500/20 blur-3xl" />

            <div className="relative mb-2 flex items-center gap-3">
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-gray-500">
                Lifetime
              </p>
              <span className="rounded-full border border-indigo-400/30 bg-indigo-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-indigo-200">
                Best value
              </span>
            </div>
            <div className="mb-1 flex items-baseline gap-2">
              <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-5xl font-semibold tracking-tight text-transparent">
                ${thadmConfig.pricing.lifetime.price}
              </span>
              <span className="text-base text-gray-500">once</span>
            </div>
            <p className="mb-8 text-sm text-gray-600">Pay once, own forever.</p>
            <ul className="mb-8 space-y-3">
              {thadmLifetimeFeatures.map((feature) => (
                <li key={feature.id} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full border border-indigo-400/30 bg-indigo-500/15">
                    <Check className="h-3 w-3 text-indigo-200" strokeWidth={2.5} />
                  </div>
                  <span className="text-sm text-gray-300">{feature.text}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={openModal}
              className="block w-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 py-3 text-center text-sm font-medium text-white shadow-[0_8px_30px_-8px_rgba(99,102,241,0.6)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-8px_rgba(99,102,241,0.7)]"
            >
              Buy Lifetime — ${thadmConfig.pricing.lifetime.price}
            </button>
          </div>
        </div>

        {/* Trust */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <Lock className="h-3.5 w-3.5" strokeWidth={1.6} />
            <span>Secure payment</span>
          </div>
          <div className="h-3 w-px bg-white/10" aria-hidden />
          <div className="flex items-center gap-2">
            <CreditCard className="h-3.5 w-3.5" strokeWidth={1.6} />
            <span>Stripe powered</span>
          </div>
          <div className="h-3 w-px bg-white/10" aria-hidden />
          <div className="flex items-center gap-2">
            <RotateCcw className="h-3.5 w-3.5" strokeWidth={1.6} />
            <span>30-day refund</span>
          </div>
        </div>
      </div>

      <ThadmBuyModal open={open} onClose={closeModal} />
    </section>
  )
}
