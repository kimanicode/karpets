import React, { useState } from 'react'
import './order.css'


function Order() {
  let number = 1
  let price  = 1400 * number
  const [carpets , setCarpets] = useState(0);
  const handlePlus= ()=>{
    setCarpets(carpets + 1);
  }
  const handleMinus= ()=>{
    setCarpets(carpets - 1);
  }
  
  return (
    <div className='orderSection'>
        <div className='gallery'>
            <img src='images/cover2.jpg' />

        </div>
        <div className='orderDisplay border p-2 drop-shadow-2xl rounded-2xl flex flex-col justify-between '>
          <div className='query'> 
          
            <div className='holder'> 
              <p>One time Purchase?</p>
              <input  type='checkbox'  />

            </div>
            <div className='pricing'>
              <p>Price: ksh {price} /carpet </p>

                
              </div>
          </div>
          <div className='orderSelect'>
            <p>How many carpets?</p>
            <div className='flex items-center justify-center  '>
              <button className='text-4xl p-3 hover:bg-stone-200 bg-stone-400 rounded-full	' onClick={handleMinus}> -</button>
              <p className='text-7xl'>{carpets}</p>
              <button className='text-4xl p-3 hover:bg-stone-200 bg-stone-400 	rounded-full' onClick={handlePlus}>+</button>

            </div>
            
          </div>
          <div className='flex justify-between text-center'>
              <button className='bg-lime-600 rounded p-4 m-2'>Add to cart</button>
              <p className='text-center m-4'> Total Price : ksh { price * carpets}</p>
            

            </div>

        </div>



    </div>
  )
}

export default Order