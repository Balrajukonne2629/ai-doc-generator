import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import LoadingSpinner from './LoadingSpinner'
import { markdownComponents } from './markdownComponents'

const cardClass =
  'flex h-[min(420px,55vh)] flex-col rounded-2xl border border-zinc-800/80 bg-zinc-900/50 shadow-xl shadow-black/25 backdrop-blur-sm sm:h-[480px] lg:h-[560px] lg:max-h-[calc(100vh-12rem)]'

export default function OutputSection({ output, loading, error, fromCache }) {
  const [copied, setCopied] = useState(false)

  const canCopy = Boolean(output && !error && !loading)

  async function handleCopy() {
    if (!output) return

    try {
      await navigator.clipboard.writeText(output)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  function renderContent() {
    if (error) {
      return (
        <p className="rounded-lg border border-red-500/20 bg-red-500/10 px-3 py-2 text-[13px] leading-relaxed text-red-400 sm:text-sm">
          {error}
        </p>
      )
    }

    if (output) {
      return (
        <div className="text-[13px] leading-relaxed sm:text-sm">
          <ReactMarkdown components={markdownComponents}>{output}</ReactMarkdown>
        </div>
      )
    }

    return (
      <div className="flex min-h-full flex-col items-center justify-center px-6 py-10 text-center">
        <p className="max-w-[240px] text-[13px] leading-relaxed text-zinc-500 sm:text-sm">
          Your AI-generated documentation will appear here...
        </p>
      </div>
    )
  }

  return (
    <section className={`${cardClass} p-4 sm:p-6`}>
      <div className="mb-4 flex shrink-0 flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <h2 className="text-sm font-medium text-zinc-300">Output</h2>
          {fromCache && !loading && output && !error && (
            <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
              Loaded from cache
            </span>
          )}
        </div>
        {canCopy && (
          <button
            type="button"
            onClick={handleCopy}
            className="rounded-lg border border-zinc-700 bg-zinc-800/50 px-2.5 py-1 text-xs text-zinc-300 transition hover:border-zinc-600 hover:bg-zinc-800 hover:text-white"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        )}
      </div>

      <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl border border-zinc-800/60 bg-zinc-950/40">
        {loading ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 p-6">
            <LoadingSpinner />
            <p className="text-sm text-zinc-400">Generating with AI...</p>
          </div>
        ) : (
          <div className="output-scroll min-h-0 flex-1 overflow-y-auto overscroll-contain scroll-smooth p-3 sm:p-4">
            {renderContent()}
          </div>
        )}
      </div>
    </section>
  )
}
