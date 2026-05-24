export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-zinc-800/80 bg-zinc-950/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 sm:py-4">
        <div className="flex items-center gap-2.5">
          <span
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 text-xs font-bold text-white shadow-lg shadow-indigo-500/30"
            aria-hidden
          >
            AI
          </span>
          <span className="text-base font-semibold tracking-tight text-white sm:text-lg">
            Doc Generator
          </span>
        </div>
        <span className="hidden rounded-full border border-zinc-800 bg-zinc-900/80 px-3 py-1 text-xs text-zinc-400 sm:inline">
          Gemini powered
        </span>
      </nav>
    </header>
  )
}
