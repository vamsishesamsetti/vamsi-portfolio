import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

function useTheme() {
  // Deterministic initial value so the server-rendered HTML matches the first
  // client render (no hydration mismatch). The real preference is read in the
  // effect below, after hydration.
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const initial = saved
      ? saved === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches
    setDark(initial)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return [dark, () => setDark((d) => !d)]
}

export default function App() {
  const [dark, toggleTheme] = useTheme()

  return (
    <>
      <Navbar dark={dark} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
