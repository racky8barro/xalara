import React from 'react' ;
import logo from "../assets/images/RVS 1 (1).png";

const Card = (props) => {
  return (
    <div className={props.classe}>
        <div className='flex items-center justify-center'>
        <p className='bg-white rounded-lg p-2'>{props.number}</p>
        <img
        className="bg-white rounded-3xl  w-6 "
        src={logo}
        alt="Mon_logo"
      />
      </div>
      <div>
      <h2 className='text-white text-3xl text-center'>{props.text}</h2>
      </div>
        </div>
       
        
    
  )
}

export default Card