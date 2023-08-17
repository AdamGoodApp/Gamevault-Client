/* eslint-disable @next/next/no-img-element */
import type { ReactElement } from 'react'
import { Card, CardFooter } from '@nextui-org/card'
import { Image } from '@nextui-org/image'
import Download from '../Download'

interface GameCardProps {
  game: Game
}

export default function GameCard({ game }: GameCardProps): ReactElement {
  const { box_image, title, id, size } = game;
  
  return (
    <Card isFooterBlurred className="xl:w-[18%] lg:w-[22%] md:w-[30%] sm:w-[47%] w-[100%] col-span-12 sm:col-span-5">
      <Image
        removeWrapper
        alt="Card example background"
        className="object-cover w-full h-full z-1"
        src={box_image.source}
        isZoomed
        width={240}
      />
      <CardFooter className="absolute bottom-0 z-10 justify-between bg-white/30 border-t-1 border-zinc-100/50">
        <div>
          <p className="text-black text-tiny">{ title }</p>
          <p className="text-black text-tiny">Get notified.</p>
        </div>
        <Download id={id} fileName={title} size={size}/>
      </CardFooter>
    </Card>
  )
}