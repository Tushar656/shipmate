"use client"

import React from 'react'
import Steps from './Steps'
import BookingSummary from './BookingSummary'
import LoadSummary from './LoadSummary'
import SelllerSummry from './SelllerSummry'
import Checkout from './Checkout'

const page = () => {
  return (
    <div>
      <div className='w-full z-10 bg-inherit'>
        <div className="py-4 px-20">
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <div className='text-2xl font-medium'>Ship<span className='text-theme1'>mate.</span></div>
          </div>
        </div>
      </div>
      <div>
        <Steps/>
        <div className='flex p-16 pb-0 w-full'>
          <div className='w-3/4 mr-7'>
            <BookingSummary/>
            <LoadSummary/>
            <SelllerSummry/>
          </div>
          <div className='w-1/4 ml-7'>
            <Checkout/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page