import { Hero } from '@/components/sections/Hero'
import { AppShowcase } from '@/components/sections/AppShowcase'
import { FeatureGrid } from '@/components/sections/FeatureGrid'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { VideoDemo } from '@/components/sections/VideoDemo'
import { Pricing } from '@/components/sections/Pricing'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQ } from '@/components/sections/FAQ'
import { FinalCTA } from '@/components/sections/FinalCTA'

export function TranscriptAIPage() {
  return (
    <>
      <Hero />
      <AppShowcase />
      <FeatureGrid />
      <HowItWorks />
      <VideoDemo />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  )
}
