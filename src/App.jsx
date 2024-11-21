import React from 'react'
import { Footer, Hero, Navbar, Services, Subscribe } from './components/components'
import './index.css'

function App() {
  return (
    <>
    <header className='bg-VPaleCyan mx-auto w-full lg:bg-hero sm:bg-heroMob xs:bg-heroMob bg-scroll bg-cover bg-center lg:h-screen sm:min-h-screen xs:min-h-screen'>
      <Navbar />
      <Hero />
    </header>
    <Services />
    <Subscribe />
    <Footer />

    </>
  );
}

export default App;
