import React from 'react'
import { SlSocialGoogle } from "react-icons/sl";
import { Link } from 'react-router-dom'



export default function Registration() {
  return (

    <div className="flex">
    <div className="w-1/4 h-screen">
    <div className='relative mt-40'>
          <div className='bg-sky-900 w-48  absolute left-7 h-48 rounded-xl rotate-45'></div>
           <div className='bg-sky-500 w-48 h-48  left-16 absolute rounded-xl rotate-45'></div>
           </div>
     </div>
      <div className="flex flex-col justify-start items-center w-2/4 mx-auto">
        <h2 className="text-6xl font-bold mt-10">S'inscrire</h2>
        <input className="w-3/4 p-2 m-5 bg-slate-50 rounded-xl" type="text" placeholder="Entrer votre nom" />
        <input className="w-3/4 p-2 m-5 bg-slate-50 rounded-xl"  type="text" placeholder="Entrer votre prenom" />
        <input className="w-3/4 p-2 m-5 bg-slate-50 rounded-xl"  type="email" placeholder="Entrer votre adresse email" />
        <input className="w-3/4 p-2 m-5 bg-slate-50 rounded-xl"  type="password" placeholder="Entrer votre mot de passe" />
        <Link to='/connexion' className="w-5/6 ">
        <button className="bg-sky-600 text-white py-2 rounded-xl text-xl font-bold w-5/6 right-32">
        S'inscrire </button>
          </Link>
          <button className="bg-black w-3/4 my-5 flex items-center justify-center text-white py-2 rounded-xl text-xl font-bold ">
            Continuer avec Google
            <SlSocialGoogle className="mx-5" />
          </button>
      </div>
      <div className="w-1/4 h-screen">
      <div className='relative mt-80'>
            <div className='bg-sky-900 w-48  absolute right-5 h-48 rounded-xl rotate-45'></div>
             <div className='bg-sky-500 w-48 h-48  right-16 absolute rounded-xl rotate-45'></div>
             </div>
      </div>
  
    </div>
  )
}
