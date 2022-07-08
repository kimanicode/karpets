import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='myHeader'>
      <div className='info'>
      <img src="/images/logo.png" /> 
      <h1>Carpet Safi</h1>
      </div>

      
      <ul>
        <li><a href='#' className='active'>Order carpet cleaning</a></li>
        <li><a href='#'>How it works</a></li>
        <li><a href='#'>Why carpet safi</a></li>
        <li><a href='#'>Gifting</a></li>
        <li><a href='#'>Cleaning mastery</a></li>
        <li><a href='#'>my Account</a></li>
      </ul>
      <button>Get Started</button>

    </div>
  )
}

export default Header