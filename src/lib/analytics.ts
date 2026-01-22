declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function trackDownload(location: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'download_click', {
      event_category: 'engagement',
      event_label: location,
    })
  }
}
