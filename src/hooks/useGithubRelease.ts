import { useState, useEffect } from 'react'
import { siteConfig } from '@/data/site'

interface ReleaseInfo {
  version: string
  downloadUrl: string // macOS .dmg
  windowsUrl: string // Windows .exe installer
}

const REPO = 'sbpk516/transcriptai'

const fallback: ReleaseInfo = {
  version: siteConfig.version,
  downloadUrl: siteConfig.downloadUrl,
  windowsUrl: siteConfig.windowsUrl,
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
        const assets: { name: string; browser_download_url: string }[] = data.assets ?? []
        const dmg = assets.find((a) => a.name.endsWith('.dmg'))
        // Windows installer: prefer the NSIS Setup .exe (exclude blockmap/portable).
        const exe = assets.find(
          (a) => a.name.toLowerCase().endsWith('.exe') && !a.name.endsWith('.blockmap')
        )
        if (dmg || exe) {
          return {
            version: data.tag_name ?? fallback.version,
            downloadUrl: dmg?.browser_download_url ?? fallback.downloadUrl,
            windowsUrl: exe?.browser_download_url ?? fallback.windowsUrl,
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
