import React from 'react';
import { HiMiniUserCircle } from "react-icons/hi2";
import { Link } from "react-router-dom";
export default function Ajoutpatient() {
  return (
    <div>
      <div className=' relative'>
            <div className='bg-sky-600 w-48  absolute h-48 rounded-xl rotate-45'></div>
             <div className='bg-sky-300  w-48 h-48  absolute rounded-xl rotate-45'></div>
             </div >
             

             <div className='flex mx-auto'>
             <HiMiniUserCircle className='flex mx-auto w-36 h-36 text-sky-400' />
             </div>
             <div className='mt-7 '>

      <div>
      <input type="text"   placeholder='Prenom' className=' flex border border-black w-1/3 h-8 mx-auto rounded-lg '/>
    </div>
    <div>
      <input type="text"   placeholder='Nom' className=' flex border border-black w-1/3 h-8 mx-auto mt-7 rounded-lg text-black font-bold'/>
    </div>
    <div>
      <input type="text"   placeholder='Age' className='  text-black flex border border-black w-1/3 h-8 mx-auto  mt-7 rounded-lg'/>
    </div>
    <div>
      <input type="text"   placeholder='Adresse' className=' flex border border-black w-1/3 h-8 mx-auto  mt-7 rounded-lg'/>
    </div>
    <div>
      <input type="text"   placeholder='Telephone' className=' flex border border-black w-1/3 h-8 mx-auto  mt-7 rounded-lg'/>
    </div>

      <Link to='/dashboard/patient'>
      
      <button className='bg-sky-500   mx-auto mt-7 rounded-lg text-white flex items-center justify-center  w-1/3 h-8'>Valider</button>
      </Link>
    </div>
      <div className='relative '>
            <div className='bg-sky-900 w-48  absolute right-4 h-48 rounded-xl rotate-45'></div>
             <div className='bg-sky-500 w-48 h-48  right-8 absolute rounded-xl rotate-45'></div>
             </div>
    </div>
  )
}
