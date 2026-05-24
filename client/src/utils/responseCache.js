const STORAGE_KEY = 'ai-doc-response-cache'
const MAX_ENTRIES = 30

function makeKey(docType, text) {
  return `${docType}:${text.trim()}`
}

function readCache() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
  } catch {
    return {}
  }
}

function writeCache(cache) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cache))
}

export function getCached(docType, text) {
  return readCache()[makeKey(docType, text)] ?? null
}

export function setCached(docType, text, output) {
  const cache = readCache()
  const key = makeKey(docType, text)

  delete cache[key]
  cache[key] = output

  const keys = Object.keys(cache)
  while (keys.length > MAX_ENTRIES) {
    delete cache[keys.shift()]
  }

  writeCache(cache)
}
