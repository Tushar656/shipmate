"use client"
import React from 'react'

import Image from 'next/image';

const SelllerSummry = () => {
    return (
        <div className='mt-3 flex justify-between'>
            <div className='bg-white shadow-md h-36 rounded-lg px-5 mr-2 w-1/2 flex flex-col items-center justify-center'>
                <div className='text-gray-500 text-lg font-medium w-full mb-5'>Seller: 
                    <span className='text-gray-700 font-semibold'> Primetime Worldwide</span>
                </div>
                <Image
                    // className="rounded-full" 
                    height="50"
                    width="200"
                    alt="Avatar"
                    src={'/shipment.jpg'}
                />
            </div>
            <div className='bg-white shadow-md h-36 rounded-lg px-5 ml-2 w-1/2 flex flex-col items-center justify-center'>
                <div className='text-gray-500 text-lg font-medium w-full mb-5'>Insurance: 
                    <span className='text-gray-700 font-semibold'> Xcover.com</span>
                </div>
                <Image
                    height="50"
                    width="200"
                    alt="Avatar"
                    src={'/xcover2.jpg'}
                />
            </div>
        </div>
    )
}

export default SelllerSummry