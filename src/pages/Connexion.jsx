import React from 'react'
import { Link } from 'react-router-dom'
import { SlSocialGoogle } from "react-icons/sl";

export const Connexion = () => {
  return (
    
    <div className="flex">
      <div className="w-1/4 h-screen">
      <div className='relative mt-40'>
            <div className='bg-sky-900 w-48  absolute left-7 h-48 rounded-xl rotate-45'></div>
             <div className='bg-sky-500 w-48 h-48  left-16 absolute rounded-xl rotate-45'></div>
             </div>
      </div>
      <div className="flex flex-col justify-start items-center w-2/4">
        <h2 className="text-6xl mt-10">Se Connecter</h2>
        <input className="w-full p-5 m-5 bg-slate-300" type="text" placeholder="Adresse mail" />
        <input className="w-full p-5 m-5 bg-slate-300"  type="password" placeholder="Mot de passe" />
        <Link to="/dashboard" className="w-full">
          <button className="bg-sky-600 text-white py-2 rounded-xl text-xl font-bold w-full">
            Se Connecter
          </button>
        </Link>
        <Link to="/connexion" className="w-full">
          <button className="bg-black  my-5 flex items-center justify-center text-white py-2 rounded-xl text-xl font-bold w-full">
            Continuer avec Google
            <SlSocialGoogle className="mx-5" />
          </button>
        </Link>
        <p>Mot de passe oublie ?</p>
<Link to='/registration' className='text-sky-400'>S inscrire</Link>
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
