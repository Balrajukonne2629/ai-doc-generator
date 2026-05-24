export const markdownComponents = {
  h1: ({ children }) => (
    <h1 className="mb-3 border-b border-zinc-800 pb-2 text-lg font-bold tracking-tight text-white sm:text-xl">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mb-2.5 mt-4 text-base font-semibold text-zinc-100 first:mt-0 sm:text-lg">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mb-2 mt-3 text-sm font-semibold text-zinc-200 sm:text-base">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="mb-2.5 text-[13px] leading-6 text-zinc-300 sm:text-sm sm:leading-6">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="mb-3 list-disc space-y-1.5 pl-4 text-[13px] text-zinc-300 sm:text-sm sm:pl-5">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-3 list-decimal space-y-1.5 pl-4 text-[13px] text-zinc-300 sm:text-sm sm:pl-5">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-6">{children}</li>,
  strong: ({ children }) => <strong className="font-semibold text-zinc-100">{children}</strong>,
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-indigo-400 underline decoration-indigo-400/40 underline-offset-2 transition hover:text-indigo-300"
    >
      {children}
    </a>
  ),
  blockquote: ({ children }) => (
    <blockquote className="mb-3 border-l-2 border-indigo-500/50 bg-zinc-800/30 py-1 pl-3 text-[13px] text-zinc-400 sm:text-sm">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-5 border-zinc-800" />,
  pre: ({ children }) => (
    <pre className="mb-3 overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-950/80 p-2.5 sm:p-3">
      {children}
    </pre>
  ),
  code: ({ inline, children }) =>
    inline ? (
      <code className="rounded-md bg-zinc-800 px-1 py-0.5 font-mono text-[0.8em] text-indigo-300">
        {children}
      </code>
    ) : (
      <code className="block font-mono text-xs leading-relaxed text-zinc-200 sm:text-[13px]">
        {children}
      </code>
    ),
}
