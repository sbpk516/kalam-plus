import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { AppShowcase } from '@/components/sections/AppShowcase'
import { FeatureGrid } from '@/components/sections/FeatureGrid'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { VideoDemo } from '@/components/sections/VideoDemo'
import { Pricing } from '@/components/sections/Pricing'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQ } from '@/components/sections/FAQ'
import { FinalCTA } from '@/components/sections/FinalCTA'

export default function App() {
  return (
    <div className="min-h-screen bg-background-primary text-white">
      <Header />
      <main>
        <Hero />
        <AppShowcase />
        <FeatureGrid />
        <HowItWorks />
        <VideoDemo />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
