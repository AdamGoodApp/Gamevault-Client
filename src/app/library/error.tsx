"use client"

import React from 'react';
import type { ReactElement } from 'react'
import Image from 'next/image';

const imageLoader = ({ src }: any) => {
  return `${src}`
}

export default function Error(): ReactElement {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='flex flex-col items-center justify-center mt-[-60px]'>
        <Image
          loader={imageLoader}
          src="/error.png"
          alt="error"
          width={477}
          height={333}
        />
        <h1 className='uppercase'>ooops, something went wrong!</h1>
      </div>
    </div>
  )
}
