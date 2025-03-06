import React from 'react'
import { Button } from './ui/button'
import { GoogleGeminiEffect } from './GeminiEffect'
import { ModalPop } from './ModalPop'
import { Compare } from './ui/compare'



const Hero = () => {
    return (
        <div className="flex w-full flex-col items-center justify-center min-h-svh">
            {/* <ModalPop/> */}
            <section
      class="pt-8 w-full lg:pt-32 bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')] bg-center bg-cover"
    >
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
        <div
          class="border border-lime-500 p-1 w-auto max-w-80 mx-auto rounded-full flex items-center justify-between mb-4"
        >
          <span class="font-inter text-xs font-medium text-white ml-3"
            >Dive into Qode and become better.</span>
          <a
            href="/login"
            class="w-8 h-8 rounded-full flex justify-center items-center bg-lime-600"
          >
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.83398 8.00019L12.9081 8.00019M9.75991 11.778L13.0925 8.44541C13.3023 8.23553 13.4073 8.13059 13.4073 8.00019C13.4073 7.86979 13.3023 7.76485 13.0925 7.55497L9.75991 4.22241"
                stroke="white"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
        <h1
          class="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-lime-500 mb-5 md:text-5xl leading-[50px]"
        >
          Learn Software Engineering with {"  "}
          <span class="bg-gradient-to-r from-blue-600 via-lime-500 to-orange-500 bg-clip-text text-transparent">Qode </span>
        </h1>
        <p
          class="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9"
        >
          Invest intelligently and discover a better way to manage your entire
          wealth easily.
        </p>
        <div className="md:flex-row md:space-x-4 w-full mx-auto md:inline-flex flex-col items-center justify-center">
        <a
          href="javascript:;"
          class="w-full md:w-auto md:mb-14 mb-5 inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center text-white rounded-full bg-lime-500 shadow-xs hover:bg-lime-600 transition-all duration-500"
        >
          Request A Service
          <svg
            class="ml-2"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
        <a
          href="javascript:;"
          class="w-full md:w-auto mb-14 inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center text-white rounded-full border border-lime-500 bg-black text-white shadow-xs hover:bg-lime-600 transition-all duration-500"
        >
          View Courses
          <svg
            class="ml-2"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
        </div>
        <div class="flex justify-center">
            <Compare class="rounded-t-3xl h-auto w-full object-cover"/>
          {/* <img
            src="https://pagedone.io/asset/uploads/1691054543.png"
            alt="Dashboard image" class="rounded-t-3xl h-auto object-cover"
          /> */}
        </div>
      </div>
    </section>
            

        </div>
    )
}

export default Hero
