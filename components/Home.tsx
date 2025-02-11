"use client"
import Image from 'next/image'
import React from 'react'
import img1 from '@/assets/images/hero.webp'

import { useParallax } from 'react-scroll-parallax';

const Home = () => {
    const parallax1 = useParallax<HTMLDivElement>({ speed: 10 });
    const parallax2 = useParallax<HTMLDivElement>({ speed: 10 });
    return (
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
    )
}

export default Home