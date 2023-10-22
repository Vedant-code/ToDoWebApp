import  Link  from "next/link"
import React from 'react'
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Time from "../image/time.svg"

function Logo() {
  return (
    <Link href='/' className='overflow-hidden'>
    <div className='flex items-center w-72 h-14'>
        <AspectRatio
        ratio={16 / 9}
        className='flex items-center justify-center'>
        <Image
        priority
        src={Time}
        alt='logo'
        className='dark:filter dark:invert w-1/2'></Image>
        </AspectRatio>
    </div>
    </Link>
  )
}

export default Logo