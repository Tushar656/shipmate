"use client"

import React from 'react'
import ServiceCard from './ServiceCard'
import { LiaShipSolid } from 'react-icons/lia'
import { MdOutlineBusinessCenter } from 'react-icons/md'
import { PiGlobeLight } from 'react-icons/pi'
import { MdOutlineMiscellaneousServices } from 'react-icons/md'
import { BiMessageAltMinus } from 'react-icons/bi'
import '../globals.css'


const Services = () => {
  return (
    <div className='flex justify-center items-center h-56 relative'>
        <div className='flex flex-col justify-center items-center h-56 w-11/12'>
            <div className='text-2xl font-semibold mb-4'>Services</div>
            <div className='flex w-full justify-between' >
                <ServiceCard label={'Freight Services'} 
                    contant={'Open new opportunities to grow your busniss. Enter new markets and discover new continents, We are with you, door-to-door.'}
                    Icon={LiaShipSolid}
                    iconColor={'fill-blue-700'}
                />
                <ServiceCard label={'Business Services'} 
                    contant={'We support your goals for growth with cargo insurance, online payments and paperless workflow. Take your business to the next level.'}
                    Icon={MdOutlineBusinessCenter}
                    iconColor={'fill-rose-500'}
                />
                <ServiceCard label={'Shipping & Logistics'} 
                    contant={'Find powerful solution to meet your diverse transportation needs. Agile solutions to handle all your supply chain needs.'}
                    Icon={PiGlobeLight}
                    iconColor={'fill-orange-500'}
                />
                <ServiceCard label={'24/7 Support'} 
                    contant={'Receive support from our experts all over the world at every stage of the process, 24/7.'}
                    Icon={MdOutlineMiscellaneousServices}
                    iconColor={'fill-blue-400'}
                />
            </div>
        </div>
        <div className='absolute gradient p-3 rounded-full flex items-center justify-center bottom-[-50px] right-24 cursor-pointer'>
            <BiMessageAltMinus
                size={30}
                className={'fill-white'}
            />
        </div>
    </div>
  )
}

export default Services