import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ChatBot from './components/ChatBot'
import RunningBanner from './components/RunningBanner'
import LoadingScreen from './components/LoadingScreen'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <ThemeProvider>
      <Router>
        <div className="App bg-white dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden">
          <Navbar />
          
          <main className="w-full">
            <Hero />
            <RunningBanner />
            <About />
            <Skills />
            <Projects />
            <Achievements />
            <Contact />
          </main>
          <Footer />
          {/* <ChatBot /> */}
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App