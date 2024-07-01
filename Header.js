import React from 'react'

export default function Header() {
  return (
    <>
    <title>InstiOLX</title>
    <header>
        <img src="InstiOLX_wall2.01.png" alt="welcome banner"/>
        <div id="logo">InstiOLX</div>
        <div className="navbar">
          <a href="#">Home</a>
          <a href="#">Categories</a>
          <a href="#">Login</a>
          <a href="#" className='sell'>+SELL</a>
        </div>
      </header> 
    </>
  )
}
