import React from 'react'
import { Nav } from './Nav'
import Top from './Top';
import { FaPlusCircle } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';


export const Patient = () => {
  return (
    <div className='p-12'>
        <Top/>
        <div className='flex justify-between items-center my-10'>
        <h2 className='font-bold text-3xl'>Mes Rendez-vous</h2>
       <Link to='/Ajoutpatient'>
       <button>
        <FaPlusCircle className='font-bold text-green-800 text-3xl' />
        </button>
        </Link>
        </div>
        <table class="table-auto w-full border-slate-700">
  <thead>
    
  </thead>
  <tbody>
  <tr>
      <td class="border-b-2  border-slate-400 right-20 " >
    <span className='p-10'>
        prenom </span>
       <span className='p-10'>Nom</span>
       <span  className='p-10'>Profil</span>
      </td>
      
   

    
    </tr>
    <tr>
        
      <td class="border-b-2  border-slate-600 ">
      <div className='flex items-center gap-5 py-4'>
      <span><FaRegUserCircle  className='text-5xl '/>
        </span>
        
       <div className='gap-10'>
     <span >Moustapha</span>
      <span className='p-10'>Fall</span>
       </div>
       </div>
      </td>
      <td class="border-b-2 border-slate-600 ">
        <div className='flex flex-col items-end'> 
        
        <button class="bg-green-950 text-green-400 border border-green-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
  <span class="bg-green-400 shadow-green-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
  Voir
</button>
        </div>
      </td>
    
    </tr>
    
    
    <tr>
        
        <td class="border-b-2  border-slate-600 ">
        <div className='flex items-center gap-5 py-4'>
        <span><FaRegUserCircle  className='text-5xl '/>
          </span>
          
         <div className='gap-10'>
       <span >Alimatou</span>
        <span className='p-10'>Seck</span>
         </div>
         </div>
        </td>
        <td class="border-b-2 border-slate-600 ">
          <div className='flex flex-col items-end'> 
          
          <button class="bg-green-950 text-green-400 border border-green-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
    <span class="bg-green-400 shadow-green-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
    Voir
  </button>
          </div>
        </td>
      
      </tr>
      <tr>
        
      <td class="border-b-2  border-slate-600 ">
      <div className='flex items-center gap-5 py-4'>
      <span><FaRegUserCircle  className='text-5xl '/>
        </span>
        
       <div className='gap-10'>
     <span >Pathe</span>
      <span className='p-10'>Fall</span>
       </div>
       </div>
      </td>
      <td class="border-b-2 border-slate-600 ">
        <div className='flex flex-col items-end'> 
        <Link to='/Status'>
        
        <button class="bg-green-950 text-green-400 border border-green-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
  <span class="bg-green-400 shadow-green-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
  Voir
</button>
</Link>
        </div>
      </td>
    
    </tr>
    <tr>
        
      <td class="border-b-2  border-slate-600 ">
      <div className='flex items-center gap-5 py-4'>
      <span><FaRegUserCircle  className='text-5xl '/>
        </span>
        
       <div className='gap-10'>
     <span >Cheikh Bara</span>
      <span className='p-10'>Diop</span>
       </div>
       </div>
      </td>
      <td class="border-b-2 border-slate-600 ">
        <div className='flex flex-col items-end'> 
        
        <button class="bg-green-950 text-green-400 border border-green-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
  <span class="bg-green-400 shadow-green-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
  Voir
</button>
        </div>
      </td>
    
    </tr>
  </tbody>
</table>
      
     
    </div>


    
  )
}
