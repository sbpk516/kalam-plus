import { useState, useEffect } from 'react'

interface Voice2TextRelease {
  version: string
  windowsUrl: string // Windows .zip download
  releasesUrl: string // releases page (fallback)
}

const REPO = 'sbpk516/Voice2Text'

const fallback: Voice2TextRelease = {
  version: 'v0.2.0',
  windowsUrl: 'https://github.com/sbpk516/Voice2Text/releases/latest',
  releasesUrl: 'https://github.com/sbpk516/Voice2Text/releases',
}

// Module-level cache shared by all hook instances.
let cachedPromise: Promise<Voice2TextRelease> | null = null

function fetchLatestRelease(): Promise<Voice2TextRelease> {
  if (!cachedPromise) {
    cachedPromise = fetch(`https://api.github.com/repos/${REPO}/releases/latest`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch release')
        return res.json()
      })
      .then((data) => {
        const assets: { name: string; browser_download_url: string }[] = data.assets ?? []
        const zip = assets.find((a) => a.name.toLowerCase().endsWith('.zip'))
        return {
          version: data.tag_name ?? fallback.version,
          windowsUrl: zip?.browser_download_url ?? fallback.windowsUrl,
          releasesUrl: data.html_url ?? fallback.releasesUrl,
        }
      })
      .catch(() => fallback)
  }
  return cachedPromise
}

export function useVoice2TextRelease(): Voice2TextRelease {
  const [release, setRelease] = useState<Voice2TextRelease>(fallback)

  useEffect(() => {
    fetchLatestRelease().then(setRelease)
  }, [])

  return release
}
