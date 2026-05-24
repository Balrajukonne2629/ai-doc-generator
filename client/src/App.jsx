import { useState } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import InputSection from './components/InputSection'
import OutputSection from './components/OutputSection'
import Footer from './components/Footer'
import { getCached, setCached } from './utils/responseCache'

const API_URL = import.meta.env.VITE_API_URL || 'https://ai-doc-generator-eevl.onrender.com'

const endpoints = {
  readme: '/generate-readme',
  api: '/generate-readme',
  inline: '/explain-code',
}

function App() {
  const [text, setText] = useState('')
  const [docType, setDocType] = useState('readme')
  const [output, setOutput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [fromCache, setFromCache] = useState(false)

  async function handleGenerate() {
    const trimmed = text.trim()

    if (!trimmed) {
      setError('Please paste some code first.')
      setFromCache(false)
      return
    }

    const cached = getCached(docType, trimmed)
    if (cached) {
      setOutput(cached)
      setError('')
      setFromCache(true)
      return
    }

    setLoading(true)
    setError('')
    setOutput('')
    setFromCache(false)

    try {
      const { data } = await axios.post(`${API_URL}${endpoints[docType]}`, { text: trimmed })
      setOutput(data.output)
      setCached(docType, trimmed, data.output)
    } catch (err) {
      setError(err.response?.data?.error || 'Something went wrong. Try again.')
    } finally {
      setLoading(false)
    }
  }

  function handleTextChange(value) {
    setText(value)
    setFromCache(false)
  }

  function handleDocTypeChange(value) {
    setDocType(value)
    setFromCache(false)
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-zinc-950 text-zinc-100">
      <div
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.18),transparent)]"
        aria-hidden
      />
      <div className="relative flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <div className="mx-auto w-full max-w-6xl px-4 pb-8 sm:px-6 sm:pb-10">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8 lg:items-start">
              <InputSection
                text={text}
                onTextChange={handleTextChange}
                docType={docType}
                onDocTypeChange={handleDocTypeChange}
                onGenerate={handleGenerate}
                loading={loading}
              />
              <OutputSection
                output={output}
                loading={loading}
                error={error}
                fromCache={fromCache}
              />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
