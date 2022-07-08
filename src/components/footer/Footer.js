import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div className='myFooter'>
        <div className='footer-items-wrapper'>
            <div className='f-4'>
                <li><a href='#'>why we wash</a></li>
                <li><a href='#'>how we wash</a></li>
                <li><a href='#'>delivery times</a></li>
            </div>
            <div className='f-4'>
                <li><a href='#'>Help and FAQ</a></li>
                <li><a href='#'>Privacy and policy</a></li>
                <li><a href='#'>terms and policy</a></li>
                <li><a href='#'>Returns and refunds</a></li>
            </div>
            <div className='f-4'>
                <li><a href='#'>Create an account</a></li>
                <li><a href='#'>Log in</a></li>
                <li><a href='#'>About us</a></li>
                <li><a href='#'>Carpet cleaning mastery</a></li>

            </div>
            <div className='f-4'>
                <li><a href='#'>Walk ins 8am - 4pm, M-F</a></li>
                <li><a href='#'>Dolphin Heights ,Ruiru</a></li>
                <li><a href='#'>contact@carpetsafi.com</a></li>
                

            </div>
            <div className='f-4'>
                <li><a href='#'></a></li>
            </div>
        </div>
        <div className='second-footer-items'>
            <h3>Newsletter sign up</h3>
            <p>Subscribe for tips,and deals.</p>
            <input  placeholder ="Enter your email"type= 'text' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Footer