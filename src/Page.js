import React from 'react'
import Home from './Pages/HomeContent/Home';
import About from './Pages/About/About';

const Page = () => {
  return (
    <>
    <section className='section'>
      <Home/>
    </section>
    <section className='section'>
      <About/>
    </section>
    </>
  )
}

export default Page;