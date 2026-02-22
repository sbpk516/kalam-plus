import { cn } from '@/lib/utils'
import { thadmAppPreviewEntries } from '@/data/thadm'

const searchTabs = ['All', 'Text (OCR)', 'Audio', 'Apps']

export function ThadmAppPreview() {
  return (
    <section className="section-container pb-12">
      <div className="mx-auto max-w-[800px] overflow-hidden rounded-2xl border border-white/10 bg-[#12151c] shadow-[0_40px_80px_rgba(0,0,0,0.4)]">
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <div className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="flex-1 text-center text-xs text-gray-600">
            Thadm — Always Watching, Always Searchable
          </span>
        </div>

        {/* App content */}
        <div className="p-8">
          {/* Search bar */}
          <div className="mb-4 flex items-center gap-3 rounded-xl border border-indigo-500/15 bg-indigo-500/[0.08] px-4 py-3">
            <span className="text-indigo-400">🔍</span>
            <span className="text-sm text-gray-500">
              Search your screen history...
            </span>
          </div>

          {/* Filter tabs */}
          <div className="mb-5 flex gap-2">
            {searchTabs.map((tab, i) => (
              <span
                key={tab}
                className={cn(
                  'rounded-md px-3 py-1.5 text-xs',
                  i === 0
                    ? 'border border-indigo-500/20 bg-indigo-500/15 text-indigo-300'
                    : 'bg-white/[0.04] text-gray-600'
                )}
              >
                {tab}
              </span>
            ))}
          </div>

          {/* Timeline entries */}
          <div className="space-y-2">
            {thadmAppPreviewEntries.map((entry, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-lg border border-white/[0.06] bg-white/[0.02] px-4 py-3"
              >
                <span className="min-w-[55px] font-mono text-[11px] text-gray-600">
                  {entry.time}
                </span>
                <span
                  className={cn(
                    'rounded px-2 py-0.5 text-[10px] font-medium',
                    entry.type === 'audio'
                      ? 'bg-pink-500/10 text-pink-400'
                      : 'bg-cyan-400/10 text-cyan-400'
                  )}
                >
                  {entry.app}
                </span>
                <span className="flex-1 text-sm text-gray-400">
                  {entry.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
