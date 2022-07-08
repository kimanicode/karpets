import React from 'react'
import './order.css'


function Order() {
  let number = 1
  let price  = 1400 * number
  function handleChange(){
    number = number* 4;
  }
  return (
    <div className='orderSection'>
        <div className='gallery'>
            <img src='images/cover2.jpg' />

        </div>
        <div className='orderDisplay'>
          <div className='query'> 
            <div className='holder'> 
              <p>One time Purchase?</p>
              <input  type='checkbox'  />

            </div>
            <div className='pricing'>
              <p>Price: ksh {price} </p>

                
              </div>
          </div>
          <div className='orderSelect'>
            <p>How many carpets?</p>
            <div className='numWrapper'>
              <div className='box-4' >1</div>
              <div className='box-4'>2</div>
              <div className='box-4'>3</div>
              <div className='box-4' onChange={handleChange}>4</div>

            </div>
          </div>

        </div>



    </div>
  )
}

export default Order