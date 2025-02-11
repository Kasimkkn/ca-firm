"use client"
import Contact from '@/components/Contact'
import FAQSection from '@/components/FAQSection'
import Header from '@/components/Header'
import ReactLenis from 'lenis/react'
import Image from 'next/image'
import { useParallax } from 'react-scroll-parallax'
import img1 from '../assets/images/hero.webp'
import img2 from '../assets/images/service1.webp'
import img3 from '../assets/images/service2.webp'
const page = () => {
  const parallax1 = useParallax<HTMLDivElement>({ speed: 10 });
  const parallax2 = useParallax<HTMLDivElement>({ speed: 10 });
  const parallax3 = useParallax<HTMLDivElement>({ speed: 10 });
  const parallax4 = useParallax<HTMLDivElement>({ speed: 10 });
  return (
    <ReactLenis root>
      <Header />
      <main className='overflow-x-hidden'>
        <section id='home' className='relative flex justify-center flex-col items-center w-full max-md:px-4'>
          <div ref={parallax1.ref} className='flex flex-col items-center uppercase mt-30 md:mt-60'>
            <h1 className='text-[56px] md:text-6xl lg:text-[190px] leading-10'>Trusted &</h1>
            <h1 className='text-[56px] md:text-6xl lg:text-[200px] md:mt-10'>Experience</h1>
          </div>
          <div className='relative z-[-1] top-0 md:-top-32'>
            <Image src={img1} alt='hero image' width={500} height={500} className='max-md:w-80 object-cover' />
          </div>
          <div ref={parallax2.ref} className='relative z-[1] -bottom-10 md:bottom-40'>
            <h1 className='uppercase text-[46px] md:text-6xl lg:text-[190px] leading-10'>Accountants</h1>
          </div>
        </section>
        <section id='about' className='pt-20 md:pt-40 pb-20 w-full max-w-6xl mx-auto max-md:px-4'>
          <div ref={parallax3.ref} className='flex max-md:flex-col max-md:gap-10 justify-between items-start'>
            <div className='flex items-start gap-10'>
              <span>(01)</span>
              <p>ABOUT</p>
            </div>
            <div className='flex flex-col gap-1 text-[40px] md:text-[90px] uppercase'>
              <h2 className='leading-5'>Supporting</h2>
              <h2 className=''>businesses</h2>
              <h2 className='leading-5'>Like YOurs,</h2>
            </div>
          </div>
          <div className='flex max-md:flex-col justify-between md:gap-10 max-md:mt-10'>
            <Image src={img2} alt="service images" height={1000} className='w-96 md:h-[35rem] object-cover' />
            <div className='flex flex-col md:mr-[120px] w-full text-2xl gap-10 md:gap-20 mt-10 md:mt-20 md:items-center'>
              <div ref={parallax4.ref} className=''>
                <p className='text-start'>by empowering companies,</p>
                <p className='text-start '>with thoughtful advice</p>
                <p className='text-start '>and hassle-free accounting.</p>
              </div>
              <Image src={img3} alt="service images" height={1000} className='w-full md:w-80 h-96 md:h-[30rem] object-cover' />
            </div>
          </div>
        </section>
        <section className='flex flex-col'>
          <div className='flex items-center whitespace-nowrap text-[26px] md:text-6xl lg:text-[90px] uppercase'>
            <h3>'92 Accounting Since</h3>
            <h3>'92 Accounting Since</h3>
            <h3>'92 Accounting Since</h3>
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