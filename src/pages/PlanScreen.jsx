import Navbar from '@/components/Navbar'
import { Planner } from '@/components/Planner'
import React from 'react'

const PlanScreen = () => {
    return (
        <div className='w-full bg-black'>
            <Navbar />
            <Planner />
        </div>
    )
}

export default PlanScreen
