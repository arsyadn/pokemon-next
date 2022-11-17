import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {GoPrimitiveDot as DotIcon} from "react-icons/go"
import Image from 'next/image'

const Card = () => {

  const [pokeData, setPokeData] = useState([])
  const [limit, setLimit] = useState(null);

  const handlePokemon = async () => {
    try{
      const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`)
      setPokeData(data.results)
      console.log(data.results)
    }
    catch (error) {
      console.log(error)
    }
  }

  const handleLimit = (val) => {
    setLimit(val);
    console.log(val)
  }

  useEffect(() => {
    handlePokemon();
    console.log(pokeData);
  },[limit])

  return (
    <div className='bg-[#DEDEDE] px-10 pt-5'> 
    <div className='mb-14 '>
      <select defaultValue={'DEFAULT'} name="limit" id="limit" className='w-20' onChange={(e) => handleLimit(e.target.value)}>
        <option value="DEFAULT" disabled>Limit</option>
        <option value="50">50</option>
        <option value="100">100</option>
        <option value="200">200</option>
        <option value="300">300</option>
        <option value="500">500</option>
        <option value="600">600</option>
        <option value="700">700</option>
        <option value="800">800</option>
        <option value="900">900</option>
        <option value="100000">All</option>
      </select>
    </div>
    <div className='container mx-auto flex flex-wrap'>
      {
        pokeData?.map((data) => {
          return(
            <>
              <div className='flex flex-col items-center relative pt-20 mb-10 ml-5'>
                  <Image src="/assets/foto.png" alt="pic" width={230} height={150} className="rounded-[18px] absolute bottom-24"/>
                  <div className="w-64 h-36 bg-white rounded-3xl px-9 pt-[70px] text-black">
                      <p className='pb-2 border-b-[1px] border-[#E6E6E6]'>{data.name}</p>
                      <div className='flex items-center text-[10px] mt-2'>
                          <p className='mr-[6px]'>Listrik</p>
                          <DotIcon className='w-1'/>
                          <p className='mx-[6px]'>Category</p>
                          <DotIcon className='w-1'/>
                          <p className='ml-[6px]'>Category</p>
                      </div>
                  </div>
              </div>
            
            </>
          )
        })
      }
    </div>
    </div>
  )
}

export default Card