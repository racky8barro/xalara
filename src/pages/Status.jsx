import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { LuPencilLine } from "react-icons/lu";
import { HiMiniUserCircle } from "react-icons/hi2";
import { Link } from "react-router-dom";





export default function Status() {
  return (
    <div>
         <div className=' relative '>
            <div className='bg-sky-600 w-48  absolute h-48 rounded-xl rotate-45'></div>
             <div className='bg-sky-300  w-48 h-48  absolute rounded-xl rotate-45'></div>
             </div >
             <div className='flex mx-auto'>
             <HiMiniUserCircle className='flex mx-auto w-36 h-36 text-sky-400' />
             </div>
        <div  className='mx-auto    border border-black w-96  h-96 p-10 rounded-lg' >
            <div className='flex justify-between mt-11'>
            <p className=''>Prenom:Pathe </p>
            <LuPencilLine className='' />

            </div>
            <div className='flex justify-between mt-7'>
            <p className=''>Nom:Fall </p>
            <LuPencilLine className='' />

            </div>
            <div className='flex justify-between mt-7'>
            <p className=''>Age:22ans</p>
            <LuPencilLine className='' />

            </div>
    
            <div className='flex justify-between mt-7'>
            <p className=''>Adresse:Cite Senghor</p>
            <LuPencilLine className='' />

            </div>
    
            <div className='flex justify-between mt-7'>
            <p className=''>Telephone:+22177 000 00 00</p>
            <LuPencilLine className='' />

            </div>
    
    
    
      
      

       

      </div>
      <div className='text-center'> 
        <Link to='/dashboard/patient'>
        <button  className='bg-sky-500 w-96 flex items-center justify-center mx-auto mt-7 rounded-lg text-white p-3  h-11'>Enregistrer</button>
        </Link>
        </div>
      <div className='relative bottom-16 '>
            <div className='bg-sky-900 w-48  absolute right-4 h-48 rounded-xl rotate-45'></div>
             <div className='bg-sky-500 w-48 h-48  right-8 absolute rounded-xl rotate-45'></div>
             </div>
    </div>
  )
}
