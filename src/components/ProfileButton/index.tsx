/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import type { ReactElement } from 'react'

export default function ProfileButton(): ReactElement {
  return (
    <div className="relative flex items-center justify-center text-sm font-bold text-gray-800 uppercase bg-gray-100 rounded-full select-none w-9 h-9 shrink-0 hover:cursor-pointer">
      <img className="object-cover object-center w-full h-full rounded-full" src="https://source.boringavatars.com/beam/2?square" />
      <span aria-hidden="true" className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full ring ring-white"></span>
      <span aria-hidden="true" className="absolute bottom-0 right-0 w-2 h-2 bg-yellow-500 rounded-full ring ring-white"></span>
    </div>
  )
}