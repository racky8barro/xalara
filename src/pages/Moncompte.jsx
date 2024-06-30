import React from 'react';
import userphoto from "../assets/images/Ellipse 12.png";
import { FaUserCircle } from "react-icons/fa";


export default function Moncompte() {
  return (
    <div>
      <div className='flex mx-auto'>
        <h1 className='text-sky-600 text-7xl right-36  flex mx-auto my-11 '>Rendez-vous</h1>
      </div>
      <div >
        <div  className='bg-sky-600 ml-24   rounded-xl flex' > 
          
        <img src={userphoto} className="w-28  border-solid" alt="user_photo  "  />
        <h1 className='text-white '>Mon Compte</h1>
      
      </div>
      
    </div>
    <div  className='mx-auto border border-black w-96 mt-8 h-32' >
        <h1 className='text-sky-600 font-bold ml-11'>Docteur N'Diaye</h1>
        <p className='ml-11'>Dentiste </p>
        <FaUserCircle  className='text-sky-600 ml-80'/>
       

      </div> 
      <div className='mt-7 '>
      <div>
      <input type="text"   placeholder='Adresse : Cite Avion Ouakam' className=' flex border border-black w-96 mx-auto rounded-lg '/>
    </div>
    <div>
      <input type="text"   placeholder='Telephone : +221 77 000 00 02 ' className=' flex border border-black w-96 mx-auto mt-2 rounded-lg text-black font-bold'/>
    </div>
    <div>
      <input type="text"   placeholder='Adresse e-mail:astou.ndiaye@gmailcom' className='  text-black flex border border-black w-96 mx-auto  mt-2 rounded-lg'/>
    </div>
    <div>
      <input type="text"   placeholder='Mot de passe......' className=' flex border border-black w-96 mx-auto  mt-2 rounded-lg'/>
    </div>

      
      <button className='bg-sky-500 w-96 p-3 flex items-center justify-center  mx-auto mt-2 rounded-lg text-white '> Enregistrer </button>
    
    </div>
    </div>
  )
}
