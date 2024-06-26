import React from 'react'
import Navebar from './components/Navebar'
import Landing from './components/Landing'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';


function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='relative w-full min-h-screen bg-zinc-800 text-white'>
      <Navebar />
      <Landing />
      <Marquee />
      <About />
      <Eyes />
      <Featured/>
      <Cards />
      <Footer />
    </div>
  )
}

export default App