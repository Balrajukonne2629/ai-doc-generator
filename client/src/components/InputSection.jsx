import LoadingSpinner from './LoadingSpinner'

const cardClass =
  'rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-4 shadow-xl shadow-black/25 backdrop-blur-sm sm:p-6'

const fieldClass =
  'w-full rounded-xl border border-zinc-700/80 bg-zinc-950/60 px-4 py-3 text-sm text-zinc-100 transition placeholder:text-zinc-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 disabled:cursor-not-allowed disabled:opacity-50'

export default function InputSection({
  text,
  onTextChange,
  docType,
  onDocTypeChange,
  onGenerate,
  loading,
}) {
  return (
    <section className={cardClass}>
      <h2 className="mb-4 text-sm font-medium text-zinc-300">Input</h2>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <label htmlFor="source-input" className="text-sm text-zinc-400">
            Source code
          </label>
          <select
            id="doc-type"
            value={docType}
            onChange={(e) => onDocTypeChange(e.target.value)}
            disabled={loading}
            className={`${fieldClass} sm:max-w-[200px] font-sans`}
          >
            <option value="readme">README</option>
            <option value="api">API docs</option>
            <option value="inline">Code explanation</option>
          </select>
        </div>
        <textarea
          id="source-input"
          rows={14}
          value={text}
          onChange={(e) => onTextChange(e.target.value)}
          disabled={loading}
          placeholder="Paste your code here..."
          className={`${fieldClass} min-h-[220px] resize-y font-mono sm:min-h-[280px]`}
        />
        <button
          type="button"
          onClick={onGenerate}
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:from-indigo-500 hover:to-violet-500 hover:shadow-indigo-500/30 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:self-start"
        >
          {loading ? (
            <>
              <LoadingSpinner size="sm" />
              Generating...
            </>
          ) : (
            'Generate documentation'
          )}
        </button>
      </div>
    </section>
  )
}
