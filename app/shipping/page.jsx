import React from 'react'
import Search from '../components/Search'
import Navbar from '../components/Navbar'
import Steps from '../booking/Steps'
import { BiMessageAltMinus, BiSolidShip } from 'react-icons/bi'
import { BsChevronDown } from 'react-icons/bs'
import ListingCard from '../components/ListingCard'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'

const page = () => {
    // const user = useSelector((state) => state.auth.user);
    // const router = useRouter();
    // if(!user || !user.origin || user.destination || user?.date || user?.weight){
    //     router.push('/');
    //     return;
    // }
  return (
    <div>
        <Navbar/>
        <div className='flex w-full items-center justify-center relative'>
            <div className='w-44 px-3 h-10 rounded-lg bg-white text-gray-500 flex items-center mr-10'>
                <BiSolidShip
                    size={28}
                />
                <span className='ml-3'>Load</span>
            </div>
            <Steps load={true}/>
        </div>
        <Search load={true}/>
        <div className='w-full bg-gray-300' style={{height: '1.5px'}}></div>

        <div className='w-full flex justify-center px-20 mt-5'>
            <div className='w-1/4 flex flex-col justify-center items-center'>
                <div className='flex items-center justify-center mb-6'>
                    <span className='font-semibold'>3 Top Quote </span>
                    <span> (6 in total)</span>
                </div>
                <div className='flex items-center justify-between w-10/12 h-10 cursor-pointer rounded-lg px-14'>
                    <div>Filters</div>
                    <BsChevronDown size={16}/>
                </div>
                <div className='flex items-center justify-between w-10/12 h-10 cursor-pointer rounded-lg px-14'>
                    <div>Price</div>
                    <BsChevronDown size={16}/>
                </div>
                <div className='flex items-center justify-between w-10/12 h-10 cursor-pointer rounded-lg px-14'>
                    <div>Modes</div>
                    <BsChevronDown size={16}/>
                </div>
                <div className='flex items-center justify-between w-10/12 h-10 cursor-pointer rounded-lg px-14'>
                    <div>Seller</div>
                    <BsChevronDown size={16}/>
                </div>
            </div>
            <div className='w-3/4 relative'>
                <div className='flex w-fit items-center bg-slate-200 rounded-2xl'>
                    <div className='px-9 py-3 shadow-lg bg-white text-violet-800 rounded-2xl'>
                        <span className='font-medium'>Best Value </span> 5-5 days. $3121<span></span>
                    </div>
                    <div className='px-9 py-3 text-violet-800 rounded-2xl'>
                        <span className='font-medium'>Quickest </span> 5-5 days. $3121<span></span>
                    </div>
                    <div className='px-9 py-3 text-violet-800 rounded-2xl'>
                        <span className='font-medium'>Cheapest </span> 5-5 days. $3121<span></span>
                    </div>
                </div>
                <div className='overflow-y-auto h-96 hide-scrollbar'>
                    <ListingCard/>
                    <ListingCard/>
                    <ListingCard/>
                    <ListingCard/>
                </div>
                <div className='absolute gradient p-3 rounded-full flex items-center justify-center bottom-[50px] right-24 cursor-pointer'>
                    <BiMessageAltMinus
                        size={30}
                        className={'fill-white'}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default page