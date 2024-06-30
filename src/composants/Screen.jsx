import React from 'react'
import image1 from '../assets/images/Confirmed attendance-amico 1 (2).png'
import { Link } from 'react-router-dom'
export const Screen = () => {
  return (
    <div className='flex items-center px-10 overflow-hidden'>
        <div >
            <h1 className='text-8xl '>Rendez-vous</h1>
            <p className="my-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Ad iusto nemo blanditiis consequuntur non quam tenetur
                 maxime sit ab
                 repudiandae, nam voluptate nisi, impedit 
                 magnam eveniet, natus eaque eos ipsa</p>
                 <Link to='/registration'>
                 <button className="bg-sky-600 text-white p-4 w-full rounded-xl text-xl font-bold">Commencer</button>
                 </Link>

        </div>
        <div>
            <img src={image1} className='max-w-xl' />
            <div className='relative bottom-16'>
            <div className='bg-sky-900 w-48  absolute right-5 h-48 rounded-xl rotate-45'></div>
             <div className='bg-sky-500 w-48 h-48  right-16 absolute rounded-xl rotate-45'></div>
             </div>
        </div>
    </div>
  )
}
