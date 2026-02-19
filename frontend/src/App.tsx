import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Loader } from './components/Loader'
import HomePage from './pages/HomePage'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = window.setTimeout(() => setLoading(false), 750)
    return () => window.clearTimeout(t)
  }, [])

  if (loading) return <Loader />

  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  )
}

export default App
