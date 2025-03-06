import React from 'react'
import CardDemo from './cards-demo-3'

const Partners = () => {
    return (
        <div className='w-full sm:py-16 py-8 flex flex-col mx-auto justify-center items-center space-y-5'>
            <h1 className="text-white text-3xl font-semibold text-center">Our Partners</h1>
            <CardDemo />
            <div className="w-full inline-flex justify-center items-center">
              
                <button class="animated-button">
                    <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                        ></path>
                    </svg>
                    <span class="text">Become Partner</span>
                    <span class="circle"></span>
                    <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                        ></path>
                    </svg>
                </button>

            </div>
        </div>
    )
}

export default Partners
