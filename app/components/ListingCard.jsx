"use client"

import Image from 'next/image'
import React from 'react'
import { BsAirplane } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import Button from './Button'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'

const ListingCard = () => {
    const router = useRouter();
    const user = useSelector((state) => state.auth.user);
    return (
        <div className='w-10/12 bg-white p-3 flex items-center justify-center rounded-xl shadow-xl mt-3'>
            <div className='w-3/4'>
                <div className='flex'>
                    <div className='rounded-lg bg-green-300 mr-3 px-3 flex items-center justify-between'>
                        <div className='bg-green-500 h-2 w-2 rounded-full mr-3'></div>
                        <div>Best Value</div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className='text-red-500 border-r-2 border-gray-300 px-3'>Express</div>
                        <div className='ml-2'>Est. 5 days</div>
                    </div>
                </div>
                <div className='flex items-center mt-5'>
                    <CiLocationOn size={24} />
                    <span>{user?.origin}</span>
                    <span style={{ height: '1px' }} className='bg-gray-500 w-12 mx-4'></span>
                    <BsAirplane size={24} className='fill-gray-500' />
                    <span style={{ height: '1px' }} className='bg-gray-500 w-12 mx-4'></span>
                    <CiLocationOn size={24} />
                    <span>{user?.destination}</span>
                </div>
                <div className='flex items-center mt-5'>
                    <Image
                        height="50"
                        width="80"
                        alt="Logo"
                        src={'/shipment.jpg'}
                    />
                    <span className='text-sm text-gray-400 mx-3 mr-5'>Primetime Worldwide</span>
                    <span className='flex'>
                        <AiFillStar size={20} className='fill-violet-400'/>
                        <AiFillStar size={20} className='fill-violet-400'/>
                        <AiFillStar size={20} className='fill-violet-400'/>
                        <AiFillStar size={20} className='fill-violet-400'/>
                        <AiOutlineStar size={20} className='fill-gray-500'/>
                    </span>
                </div>
            </div>
            <div className='w-1/4 border-l-2 border-gray-300 flex flex-col items-center justify-center'>
                <div className='text-xl font-bold mb-2'><span>$ 3,982</span><span className='text-normal'>.63</span></div>
                <Button label={'Select'} onClick={() => router.push('/booking')}/>
                <div className='underline cursor-pointer mt-2'>View details</div>
            </div>
        </div>
    )
}

export default ListingCard