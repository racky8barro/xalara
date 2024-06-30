import React from 'react';
import { Link } from 'react-router-dom';


import logo from '../assets/images/RVS 1 (1).png' ;


export default function 
() {
  return (
    <div>
     <div className=' relative'>
            <div className='bg-sky-600 w-48  absolute h-48 rounded-xl rotate-45'></div>
             <div className='bg-sky-300  w-48 h-48  absolute rounded-xl rotate-45'></div>
             </div >


             <div className='   bg-sky-200 rounded-full w-40  relative flex mx-auto items-center justify-center'>
             <img src={logo}  className='  mx-auto ' />
             </div>
             

          
<div className='mt-7'>

      <div>
      <input type="text"   placeholder='Titre Rendez-vous' className=' flex border border-black w-1/3 h-8 mx-auto rounded-lg '/>
    </div>
    <div>
      <input type="text"   placeholder='AVEC QUI?' className=' flex border border-black w-1/3 h-8 mx-auto mt-7 rounded-lg text-black font-bold'/>
    </div>
    <div>
      <input type="text"   placeholder='Date Rendez-vous' className='  text-black flex border border-black w-1/3 h-8 mx-auto  mt-7 rounded-lg'/>
    </div>
    <div>
      <input type="text"   placeholder='Heure Rendez-vous' className=' flex border border-black w-1/3 h-8 mx-auto  mt-7 rounded-lg'/>
    </div>
    <div>
      <input type="text"   placeholder='Lieu Rendez-vous' className=' flex border border-black w-1/3 h-8 mx-auto  mt-7 rounded-lg'/>
    </div>
      <Link to='/dashboard/rdv'>
      
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
