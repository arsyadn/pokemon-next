import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='bg-[#3A8891] text-white'>
        <div className='container mx-auto'>
            <div className='flex justify-around md:justify-between pt-5 items-center'>
                <Image src="/assets/logo.svg" alt="logo" width={110} height={40} className="ml-5"/>
                <div className='flex md:mr-24'>
                    <Link href="/">
                        <p>Home</p>
                    </Link>
                    <Link href="/" className='mx-7'>
                        <p>Pokemon</p>
                    </Link>
                    <Link href="/">
                        <p>About</p>
                    </Link>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Navbar