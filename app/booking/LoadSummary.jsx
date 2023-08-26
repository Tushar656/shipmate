"use client"
import React from 'react'

import {MdOutlineMonitorWeight} from 'react-icons/md';
import {LiaPalletSolid} from 'react-icons/lia'
import {GiWeightScale} from 'react-icons/gi'

const LoadSummary = () => {
    return (
        <div className='mt-3 flex justify-between'>
            <div className='bg-white shadow-md h-36 rounded-lg px-5 mr-2 w-1/4 flex flex-col items-center justify-center'>
                <div className='text-gray-600 text-lg font-medium'>Total Weight/Volume</div>
                {/* <MdOutlineMonitorWeight size={44}
                className='fill-gray-500'/> */}
                <GiWeightScale size={32}
                className='fill-gray-500 my-2'/>
                <div className='text-black text-lg font-bold'>114.2kg</div>
            </div>
            <div className='bg-white shadow-md h-36 rounded-lg px-5 ml-2 w-3/4 flex flex-col items-center justify-center'>
                <div className='text-gray-600 text-lg font-medium w-full'>Load</div>
                {/* <MdOutlineMonitorWeight size={44}
                className='fill-gray-500'/> */}
                <LiaPalletSolid size={44}
                className='fill-gray-500'/>
                <div className='text-black font-bold'>Pallets</div>
                <div className='text-gray-500 font-medium text-sm'>230 X 140 X 120 CM</div>
            </div>
        </div>
    )
}

export default LoadSummary