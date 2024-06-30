import React from 'react';
import { BsBellFill } from "react-icons/bs";
import userphoto from "../assets/images/Ellipse 12.png";
import Card from "../composants/Card";

export default function Accueilsdash() {
  return (
    <div className='p-14'>
        <div className='flex  justify-between gap-5'>
        <div className='w-1/2'> 
            <h2 className='text-sky-600 font-bold text-4xl'>Bienveni! Docteur</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                 Deleniti voluptate optio voluptatum qui quia a
                  alias numquam magnam, sapiente accusamus dolor commodi error! Qui molestiae voluptatibus  </p>
        </div>
        <div className='flex gap-3 items-center'>
        <BsBellFill className='text-3xl' />
        <img src={userphoto} className="w-14" alt="user_photo" />
        </div>
        </div>
     <h1 className='text-8xl my-10'>Rendez-vous</h1>
      <div className='grid grid-cols-2 gap-5'> 
        <Card classe="bg-sky-700 p-8 rounded-xl" number="98" text="Listes des Rendez-vous"/>
        <Card classe="bg-green-700 p-8 rounded-xl"  number="62" text="Listes des Patients"/>
        <Card classe="bg-purple-700 p-8 rounded-xl"  number="98"text="Listes des Rendez-vous"/>
        <Card classe="bg-yellow-700 p-8 rounded-xl"  number="62" text="Listes des Patients"/>
        
   
      </div> 
      
    </div>
  )
}
