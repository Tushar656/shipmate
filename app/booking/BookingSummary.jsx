"use client"
import React from 'react'
import {RiPinDistanceLine} from 'react-icons/ri'
import {BiSolidPlaneAlt} from 'react-icons/bi'
import { useSelector } from 'react-redux'

const BookingSummary = () => {
    const user = useSelector((state) => state.auth.user);
  return (
    <div className='bg-white shadow-md h-44 p-5 rounded-lg w-full px-20'>
        <div className='font-semibold text-xl'>Booking Summary</div>
        <div className='h-28 ml-10 flex items-center justify-center relative'>
            <RiPinDistanceLine
                size={30}
            />
            <div className='h-1 bg-gray-300 w-full mx-5'></div>
            <RiPinDistanceLine
                size={30}
            />
            <div className='absolute bottom-[-8px] left-[-30px] flex flex-col items-center font-medium'>
                <span>{user?.origin},</span>
                <span>110003 India</span>
            </div>
            <div className='absolute top-0 flex flex-col items-center font-medium'>
                <span>Express</span>
                <BiSolidPlaneAlt
                    size={28}
                />
            </div>
            <div className='absolute bottom-[-8px] right-[-45px] flex flex-col items-center font-medium'>
                <span>{user?.destination}</span>
                <span>200080, China</span>
            </div>
        </div>
    </div>
  )
}

export default BookingSummary