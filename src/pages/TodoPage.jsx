import Navbar from '@/components/Navbar'
import { TodoElement } from '@/components/Todo'
import React from 'react'

const TodoPage = () => {
    return (
        <div className='w-full bg-black'>
            <Navbar />
            <TodoElement />
        </div>
    )
}

export default TodoPage
