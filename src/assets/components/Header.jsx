import React from 'react'
import { RiSearchLine } from "react-icons/ri";



function Header() {
  return (
    <header className='flex flex-col md:flex-row items-center justify-between gap-4'>
        <h1 className="md:text-3xl font-bold text-2xl">Good Morning, <span className='text-gray-400'>Daniel</span> 🌞</h1>
        <form action="" className="w-full md:w-auto">
            <div className="relative">
                <RiSearchLine className='absolute top-1/2 -translate-y-1/2 left-2'/>
                <input type="text" className="bg-gray-200 outline-none py-2 pl-8 pr-4 rounded-xl w-full md:w-auto" placeholder='Search for proyects'/>
            </div>
        </form>
    </header>
  )
}

export default Header