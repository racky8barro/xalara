 import React from 'react' ; 
import logo from '../assets/images/RVS 1 (1).png' ;
import { Link, Outlet } from 'react-router-dom';

export const Navbar = () => {
  return (
    <>
    <div className='flex justify-between items-center bg-slate-100'>
        <img src={logo}  alt='test'/>
        <nav>
            <ul className='flex'>
                <li>
                     <Link to='/'>ACCUEIL</Link></li>
                <li className='mx-20'> <Link to='/dashboard/mesrendezvous'>MES RENDEZ-VOUS</Link></li>
                <li>  <Link to='/dashboard/Moncompte'>MON COMPTE</Link></li>
            </ul>
        </nav>
       
        <div>
          <Link to='/connexion'>
          
            <button className='bg-sky-600 p-5 rounded-xl text-white'>Se Connecter</button></Link>
            <button className='mx-10 bg-black p-5 rounded-xl text-white'>Deconnexion</button>
        </div>
      
    </div>
    <Outlet />
    </>
  );
}
