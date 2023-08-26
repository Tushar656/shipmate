"use client"
import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BiMessageAltMinus } from 'react-icons/bi'
import {toast} from 'react-hot-toast'
import { useRouter } from 'next/navigation'

const Checkout = () => {
    const router = useRouter();
    return (
        <div className='flex justify-between w-full relative'>
            <div className='bg-white shadow-md py-5 rounded-lg px-4 w-full'>
                <div className='flex items-center'>
                    <div className='font-semibold text-xl'>Price details</div>
                    <div className='ml-5 bg-gray-200 flex rounded-full p-1 px-2'>
                        <AiFillStar
                            size={16}
                            className='pr-1'
                        />
                        <span className='text-xs'>Known shipper</span>
                    </div>
                </div>
                <div className='h-12 text-gray-500 flex items-center justify-between border-b-2 mt-5'>
                    <span>Seller's Quote</span>
                    <span>$ 3,659.25</span>
                </div>

                <div className='h-7 text-gray-500 flex items-center justify-between mt-4'>
                    <span>Duties and taxes</span>
                    <span>Not Included</span>
                </div>
                <div className='pb-5 text-gray-500 flex items-center justify-between border-b-2 mt-3'>
                    <div>
                        <div>Insurance</div>
                        <div className='text-xs'>Based on the items cost</div>
                    </div>
                    <span>$ 323.25</span>
                </div>

                <div className='h-7 text-gray-500 flex items-center justify-between mt-4'>
                    <div>Add a <span className='text-blue-600 underline'>promo code</span></div>
                </div>
                <div className='pb-5 text-gray-500 flex items-center justify-between border-b-2 mt-3'>
                    <div>
                        <div>Platform fee</div>
                    </div>
                    <span>$ 119.48</span>
                </div>


                <div className='pb-5 text-black flex items-center justify-between font-bold mt-5 text-2xl'>
                    <div>
                        <div>Total:</div>
                    </div>
                    <span>$ 4,102.23</span>
                </div>


                <div className='text-black flex items-center justify-center'>
                    <button
                        onClick={() => {
                            toast.success('Payment Successful')
                        }}
                        // disabled={disabled}
                        className={`
                            relative
                            rounded-lg
                            hover:opacity-80
                            transition
                            w-48 h-9
                            border-2
                            border-theme2
                            font-medium
                            bg-theme2
                            text-white
                            text-lg
                        `}>
                        Checkout
                    </button>
                </div>
            </div>
            <div className='absolute gradient p-3 rounded-full flex items-center justify-center bottom-[-30px] right-5 cursor-pointer'>
                <BiMessageAltMinus
                    size={30}
                    className={'fill-white'}
                />
            </div>
        </div>
    )
}

export default Checkout