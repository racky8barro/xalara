import React from 'react'
import Top from '../composants/Top'
import { FaPlusCircle } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';



export const Rdv = () => {
    const date = new Date().toDateString();
    const heure = new Date().toLocaleTimeString()

  return (
    <div className='p-12'>
        <Top/>
        <div className='flex justify-between items-center my-10'>
        <h2 className='font-bold text-sky-500 text-3xl'>Mes Rendez-vous</h2>
        <Link to='/Ajoutrdv'>  
        <button>
        <FaPlusCircle className='font-bold text-sky-500 text-3xl' />
        </button>
        </Link>
        </div>
        <table class="table-auto w-full border-slate-700">
  <thead>
    
  </thead>
  <tbody>
    <tr>
      <td class="border-b-2  border-slate-600 ">
      <div className='flex items-center gap-5 py-4'>
      <span><FaRegUserCircle  className='text-5xl text-sky-600'/>
        </span>
       <div className='flex flex-col'>
       
        <span>{date}</span>
      <span className='text-sky-600'>Moussa Ba</span>
       </div>
       </div>
      </td>
      <td class="border-b-2 border-slate-600 ">
        <div className='flex flex-col items-end'> 
        <span>{heure}</span>
        <span className='text-sky-600 text-3xl'>
        <IoIosArrowForward/>
        </span>
        </div>
      </td>
    
    </tr>
    
    
    <tr>
      <td class="border-b-2  border-slate-600 ">
      <div className='flex items-center gap-5 py-4'>
      <span><FaUserGroup  className='text-5xl text-sky-600'/>
        </span>
       <div className='flex flex-col'>
       
        <span>28/03/2024</span>
      <span className='text-sky-600'>Equipe Xarala</span>
       </div>
       </div>
      </td>
      <td class="border-b-2 border-slate-600 ">
        <div className='flex flex-col items-end'> 
        <span>08H00</span>
        <span className='text-sky-600 text-3xl'>
        <IoIosArrowForward/>
        </span>
        </div>
      </td>
    
    </tr>
    <tr>
      <td class="border-b-2  border-slate-600 ">
      <div className='flex items-center gap-5 py-4'>
      <span><HiMiniUserGroup  className='text-5xl text-sky-600'/>
        </span>
       <div className='flex flex-col'>
       
        <span>27/08/2024</span>
      <span className='text-sky-600'>Reunion d affaire</span>
       </div>
       </div>
      </td>
      <td class="border-b-2 border-slate-600 ">
        <div className='flex flex-col items-end'> 
        <span>11H00</span>
        <span className='text-sky-600 text-3xl'>
        <IoIosArrowForward/>
        </span>
        </div>
      </td>
    
    </tr>
    <tr>
      <td class="border-b-2  border-slate-600 ">
      <div className='flex items-center gap-5 py-4'>
      <span><FaUser className='text-5xl text-sky-600'/>
        </span>
       <div className='flex flex-col'>
       
        <span>22/05/2024</span>
      <span className='text-sky-600'>Pathe Fall</span>
       </div>
       </div>
      </td>
      <td class="border-b-2 border-slate-600 ">
        <div className='flex flex-col items-end'> 
        <span>10H00</span>
        <span className='text-sky-600 text-3xl'>
        <IoIosArrowForward/>
        </span>
        </div>
      </td>
    
    </tr>
  </tbody>
</table>
      
     
    </div>
  )
}
