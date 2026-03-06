import { ThadmHero } from '@/components/sections/thadm/ThadmHero'
import { ThadmAppPreview } from '@/components/sections/thadm/ThadmAppPreview'
import { ThadmFeatures } from '@/components/sections/thadm/ThadmFeatures'
import { ThadmPricing } from '@/components/sections/thadm/ThadmPricing'
import { ThadmFAQ } from '@/components/sections/thadm/ThadmFAQ'
import { ThadmFinalCTA } from '@/components/sections/thadm/ThadmFinalCTA'
import {
  ThadmDownloadModal,
  useThadmDownloadModal,
} from '@/components/sections/thadm/ThadmDownloadModal'

export function ThadmPage() {
  const { open, openModal, closeModal } = useThadmDownloadModal()

  return (
    <>
      <ThadmHero onDownloadClick={openModal} />
      <ThadmAppPreview />
      <ThadmFeatures />
      <ThadmPricing onDownloadClick={openModal} />
      <ThadmFAQ />
      <ThadmFinalCTA onDownloadClick={openModal} />
      <ThadmDownloadModal open={open} onClose={closeModal} />
    </>
  )
}
