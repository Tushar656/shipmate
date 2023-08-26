"use client"
import React from 'react'
import Button from './Button'
import { useSelector } from 'react-redux'
import { BsCurrencyDollar } from 'react-icons/bs'

const Navbar = ({setOpenModal}) => {
  const user = useSelector((state) => state.auth.user);

  // console.log(currentUser)
  return (
    <div className='w-full z-10 bg-inherit'>
        <div className="py-4 px-20">
            <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                <div className='text-2xl font-medium'>Ship<span className='text-theme1'>mate.</span></div>
                <div className='flex w-72 justify-around'>
                    {user ? (
                      <div className='p-1 border-2 border-violet-600 rounded-lg'>
                        <BsCurrencyDollar size={28} className='fill-violet-600'/>
                      </div>
                    ) : (
                      <Button label={'Login'} outline={false} onClick={() => setOpenModal(true)}/>
                    )}
                    <Button label={'Learn More'} outline={true}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar