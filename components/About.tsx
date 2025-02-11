"use client"
import React from 'react'
import { useParallax } from 'react-scroll-parallax'
import img2 from '../assets/images/service1.webp'
import img3 from '../assets/images/service2.webp'
import Image from 'next/image'
const About = () => {

    const parallax3 = useParallax<HTMLDivElement>({ speed: 10 });
    const parallax4 = useParallax<HTMLDivElement>({ speed: 10 });
    return (
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
    )
}

export default About