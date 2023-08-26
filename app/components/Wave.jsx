import Image from 'next/image'
import React from 'react'

const Wave = () => {
  return (
    <div className='w-full mt-8'>
        <Image
            height="50"
            width="1520"
            alt="Avatar"
            src={'/wave.png'}
        />
    </div>
  )
}

export default Wave