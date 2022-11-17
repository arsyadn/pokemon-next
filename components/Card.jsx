import React from 'react'
import {GoPrimitiveDot as DotIcon} from "react-icons/go"
import Image from 'next/image'

const Card = () => {
  return (
    <div className='bg-[#DEDEDE] px-10 py-14 flex flex-wrap'> 
    <div className='container mx-auto'>
        <div className='flex flex-col items-center relative pt-20'>
            <Image src="/assets/foto.png" alt="pic" width={230} height={150} className="rounded-[18px] absolute bottom-24"/>
            <div className="w-64 h-36 bg-white rounded-3xl px-9 pt-[70px] text-black">
                <p className='pb-2 border-b-[1px] border-[#E6E6E6]'>Pikachin</p>
                <div className='flex items-center text-[10px] mt-2'>
                    <p className='mr-[6px]'>Listrik</p>
                    <DotIcon className='w-1'/>
                    <p className='mx-[6px]'>Category</p>
                    <DotIcon className='w-1'/>
                    <p className='ml-[6px]'>Category</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Card