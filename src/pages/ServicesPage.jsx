import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Timelines } from '@/components/TimeLine'
import React from 'react'

const ServicesPage = () => {
    return (
        <div className='w-full bg-black'>
            <Navbar/>
            <Timelines/>
            <Footer/>
        </div>
    )
}

export default ServicesPage
