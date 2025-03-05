import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '@/components/Hero'
import { GoogleGeminiEffect } from '@/components/GeminiEffect'
import { Features } from '@/components/Features'
import { Testimonials } from '@/components/Testimonials'
import CardDemo from '@/components/cards-demo-3'
import Partners from '@/components/Partners'
import { Compare } from '@/components/ui/compare'
import { HeroParallaxDemo } from '@/components/Parallax'
import { ProjectTabs } from '@/components/ProjectTabs'
import { Timelines } from '@/components/TimeLine'


const HomePage = () => {
    return (
        <div className='w-full bg-black'>
            <Navbar/>
            <Hero/>
            <Partners/>
            <HeroParallaxDemo/>
            <Timelines/>
            <Features/>
            <ProjectTabs/>
            <Testimonials/>
            
            
        </div>
    )
}

export default HomePage
