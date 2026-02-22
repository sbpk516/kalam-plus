import { ThadmHero } from '@/components/sections/thadm/ThadmHero'
import { ThadmAppPreview } from '@/components/sections/thadm/ThadmAppPreview'
import { ThadmFeatures } from '@/components/sections/thadm/ThadmFeatures'
import { ThadmPricing } from '@/components/sections/thadm/ThadmPricing'
import { ThadmFAQ } from '@/components/sections/thadm/ThadmFAQ'
import { ThadmFinalCTA } from '@/components/sections/thadm/ThadmFinalCTA'

export function ThadmPage() {
  return (
    <>
      <ThadmHero />
      <ThadmAppPreview />
      <ThadmFeatures />
      <ThadmPricing />
      <ThadmFAQ />
      <ThadmFinalCTA />
    </>
  )
}
