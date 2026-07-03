// import { useState } from "react";
import React from 'react';

const Card = (props, del) => {

    // let[deleted, setDeleted] = useState(false);

  return (
   <>
   <div className='w-dvh h-dvh  p-4 flex'>
    <div className='w-70 h-96 bg-white rounded-lg shadow-lg p-4'>
        <div className='w-56 h-50 bg-slate-400 rounded-lg'>
            <img className='w-56 h-50 bg-slate-400 rounded-lg' src="https://imgs.search.brave.com/ACedRZHztn-OEwyhM1B15tdkWFNDmr_vu6lbM9Pyr10/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4t/ZnJvbnQuZnJlZXBp/ay5jb20vaG9tZS9h/bm9uLXJ2bXAvY3Jl/YXRpdmUtc3VpdGUv/cGhvdG9ncmFwaHkv/cmVpbWFnaW5lLndl/YnA" alt="" />
            
        </div>
        <div className='flex flex- justify-between h-32 mt-4'>
            <div>
                <h1 className='text-lg font-bold text-center'>{props.title}</h1>
        <h3 className='text-md text-gray-600 text-'>{props.companyName}</h3>
        <h4 className='text-md text-gray-400'>${props.price.toLocaleString()}</h4>
        <h4 className='text-md text-gray-400'>{props.workingDuration}</h4>
            </div>
            <div>
              <button onClick={ () => {
                props.del();
              }

                 } className='bg-blue-500 text-white px-4 py-2 rounded-lg mt-4'>del</button>  
            </div>
        </div>
      
    </div>
   </div>
    
   </>
  )
}

export default Card
