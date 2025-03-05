import { LoginForm } from '@/components/login-form'
import Navbar from '@/components/Navbar'
import React from 'react'

const LoginPage = () => {
    return (
        <div>
            <Navbar />
            <div className="w-full flex flex-row h-screen mx-auto justify-center items-center">
                <div className="w-96">
                    <LoginForm />
                </div>
            </div>

        </div>
    )
}

export default LoginPage
