"use client"

import React, {useState} from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { MdOutlineCalendarMonth } from 'react-icons/md'
import { LiaShipSolid } from 'react-icons/lia'
import { BsArrowRight } from 'react-icons/bs'
import { BiEditAlt } from 'react-icons/bi'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { fill } from "../GlobalRedux/slices/UserSlice";

const Search = ({load}) => {
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    const [date, setDate] = useState("");
    const [weight, setWeight] = useState("");
    const router = useRouter();
    const dispatch = useDispatch()

    const shipHandler = () => {
        dispatch(fill({origin, destination, date, weight}));
        console.log(user)
        router.push('/shipping')
    }
    const user = useSelector((state) => state.auth.user);

    return (
        <div className={`w-full flex flex-col justify-center items-center ${load ? 'h-28' : 'h-36 mb-4'} px-24`}>
            <div className='h-14 bg-white shadow-md w-full rounded-lg flex justify-center items-center'>
                <div className='h-7 px-2 flex-grow p-2 flex items-center'>
                    <CiLocationOn
                        size={28}
                        className='fill-gray-500'
                    />
                    {load ? (
                        <span className='px-2 text-gray-500'>{user?.origin}</span>
                    ) : (
                        <input value={origin} onChange={(e) => setOrigin(e.target.value)} type="text" placeholder='Origin, Port, City' className='px-2 text-gray-500 border-0 outline-none'/>
                    )}
                </div>
                <div className='h-7 px-2 flex-grow p-2 flex items-center'>
                    <CiLocationOn
                        size={28}
                        className='fill-gray-500'
                    />
                    {load ? (
                        <span className='px-2 text-gray-500'>{user?.destination}</span>
                    ) : (
                        <input value={destination} onChange={(e) => setDestination(e.target.value)} type="text" placeholder='Destination, Port, City' className='px-2 text-gray-500 border-0 outline-none'/>
                    )}
                </div>
                <div className='h-7 px-2 flex-grow border-gray-300 border-l-2 p-2 flex items-center'>
                    <MdOutlineCalendarMonth
                        size={28}
                        className='fill-gray-500'
                    />
                    {load ? (
                        <span className='px-2 text-gray-500'>{user?.date}</span>
                    ) : (
                        <input value={date} onChange={(e) => setDate(e.target.value)} type="date" placeholder='13 April 2023' className='px-2 text-gray-500 border-0 outline-none'/>
                    )}
                </div>
                <div className='h-7 px-2 flex-grow border-gray-300 border-l-2 p-2 flex items-center'>
                    <LiaShipSolid
                        size={28}
                        className='fill-gray-500'
                    />
                    {load ? (
                        <span className='px-2 text-gray-500'>{user?.weight}</span>
                    ) : (
                        <input value={weight} onChange={(e) => setWeight(e.target.value)} type="number" placeholder='Load (in Kg)' className='px-2 text-gray-500 border-0 outline-none'/>
                    )}
                </div>

                <div className='h-7 px-2 border-gray-300 border-l-2 p-2 w-14 flex items-center'>
                    {load ? (
                        <button onClick={() => router.push('/')} className={`rounded-lg hover:opacity-80 transition font-medium w-10 h-10 flex items-center justify-center`}>
                            <BiEditAlt
                                size={26}
                                className='fill-violet-500'
                            />
                        </button>
                    ) : (<button 
                            disabled={user==null || origin.length==0 || destination.length==0 || date.length==0 || weight.length==0} 
                            onClick={shipHandler} 
                            className={`rounded-lg hover:opacity-80 transition bg-theme2 font-medium w-10 h-10 flex items-center justify-center disabled:cursor-not-allowed`}
                        >
                        <BsArrowRight
                            size={26}
                            className='fill-white'
                        />
                    </button>)}
                </div>
            </div>

        </div>
    )
}

export default Search