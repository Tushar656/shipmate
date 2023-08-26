"use client"
import React from 'react'

const Steps = ({load}) => {
  return (
    <div className='h-24 flex items-center justify-center'>
        <div className='flex flex-col items-center relative'>
            <div className='h-8 w-8 bg-violet-300 flex items-center justify-center rounded-full text-white font-medium'>1</div>
            <div className='text-xs absolute top-9 font-medium'>Search</div>
        </div>
        <div className='h-1 w-48 bg-violet-300 mx-2'></div>
        <div className='flex flex-col items-center relative'>
            <div className='h-8 w-8 bg-violet-300 flex items-center justify-center rounded-full text-white font-medium'>2</div>
            <div className='text-xs absolute top-9 w-36 font-medium'>Recommended services</div>
        </div>
        <div className='h-1 w-40 bg-violet-300 mx-2'></div>
        <div className='flex flex-col items-center relative'>
            <div className='h-8 w-8 bg-violet-300 flex items-center justify-center rounded-full text-white font-medium'>3</div>
            <div className='text-xs absolute top-9 font-medium'>Results</div>
        </div>
        <div className='h-1 w-40 bg-violet-300 mx-2'></div>
        <div className='flex flex-col items-center relative'>
            <div className={`h-8 w-8 ${load ? 'bg-gray-500' : 'bg-violet-300'} flex items-center justify-center rounded-full text-white font-medium`}>{load ? '' : 4}</div>
            <div className={`text-xs absolute top-9 font-medium ${load && 'text-gray-500'}`}>Booking</div>
        </div>
    </div>
  )
}

export default Steps