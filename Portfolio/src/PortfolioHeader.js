import React from 'react'
import './PortfolioHeader.css';
export  function PortfolioHeader() {
    function click(){
        console.log("button Clicked")
    }

  return (
    <div className='head'>
        <div>
           <button onClick={click}> Home </button> 
        </div>
        <div>
           <button onClick={click}>Recent Work</button> 
        </div>
        <div>
           <button onClick={click}>Certification</button> 
        </div>
        <div>
           <button onClick={click}>Get In Touch</button>
        </div>
    </div>
  )
}
