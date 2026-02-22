import { useHashRoute } from '@/hooks/useHashRoute'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ProductHub } from '@/components/pages/ProductHub'
import { TranscriptAIPage } from '@/components/pages/TranscriptAIPage'
import { ThadmPage } from '@/components/pages/ThadmPage'

export default function App() {
  const { route, navigate } = useHashRoute()

  return (
    <div className="min-h-screen bg-background-primary text-white">
      <Header currentRoute={route} navigate={navigate} />
      <main>
        {route === 'products' && <ProductHub navigate={navigate} />}
        {route === 'transcriptai' && <TranscriptAIPage />}
        {route === 'thadm' && <ThadmPage />}
      </main>
      <Footer navigate={navigate} />
    </div>
  )
}
