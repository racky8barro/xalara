import React from 'react'
import { BsBellFill } from "react-icons/bs";
import userphoto from "../assets/images/Ellipse 12.png";


export default function Top() {
  return (
    <div className='flex items-center justify-between'>
        <input type="search"  placeholder='Rechercher ' className='bg-black p-4 rounded-full w-3/5 text-white'/>
        <div className='flex gap-3 items-center'>
        <BsBellFill className='text-3xl' />
        <img src={userphoto} className="w-14" alt="user_photo" />
        </div>
    </div>
  )
}
