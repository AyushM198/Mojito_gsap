import React from 'react'
import gsap from 'gsap'
import {ScrollTrigger, SplitText} from 'gsap/all'
gsap.registerPlugin(ScrollTrigger, SplitText)
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cocktails from './components/Cocktails'
import AboutUs from './components/AboutUs'
import Art from './components/Art'
import Menu from './components/Menu'
import Contact from './components/Contact'

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <AboutUs />
      <Art />
      <Menu />
      <Contact/>
    </main>
  )
}

export default App
