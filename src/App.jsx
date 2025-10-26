import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/HeroSection/Hero'
import Menu from './components/MenuSection/Menu'
import Service from './components/ServiceSection/Service'
import Highlight from './components/HighlightsSection/Highlight'
import Book from './components/BookNowSection/Book'

function App() {
  const [count, setCount] = useState(0)

  return (
     <>
     <Header/>
     <Hero/>
     <Menu/>
     <Service/>
     <Highlight/>
     <Book/>
     </>
  )

}

export default App
