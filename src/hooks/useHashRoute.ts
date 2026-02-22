import { useState, useEffect, useCallback } from 'react'

export type AppRoute = 'products' | 'transcriptai' | 'thadm'

const DEFAULT_ROUTE: AppRoute = 'products'

function parseRoute(hash: string): AppRoute {
  const cleaned = hash.replace('#', '').split('?')[0]
  const validRoutes: AppRoute[] = ['products', 'transcriptai', 'thadm']
  if (validRoutes.includes(cleaned as AppRoute)) {
    return cleaned as AppRoute
  }
  // Legacy support: map old section anchors to transcriptai
  const legacyAnchors = ['pricing', 'about', 'features']
  if (legacyAnchors.includes(cleaned)) {
    return 'transcriptai'
  }
  return DEFAULT_ROUTE
}

export function useHashRoute() {
  const [route, setRouteState] = useState<AppRoute>(() =>
    parseRoute(window.location.hash)
  )

  useEffect(() => {
    function handleHashChange() {
      const newRoute = parseRoute(window.location.hash)
      setRouteState(newRoute)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const navigate = useCallback((newRoute: AppRoute) => {
    window.location.hash = newRoute
  }, [])

  return { route, navigate }
}
