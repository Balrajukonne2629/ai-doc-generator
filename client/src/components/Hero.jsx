export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-2 pt-8 text-center sm:px-6 sm:pt-12 sm:pb-4">
      <p className="mb-4 inline-flex rounded-full border border-indigo-500/25 bg-indigo-500/10 px-3 py-1 text-xs font-medium tracking-wide text-indigo-300">
        AI documentation in seconds
      </p>
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        <span className="bg-gradient-to-br from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
          Turn code into documentation
        </span>
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
        Paste your source, choose a doc style, and generate polished READMEs or clear code explanations.
      </p>
    </section>
  )
}
