import Image from 'next/image'
import React from 'react'

const Wave = () => {
  return (
    <div>
        <Image
            height="50"
            width="200"
            alt="Avatar"
            src={'/wave2.png'}
        />
    </div>
  )
}

export default Wave