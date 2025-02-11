"use client"
import About from '@/components/About'
import Contact from '@/components/Contact'
import FAQSection from '@/components/FAQSection'
import Header from '@/components/Header'
import Home from '@/components/Home'
import ReactLenis from 'lenis/react'

const page = () => {

  return (
    <ReactLenis root>
      <Header />
      <main className='overflow-x-hidden'>
        <Home />
        <About />
        <section className='flex flex-col'>
          <div className='flex items-center whitespace-nowrap text-[26px] md:text-6xl lg:text-[90px] uppercase'>
            <h3>&apos;92 Accounting Since</h3>
            <h3>&apos;92 Accounting Since</h3>
            <h3>&apos;92 Accounting Since</h3>
          </div>
          <div className='flex items-center whitespace-nowrap text-[26px] md:text-6xl lg:text-[90px] uppercase'>
            <h3 className=''>based in Spruce Grove & Leduc</h3>
          </div>
        </section>
        <section id='services' className='pt-20 md:pt-40 pb-20 w-full max-md:px-4'>
          <div className='flex max-w-6xl mx-auto flex-col justify-center md:items-center gap-5'>
            <div className='flex md:items-center gap-10'>
              <span>(02)</span>
              <p className='uppercase'>SERVICES</p>
            </div>
            <h2 className='text-[56px] md:text-6xl lg:text-[190px] uppercase'>expertise</h2>
          </div>

          <FAQSection />
        </section>
        <Contact />
      </main>
    </ReactLenis>
  )
}

export default page