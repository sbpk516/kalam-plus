import { useState, useEffect } from 'react'
import { siteConfig } from '@/data/site'

interface ReleaseInfo {
  version: string
  downloadUrl: string
}

const REPO = 'sbpk516/transcriptai'

const fallback: ReleaseInfo = {
  version: siteConfig.version,
  downloadUrl: siteConfig.downloadUrl,
}

// Module-level cache: single promise shared by all hook instances
let cachedPromise: Promise<ReleaseInfo> | null = null

function fetchLatestRelease(): Promise<ReleaseInfo> {
  if (!cachedPromise) {
    cachedPromise = fetch(`https://api.github.com/repos/${REPO}/releases/latest`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch release')
        return res.json()
      })
      .then((data) => {
        const dmgAsset = data.assets?.find(
          (a: { name: string }) => a.name.endsWith('.dmg')
        )
        if (dmgAsset) {
          return {
            version: data.tag_name,
            downloadUrl: dmgAsset.browser_download_url,
          }
        }
        return fallback
      })
      .catch(() => fallback)
  }
  return cachedPromise
}

export function useGithubRelease(): ReleaseInfo {
  const [release, setRelease] = useState<ReleaseInfo>(fallback)

  useEffect(() => {
    fetchLatestRelease().then(setRelease)
  }, [])

  return release
}
