import { useState, useEffect } from 'react'

const REPO = 'sbpk516/thadm'
const RELEASES_URL = `https://github.com/${REPO}/releases`

interface ThadmRelease {
  version: string
  macArmUrl: string
  macIntelUrl: string
}

const fallback: ThadmRelease = {
  version: '',
  macArmUrl: RELEASES_URL,
  macIntelUrl: RELEASES_URL,
}

let cachedPromise: Promise<ThadmRelease> | null = null

function fetchLatestRelease(): Promise<ThadmRelease> {
  if (!cachedPromise) {
    cachedPromise = fetch(`https://api.github.com/repos/${REPO}/releases/latest`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch release')
        return res.json()
      })
      .then((data) => {
        const assets: { name: string; browser_download_url: string }[] =
          data.assets ?? []
        const arm =
          assets.find((a) => a.name.includes('aarch64') && a.name.endsWith('.dmg')) ??
          assets.find((a) => a.name.includes('aarch64'))
        const intel =
          assets.find((a) => a.name.includes('x64') && a.name.endsWith('.dmg')) ??
          assets.find((a) => a.name.includes('x64'))
        return {
          version: data.tag_name ?? '',
          macArmUrl: arm?.browser_download_url ?? RELEASES_URL,
          macIntelUrl: intel?.browser_download_url ?? RELEASES_URL,
        }
      })
      .catch(() => fallback)
  }
  return cachedPromise
}

export function useThadmRelease(): ThadmRelease {
  const [release, setRelease] = useState<ThadmRelease>(fallback)

  useEffect(() => {
    fetchLatestRelease().then(setRelease)
  }, [])

  return release
}
