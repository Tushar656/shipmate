"use client"

import React from 'react'

const ServiceCard = ({label, contant, Icon, iconColor}) => {
  return (
    <div className='w-full mx-2 p-4 rounded-xl shadow-sm bg-white'>
        <div className='flex h-10 p-3 py-9 pt-5 items-center border-b-2 border-gray-300 '>
            <Icon
                size={30}
                className={`${iconColor} mr-4`}
            />
            <div className='font-medium text-lg'>{label}</div>
        </div>
        <div className='py-3'>{contant}</div>
    </div>
  )
}

export default ServiceCard