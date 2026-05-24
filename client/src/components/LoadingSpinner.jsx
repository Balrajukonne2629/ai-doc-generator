const sizes = {
  sm: 'h-4 w-4 border',
  md: 'h-9 w-9 border-2',
}

export default function LoadingSpinner({ size = 'md' }) {
  return (
    <div
      className={`${sizes[size]} animate-spin rounded-full border-zinc-700 border-t-indigo-400`}
      role="status"
      aria-label="Loading"
    />
  )
}
